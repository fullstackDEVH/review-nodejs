import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: String,
  slogan: String,
  cuisine_national: String, // Quốc gia, có thể sử dụng Enum: ['vietnam', 'thailand', ...]
  banner: String,
  images: [String],
  open_time: String,
  close_time: String,
  price_highest: Number,
  price_lowest: Number,
  address: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Store", storeSchema);
