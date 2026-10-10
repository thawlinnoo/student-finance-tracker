# Student Finance Tracker

A student personal finance tracker planned for the MERN stack. This setup contains an Express backend connected to MongoDB Atlas through Mongoose.

## Setup

Install a current Node.js LTS release (which includes npm), then run from the project root:

```sh
cd backend
npm install
```

Create a file named `.env` inside `backend/` and add:

```dotenv
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-host>/student_finance_tracker?retryWrites=true&w=majority
```

Replace the `MONGO_URI` placeholder with your Atlas connection string and intended database name. Ensure your Atlas database user and network access settings allow the connection. Never commit your real connection string or include it in logs.

If `backend/.env` already exists, keep its settings and add `MONGO_URI`. This local file is ignored by Git, so each developer must create their own. `backend/.env.example` provides a safe template.

The server defaults to `5000` if `PORT` is not set. These instructions use `5001` because macOS Control Center may already use `5000`. If startup reports `EADDRINUSE`, choose another available port in `.env`.

## Run

Run these commands from `backend/`.

The server connects to MongoDB before accepting HTTP requests. It prints a success message when connected, or a configuration hint and exits if the connection fails.

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
    ├── .env.example
    ├── app.js
    ├── config/
    │   └── db.js
    ├── server.js
    ├── package.json
    └── package-lock.json
```

- `.gitignore` excludes dependencies, local environment files, logs, and generated output from Git.
- `backend/.env` holds local environment settings, including `PORT` and `MONGO_URI`. Create it using the setup instructions above; do not commit it.
- `backend/.env.example` provides safe placeholders for the required configuration.
- `backend/app.js` configures Express, enables CORS and JSON request parsing, and defines `GET /api/health`.
- `backend/config/db.js` connects to MongoDB using Mongoose and `MONGO_URI`, with safe error messages.
- `backend/server.js` loads environment settings, waits for the database connection, and starts the app on `process.env.PORT` or `5000`.
- `backend/package.json` enables JavaScript ES modules and declares dependencies and run scripts. Express serves requests, CORS enables cross-origin requests, dotenv loads `.env`, Mongoose connects to MongoDB, and the development dependency nodemon restarts the server on changes.
- `backend/package-lock.json` records the dependency versions for reproducible installs. Keep it in Git.

There are no schemas, models, authentication, frontend, or finance features yet.
