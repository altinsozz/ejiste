const mongoose = require('mongoose');
const randomPercentage = require('../utils/randomPercentage');

const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    default: 1,
  },
  percentage: {
    type: Number,
    required: true,
    default: randomPercentage(),
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});