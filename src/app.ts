import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@codeannex/error';

import ioc from './ioc';

// Routes
import authenticate from './routes/authenticate';
import signin from './routes/signin';
import signout from './routes/signout';
import signup from './routes/signup';

const app = express();

const authenticateRouter = authenticate(express, ioc);
const signinRouter = signin(express, ioc);
const signoutRouter = signout(express, ioc);
const signupRouter = signup(express, ioc);

app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);

app.use(authenticateRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
