import { MongoClient } from 'mongodb';
export async function getCollection(name: string): Promise<any> {
	const connectionString = import.meta.env.VITE_DB_URI;
	const client = new MongoClient(connectionString);
	try {
		await client.connect();
		const dbResult = await client.db('cjsite').collection(name).find({}).toArray();
		const result = dbResult.map(({ _id, ...item }) => ({ ...item }));
		return result;
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

export default { getCollection };
