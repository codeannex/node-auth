import { Signup } from '../../services/auth/signup/signup';

import { User } from '../../../models/user';

module.exports = function(container: any) {
	container.service('Signup', (container: any) => {
		return new Signup(User, container.Utils);
	});
};
