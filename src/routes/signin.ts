import { Request, Response } from 'express';

const signin = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post('/auth/signin', (req: Request, res: Response) => {
    res.send('signin');
  });
}; 

export default signin;
