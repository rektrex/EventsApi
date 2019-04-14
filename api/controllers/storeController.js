'use strict';

var mongoose = require('mongoose'),
  Store = mongoose.model('Store');

exports.get_all_items = function(req, res) {
  Store.find({}, function(err, item) {
    if(err) {
      res.send(err);
    }
    res.json(item);
  });
};

exports.add_item = function(req, res) {
  var new_item = new Store(req.body);
  new_item.save(function(err, item) {
    if(err) {
      res.send(err);
    }
    res.json(item);
  });
};

exports.read_item = function(req, res) {
  Users.findOne({name: req.body.name}, function(err, item) {
    if(err) {
      res.send(err);
    }
    res.json(item);
  });
};

exports.update_item = function(req, res) {
  Store.findOneAndUpdate({name: req.body.name}, req.body, {new: true}, function(err, item) {
    if(err) {
      res.send(err);
    }
    res.json(item);
  });
};

exports.delete_item = function(req, res) {
  Store.findOneAndRemove({name: req.body.name}, function(err, item) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Item deleted' });
  });
};
