import { redirect } from '@sveltejs/kit';

// The integrations page is a work in progress and hidden for now.
// Redirect direct visits to the home page until it's ready to ship.
export function load() {
  redirect(307, '/');
}
