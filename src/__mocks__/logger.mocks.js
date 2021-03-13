/**
 * @file Mock logging utility for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description A mock logging utility for the application.
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

const { format, transports, createLogger } = require('winston');
require('winston-mongodb');

const logger = createLogger({
  transports: [
    // Example: logger.log('error', 'An exception!', { metadata: error.stack });
    new transports.MongoDB({
      db: process.env.MONGODB_ATLAS_URI_GITHUB,
      level: 'info',
      capped: false,
      format: format.combine(format.timestamp(), format.json()),
      silent: false,
      options: {
        poolSize: 3,
        autoReconnect: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      storeHost: true,
      cappedSize: 10000000,
      collection: 'logs',
      decolorize: false,
      includeIds: true,
      tryReconnect: false
    })
  ],
  handleExceptions: true
});

module.exports = logger;
