const Currency = require('./models/currency');

async function addCurrencies() {
  const currencies = [
    { name: 'L\'oin.a' },
    { name: 'Cielon' },
    { name: 'Shulcoin' }
  ];
  
  try {
    for (let i = 0; i < currencies.length; i++) {
      const currency = new Currency(currencies[i]);
      await currency.save();
    }
    console.log('3 currencies added to the database!');
  } catch (err) {
    console.error(err);
  }
}

addCurrencies();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cryptobot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to database.');
});
