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
  var user = this;
  if (!user.isModified('password')) return next();

  const bcrypt = require('bcrypt');
  const saltRounds = 8;

  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    user.password = hash;
    next();
  });
});

userSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
}

module.exports = mongoose.model('Users', userSchema);
