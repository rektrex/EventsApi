'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
  },

  userType: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Users', userSchema);
