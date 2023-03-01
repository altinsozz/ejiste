const { Currency } = require('./models');

const newCurrency = new Currency({
  name: 'L\'oin.a',
  symbol: 'LOI',
  value: 1,
  percentage: 0,
});

newCurrency.save((err) => {
  if (err) console.error(err);
  console.log('Currency saved to database.');
});
