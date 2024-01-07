import mongoose from "mongoose";
import { env } from "$env/dynamic/private";

export async function connectDb() {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect(env.MONGODB_URI);
}
