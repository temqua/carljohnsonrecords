import { MongoClient } from 'mongodb';

export default class Db {
	static client = new MongoClient(import.meta.env.VITE_DB_URI);

	public static async getCollection(name: string): Promise<any> {
		try {
			await this.client.connect();
			return this.client.db().collection(name);
		} catch (e) {
			console.error(e);
		} finally {
			await this.client.close();
		}
	}
}
