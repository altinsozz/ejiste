const { MessageEmbed } = require('discord.js');
const Wallet = require('../models/wallet');

module.exports = {
  name: 'createwallet',
  description: 'Creates a wallet for the user.',
  async execute(message, args) {
    try {
      const userId = message.author.id;
      const existingWallet = await Wallet.findOne({ userId });

      if (existingWallet) {
        return message.reply('You already have a wallet!');
      }

      const newWallet = await Wallet.create({ userId });

      const embed = new MessageEmbed()
        .setTitle('New Wallet Created')
        .setDescription(`A new wallet has been created for <@${userId}>`)
        .addField('User ID', userId)
        .addField('Balance', newWallet.balance);

      message.channel.send(embed);
    } catch (err) {
      console.error(err);
      message.reply('Error creating wallet!');
    }
  },
};
