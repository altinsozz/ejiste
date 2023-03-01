const mongoose = require('mongoose');
const Currency = require('./currency');

module.exports = {
  Currency: mongoose.model('Currency', Currency),
};
