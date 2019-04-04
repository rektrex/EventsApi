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

userSchema.pre('save', function(next) {
  if (user.isModified('password')) return next();

  const user = this;

  const bcrypt = require('bcrypt');
  const saltRounds = 8;

  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('Users', userSchema);
