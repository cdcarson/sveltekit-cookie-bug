export const COOKIE_OPTIONS = {
	path: '/',
	httpOnly: false,
	secure: false
};
export const COOKIE_KEYS = {
	handle: 'handle',
	endpoint: 'endpoint',
	load: 'load',
	action: 'action'
};

/**
 *
 * @param {string} whereSet
 * @returns string
 */
export const getCookieValue = (whereSet) => {
	return `Set in ${whereSet} at ${new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	}).format(new Date())}`;
};
