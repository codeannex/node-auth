import { model, Schema, Model, Document } from 'mongoose';

import { Password } from '../services/password';

interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      }
    }
  }
);

UserSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));

    this.set('password', hashed);
  }

  done();
});

const User: Model<IUser> = model('User', UserSchema);

export { User, IUser };
