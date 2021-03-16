'use strict';

// All available configuration libraries for application.
const environment = require('./configurations/environment');

// All available utility libraries for application.
const Logger = require('./utils/logger');

// Command manager for application.
const manager = require('./commands/manager');

const Discord = require('discord.js');
const Client = new Discord.Client();

Client.once('ready', () => {
  // Configure the command manager.
  manager.init(Client, Logger);
});

Client.on('message', async (message) => {
  manager.handle(message);
});

Client.login(environment.get_token());
