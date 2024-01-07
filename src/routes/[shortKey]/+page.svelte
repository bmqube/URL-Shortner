<script>
  export let errorCode = 404;
</script>

<main
  class="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-gray-300"
>
  <h1 class="text-6xl font-bold text-blue-300">Oops!</h1>
  <h2 class="text-4xl font-semibold text-gray-400">Error {errorCode}</h2>
  <p class="text-lg text-gray-500">
    The page you are looking for could not be found.
  </p>
  <a
    href="/"
    class="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >Go back to Home</a
  >
</main>
