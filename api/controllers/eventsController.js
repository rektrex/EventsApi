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
  Events.findOneAndUpdate({title: req.body.title}, req.body, {new: true}, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

exports.delete_event = function(req, res) {
  Events.findOneAndRemove({title: req.body.title}, function(err, event) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Event deleted' })
  });
};

exports.update_post_hook = function() {
  Events.deleteMany({flags: { $gte: 3 } }, function(err) {
    if (err) {
      res.send(err);
    }
  });
};
