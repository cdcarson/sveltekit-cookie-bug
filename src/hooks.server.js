/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const cookie = event.cookies.get('handle');

	const response = await resolve(event);

	if (!cookie) {
		response.headers.append('set-cookie', 'handle=');
	}

	return response;
};
