/**
 * @file Log schema.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This is the schema representing the Log document.
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

// Reference: https://github.com/dandyvalentine/lum-chan/issues/10
const log_schema = new mongoose.Schema({
  meta: { type: String, required: true },
  level: { type: String, required: true },
  message: { type: String, required: true },
  hostname: { type: String, required: true },
  timestamp: { type: Date, required: true }
});

const log = mongoose.model('Log', log_schema);

module.exports = log;
