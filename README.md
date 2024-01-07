# URL Shortener

This is a URL shortener project built with SvelteKit.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have a Windows/Linux/Mac machine.
- You have installed [MongoDB](https://www.mongodb.com/try/download/community).

## Setup

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bmqube/url-shortner.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortner
   ```

3. Rename the `.env copy` file to `.env`:

   ```shell
   mv .env_example .env
   ```

4. Open the `.env` file and add your MongoDB URI:

   ```shell
   MONGODB_URI=your-mongodb-uri
   ```

5. Save the `.env` file.

6. Install the dependencies:

   ```bash
   npm install
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your browser and visit `http://localhost:5173` to see the app in action.
