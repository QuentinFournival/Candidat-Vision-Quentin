var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/**
 * Service
 *
 * Copyright 2020 Visions
 * Original Creators: Felix Bole
 * Date Created : 11/12/2020
 * Date Updated: -
 *
 * Represents an organisation/company
 */
var serviceSchema = new Schema({
  name: String,
  purposes: [{ type: Schema.ObjectId, ref: "Purpose" }],
  datatypes: [{ type: Schema.ObjectId, ref: "DataType" }],
});

module.exports = mongoose.model("Service", serviceSchema);