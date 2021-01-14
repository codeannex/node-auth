import { app } from './app';

( async () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})();
