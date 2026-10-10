import mongoose from 'mongoose';

export default async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error('MONGO_URI is missing. Set it in backend/.env.');
  }

  try {
    await mongoose.connect(uri);
  } catch {
    // Avoid logging driver errors that could contain connection details.
    throw new Error(
      'MongoDB connection failed. Check MONGO_URI, your Atlas database user credentials, and Atlas network access settings.'
    );
  }

  console.log('MongoDB connected successfully');
}
