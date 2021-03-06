/**
 * @file Entry point for application.
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 1.0.0
 * @description Enables application connectivity.
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
const RADIO = require('./services/radio');
const UTILS = require('./utils/settings');

const { Client, MessageEmbed } = require('discord.js');
const CLIENT = new Client();

CLIENT.once('ready', async () => {
  RADIO.start(CLIENT);
  RADIO.queue(CLIENT);
});

CLIENT.on('guildCreate', async (guild) => {
  if (UTILS.development()) {
    if (guild.id !== UTILS.dandy_guild_id()) {
      CLIENT.guilds.cache
        .get(guild.id)
        .leave()
        .catch((error) => {
          console.log(error);
        });
    } else {
      RADIO.restart(CLIENT);
    }
  } else {
    if (guild.id !== UTILS.urusei_guild_id()) {
      CLIENT.guilds.cache
        .get(guild.id)
        .leave()
        .catch((error) => {
          console.log(error);
        });
    } else {
      RADIO.restart(CLIENT);
    }
  }
});

CLIENT.on('message', async (message) => {
  if (UTILS.development()) {
    if ((message.content.startsWith(UTILS.dandy_guild_prefix()) || message.content.startsWith(UTILS.dandy_guild_prefix_alternative())) && message.guild && !message.author.bot) {
      if (message.channel.id === UTILS.dandy_guild_text_channel_id()) {
        let prefix = null;
        let prefix_1 = message.content.startsWith(UTILS.dandy_guild_prefix());
        let prefix_2 = message.content.startsWith(UTILS.dandy_guild_prefix_alternative());

        if (prefix_1) {
          prefix = prefix_1;
        } else if (prefix_2) {
          prefix = prefix_2;
        }

        let args = message.content.slice(prefix.length).trim().split(/ +/);
        let user = message.member.nickname || message.member.user.username;

        let me = await CLIENT.users.fetch(UTILS.developer_id());
        let bot = await CLIENT.users.fetch(UTILS.client_development_id());
        let bot_nickname = message.guild.me.displayName;

        switch (args[1].toLowerCase()) {
          case '-pause':
            if (message.author.id === UTILS.developer_id()) {
              RADIO.pause();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have paused the audio stream!');
              } else {
                await message.channel.send(`${user}, I have paused the audio stream!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-resume':
            if (message.author.id === UTILS.developer_id()) {
              RADIO.resume();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have resumed the audio stream!');
              } else {
                await message.channel.send(`${user}, I have resumed the audio stream!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-connect':
            if (message.author.id === UTILS.developer_id()) {
              RADIO.connect();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I will join the voice channel in a moment!');
              } else {
                await message.channel.send(`${user}, I will join the voice channel in a moment!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-disconnect':
            if (message.author.id === UTILS.developer_id()) {
              RADIO.disconnect(CLIENT);

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have left the voice channel!');
              } else {
                await message.channel.send(`${user}, I have left the voice channel!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-help':
            await message.channel.send(
              new MessageEmbed()
                .setColor('008000')
                .setTitle('About Lum-chan!')
                .setURL('https://github.com/dandyvalentine/lum-chan')
                .setAuthor(`${bot_nickname}`, bot.displayAvatarURL())
                .setDescription(`Lum-chan is a bot for those who enjoy listening to the Urusei Yatsura soundtrack. This program is intended for the [_UY & Chill_](https://discord.gg/6F8HdGK3VE) Discord server. Just type **@${bot_nickname} -command** in order to interact with the program.`)
                .setThumbnail('https://i.pinimg.com/originals/d7/13/04/d713046ec7931651e0e2996450d58cfb.gif')
                .addFields({ name: '__Privileged Command__', value: '***-connect\n-disconnect\n-pause\n-resume***', inline: true }, { name: '__Description__', value: '*Lum-chan joins the voice channel.\nLum-chan leaves the voice channel.\nLum-chan pauses audio streaming.\nLum-chan resumes audio streaming.*', inline: true }, { name: '\u200B', value: '\u200B' }, { name: '__Command__', value: '*-help*', inline: true }, { name: '__Description__', value: '*Displays information about Lum-chan.*', inline: true })
                .setTimestamp()
                .setFooter(`Made with ❤️ by Dandy!`, me.displayAvatarURL())
            );

            break;
          default:
            break;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    if ((message.content.startsWith(UTILS.urusei_guild_prefix()) || message.content.startsWith(UTILS.urusei_guild_prefix_alternative())) && message.guild && !message.author.bot) {
      if (message.channel.id === UTILS.urusei_guild_text_channel_id()) {
        let prefix = null;
        let prefix_1 = message.content.startsWith(UTILS.urusei_guild_prefix());
        let prefix_2 = message.content.startsWith(UTILS.urusei_guild_prefix_alternative());

        let me = await CLIENT.users.fetch(UTILS.developer_id());
        let bot = await CLIENT.users.fetch(UTILS.client_production_id());
        let bot_nickname = message.guild.me.displayName;

        if (prefix_1) {
          prefix = prefix_1;
        } else if (prefix_2) {
          prefix = prefix_2;
        }

        let args = message.content.slice(prefix.length).trim().split(/ +/);
        let user = message.member.nickname || message.member.user.username;

        switch (args[1].toLowerCase()) {
          case '-pause':
            if (message.author.id === UTILS.developer_id() || message.author.id === UTILS.urusei_guild_owner_id()) {
              RADIO.pause();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have paused the audio stream!');
              } else {
                await message.channel.send(`${user}, I have paused the audio stream!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-resume':
            if (message.author.id === UTILS.developer_id() || message.author.id === UTILS.urusei_guild_owner_id()) {
              RADIO.resume();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have resumed the audio stream!');
              } else {
                await message.channel.send(`${user}, I have resumed the audio stream!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-connect':
            if (message.author.id === UTILS.developer_id() || message.author.id === UTILS.urusei_guild_owner_id()) {
              RADIO.connect();

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I will join the voice channel in a moment!');
              } else {
                await message.channel.send(`${user}, I will join the voice channel in a moment!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-disconnect':
            if (message.author.id === UTILS.developer_id() || message.author.id === UTILS.urusei_guild_owner_id()) {
              RADIO.disconnect(CLIENT);

              if (message.author.id === UTILS.developer_id()) {
                await message.channel.send('Darling, I have left the voice channel!');
              } else {
                await message.channel.send(`${user}, I have left the voice channel!`);
              }
            } else {
              await message.channel.send(`Sorry ${user}, you do not have permission!`);
            }

            break;
          case '-help':
            await message.channel.send(
              new MessageEmbed()
                .setColor('008000')
                .setTitle('About Lum-chan!')
                .setURL('https://github.com/dandyvalentine/lum-chan')
                .setAuthor(`${bot_nickname}`, bot.displayAvatarURL())
                .setDescription(`Lum-chan is a bot for those who enjoy listening to the Urusei Yatsura soundtrack. This program is intended for the [_UY & Chill_](https://discord.gg/6F8HdGK3VE) Discord server. Just type **@${bot_nickname} -command** in order to interact with the program.`)
                .setThumbnail('https://i.pinimg.com/originals/d7/13/04/d713046ec7931651e0e2996450d58cfb.gif')
                .addFields({ name: '__Privileged Command__', value: '***-connect\n-disconnect\n-pause\n-resume***', inline: true }, { name: '__Description__', value: '*Lum-chan joins the voice channel.\nLum-chan leaves the voice channel.\nLum-chan pauses audio streaming.\nLum-chan resumes audio streaming.*', inline: true }, { name: '\u200B', value: '\u200B' }, { name: '__Command__', value: '*-help*', inline: true }, { name: '__Description__', value: '*Displays information about Lum-chan.*', inline: true })
                .setTimestamp()
                .setFooter(`Made with ❤️ by Dandy!`, me.displayAvatarURL())
            );

            break;
          default:
            break;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  }
});

CLIENT.on('voiceStateUpdate', (previous, current) => {
  if (current.channel) {
    return;
  } else if (previous.channel) {
    let user = previous.member.user.id;

    if (user === UTILS.client_development_id() || user === UTILS.client_production_id()) {
      RADIO.disconnect(CLIENT);
    } else {
      return;
    }
  } else {
    return;
  }
});

CLIENT.login(UTILS.token());
