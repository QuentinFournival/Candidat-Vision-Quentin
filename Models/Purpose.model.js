var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/**
 * Purpose
 *
 * Copyright 2020 Visions
 * Original Creators: Felix Bole
 * Date Created : 11/12/2020
 * Date Updated: -
 *
 * A usage of data for a service
 */
var purposeSchema = new Schema({
  name: String,
  description: String,
  datatypes: [{ type: Schema.ObjectId, ref: "DataType" }],
  service: {
    type: Schema.ObjectId,
    ref: "Service",
  },
});

module.exports = mongoose.model("Purpose", purposeSchema);
