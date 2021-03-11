'use strict';
const mongoose = require('mongoose');
const Configuration = require('../models/configuration.model');

beforeEach(async (done) => {
  const url = process.env.MONGODB_ATLAS_URI;

  await mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  done();
});

describe('Verifying Configuration Document...', () => {
  // Validate the uniform resource locator...
  it('Uniform Resource Locator', async (done) => {
    expect.assertions(1);

    const url = 'https://github.com/dandyvalentine/lum-chan';
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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

    const uuid = process.env.UUID;
    const configuration = await Configuration.findOne({
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
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
      uuid: process.env.UUID
    });

    if (configuration) {
      expect(configuration.developer_id).toBe(developer_id);
    } else {
      expect(configuration).not.toBeNull(); // This will automatically fail the test.
    }

    done();
  });
});

afterEach(async (done) => {
  mongoose.connection.close();

  done();
});
