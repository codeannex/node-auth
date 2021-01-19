import { Request, Response } from 'express';

export class Signout {

  async signout(req: Request) {
    req.session = null;
  }
}