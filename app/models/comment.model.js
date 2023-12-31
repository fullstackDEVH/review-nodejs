import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Comment", commentSchema);
