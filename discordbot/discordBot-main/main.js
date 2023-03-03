const { SlashCommandAssertions } = require('discord.js');
const Discord = require('discord.js');

const client = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.MessageContent,
	],});

//console log for when bot is online
client.once('ready', () => {
    console.log('bot is online');
});



client.login('MTA1MDQ4ODQwNTQ4NzgwMDM0MA.GciY1n.3c5DLLGxX2CrfgOAV7hczc3GIZueNthXIbB-Og');
