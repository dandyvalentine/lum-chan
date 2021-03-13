/**
 * @file Application environment source file.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The application environment source file.
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

// The .env file is required for this to function properly.
require('dotenv').config();

/**
 * Returns the environment variable responsible for the universally unique identifier.
 *
 * @since 2.0.0
 * @returns { String } universally unique identifier
 */
module.exports.get_uuid = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.UUID_DEVELOPMENT;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.UUID_PRODUCTION;
  }
};

/**
 * Returns the environment variable responsible for the unique token for Discord.
 *
 * @since 2.0.0
 * @returns { String } unique token for Discord
 */
module.exports.get_token = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.DISCORD_DEVELOPMENT_TOKEN;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.DISCORD_PRODUCTION_TOKEN;
  }
};

/**
 * Returns the environment variable responsible for the database credentials for MongoDB Cloud.
 *
 * @since 2.0.0
 * @returns { String } MongoDB Cloud uniform resource identifier
 */
module.exports.get_atlas_uri = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.MONGODB_ATLAS_URI_DEVELOPMENT;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.MONGODB_ATLAS_URI_PRODUCTION;
  }
};

/**
 * Returns the environment variable responsible for the backup database credentials for MongoDB Cloud.
 *
 * @since 2.0.0
 * @returns { String } MongoDB Cloud uniform resource identifier
 */
module.exports.get_atlas_backup_uri = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.MONGODB_ATLAS_URI_DEVELOPMENT_BACKUP;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.MONGODB_ATLAS_URI_PRODUCTION_BACKUP;
  }
};
