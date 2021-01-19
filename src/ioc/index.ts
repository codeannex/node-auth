import { Container } from './container';

export default (() => {
	let container: any = new Container();

	// Auth
	require('./providers/auth/signin')(container);
	require('./providers/auth/signout')(container);
	require('./providers/auth/signup')(container);

	// Shared
	require('./providers/shared/config-manager')(container);
	require('./providers/shared/database')(container);
	require('./providers/shared/utils')(container);

	return container;
})();
