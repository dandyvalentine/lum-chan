'use strict';

const service = require('../../services/music/broadcast');

module.exports.setup = function (client, logger) {
  service.init(client, logger);
  service.play();
};
