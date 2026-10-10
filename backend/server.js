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

const server = app.listen(PORT);

server.once('listening', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
