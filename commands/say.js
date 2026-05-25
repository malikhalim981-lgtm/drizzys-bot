const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Send a message as the bot')
    .addStringOption(option =>
      option
        .setName('message')
        .setDescription('The message to send')
        .setRequired(true)
    ),

  async execute(interaction) {
    const message = interaction.options.getString('message');
    
    // Send message as the bot in the channel
    await interaction.channel.send(message);
    
    // Respond to the user invisibly (ephemeral - only they see it)
    await interaction.reply({ content: 'Message sent!', ephemeral: true });
  },
};
