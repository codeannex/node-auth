
import { Container } from '../../container';
import { Database } from '../../services/shared/database/database';

module.exports = function(container: Container) {
	container.service('Database', () => new Database());
};
