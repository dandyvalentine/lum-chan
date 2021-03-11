'use strict';
const mongoose = require('mongoose');
const Configuration = require('../models/configuration.model');

beforeAll(async (done) => {
  const url =
    'mongodb+srv://lum:LHDQy4aJkjP0Bp7x@cluster-0.nnum4.mongodb.net/github?retryWrites=true&w=majority';

  await mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  done();
});

describe('Verifying Configuration Document...', () => {
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

afterAll(async (done) => {
  mongoose.connection.close();

  done();
});
