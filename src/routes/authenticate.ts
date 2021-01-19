import { Request, Response, NextFunction } from 'express';

import { user } from '@codeannex/common';

const authenticate = (express: any, ioc: any) => {
  let router = express.Router();

  return router.get(
    '/auth/authenticate', 
    user, 
    (req: Request, res: Response) => {
      res.send({ user: req.user || null });
    }
  );
}; 

export default authenticate;
