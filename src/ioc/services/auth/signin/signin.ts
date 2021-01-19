import { Request } from 'express';

import { User } from '../../../../models/user';

import { BadRequestError, InternalServerError } from '@codeannex/error';

export class Signin {
  private _model;
  private _utils;

  constructor(model: typeof User, utils: any) {
    this._model = model;
    this._utils = utils;
  }

  async signin(email: string, password: string, req: Request) {
    let token = null;

    const user = await this._model.findOne({ email });

    if (!user) {
      throw new BadRequestError('Invalid credentials');
    }

    const matched = await this._utils.compare(user.password, password);

    if (!matched) {
      throw new BadRequestError('Invalid Credentials');
    }

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
