import { connectDb } from "$lib/db.js";
import ShortenedURL from "$lib/models/ShortenedURL.js";
import { redirect } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {
  const { shortKey } = params;

  await connectDb();

  let res = await ShortenedURL.findOne({ shortKey });
  if (res) {
    throw redirect(302, res.originalURL);
  }
}
