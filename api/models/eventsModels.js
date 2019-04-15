'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  venue: String,
  startDate: Date,
  endDate: Date,
  type: Number, // important: 0, verified: 1, unverified: 2
  email: String, // email ID of the user who created the event
  flags: { type: Number, default: 0 } // number of times the event has been flagged
});

eventSchema.post('findOneAndUpdate', function(result) {
  var events = require('../controllers/eventsController');
  events.update_post_hook();
});

module.exports = mongoose.model('Events', eventSchema);
