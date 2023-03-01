const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, default: 1 }
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
