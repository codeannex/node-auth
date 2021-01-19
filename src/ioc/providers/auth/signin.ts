import { Signin } from '../../services/auth/signin/signin';

import { User } from '../../../models/user';

module.exports = function(container: any) {
	container.service('Signin', (container: any) => {
		return new Signin(User, container.Utils);
	});
};
