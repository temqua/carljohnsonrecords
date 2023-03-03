import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
export default class Db {
	static client = new MongoClient(import.meta.env.VITE_DB_URI);

	public static async getCollection(name: string): Promise<any> {
		try {
			await this.client.connect();
			const dbResult = await this.client.db('cjsite').collection(name).find({}).toArray();
			const result = dbResult.map(({ _id, ...item }) => ({ ...item }));
			return result;
		} catch (e) {
			console.error(e);
		} finally {
			await this.client.close();
		}
	}
}
