'use strict';

const { MessageEmbed } = require('discord.js');

// Database services for application.
const database = require('../services/database');

// All available sub-commands for application.
const broadcast = require('./music/broadcast');

let Bot = require('./bot');
let Client = null; // Reference to Discord client.
let Logger = null; // Reference to logging utility.

/**
 * Returns true if a recieved message from Discord starts with the prefix.
 *
 * @since 2.0.0
 * @param { Object } message recieved Discord message object
 * @returns { Boolean } true if prefix is found
 */
function prefix(message) {
  return (
    message.content.startsWith(database.configuration.get_mention_id()) ||
    message.content.startsWith(
      database.configuration.get_alternative_mention_id()
    )
  );
}

async function process(message) {
  let args = null;
  const check = message.content.startsWith(
    database.configuration.get_mention_id()
  );

  if (check) {
    args = message.content
      .slice(database.configuration.get_mention_id())
      .trim()
      .split(/ +/);
  } else {
    args = message.content
      .slice(database.configuration.get_alternative_mention_id())
      .trim()
      .split(/ +/);
  }

  // Display the 'about' information by default.
  if (args.length === 1) {
    // About Me!
  } else {
    //
  }
}

module.exports.init = function (client, logger) {
  Bot.setup(database);
  Client = client;
  Logger = logger;

  // Initialize the Discord client for the database service.
  database.Client = client;

  // Initialize all available services.
  broadcast.setup(Client, Logger);
};

module.exports.handle = async function (message) {
  if (!database.configuration.get_maintenance()) {
    if (message.guild && !message.author.bot && !message.webhookID) {
      if (prefix(message)) {
        await process(message);
      } else {
        return; // Ignore messages from guilds that do not start with prefix.
      }
    } else if (!message.guild && !message.author.bot && !message.webhookID) {
      if (prefix(message)) {
        await process(message);
      } else {
        //
      }
    } else {
      return; // Ignore messages that originate from bots or webhooks.
    }
  } else {
    //
  }
};
