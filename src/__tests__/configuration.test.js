/**
 * @file Test suite for configuration operations.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description This testing suite ensures that specific configuration operations are functional.
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

const configuration = require('../configurations/configuration');

const img =
  'https://i.pinimg.com/originals/d7/13/04/d713046ec7931651e0e2996450d58cfb.gif';
const inv = 'https://discord.gg/6F8HdGK3VE';
const url = 'https://github.com/dandyvalentine/lum-chan';
const name = 'Lum-chan!';
const uuid = '9ed9a8cf-3f41-4f40-9108-b88515ce2a83'; // This is not a universally unique identifier used in the application.
const feature = { test: true };
const license = 'https://github.com/dandyvalentine/lum-chan/blob/main/LICENSE';
const version = '0.0.0';
const client_id = '816473349282070548';
const mention_id = '<@!816473349282070548>';
const maintenance = true;
const developer_id = '806051504460005377';
const global_moderator = ['806051504460005377'];
const developer_profile = 'https://github.com/dandyvalentine';
const global_user_blacklist = ['761638065248665631'];
const alternative_mention_id = '<@816473349282070548>';
const global_guild_blacklist = ['816469264827285514'];

/**
 * @since 2.0.0
 * @summary This initializes the Configuration source file before the testing suite begins.
 */
beforeAll((done) => {
  configuration.set_img(img);
  configuration.set_inv(inv);
  configuration.set_url(url);
  configuration.set_name(name);
  configuration.set_uuid(uuid);
  configuration.set_feature(feature);
  configuration.set_license(license);
  configuration.set_version(version);
  configuration.set_client_id(client_id);
  configuration.set_mention_id(mention_id);
  configuration.set_maintenance(maintenance);
  configuration.set_developer_id(developer_id);
  configuration.set_global_moderator(global_moderator);
  configuration.set_developer_profile(developer_profile);
  configuration.set_global_user_blacklist(global_user_blacklist);
  configuration.set_alternative_mention_id(alternative_mention_id);
  configuration.set_global_guild_blacklist(global_guild_blacklist);

  done();
});

/**
 * @since 2.0.0
 * @summary These series of tests ensure the integrity of the Configuration source file.
 */
describe('Verifying Configuration Methods...', () => {
  // Validate get_img() and set_img(new_img) methods...
  it('get_img()', (done) => {
    expect.assertions(1);

    expect(configuration.get_img()).toBe(img);

    done();
  });

  // Validate get_inv() and set_inv(new_inv) methods...
  it('get_inv()', (done) => {
    expect.assertions(1);

    expect(configuration.get_inv()).toBe(inv);

    done();
  });

  // Validate get_url() and set_url(new_url) methods...
  it('get_url()', (done) => {
    expect.assertions(1);

    expect(configuration.get_url()).toBe(url);

    done();
  });

  // Validate get_name() and set_name(new_name) methods...
  it('get_name()', (done) => {
    expect.assertions(1);

    expect(configuration.get_name()).toBe(name);

    done();
  });

  // Validate get_uuid() and set_uuid(new_uuid) methods...
  it('get_uuid()', (done) => {
    expect.assertions(1);

    expect(configuration.get_uuid()).toBe(uuid);

    done();
  });

  // Validate get_feature() and set_feature(new_feature) methods...
  it('get_feature()', (done) => {
    expect.assertions(1);

    const test = configuration.get_feature().test;
    expect(test).toBeTruthy();

    done();
  });

  // Validate get_license() and set_license(new_license) methods...
  it('get_license()', (done) => {
    expect.assertions(1);

    expect(configuration.get_license()).toBe(license);

    done();
  });

  // Validate get_version() and set_version(new_version) methods...
  it('get_version()', (done) => {
    expect.assertions(1);

    expect(configuration.get_version()).toBe(version);

    done();
  });

  // Validate get_client_id() and set_client_id(new_client_id) methods...
  it('get_client_id()', (done) => {
    expect.assertions(1);

    expect(configuration.get_client_id()).toBe(client_id);

    done();
  });

  // Validate get_mention_id() and set_mention_id(new_mention_id) methods...
  it('get_mention_id()', (done) => {
    expect.assertions(1);

    expect(configuration.get_mention_id()).toBe(mention_id);

    done();
  });

  // Validate get_maintenance() and set_maintenance(new_maintenance) methods...
  it('get_maintenance()', (done) => {
    expect.assertions(1);

    expect(configuration.get_maintenance()).toBeTruthy();

    done();
  });

  // Validate get_developer_id() and set_developer_id(new_developer_id) methods...
  it('get_developer_id()', (done) => {
    expect.assertions(1);

    expect(configuration.get_developer_id()).toBe(developer_id);

    done();
  });

  // Validate get_global_moderator() and set_global_moderator(new_global_moderator) methods...
  it('get_global_moderator()', (done) => {
    expect.assertions(1);

    expect(
      configuration.get_global_moderator().includes('806051504460005377')
    ).toBeTruthy();

    done();
  });

  // Validate get_developer_profile() and set_developer_profile(new_developer_profile) methods...
  it('get_developer_profile()', (done) => {
    expect.assertions(1);

    expect(configuration.get_developer_profile()).toBe(developer_profile);

    done();
  });

  // Validate get_global_user_blacklist() and set_global_user_blacklist(new_global_user_blacklist) methods...
  it('get_global_user_blacklist()', (done) => {
    expect.assertions(1);

    expect(
      configuration.get_global_user_blacklist().includes('761638065248665631')
    ).toBeTruthy();

    done();
  });

  // Validate get_alternative_mention_id() and set_alternative_mention_id(new_alternative_mention_id) methods...
  it('get_alternative_mention_id()', (done) => {
    expect.assertions(1);

    expect(configuration.get_alternative_mention_id()).toBe(
      alternative_mention_id
    );

    done();
  });

  // Validate get_global_guild_blacklist() and set_global_guild_blacklist(new_global_guild_blacklist) methods...
  it('get_global_guild_blacklist()', (done) => {
    expect.assertions(1);

    expect(
      configuration.get_global_guild_blacklist().includes('816469264827285514')
    ).toBeTruthy();

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
