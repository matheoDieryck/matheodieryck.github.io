const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toxic')
        .setDescription('see how toxic you are'),
    async execute(interaction) {
        return interaction.reply('you are ' + Math.floor(Math.random() * 101) + "% toxic");
    },
};