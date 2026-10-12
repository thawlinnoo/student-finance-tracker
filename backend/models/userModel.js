import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    initialBalanceMinor: {
      type: Number,
      default: null,
      min: 0,
      validate: {
        validator: (value) => value === null || Number.isSafeInteger(value),
        message: 'initialBalanceMinor must be a safe integer or null.',
      },
    },
    initialDebtMinor: {
      type: Number,
      default: null,
      min: 0,
      validate: {
        validator: (value) => value === null || Number.isSafeInteger(value),
        message: 'initialDebtMinor must be a safe integer or null.',
      },
    },
    trackingStartYear: {
      type: Number,
      default: null,
      validate: {
        validator: (value) => value === null || Number.isInteger(value),
        message: 'trackingStartYear must be an integer or null.',
      },
    },
    trackingStartMonth: {
      type: Number,
      default: null,
      min: 1,
      max: 12,
      validate: {
        validator: (value) => value === null || Number.isInteger(value),
        message: 'trackingStartMonth must be an integer or null.',
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
