'use strict';

let configuration = null; // Reference to configuration via database service.

module.exports.setup = function (service) {
  configuration = service;
};
