'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatientSchema = new Schema({
  name: String,
  city: String,
  infectionDate: Date
});

module.exports = mongoose.model('Patient', PatientSchema);
