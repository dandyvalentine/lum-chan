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
