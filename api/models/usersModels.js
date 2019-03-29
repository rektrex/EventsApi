'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  password: String, // encrypted password
  type: Number // root: 0, verified: 1, unverified: 2
});

module.exports = mongoose.model('Users', userSchema);
