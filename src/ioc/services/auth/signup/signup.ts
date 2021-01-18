import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../../../../models/user';

import { BadRequestError, InternalServerError } from '@codeannex/error';

export class Signup {
  private model

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(email: string, password: string, req: Request) {
    let token = null;

    const existingUser = await this.model.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = new User({ email, password });

    await user.save();

    try {
      token = jwt.sign({
        id: user.id,
        email: user.email
      }, process.env.JWT_KEY!);
    } catch(err) {
      throw new InternalServerError();
    }

    req.session = {
      jwt: token
    };

    return user;
  }
}
