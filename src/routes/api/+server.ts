import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { connectDb } from "$lib/db";
import ShortenedURL from "$lib/models/ShortenedURL.js";

export async function POST({ request }) {
  try {
    await connectDb();

    const { url } = await request.json();

    let randomChars = Math.random().toString(36).substring(2, 8);
    let alreadyExists = await ShortenedURL.findOne({ shortKey: randomChars });

    while (alreadyExists) {
      randomChars = Math.random().toString(36).substring(2, 8);
      alreadyExists = await ShortenedURL.findOne({ shortKey: randomChars });
    }

    await ShortenedURL.create({
      originalURL: url,
      shortKey: randomChars,
    });

    return new Response(JSON.stringify({ shortKey: randomChars }), {
      headers: {
        "content-type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      headers: {
        "content-type": "application/json",
      },
      status: 500,
    });
  }
}
