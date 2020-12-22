var mongoose = require("mongoose");

var Schema = mongoose.Schema

/**
 * DataType
 *
 * Copyright 2020 Visions
 * Original Creators: Felix Bole
 * Date Created : 11/12/2020
 * Date Updated: -
 *
 * Represents a type of data
 */
var dataTypeSchema = new Schema({
  /**
   * Datatype name
   */
  name: String,

  /**
   * Datatype description
   */
  description: String,

  /**
   * The service from where the datatype comes
   */
  provenance: {
    type: Schema.ObjectId,
    ref: "Service",
  },
});

module.exports = mongoose.model("DataType", dataTypeSchema);
