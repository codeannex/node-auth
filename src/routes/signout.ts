import { Request, Response } from 'express';

const signout = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post('/auth/signout', (req: Request, res: Response) => {
    ioc.Signout.signout(req);
  
    res.status(200).send({});
  });
}; 

export default signout;
