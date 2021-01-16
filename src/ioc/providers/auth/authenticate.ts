import { Container } from '../../container';
import { Authenticate } from '../../services/auth/authenticate/authenticate'; 

module.exports = function(container: Container) {
	container.service('Authenticate', (container: Container) => {
		return new Authenticate();
	});
};
