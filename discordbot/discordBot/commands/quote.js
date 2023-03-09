const { SlashCommandBuilder, GuildChannel, Message, messageLink } = require('discord.js');

// To add more answers for your command, simply add them to this list!
let messagePrompts = [
    "`This is the first quote -TeaNatt1`",
	"`This is the first quote -TeaNatt2`",
	"`This is the first quote -TeaNatt3`",
	"`This is the first quote -TeaNatt4`",
	"`This is the first quote -TeaNatt5`",
	"`This is the first quote -TeaNatt6`",
	"`This is the first quote -TeaNatt7`",

];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('gives a random quote'),
	async execute(interaction) {
        let messageChoice = Math.floor(Math.random() * messagePrompts.length);
  let message = messagePrompts[messageChoice];
return interaction.reply(message)

	},
};