import { redirect } from '@sveltejs/kit';
import { COOKIE_OPTIONS, COOKIE_KEYS, getCookieValue } from '../../cookie-options'

/** @type {import('./$types').RequestHandler} */
export const GET = (event) => {
  event.cookies.set(COOKIE_KEYS.endpoint, getCookieValue('endpoint'), COOKIE_OPTIONS)
  throw redirect(303, '/')
}