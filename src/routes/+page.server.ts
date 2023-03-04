import * as db from '$lib/server/db';
import type { PageServerLoad } from './$types';
export const load = (async () => {
	const general = await db.getCollection('general');
	return { general: general ? general[0] : null };
}) satisfies PageServerLoad;
