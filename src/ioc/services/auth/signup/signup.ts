import { Request } from 'express';

import { User } from '../../../../models/user';

import { BadRequestError, InternalServerError } from '@codeannex/error';

export class Signup {
  private _model;
  private _utils;

  constructor(model: typeof User, utils: any) {
    this._model = model;
    this._utils = utils;
  }

  async create(email: string, password: string, req: Request) {
    let token = null;

    const existingUser = await this._model.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = new User({ email, password });

    await user.save();

    try {
      token = this._utils.jwt.sign({
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
