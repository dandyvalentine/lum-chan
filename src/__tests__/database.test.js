/**
 * @file Test suite for database operations.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This testing suite ensures that specific database operations are functional.
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

let logger = null; // We will initialize this in a specific testing suite!
const mongoose = require('mongoose');

const Log = require('../models/log.model');
const Configuration = require('../models/configuration.model');

/**
 * @since 2.0.0
 * @summary This establishes a connection to the database before each test.
 */
beforeEach(async (done) => {
  // If false, testing suite is being executed locally!
  if (!process.env.NODE_ENV_GITHUB) {
    require('dotenv').config();
  }

  const url = process.env.MONGODB_ATLAS_URI_GITHUB;

  await mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  done();
});

/**
 * @since 2.0.0
 * @summary These series of tests ensure the integrity of the Configuration document.
 */
describe('Verifying Configuration Document...', () => {
  // Validate the uniform resource locator...
  it('Uniform Resource Locator', async (done) => {
    expect.assertions(1);

    const url = 'https://github.com/dandyvalentine/lum-chan';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.url).toBe(url);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the name...
  it('Name', async (done) => {
    expect.assertions(1);

    const name = 'Lum-chan!';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.name).toBe(name);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the universally unique identifier...
  it('Universally Unique Identifier', async (done) => {
    expect.assertions(1);

    const uuid = process.env.UUID_GITHUB;
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.uuid).toBe(uuid);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the features...
  it('Features', async (done) => {
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect.assertions(2);

      expect(configuration.feature.level).toBeFalsy();
      expect(configuration.feature.music).toBeFalsy();
    } else {
      expect.assertions(1);

      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the license...
  it('License', async (done) => {
    expect.assertions(1);

    const license =
      'https://github.com/dandyvalentine/lum-chan/blob/main/LICENSE';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.license).toBe(license);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the version...
  it('Version', async (done) => {
    expect.assertions(1);

    const version = '2.0.0';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.version).toBe(version);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the Client ID...
  it('Client ID', async (done) => {
    expect.assertions(1);

    const client_id = '816473349282070548';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.client_id).toBe(client_id);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the mention ID...
  it('Mention ID', async (done) => {
    expect.assertions(1);

    const mention_id = '<@!816473349282070548>';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.mention_id).toBe(mention_id);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the maintenance variable...
  it('Maintenance', async (done) => {
    expect.assertions(1);

    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.maintenance).toBeTruthy();
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the developer ID...
  it('Developer ID', async (done) => {
    expect.assertions(1);

    const developer_id = '806051504460005377';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.developer_id).toBe(developer_id);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the global moderator list...
  it('Global Moderators', async (done) => {
    expect.assertions(1);

    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.global_moderator.length).toBe(0);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the developer profile...
  it('Developer Profile', async (done) => {
    expect.assertions(1);

    const developer_profile = 'https://github.com/dandyvalentine';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.developer_profile).toBe(developer_profile);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the global user blacklist...
  it('Global User Blacklist', async (done) => {
    expect.assertions(1);

    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.global_user_blacklist.length).toBe(0);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the alternative mention ID...
  it('Alternative Mention ID', async (done) => {
    expect.assertions(1);

    const alternative_mention_id = '<@816473349282070548>';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.alternative_mention_id).toBe(alternative_mention_id);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });

  // Validate the global guild blacklist...
  it('Global Guild Blacklist', async (done) => {
    expect.assertions(1);

    const configuration = await Configuration.findOne({
      uuid: process.env.UUID_GITHUB
    });

    if (configuration) {
      expect(configuration.global_guild_blacklist.length).toBe(0);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });
});

/**
 * @since 2.0.0
 * @summary These series of tests ensure the integrity of the Log document.
 */
describe('Verifying Log Document...', () => {
  // Initialize the logger object...
  beforeAll((done) => {
    logger = require('../__mocks__/logger.mocks');

    done();
  });

  // Attempt to write an information log to the database...
  it('Writing Information Log', async (done) => {
    expect.assertions(1);

    const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    logger.log('info', 'This is an example of an informative log.', {
      metadata: `TEST PERFORMED ON: ${dt}`
    });

    // Not checking for a specific log entry...
    const log = await Log.findOne({
      level: 'info'
    });

    expect(log).toBeTruthy();

    done();
  });

  // Attempt to write a warning log to the database...
  it('Writing Warning Log', async (done) => {
    expect.assertions(1);

    const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    logger.log('warn', 'This is an example of a warning log.', {
      metadata: `TEST PERFORMED ON: ${dt}`
    });

    // Not checking for a specific log entry...
    const log = await Log.findOne({
      level: 'warn'
    });

    expect(log).toBeTruthy();

    done();
  });

  // Attempt to write an error log to the database...
  it('Writing Error Log', async (done) => {
    expect.assertions(1);

    const dt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    logger.log('error', 'This is an example of an error log.', {
      metadata: `TEST PERFORMED ON: ${dt}`
    });

    // Not checking for a specific log entry...
    const log = await Log.findOne({
      level: 'error'
    });

    expect(log).toBeTruthy();

    done();
  });

  // Teardown the logger variable...
  afterAll((done) => {
    logger.end();

    done();
  });
});

/**
 * @since 2.0.0
 * @summary This closes the connection of the database after each test.
 */
afterEach(async (done) => {
  mongoose.connection.close();

  done();
});
