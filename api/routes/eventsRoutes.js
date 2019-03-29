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
};
