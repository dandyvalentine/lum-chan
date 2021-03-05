/**
 * @file Configuration for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 1.0.0
 * @description Initializes the application with configuration settings.
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
require('dotenv').config();

const CONFIGURATION = require('../../configuration/settings.json');

const _DEVELOPMENT = true;

const _UUID = process.env.UUID;
const _TOKEN = process.env.TOKEN;

const _VERSION = CONFIGURATION.bot[0].version;
const _DEVELOPER_ID = CONFIGURATION.bot[0].developer;
const _CLIENT_PRODUCTION_ID = CONFIGURATION.bot[0].production;
const _CLIENT_DEVELOPMENT_ID = CONFIGURATION.bot[0].development;

const _DANDY_GUILD_ID = CONFIGURATION.guild[0].guild_1[0].guild_id;
const _DANDY_GUILD_OWNER_ID = CONFIGURATION.guild[0].guild_1[0].owner_id;
const _DANDY_GUILD_TEXT_CHANNEL_ID = CONFIGURATION.guild[0].guild_1[0].text_channel_id;
const _DANDY_GUILD_VOICE_CHANNEL_ID = CONFIGURATION.guild[0].guild_1[0].voice_channel_id;

const _URUSEI_GUILD_ID = CONFIGURATION.guild[0].guild_2[0].guild_id;
const _URUSEI_GUILD_OWNER_ID = CONFIGURATION.guild[0].guild_2[0].owner_id;
const _URUSEI_GUILD_TEXT_CHANNEL_ID = CONFIGURATION.guild[0].guild_2[0].text_channel_id;
const _URUSEI_GUILD_VOICE_CHANNEL_ID = CONFIGURATION.guild[0].guild_2[0].voice_channel_id;

module.exports.development = function () {
  return _DEVELOPMENT;
};

module.exports.uuid = function () {
  return _UUID;
};

module.exports.token = function () {
  return _TOKEN;
};

module.exports.version = function () {
  return _VERSION;
};

module.exports.developer_id = function () {
  return _DEVELOPER_ID;
};

module.exports.client_production_id = function () {
  return _CLIENT_PRODUCTION_ID;
};

module.exports.client_development_id = function () {
  return _CLIENT_DEVELOPMENT_ID;
};

module.exports.dandy_guild_id = function () {
  return _DANDY_GUILD_ID;
};

module.exports.dandy_guild_owner_id = function () {
  return _DANDY_GUILD_OWNER_ID;
};

module.exports.dandy_guild_text_channel_id = function () {
  return _DANDY_GUILD_TEXT_CHANNEL_ID;
};

module.exports.dandy_guild_voice_channel_id = function () {
  return _DANDY_GUILD_VOICE_CHANNEL_ID;
};

module.exports.urusei_guild_id = function () {
  return _URUSEI_GUILD_ID;
};

module.exports.urusei_guild_owner_id = function () {
  return _URUSEI_GUILD_OWNER_ID;
};

module.exports.urusei_guild_text_channel_id = function () {
  return _URUSEI_GUILD_TEXT_CHANNEL_ID;
};

module.exports.urusei_guild_voice_channel_id = function () {
  return _URUSEI_GUILD_VOICE_CHANNEL_ID;
};
