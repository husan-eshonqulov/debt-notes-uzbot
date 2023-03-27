const mongoose = require('mongoose');

const DebtSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },

  chatId: {
    type: Number,
    required: true,
  },

  debt: {
    type: Number,
    required: true,
  },
});

const CreditSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },

  chatId: {
    type: Number,
    required: true,
  },

  credit: {
    type: Number,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  debt: {
    type: [DebtSchema],
    default: [],
  },

  credit: {
    type: [CreditSchema],
    default: [],
  },
});

module.exports = mongoose.model('User', UserSchema);
