import { redirect } from '@sveltejs/kit';
import { COOKIE_OPTIONS, COOKIE_KEYS } from '../../cookie-options'

/** @type {import('./$types').RequestHandler} */
export const GET = (event) => {
  event.cookies.delete(COOKIE_KEYS.endpoint, COOKIE_OPTIONS)
  throw redirect(303, '/')
}