/**
 * @file Logging utility for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The logging utility for the application.
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

// Configuration library.
const environment = require('../configurations/environment');

const root = require('app-root-path');
const { format, transports, createLogger } = require('winston');
require('winston-mongodb');

const logger = createLogger({
  transports: [
    new transports.File({
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
      maxsize: 5242880,
      filename: `${root}/logs/lum.log`,
      maxFiles: 5
    }),
    // Example: logger.log('error', 'An exception!', { metadata: error.stack });
    new transports.MongoDB({
      db: environment.get_atlas_uri(),
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
      options: {
        useUnifiedTopology: true
      },
      collection: 'logs'
    })
  ]
});

module.exports = logger;
