import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
export async function getCollection(name: string): Promise<any> {
	const connectionString = process ? process.env.DB_URI : import.meta.env.VITE_DB_URI;
	console.log('connectionString :>> ', connectionString);
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
