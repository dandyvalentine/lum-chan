'use strict';
const mongoose = require('mongoose');

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
    global_blacklist: { type: [String], unique: true, required: true },
    global_moderator: { type: [String], unique: true, required: true },
    developer_profile: { type: String, unique: true, required: true },
    alternative_mention_id: { type: String, unique: true, required: true }
  },
  { timestamps: true }
);

const configuration = mongoose.model('Configuration', configuration_schema);

module.exports = configuration;
