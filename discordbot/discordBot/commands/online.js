const { EmbedBuilder, GuildMember, User, Role, ClientUser } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test here'),
    async execute(interaction) {
      
      const exampleEmbed = new EmbedBuilder()
      
      .setColor(0x0099FF)
      .setTitle('eider is live on twitch')
      .setURL('https://www.twitch.tv/eiderace')
      .setDescription('he is playing pokemon')
      .setThumbnail('https://i.imgur.com/tlth1LU.jpeg')
      .addFields(
        { name: 'what is he doing', value: 'capturing pokemons' },
        { name: 'where can you watch it', value: 'https://www.twitch.tv/eiderace', inline: true},

      )
      .setImage('https://i.imgur.com/tlth1LU.jpeg')
      .setTimestamp()
      
    return interaction.reply({ embeds: [exampleEmbed] });
      
    },    
}