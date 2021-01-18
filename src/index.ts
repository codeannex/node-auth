import mongoose from 'mongoose';

import { app } from './app';

/**
 * Database setup
 */
(async () => {
  try {
    await mongoose.connect('mongodb://node-auth-db-service:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('Connected to MongoDb');
  } catch(err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})();
