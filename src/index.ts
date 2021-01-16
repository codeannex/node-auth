import { app } from './app';

/**
 * Database setup
 */
(async () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})();
