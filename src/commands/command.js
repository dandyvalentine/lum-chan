/**
 * @file Instruction manager for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description Processes instructions for the application.
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

// First-party utilities and services.
const utils = require('../utils/settings')
const database = require('../services/database');

// Specific command functionalities.
const playlist = require('./music/playlist');

// Availability of services.
let available = false;

module.exports.logon = function (client) {
  client.login(utils.get_token());
};

module.exports.setup = function () {
  database.connect(utils.get_atlas_uri());
};

module.exports.verify = function () {
  database.find_uuid(utils.get_uuid());
};

module.exports.is_available = function () {
  return available;
};

module.exports.check_guild = async function (client, guild) {
  try {
    console.log(`Verifying Guild #${guild}...`);

    let document = await database.find_guild(guild);

    // If document is null, then guild is unknown to database.
    if (document == null) {
      setTimeout(() => {
        // Store ID of unknown guild to database.
        database.save_guild(guild);

        console.log(`Added Guild #${guild} to database.`);
      }, 2000);

      setTimeout(() => {
        // Store ID of unknown guild owner to database.
        let g = client.guilds.cache.get(guild);
        database.save_privileged(guild, g.ownerID);

        console.log(`Added User #${g.ownerID} to Guild #${guild} as privileged.`);
      }, 4000);
    } else {
      // If document is not null, then guild is known to database.
      if (document.blacklist) {
        // Leave guild if ID is blacklisted.
        client.guilds.cache.get(guild).leave();

        console.log(`Guild #${guild} is blacklisted. Reason: ${document.blacklist_reason}`);
      } else {
        // Guild is known and not blacklisted.
        console.log(`Guild #${guild} verified.`);
      }
    }
  } catch (error) {
    console.log('' + error);
  }
};

module.exports.guild_check = async function (client) {
  console.log('Performing verification of preexisting guilds...');

  if (available) {
    available = false;
  }

  try {
    let guilds = client.guilds.cache.map((guild) => guild.id);

    for (const guild of guilds) {
      console.log(`Verifying Guild #${guild}...`);

      let document = await database.find_guild(guild);

      // If document is null, then guild is unknown to database.
      if (document == null) {
        setTimeout(() => {
          // Store ID of unknown guild to database.
          database.save_guild(guild);

          console.log(`Added Guild #${guild} to database.`);
        }, 2000);

        setTimeout(() => {
          // Store ID of unknown guild owner to database.
          let g = client.guilds.cache.get(guild);
          database.save_privileged(guild, g.ownerID);

          console.log(`Added User #${g.ownerID} to Guild #${guild} as privileged.`);
        }, 4000);
      } else {
        // If document is not null, then guild is known to database.
        if (document.blacklist) {
          // Leave guild if ID is blacklisted.
          client.guilds.cache.get(guild).leave();

          console.log(`Guild #${guild} is blacklisted. Reason: ${document.blacklist_reason}`);
        } else {
          // Guild is known and not blacklisted.
          console.log(`Guild #${guild} verified.`);
        }
      }
    }

    console.log('Preexisting guilds verified.');
  } catch (error) {
    console.log('' + error);
  }

  if (!available) {
    available = true;
  }
};

module.exports.process = async function () {
  //
};
