import * as db from '$lib/server/db';
import type { PageServerLoad } from './$types';
export const load = (async () => {
	const prices = await db.getCollection('prices');
	const general = await db.getCollection('general');
	return { prices, general };
}) satisfies PageServerLoad;
