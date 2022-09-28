import { COOKIE_OPTIONS } from '../cookie-options';


export const load = ({ cookies }) => {
	console.log('in src/routes/+page.server.js load');
	cookies.set('load', 'Set in src/routes/+page.server.js load', COOKIE_OPTIONS);
};

export const actions = {
	default: ({ cookies }) => {
		cookies.set('actions', 'Set by default action', COOKIE_OPTIONS);
	}
};
