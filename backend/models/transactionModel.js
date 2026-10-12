import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    monthId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Month',
      required: true,
    },
    date: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

          const date = new Date(`${value}T00:00:00.000Z`);
          return (
            !Number.isNaN(date.getTime()) &&
            date.toISOString().slice(0, 10) === value
          );
        },
        message: 'date must be a valid calendar date in YYYY-MM-DD format.',
      },
    },
    type: {
      type: String,
      required: true,
      enum: ['personal_expense', 'income', 'other_expense', 'debt_repayment'],
    },
    amountMinor: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isSafeInteger,
        message: 'amountMinor must be a safe integer.',
      },
    },
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

// Other transaction types are excluded and may repeat on the same day.
transactionSchema.index(
  { userId: 1, date: 1 },
  { unique: true, partialFilterExpression: { type: 'personal_expense' } }
);

export default mongoose.model('Transaction', transactionSchema);
