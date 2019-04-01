'use strict';

var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.get_all_users = function(req, res) {
  Users.find({}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.create_user = function(req, res) {
  Users.findOne({email: req.body.email}, {_id: 0, email: 1}, function(err, user) {
    if (err) {
      return res.status(400).send('This email is already associated with an account');
    }
    var new_user = new Users(req.body);
    new_user.save(function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user)
    });
  });
};

exports.read_user = function(req, res) {
  Users.findOne({email: req.body.email}, {_id: 0, email: 1, userType: 1}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.update_user = function(req, res) {
  Users.findOneAndUpdate({email: req.body.email}, req.body, {new: true}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

  exports.delete_user = function(req, res) {
    Users.findOneAndRemove({email: req.body.email}, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'User deleted' });
    });
};
