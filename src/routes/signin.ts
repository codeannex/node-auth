import { Request, Response } from 'express';
import { body } from 'express-validator';

import { validate } from '@codeannex/common';

const validationRules = () => [
  body('email').isEmail(),
  body('password').trim().notEmpty()
];

const signin = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post(
    '/auth/signin', 
    validationRules(),
    validate,
    async (req: Request, res: Response) => {
      const { email, password } = req.body;

      const user = await ioc.Signin.signin(email, password, req);

      res.status(200).send(user);
    }
  );
}; 

export default signin;
