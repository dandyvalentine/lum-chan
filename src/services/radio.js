/**
 * @file Radio service for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 1.0.0
 * @description Configures the radio service for the application.
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
const { CronJob } = require('cron');
const YTDL = require('ytdl-core-discord');
const UTILS = require('../utils/settings');

const PLAYLIST = require('../../configuration/playlist.json');

const _TRACKS = [PLAYLIST.TRACK00[0].URL, PLAYLIST.TRACK01[0].URL, PLAYLIST.TRACK02[0].URL, PLAYLIST.TRACK03[0].URL, PLAYLIST.TRACK04[0].URL, PLAYLIST.TRACK05[0].URL, PLAYLIST.TRACK06[0].URL, PLAYLIST.TRACK07[0].URL, PLAYLIST.TRACK08[0].URL, PLAYLIST.TRACK09[0].URL, PLAYLIST.TRACK10[0].URL, PLAYLIST.TRACK11[0].URL, PLAYLIST.TRACK12[0].URL, PLAYLIST.TRACK13[0].URL, PLAYLIST.TRACK14[0].URL, PLAYLIST.TRACK15[0].URL, PLAYLIST.TRACK16[0].URL, PLAYLIST.TRACK17[0].URL, PLAYLIST.TRACK18[0].URL, PLAYLIST.TRACK19[0].URL, PLAYLIST.TRACK20[0].URL, PLAYLIST.TRACK21[0].URL, PLAYLIST.TRACK22[0].URL, PLAYLIST.TRACK23[0].URL];
const _TITLES = [PLAYLIST.TRACK00[0].TITLE, PLAYLIST.TRACK01[0].TITLE, PLAYLIST.TRACK02[0].TITLE, PLAYLIST.TRACK03[0].TITLE, PLAYLIST.TRACK04[0].TITLE, PLAYLIST.TRACK05[0].TITLE, PLAYLIST.TRACK06[0].TITLE, PLAYLIST.TRACK07[0].TITLE, PLAYLIST.TRACK08[0].TITLE, PLAYLIST.TRACK09[0].TITLE, PLAYLIST.TRACK10[0].TITLE, PLAYLIST.TRACK11[0].TITLE, PLAYLIST.TRACK12[0].TITLE, PLAYLIST.TRACK13[0].TITLE, PLAYLIST.TRACK14[0].TITLE, PLAYLIST.TRACK15[0].TITLE, PLAYLIST.TRACK16[0].TITLE, PLAYLIST.TRACK17[0].TITLE, PLAYLIST.TRACK18[0].TITLE, PLAYLIST.TRACK19[0].TITLE, PLAYLIST.TRACK20[0].TITLE, PLAYLIST.TRACK21[0].TITLE, PLAYLIST.TRACK22[0].TITLE, PLAYLIST.TRACK23[0].TITLE];

let _i = 0;
let _channel = null;
let _blocked = false;
let _playing = false;
let _connection = null;
let _dispatcher = null;

async function _play(client, connection) {
  _dispatcher = connection.play(await YTDL(_TRACKS[_i]), { type: 'opus', volume: false, highWaterMark: 50 });

  _dispatcher.on('start', () => {
    client.user.setActivity(_TITLES[_i], { type: 'PLAYING' });
  });

  _dispatcher.on('finish', () => {
    if (_i === 23 && _playing) {
      _i = 0;
      _playing = false;

      connection.disconnect();
    } else {
      _i = _i + 1;

      _play(client, connection);
    }
  });
}

module.exports.start = async function (client) {
  _playing = true;

  try {
    if (UTILS.development()) {
      _channel = client.channels.cache.get(UTILS.dandy_guild_voice_channel_id()) || (await client.channels.fetch(UTILS.dandy_guild_voice_channel_id()));
    } else {
      _channel = client.channels.cache.get(UTILS.urusei_guild_voice_channel_id()) || (await client.channels.fetch(UTILS.urusei_guild_voice_channel_id()));
    }

    if (!_channel) {
      return;
    } else {
      _connection = await _channel.join();

      _play(client, _connection);
    }
  } catch (error) {
    _i = 0;
    _channel = null;
    _blocked = false;
    _playing = false;
    _connection = null;
    _dispatcher = null;

    console.log(error);
  }
};

module.exports.queue = async function (client) {
  let schedule = new CronJob('*/10 * * * * *', async () => {
    if (!_blocked && !_playing) {
      try {
        if (UTILS.development()) {
          _channel = client.channels.cache.get(UTILS.dandy_guild_voice_channel_id()) || (await client.channels.fetch(UTILS.dandy_guild_voice_channel_id()));
        } else {
          _channel = client.channels.cache.get(UTILS.urusei_guild_voice_channel_id()) || (await client.channels.fetch(UTILS.urusei_guild_voice_channel_id()));
        }

        if (!_channel) {
          return;
        } else {
          _playing = true;
          _connection = await _channel.join();

          _play(client, _connection);
        }
      } catch (error) {
        _i = 0;
        _channel = null;
        _blocked = false;
        _playing = false;
        _connection = null;
        _dispatcher = null;

        console.log(error);
      }
    }
  });

  schedule.start();
};

module.exports.restart = async function (client) {
  client.user.setActivity();

  try {
    _connection.disconnect();

    _i = 0;
    _channel = null;
    _playing = false;
    _connection = null;
    _dispatcher = null;
  } catch (error) {
    _i = 0;
    _channel = null;
    _playing = false;
    _connection = null;
    _dispatcher = null;
  }
};

module.exports.pause = async function () {
  try {
    _dispatcher.pause(true);
  } catch (error) {
    console.log(error);
  }
};

module.exports.resume = async function () {
  try {
    _dispatcher.resume();
  } catch (error) {
    console.log(error);
  }
};

module.exports.connect = async function () {
  _blocked = false;
};

module.exports.disconnect = async function (client) {
  _blocked = true;
  client.user.setActivity();

  try {
    _connection.disconnect();

    _i = 0;
    _channel = null;
    _playing = false;
    _connection = null;
    _dispatcher = null;
  } catch (error) {
    _i = 0;
    _channel = null;
    _playing = false;
    _connection = null;
    _dispatcher = null;
  }
};
