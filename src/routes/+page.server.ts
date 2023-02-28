import Db from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		prices: await Db.getCollection('general')
	};
}) satisfies PageServerLoad;
