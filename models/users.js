const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: [{
    currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Currency',
    },
    amount: {
      type: Number,
      default: 0,
    },
  }],
});

module.exports = mongoose.model('User', userSchema);
