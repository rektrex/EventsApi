'use strict';

module.exports = function(app) {
  var events = require('../controllers/eventsController');

  app.route('/events')
    .get(events.get_all_events)
    .post(events.create_event);

  app.route('/events/:eventID')
    .get(events.read_event)
    .put(events.update_event)
    .delete(events.delete_event);

  var users = require('../controllers/usersController');
  
  app.route('/users')
    .get(users.get_all_users)
    .post(users.create_user);

  app.route('/users/:userID')
    .get(users.read_user)
    .put(users.update_user)
    .delete(users.delete_user);
};
