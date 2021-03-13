/**
 * @file Configuration source file.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The configuration source file for information storage and retrieval into and from memory.
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

let url = null;
let name = null;
let uuid = null;
let feature = null;
let license = null;
let version = null;
let client_id = null;
let mention_id = null;
let maintenance = null;
let developer_id = null;
let global_moderator = null;
let developer_profile = null;
let global_user_blacklist = null;
let alternative_mention_id = null;
let global_guild_blacklist = null;

/**
 * Returns a uniform resource locator of the Lum-chan! repository.
 *
 * @since 2.0.0
 * @returns { String } uniform resource locator
 */
module.exports.get_url = function () {
  return url;
};

/**
 * Sets a new uniform resource locator of the Lum-chan! repository.
 *
 * @since 2.0.0
 * @param { String } new_url new uniform resource locator
 */
module.exports.set_url = function (new_url) {
  url = new_url;
};

/**
 * Returns a name of the application.
 *
 * @since 2.0.0
 * @returns { String } name of application
 */
module.exports.get_name = function () {
  return name;
};

/**
 * Sets a new name of the application.
 *
 * @since 2.0.0
 * @param { String } new_name new name of application
 */
module.exports.set_name = function (new_name) {
  name = new_name;
};

/**
 * Returns a universally unique identifier of the application.
 *
 * @since 2.0.0
 * @returns { String } universally unique identifier
 */
module.exports.get_uuid = function () {
  return uuid;
};

/**
 * Sets a new universally unique identifier of the application.
 *
 * @since 2.0.0
 * @param { String } new_uuid new universally unique identifier
 */
module.exports.set_uuid = function (new_uuid) {
  uuid = new_uuid;
};

/**
 * Returns an object of available features.
 *
 * @since 2.0.0
 * @returns { Object } object of available features
 */
module.exports.get_feature = function () {
  return feature;
};

/**
 * Sets a new object of available features.
 *
 * @since 2.0.0
 * @param { Object } new_feature new object of available features
 */
module.exports.set_feature = function (new_feature) {
  feature = new_feature;
};

/**
 * Returns a uniform resource locator of the Lum-chan! license.
 *
 * @since 2.0.0
 * @returns { String } uniform resource locator of license
 */
module.exports.get_license = function () {
  return license;
};

/**
 * Sets a new uniform resource locator of the Lum-chan! license.
 *
 * @since 2.0.0
 * @param { String } new_license new uniform resource locator of license
 */
module.exports.set_license = function (new_license) {
  license = new_license;
};

/**
 * Returns the version of the application.
 *
 * @since 2.0.0
 * @returns { String } version of application
 */
module.exports.get_version = function () {
  return version;
};

/**
 * Sets a new version of the application.
 *
 * @since 2.0.0
 * @param { String } new_version new version of application
 */
module.exports.set_version = function (new_version) {
  version = new_version;
};

/**
 * Returns a client identification of the application.
 *
 * @since 2.0.0
 * @returns { String } client identification of application
 */
module.exports.get_client_id = function () {
  return client_id;
};

/**
 * Sets a new client identification of the application.
 *
 * @since 2.0.0
 * @param { String } new_client_id new client identification of application
 */
module.exports.set_client_id = function (new_client_id) {
  client_id = new_client_id;
};

/**
 * Returns a client identification of the application in the form of a mention.
 *
 * @since 2.0.0
 * @returns { String } client identification of application in form of mention
 */
module.exports.get_mention_id = function () {
  return mention_id;
};

/**
 * Sets a new client identification of the application in the form of a mention.
 *
 * @since 2.0.0
 * @param { String } new_mention_id new client identification of application in form of mention
 */
module.exports.set_mention_id = function (new_mention_id) {
  mention_id = new_mention_id;
};

/**
 * Returns a Boolean value representing application maintenance.
 *
 * @since 2.0.0
 * @returns { Boolean } value representing application maintenance
 */
module.exports.get_maintenance = function () {
  return maintenance;
};

/**
 * Sets a new Boolean value representing application maintenance.
 *
 * @since 2.0.0
 * @param { Boolean } new_maintenance new value representing application maintenance
 */
module.exports.set_maintenance = function (new_maintenance) {
  maintenance = new_maintenance;
};

/**
 * Returns the developer identification of the application.
 *
 * @since 2.0.0
 * @returns { String } developer identification of application
 */
module.exports.get_developer_id = function () {
  return developer_id;
};

/**
 * Sets a new developer identification of the application.
 *
 * @since 2.0.0
 * @param { String } new_developer_id new developer identification of application
 */
module.exports.set_developer_id = function (new_developer_id) {
  developer_id = new_developer_id;
};

/**
 * Returns a list of global moderators for the application.
 *
 * @since 2.0.0
 * @returns { Array } list of global moderators for application
 */
module.exports.get_global_moderator = function () {
  return global_moderator;
};

/**
 * Sets a new list of global moderators for the application.
 *
 * @since 2.0.0
 * @param { Array } new_global_moderator new list of global moderators for application
 */
module.exports.set_global_moderator = function (new_global_moderator) {
  global_moderator = new_global_moderator;
};

/**
 * Returns a uniform resource locator of the developer profile.
 *
 * @since 2.0.0
 * @returns { String } uniform resource locator of developer profile
 */
module.exports.get_developer_profile = function () {
  return developer_profile;
};

/**
 * Sets a new uniform resource locator of the developer profile.
 *
 * @since 2.0.0
 * @param { String } new_developer_profile new uniform resource locator of developer profile
 */
module.exports.set_developer_profile = function (new_developer_profile) {
  developer_profile = new_developer_profile;
};

/**
 * Returns a global user blacklist for the application.
 *
 * @since 2.0.0
 * @returns { Array } global user blacklist for application
 */
module.exports.get_global_user_blacklist = function () {
  return global_user_blacklist;
};

/**
 * Sets a new global user blacklist for the application.
 *
 * @since 2.0.0
 * @param { Array } new_global_user_blacklist new global user blacklist for application
 */
module.exports.set_global_user_blacklist = function (
  new_global_user_blacklist
) {
  global_user_blacklist = new_global_user_blacklist;
};

/**
 * Returns the client identification of the application in form of an alternative mention.
 *
 * @since 2.0.0
 * @returns { String } client identification of application in form of an alternative mention
 */
module.exports.get_alternative_mention_id = function () {
  return alternative_mention_id;
};

/**
 * Sets the new client identification of the application in form of an alternative mention.
 *
 * @since 2.0.0
 * @param { String } new_alternative_mention_id new client identification of application in form of an alternative mention
 */
module.exports.set_alternative_mention_id = function (
  new_alternative_mention_id
) {
  alternative_mention_id = new_alternative_mention_id;
};

/**
 * Returns a global guild blacklist for the application.
 *
 * @since 2.0.0
 * @returns { Array } global guild blacklist for application
 */
module.exports.get_global_guild_blacklist = function () {
  return global_guild_blacklist;
};

/**
 * Sets a new global guild blacklist for the application.
 *
 * @since 2.0.0
 * @param { Array } new_global_guild_blacklist new global guild blacklist for application
 */
module.exports.set_global_guild_blacklist = function (
  new_global_guild_blacklist
) {
  global_guild_blacklist = new_global_guild_blacklist;
};
