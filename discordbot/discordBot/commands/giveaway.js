const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('sends a link to current giveaway'),
    async execute(interaction) {
        return interaction.reply('\n' +
            'https://www.allkeyshop.com/blog/giveaway/eiderace/luckiestcrohnie/OpAsm-29001917/');
    },
};