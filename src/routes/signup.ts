import { Request, Response } from 'express';
import { body } from 'express-validator';

import { validate } from '@codeannex/common';

const signup = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post(
    '/auth/signup', 
    [
      body('email').isEmail(),
      body('password').trim().isLength({ min: 4, max: 20 })
    ],
    validate,
    async (req: Request, res: Response) => {
      const { email, password } = req.body;

      const user = await ioc.Signup.create(email, password, req);

      res.status(201).send(user);
    }
  );
}; 

export default signup;
