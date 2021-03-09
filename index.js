/**
 * @file Entry point for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description Enables application connectivity and functionality.
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

const bot = require('./commands/manager');

const { Client } = require('discord.js');
const client = new Client();

client.once('ready', () => {
  setTimeout(() => {
    bot.setup();
  }, 2000);

  setTimeout(() => {
    bot.verify();
  }, 4000);

  setTimeout(() => {
    bot.guild_check(client);
  }, 6000);
});

client.on('guildCreate', async (guild) => {
  if (bot.is_available()) {
    bot.check_guild(client, guild.id);
  }
});

client.on('message', async (message) => {
  if (bot.is_available()) {
    //
  }
});

client.on('voiceStateUpdate', (p_state, c_state) => {
  if (bot.is_available()) {
    //
  }
});

bot.logon(client);
