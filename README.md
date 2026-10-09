# Student Finance Tracker

A student personal finance tracker planned for the MERN stack. This initial setup contains only the Express backend foundation.

## Setup

Install a current Node.js LTS release (which includes npm), then run from the project root:

```sh
cd backend
npm install
```

Create a file named `.env` inside `backend/` and add:

```dotenv
PORT=5001
```

If `backend/.env` already exists, update its `PORT` value instead. This local file is ignored by Git, so each developer must create their own.

The server defaults to `5000` if `PORT` is not set. These instructions use `5001` because macOS Control Center may already use `5000`. If startup reports `EADDRINUSE`, choose another available port in `.env`.

## Run

Run these commands from `backend/`.

Development, with automatic restarts when files change:

```sh
npm run dev
```

Start without automatic restarts:

```sh
npm start
```

## Health check

With the server running, open `http://localhost:5001/api/health` in a browser or run:

```sh
curl http://localhost:5001/api/health
```

Expected response (HTTP 200):

```json
{ "status": "ok" }
```

Use your configured port in the URL if you changed `PORT`. Press `Ctrl+C` in the server terminal to stop it.

## Files

```text
student-finance-tracker/
├── .gitignore
├── README.md
└── backend/
    ├── .env              # Local settings, ignored by Git
    ├── app.js
    ├── server.js
    ├── package.json
    └── package-lock.json
```

- `.gitignore` excludes dependencies, local environment files, logs, and generated output from Git.
- `backend/.env` holds local environment settings, such as `PORT`. Create it manually using the setup instructions above; do not commit it.
- `backend/app.js` configures Express, enables CORS and JSON request parsing, and defines `GET /api/health`.
- `backend/server.js` loads environment settings and starts the app on `process.env.PORT` or `5000`.
- `backend/package.json` enables JavaScript ES modules and declares dependencies and run scripts. Express serves requests, CORS enables cross-origin requests, dotenv loads `.env`, and the development dependency nodemon restarts the server on changes.
- `backend/package-lock.json` records the dependency versions for reproducible installs. Keep it in Git.

There is no database, authentication, frontend, or finance functionality yet.
