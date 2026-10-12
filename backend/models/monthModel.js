import mongoose from 'mongoose';

const monthSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    year: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: 'year must be an integer.',
      },
    },
    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
      validate: {
        validator: Number.isInteger,
        message: 'month must be an integer.',
      },
    },
    budgetMinor: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isSafeInteger,
        message: 'budgetMinor must be a safe integer.',
      },
    },
  },
  { timestamps: true }
);

// Each user can have only one record for a given calendar month.
monthSchema.index({ userId: 1, year: 1, month: 1 }, { unique: true });

export default mongoose.model('Month', monthSchema);
