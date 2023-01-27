import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const load = (async ({ url }: any) => {
  let a = false;

  if (a && url.pathname === '/login') {
    throw redirect(302, '/');
  }
  return {
    sections: [
      { slug: 'profile', title: 'Profile' },
      { slug: 'notifications', title: 'Notifications' }
    ]
  };
}) satisfies LayoutServerLoad;