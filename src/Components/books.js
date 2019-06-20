"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  title: {
    type: String,
    required: true,
    unique: true
  },
  keywords: Array,
  published: Boolean,
  author: {
    type: Schema.ObjectId,
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  //embedded sub-documents(book cover is it hard, raking)
  detail: {
    modelNumber: Number,
    hardcover: Boolean,
    reviews: Number,
    rank: Number
  }
});

module.exports = mongoose.model("Book", BookSchema);
