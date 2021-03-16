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

// Mongoose for MongoDB.
const mongoose = require('mongoose');

// Configuration library.
const configuration = require('../configurations/configuration');

// Database models.
const Configuration = require('../models/configuration.model');

let Client = null; // Reference to Discord client.
let Logger = null; // Reference to logging utility.

/**
 * Initializes the database service.
 *
 * @since 2.0.0
 * @param { Object } environment reference to environment utility
 * @param { Object } logger reference to logging utility
 */
module.exports.init = async function (environment, logger) {
  Logger = logger;

  try {
    mongoose.connect(environment.get_atlas_uri(), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    // Configure the... configuration!
    const document = await Configuration.findOne({
      uuid: environment.get_uuid()
    });

    configuration.set_img(document.img);
    configuration.set_inv(document.inv);
    configuration.set_url(document.url);
    configuration.set_name(document.name);
    configuration.set_uuid(document.uuid);
    configuration.set_feature(document.feature);
    configuration.set_license(document.license);
    configuration.set_version(document.version);
    configuration.set_client_id(document.client_id);
    configuration.set_mention_id(document.mention_id);
    configuration.set_maintenance(document.maintenance);
    configuration.set_developer_id(document.developer_id);
    configuration.set_global_moderator(document.global_moderator);
    configuration.set_developer_profile(document.developer_profile);
    configuration.set_global_user_blacklist(document.global_user_blacklist);
    configuration.set_alternative_mention_id(document.alternative_mention_id);
    configuration.set_global_guild_blacklist(document.global_guild_blacklist);

    if (Logger) {
      Logger.log('info', 'The database service is operational.', {
        metadata: `${configuration.get_uuid()}`
      });
    }
  } catch (error) {
    process.exit(-1);
  }
};

module.exports.configuration = configuration;

module.exports.Client = Client;
