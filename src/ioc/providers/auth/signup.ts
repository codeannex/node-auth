import { Container } from '../../container';
import { Signup } from '../../services/auth/signup/signup'; 

module.exports = function(container: Container) {
	container.service('Signup', (container: Container) => {
		return new Signup();
	});
};
