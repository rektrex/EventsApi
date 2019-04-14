'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  imageURL: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Store', storeSchema)
