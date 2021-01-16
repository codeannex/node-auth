import { Request, Response } from 'express';

const authenticate = (express: any, ioc: any) => {
  let router = express.Router();

  return router.get('/auth/authenticate', (req: Request, res: Response) => {
    res.send('authenticate');
  });
}; 

export default authenticate;
