import { COOKIE_OPTIONS } from './cookie-options';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const cookie = event.cookies.get('handle');
	console.log('in handle hook, cookie is', cookie);
	const response = await resolve(event);

	if (!cookie) {
		const serialized = event.cookies.serialize('handle', 'Set in handle hook', COOKIE_OPTIONS);
		console.log('setting cookie in handle', serialized)
		response.headers.append(
			'set-cookie',
			serialized
		);
	}

	return response;
};
