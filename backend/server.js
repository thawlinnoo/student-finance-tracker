import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }

  console.log(`Server running on http://localhost:${PORT}`);
});
