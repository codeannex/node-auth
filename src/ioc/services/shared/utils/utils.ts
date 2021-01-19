export class Utils {
  private _configManager;
  private _jwt;
  private _fs;
  private _path;
  private _crypto;
  private _util;
  private _scryptAsync;

  constructor(
    configManager: any, 
    jwt: any, 
    fs: any, 
    path: any, 
    crypto: any, 
    util: any
    ) {

		this._configManager = configManager;
		this._jwt = jwt;
		this._fs = fs;
    this._path = path;
    this._crypto = crypto;
    this._util = util;

    this._scryptAsync = this._util.promisify(this._crypto.scrypt);
  }
  
  get configManager() {
		return this._configManager;
	}

	get jwt() {
		return this._jwt;
	}

	get fs() {
		return this._fs;
	}

	get path() {
		return this._path;
  }

  get crypto() {
		return this._crypto;
  }

  get util() {
		return this._util;
  }
  
  async hash(password: string) {
    const salt = this._crypto.randomBytes(8).toString('hex');
    const buf = (await this._scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await this._scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }
}