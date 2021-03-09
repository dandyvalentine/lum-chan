/**
 * @file Playlist schema for database.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description Models a playlist schema for the database.
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
const schema = mongoose.Schema;

/* eslint-disable prettier/prettier */
const playlist_schema = new schema({
  url: { type: String, unique: true, required: true },
  title: { type: String, unique: true, required: true },
}, {
  timestamps: true
});

const Playlist = mongoose.model('Playlist', playlist_schema);

module.exports = Playlist;