import Db from '$lib/server/db';
import type { PageServerLoad } from './$types';
export const load = (async () => {
	const prices = await Db.getCollection('prices');
	const general = await Db.getCollection('general');
	console.log('prices :>> ', prices);
	return { prices, general };
}) satisfies PageServerLoad;
