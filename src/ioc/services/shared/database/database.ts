export interface DatabaseService {
  _db: any;
  init: () => {}
}

export class Database<DatabaseService> {
  // _configManager: any;
  _db: any;

  constructor() {
    // this._configManager = configManager;
  }

  /**
   * init
   */
  public init() {
    // ...
  }

  get db() {
    return this._db;
  }
}
