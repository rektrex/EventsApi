'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: String,
  description: String,
  venue: String,
  startDate: Date,
  endDate: Date,
  type: Number, // important: 0, verified: 1, unverified: 2
  email: String, // email ID of the user who created the event
  flags: { type: Number, default: 0 } // number of times the event has been flagged
});

var userSchema = new Schema({
  email: String,
  password: String, // encrypted password
  type: Number // root: 0, verified: 1, unverified: 2
});

module.exports = mongoose.model('Events', eventSchema, 'events');
module.exports = mongoose.model('Users', userSchema, 'events');
