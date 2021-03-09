/**
 * @file Database service for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The database service for the application.
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

const mongoose = require('mongoose');

const UUID = require('../models/uuid');
const Guild = require('../models/guild');
const Playlist = require('../models/playlist');

let verified = false;

module.exports.connect = function (uri) {
  console.log('Validating MongoDB Atlas connection...');

  try {
    mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
      console.log('MongoDB Atlas connection validated.');
    });
  } catch (error) {
    console.log('' + error);

    process.exit(0);
  }
};

module.exports.find_uuid = function (uuid) {
  console.log('Verifying universally unique identifier...');

  try {
    let uuid_object = UUID.findOne({ uuid: uuid });

    if (uuid_object != null) {
      verified = true;

      console.log('Universally unique identifier verified.');
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.log('' + error);

    process.exit(0);
  }
};

module.exports.find_guild = async function (guild) {
  if (verified) {
    try {
      let guild_object = await Guild.findOne({ guild_id: guild });

      return guild_object;
    } catch (error) {
      console.log('' + error);
    }
  }
};

module.exports.save_guild = async function (guild) {
  if (verified) {
    try {
      let guild_object = new Guild({ guild_id: guild });

      guild_object.save();
    } catch (error) {
      console.log('' + error);
    }
  }
};

module.exports.save_privileged = async function (guild, id) {
  if (verified) {
    try {
      await Guild.findOneAndUpdate({ guild_id: guild }, { $push: { privileged: [id] } });
    } catch (error) {
      console.log('' + error);
    }
  }
};
