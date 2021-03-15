/**
 * @file Test suite for broadcasting service.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This testing suite ensures that the broadcasting service is functional.
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

const broadcast = require('../services/music/broadcast');

const queue_playlist = Object.keys(broadcast.playlist);
const queue_broadcast = broadcast.queue;

/**
 * @since 2.0.0
 * @summary Initializes this testing suite before starting.
 */
beforeAll((done) => {
  done();
});

/**
 * @since 2.0.0
 * @summary These series of tests ensure the integrity of the broadcasting service.
 */
describe('Verifying the broadcast queue...', () => {
  // Verify that there is not a reference to a Discord client...
  it('No Client', (done) => {
    expect.assertions(1);

    expect(broadcast.Client).toBeNull();

    done();
  });

  // Verify that there is not a reference to a Discord broadcast...
  it('No Broadcast', (done) => {
    expect.assertions(1);

    expect(broadcast.Broadcast).toBeNull();

    done();
  });

  // Ensure the integrity of the broadcasting status.
  it('Broadcasting Status', (done) => {
    expect.assertions(2);

    expect(broadcast.broadcasting).toBeFalsy();

    broadcast.broadcasting = true;
    expect(broadcast.broadcasting).toBeTruthy();

    done();
  });

  // Verify that there is no track information currently...
  it('No Track Information', (done) => {
    expect.assertions(1);

    expect(broadcast.track).toBeNull();

    done();
  });

  // Ensure that the data structures contain unique contents.
  it('Unique Data Structure', (done) => {
    expect.assertions(2);

    const is_unique = (arr) =>
      Array.isArray(arr) && new Set(arr).size === arr.length;

    expect(is_unique(queue_playlist)).toBeTruthy();
    expect(is_unique(queue_broadcast)).toBeTruthy();

    done();
  });

  // Ensure that the data structures are equal in length (but not in content).
  it('Data Structure Equality', (done) => {
    expect.assertions(2);

    expect(queue_playlist.length).toBe(queue_broadcast.length);
    expect(queue_playlist.toString()).not.toBe(queue_broadcast.toString());

    done();
  });

  // Ensure that the data structures are not empty.
  it('Non-empty Data Structure', (done) => {
    expect.assertions(2);

    expect(queue_playlist.length).not.toBe(0);
    expect(queue_broadcast.length).not.toBe(0);

    done();
  });

  // Ensure the integrity of the broadcasting maintenance and error collection.
  it('Broadcasting Maintenance and Error Collection', (done) => {
    expect.assertions(4);

    const no_errors = (obj) => Object.keys(obj).length === 0;

    expect(broadcast.maintenance).toBeFalsy();
    expect(no_errors(broadcast.error)).toBeTruthy();

    broadcast.maintenance = true;
    Object.assign(broadcast.error, {
      BROADCAST_SERVICE: {
        level: 'error',
        message: 'A sample error.',
        metadata: null,
        timestamp: null
      }
    });
    expect(broadcast.maintenance).toBeTruthy();
    expect(no_errors(broadcast.error)).toBeFalsy();

    done();
  });
});

/**
 * @since 2.0.0
 * @summary Cleans up this testing suite upon finishing.
 */
afterAll((done) => {
  done();
});
