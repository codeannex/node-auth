import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const signup = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post(
    '/auth/signup', 
    body('email').isEmail(),
    body('password').trim().isLength({ min: 4, max: 20 }),

    (req: Request, res: Response) => {
      const errors = validationResult(req);

      console.log(errors);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      res.send(req.body);
    }
  );
}; 

export default signup;
