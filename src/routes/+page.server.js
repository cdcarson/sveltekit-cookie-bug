export const load = ({ cookies }) => {
	cookies.set('load', '', { httpOnly: false, secure: false });
};

export const actions = {
	default: ({ cookies }) => {
		cookies.set('actions', '', { httpOnly: false, secure: false });
	}
};
