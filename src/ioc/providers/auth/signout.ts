import { Container } from '../../container';
import { Signout } from '../../services/auth/signout/signout'; 

module.exports = function(container: Container) {
	container.service('Signout', (container: Container) => {
		return new Signout();
	});
};
