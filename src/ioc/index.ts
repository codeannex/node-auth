import { Container } from './container';

export default (() => {
	let container: any = new Container();

	// Auth
	require('./providers/auth/authenticate')(container);
	require('./providers/auth/signin')(container);
	require('./providers/auth/signout')(container);
	require('./providers/auth/signup')(container);

	// Shared
	require('./providers/shared/config-manager')(container);
	require('./providers/shared/database')(container);

	return container;
})();
