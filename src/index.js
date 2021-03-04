const utils = require('./utils/settings');

const { Client } = require('discord.js');
const YTDL = require('ytdl-core-discord');

const CLIENT = new Client();

CLIENT.on('ready', async () => {
  try {
    let channel = CLIENT.channels.cache.get(utils.dandy_guild_voice_channel_id()) || (await CLIENT.channels.fetch(utils.dandy_guild_voice_channel_id()));

    if (!channel) {
      return;
    } else {
      let connection = await channel.join();

      connection.play(await YTDL('https://www.youtube.com/watch?v=0XkZ-3RvC4A'), { type: 'opus' });
    }
  } catch (error) {
    console.log(error);
  }
});

CLIENT.login(utils.token());
