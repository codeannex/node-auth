import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import util from 'util';

import { Utils } from '../../services/shared/utils/utils';

module.exports = function(container: any) {
	container.service('Utils', (container: any) => {
		return new Utils(
			container.ConfigManager,
			jwt, fs, path, crypto, util
		);
	});
};
