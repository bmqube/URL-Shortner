import mongoose, { Schema } from "mongoose";

const ShortenedURLSchema: Schema = new Schema({
  originalURL: { type: String, required: true },
  shortKey: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ShortenedURL", ShortenedURLSchema);
