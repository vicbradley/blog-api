const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: { type: String },
  text: { type: String },
  date: { type: String },
  post: { type: Schema.Types.ObjectId }
});

// Export model
module.exports = mongoose.model("Comment", CommentSchema);
