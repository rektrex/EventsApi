'use strict';

var mongoose = require('mongoose'),
  Events = mongoose.model('Events');

exports.get_all_events = function(req, res) {
  Events.find({}, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

exports.create_event = function(req, res) {
  var new_event = new Events(req.body);
  new_event.save(function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

exports.read_event = function(req, res) {
  Events.findById(req.params.eventID, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

exports.update_event = function(req, res) {
  Events.findOneAndUpdate({_id: req.params.eventID}, req.body, {new: true}, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

exports.delete_event = function(req, res) {
  Events.remove({
    _id: req.params.eventID
  }, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Event deleted' });
  });
};
