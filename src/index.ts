// build 9201037839
// (bot) 52b1f0
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => console.log('ready'));
client.login(process.env.DISCORD_TOKEN);
