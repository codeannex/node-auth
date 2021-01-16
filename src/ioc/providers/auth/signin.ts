import { Container } from '../../container';
import { Signin } from '../../services/auth/signin/signin'; 

module.exports = function(container: Container) {
	container.service('Signin', (container: Container) => {
		return new Signin();
	});
};
