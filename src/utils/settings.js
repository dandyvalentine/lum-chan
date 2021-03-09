/**
 * @file Application configuration.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The configuration settings for the application.
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

require('dotenv').config();

const settings = require('../../configuration/settings.json');

module.exports.getUuid = function () {
  return process.env.UUID;
};

module.exports.getToken = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.DEVELOPMENT_TOKEN;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.PRODUCTION_TOKEN;
  }
};

module.exports.getPrefix = function () {
  return settings.prefix;
};

module.exports.getAtlasUri = function () {
  if (process.env.NODE_ENV === 'development') {
    return process.env.ATLAS_DEVELOPMENT_URI;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.ATLAS_PRODUCTION_URI;
  }
};

module.exports.getClientId = function () {
  if (process.env.NODE_ENV === 'development') {
    return settings.development_id;
  } else if (process.env.NODE_ENV === 'production') {
    return settings.production_id;
  }
};

module.exports.getMentionId = function () {
  if (process.env.NODE_ENV === 'development') {
    return settings.mention_development_id;
  } else if (process.env.NODE_ENV === 'production') {
    return settings.mention_production_id;
  }
};

module.exports.getDeveloperId = function () {
  return settings.developer_id;
};

module.exports.getMentionAlternativeId = function () {
  if (process.env.NODE_ENV === 'development') {
    return settings.mention_development_alternative_id;
  } else if (process.env.NODE_ENV === 'production') {
    return settings.mention_production_alternative_id;
  }
};
