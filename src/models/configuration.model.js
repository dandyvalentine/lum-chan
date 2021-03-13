/**
 * @file Configuration schema.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This is the schema representing the Configuration document.
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

// Reference: https://github.com/dandyvalentine/lum-chan/issues/7
const configuration_schema = new mongoose.Schema(
  {
    url: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    uuid: { type: String, unique: true, required: true },
    feature: { type: Object, unique: true, required: true },
    license: { type: String, unique: true, required: true },
    version: { type: String, unique: true, required: true },
    client_id: { type: String, unique: true, required: true },
    mention_id: { type: String, unique: true, required: true },
    maintenance: { type: Boolean, unique: true, required: true },
    developer_id: { type: String, unique: true, required: true },
    global_moderator: { type: [String], unique: true, required: true },
    developer_profile: { type: String, unique: true, required: true },
    global_user_blacklist: { type: [String], unique: true, required: true },
    alternative_mention_id: { type: String, unique: true, required: true },
    global_guild_blacklist: { type: [String], unique: true, required: true }
  },
  { timestamps: true }
);

const configuration = mongoose.model('Configuration', configuration_schema);

module.exports = configuration;
