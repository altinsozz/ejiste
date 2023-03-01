const Discord = require('discord.js');
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb+srv://nae28:altinsozz@cluster0.q3tth.mongodb.net/nae28?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

module.exports = {
  name: 'cüzdan',
  description: 'Kullanıcının cüzdanını gösterir.',
  async execute(message, args) {
    const filter = { userId: message.author.id };
    let user = await User.findOne(filter);

    if (!user) {
      user = await User.create({
        userId: message.author.id,
        username: message.author.username,
        wallets: [
          {
            name: 'L\'oin.a',
            symbol: 'LNA',
            amount: 0,
            value: 1
          },
          {
            name: 'Cielon',
            symbol: 'CLO',
            amount: 0,
            value: 1
          },
          {
            name: 'Shulcoin',
            symbol: 'SHL',
            amount: 0,
            value: 1
          }
        ]
      });
    }

    let total = 0;

    const rows = user.wallets.map(wallet => {
      const value = wallet.amount * wallet.value;
      total += value;
      return `${wallet.name} (${wallet.symbol}): ${wallet.amount} (${value.toFixed(2)})`;
    });

    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username}'s Cüzdanı`)
      .addFields(
        { name: 'Toplam Değer (XDCoin)', value: total.toFixed(2) },
        { name: 'Para Birimi (Miktar) (Toplam Değer)', value: rows.join('\n') },
      );

    message.channel.send(embed);
  }
};
