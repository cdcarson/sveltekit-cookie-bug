import { COOKIE_OPTIONS, COOKIE_KEYS, getCookieValue } from '../cookie-options';

/** @type {import('./$types').PageServerLoad} */
export const load = ({ cookies, url }) => {
	console.log('in src/routes/+page.server.js load');
	cookies.set(COOKIE_KEYS.load, getCookieValue('load'), COOKIE_OPTIONS);
	const cookiesExistingAccordingToServer = Object.keys(COOKIE_KEYS).map(k => {
		return {key: k, value: cookies.get(k)}
	}).filter(o => o.value !== undefined);
	return {
		cookiesExistingAccordingToServer,
		pathname: url.pathname
	}

};

/** @type {import('./$types').Actions} */
export const actions = {
	deleteHandleCookie: ({cookies}) => {
		cookies.delete(COOKIE_KEYS.handle, COOKIE_OPTIONS);
	},
	deleteLoadCookie: ({cookies}) => {
		cookies.delete(COOKIE_KEYS.load, COOKIE_OPTIONS);
	},
	setActionCookie: ({cookies}) => {
		cookies.set(COOKIE_KEYS.action, getCookieValue('action'), COOKIE_OPTIONS);
	},
	deleteActionCookie: ({cookies}) => {
		cookies.delete(COOKIE_KEYS.action, COOKIE_OPTIONS);
	}
};
