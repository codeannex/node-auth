import { Request, Response } from 'express';

const signout = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post('/auth/signout', (req: Request, res: Response) => {
    res.send('signout');
  });
}; 

export default signout;
