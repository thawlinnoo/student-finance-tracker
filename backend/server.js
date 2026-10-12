import 'dotenv/config';
import app from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;

try {
  await connectDB();
} catch (error) {
  console.error('Database startup failed:', error.message);
  process.exit(1);
}

const server = app.listen(PORT); //start the server with the port number from .env 

server.once('listening', () => { //once --> run only once, startup message
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (error) => { // on --> every time events are emitted
  console.error('Failed to start server:', error.message);
  process.exit(1);
});

//server.js is to start the server