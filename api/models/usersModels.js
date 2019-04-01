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
    type: Number, // root:0, verified:1, others:2
    required: true,
  }
});

module.exports = mongoose.model('Users', userSchema);
