import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../../../../models/user';

import { BadRequestError } from '@codeannex/error';

export class Signup {
  private model

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(email: string, password: string, req: Request) {
    const existingUser = await this.model.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = new User({ email, password });

    await user.save();

    const token = jwt.sign({
      id: user.id,
      email: user.email
    }, process.env.JWT_KEY!);

    req.session = {
      jwt: token
    };

    return user;
  }
}
