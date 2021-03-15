/**
 * @file The broadcasting service for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The broadcasting service for the application.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
'use strict';

const fs = require('fs');
const { playlist } = require('./playlist');

let error = {};
let track = null;
let Logger = null; // Reference to logging utility.
let maintenance = false;
let broadcasting = false;

// Sanity checks for data structures.
const is_empty = (arr) => arr.length === 0;
const is_unique = (arr) =>
  Array.isArray(arr) && new Set(arr).size === arr.length;
const no_errors = (obj) => Object.keys(obj).length === 0;

// Broadcasting queue.
let queue = Object.keys(playlist);
shuffle(queue);

let Client = null; // Reference to Discord client.
let Broadcast = null; // Reference to Discord broadcast.

/**
 * Begins playback of the broadcasting service.
 *
 * @since 2.0.0
 */
function play() {
  if (!maintenance && no_errors(error)) {
    // Populate and re-shuffle the broadcast queue if empty.
    if (is_empty(queue)) {
      queue = Object.keys(playlist);
      shuffle(queue);
    }

    track = queue.shift();

    try {
      Broadcast.play(fs.createReadStream(playlist[track].path));
      Client.user.setActivity(playlist[track].title_en, { type: 'PLAYING' });

      broadcasting = true;

      Broadcast.dispatcher.on('finish', () => {
        broadcasting = false;

        play();
      });
    } catch (err) {
      const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

      Broadcast = null;
      broadcasting = false;
      track = null;

      try {
        Client.user.setActivity();

        // Log error to memory.
        Object.assign(error, {
          BROADCAST_SERVICE: {
            level: 'error',
            message:
              'An error has occurred during playback of the broadcasting service.',
            metadata: err.stack,
            timestamp: dt
          }
        });

        // Log error to database if available.
        if (Logger) {
          Logger.log(
            'error',
            'An error has occurred during playback of the broadcasting service.',
            { metadata: err.stack }
          );
        }
      } catch (err2) {
        // Log error to memory.
        Object.assign(error, {
          BROADCAST_SERVICE: {
            level: 'error',
            message: 'An error has occurred with the Discord client.',
            metadata: err2.stack,
            timestamp: dt
          }
        });

        // Log error to database if available.
        if (Logger) {
          Logger.log(
            'error',
            'An error has occurred with the Discord client.',
            { metadata: err2.stack }
          );
        }
      }
    }
  } else {
    if (Broadcast) {
      try {
        Broadcast.end();

        Broadcast = null;
        broadcasting = false;
        track = null;
      } catch (err) {
        const dt = new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, '');

        Broadcast = null;
        broadcasting = false;
        track = null;

        // Log error to memory.
        Object.assign(error, {
          BROADCAST_SERVICE: {
            level: 'error',
            message:
              'An error has occurred while terminating the broadcasting service.',
            metadata: err.stack,
            timestamp: dt
          }
        });

        // Log error to database if available.
        if (Logger) {
          Logger.log(
            'error',
            'An error has occurred while terminating the broadcasting service.',
            { metadata: err.stack }
          );
        }
      }
    }
  }
}

/**
 * An optimized version of the Fisher–Yates shuffle algorithm. This is used to
 * shuffle the contents of the broadcast queue.
 *
 * @since 2.0.0
 * @param { Array } array queue data structure
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  // Ensure that there are no duplicate tracks in the broadcast queue.
  if (!is_unique(array)) {
    const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    // Log error to memory.
    Object.assign(error, {
      BROADCAST_SERVICE: {
        level: 'error',
        message: 'An error has occurred while shuffling the broadcast queue.',
        metadata: `Broadcast Queue (Original): ${Object.keys(
          playlist
        ).toString()}\nBroadcast Queue (Modified): ${array.toString()}`,
        timestamp: dt
      }
    });

    // Log error to database if available.
    if (Logger) {
      Logger.log(
        'error',
        'An error has occurred while shuffling the broadcast queue.',
        {
          metadata: `Broadcast Queue (Original): ${Object.keys(
            playlist
          ).toString()}\nBroadcast Queue (Modified): ${array.toString()}`
        }
      );
    }
  }
}

/**
 * Initializes the broadcasting service.
 *
 * @since 2.0.0
 * @param { Discord.Client } client reference to Discord client
 * @param { winston.createLogger } logger reference to logging utility
 */
module.exports.init = function (client, logger) {
  if (no_errors(error)) {
    try {
      Client = client;
      Logger = logger;

      // Create the broadcast.
      Broadcast = Client.voice.createBroadcast();

      // Listen for broadcasting events.
      Broadcast.on('subscribe', () => {
        //
      });
      Broadcast.on('unsubscribe', () => {
        //
      });
    } catch (err) {
      const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

      Broadcast = null;

      // Log error to memory.
      Object.assign(error, {
        BROADCAST_SERVICE: {
          level: 'error',
          message:
            'An error has occurred while initializing the broadcasting service.',
          metadata: err.stack,
          timestamp: dt
        }
      });

      // Log error to database if available.
      if (Logger) {
        Logger.log(
          'error',
          'An error has occurred while initializing the broadcasting service.',
          { metadata: err.stack }
        );
      }
    }
  }
};

module.exports.play = play;
module.exports.error = error;
module.exports.track = track;
module.exports.queue = queue;
module.exports.shuffle = shuffle;
module.exports.playlist = playlist;
module.exports.maintenance = maintenance;
module.exports.broadcasting = broadcasting;

module.exports.Client = Client;
module.exports.Broadcast = Broadcast;
