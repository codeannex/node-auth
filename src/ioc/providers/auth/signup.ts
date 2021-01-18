import { Container } from '../../container';
import { Signup } from '../../services/auth/signup/signup'; 

import { User } from '../../../models/user';

module.exports = function(container: Container) {
	container.service('Signup', (container: Container) => {
		return new Signup(User);
	});
};
