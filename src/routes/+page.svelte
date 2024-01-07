<script>
  let url = "";
  let shortenedUrl = "";
  //   console.log(window.location);
  async function shortenUrl() {
    if (url) {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      shortenedUrl = `${window.location.origin}/${data.shortKey}`;
      url = "";
    }
  }
</script>

<main
  class="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-gray-300"
>
  <h1 class="text-5xl font-bold mb-8 text-blue-400">Link Shortener</h1>
  <div class="w-full max-w-md bg-gray-700 rounded-lg shadow-md p-6">
    <div class="mb-4">
      <label for="url" class="block text-gray-200 font-bold mb-2"
        >Enter URL:</label
      >
      <input
        on:focus={() => {
          shortenedUrl = "";
        }}
        type="text"
        id="url"
        bind:value={url}
        class="w-full border border-gray-500 bg-gray-500 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div class="flex justify-end">
      <button
        on:click={shortenUrl}
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
      >
        Shorten
      </button>
    </div>
    {#if shortenedUrl}
      <div class="mt-4">
        <div
          class="bg-green-600 border-l-4 border-green-800 text-gray-300 p-4"
          role="alert"
        >
          <p class="font-bold">Success!</p>
          <p>Your URL has been shortened.</p>
          <br />
          <div>
            Shortened URL: <a
              class="underline font-bold text-gray-300"
              href={shortenedUrl}
              target="_blank">{shortenedUrl}</a
            >
          </div>
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
  /* Add your custom styles here */
</style>
