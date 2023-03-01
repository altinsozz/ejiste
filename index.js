const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot is online!');
});

client.login('BOT_TOKEN');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nae28:altinsozz@cluster0.q3tth.mongodb.net/nae28?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB veritabanına başarıyla bağlandı'))
.catch((err) => console.log('MongoDB veritabanına bağlantı hatası:', err));
