/**
 * @file Test suite for environment operations.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This testing suite ensures that specific environment operations are functional.
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

/**
 * @since 2.0.0
 * @summary Initializes this testing suite before starting.
 */
beforeAll((done) => {
  // If false, testing suite is being executed locally!
  if (!process.env.NODE_ENV_GITHUB) {
    require('dotenv').config();
  }

  done();
});

/**
 * @since 2.0.0
 * @summary These series of tests ensure the integrity of the Environment source file.
 */
describe('Verifying Environment Variables...', () => {
  // Verify the universally unique identifiers...
  it('Universally Unique Identifier', (done) => {
    expect.assertions(3);

    if (!process.env.NODE_ENV_GITHUB) {
      expect(process.env.UUID_GITHUB).toBeTruthy();
      expect(process.env.UUID_PRODUCTION).toBeTruthy();
      expect(process.env.UUID_DEVELOPMENT).toBeTruthy();
    } else {
      expect(process.env.UUID_GITHUB).toBeTruthy();
      expect(process.env.UUID_PRODUCTION).toBeNull();
      expect(process.env.UUID_DEVELOPMENT).toBeNull();
    }

    done();
  });

  // Verify the tokens for Discord...
  it('Discord Token', (done) => {
    expect.assertions(2);

    if (!process.env.NODE_ENV_GITHUB) {
      expect(process.env.DISCORD_PRODUCTION_TOKEN).toBeTruthy();
      expect(process.env.DISCORD_DEVELOPMENT_TOKEN).toBeTruthy();
    } else {
      expect(process.env.DISCORD_PRODUCTION_TOKEN).toBeNull();
      expect(process.env.DISCORD_DEVELOPMENT_TOKEN).toBeNull();
    }

    done();
  });

  // Verify the MongoDB Cloud uniform resource identifiers...
  it('MongoDB Cloud Uniform Resource Identifier', (done) => {
    expect.assertions(5);

    if (!process.env.NODE_ENV_GITHUB) {
      expect(process.env.MONGODB_ATLAS_URI_GITHUB).toBeTruthy();
      expect(process.env.MONGODB_ATLAS_URI_PRODUCTION).toBeTruthy();
      expect(process.env.MONGODB_ATLAS_URI_DEVELOPMENT).toBeTruthy();
      expect(process.env.MONGODB_ATLAS_URI_PRODUCTION_BACKUP).toBeTruthy();
      expect(process.env.MONGODB_ATLAS_URI_DEVELOPMENT_BACKUP).toBeTruthy();
    } else {
      expect(process.env.MONGODB_ATLAS_URI_GITHUB).toBeTruthy();
      expect(process.env.MONGODB_ATLAS_URI_PRODUCTION).toBeNull();
      expect(process.env.MONGODB_ATLAS_URI_DEVELOPMENT).toBeNull();
      expect(process.env.MONGODB_ATLAS_URI_PRODUCTION_BACKUP).toBeNull();
      expect(process.env.MONGODB_ATLAS_URI_DEVELOPMENT_BACKUP).toBeNull();
    }

    done();
  });
});

/**
 * @since 2.0.0
 * @summary Cleans up this testing suite upon finishing.
 */
afterEach((done) => {
  done();
});
