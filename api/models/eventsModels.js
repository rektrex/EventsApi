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

module.exports = mongoose.model('Events', eventSchema);
