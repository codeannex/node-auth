import { Signout } from '../../services/auth/signout/signout'; 

module.exports = function(container: any) {
	container.service('Signout', (container: any) => {
		return new Signout();
	});
};
