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
});

afterEach(async (done) => {
  mongoose.connection.close();

  done();
});
