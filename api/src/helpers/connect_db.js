import mongoose from 'mongoose';

import { url } from '../configurations/index.js';

export const connectDB = () => {
  try {
    mongoose.connect(url);
  } catch (err) {
    process.exit(1);
  }

  return mongoose.connection;
};
