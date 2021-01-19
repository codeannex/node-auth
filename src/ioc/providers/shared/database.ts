import { Database } from '../../services/shared/database/database';

module.exports = function(container: any) {
	container.service('Database', () => new Database());
};
