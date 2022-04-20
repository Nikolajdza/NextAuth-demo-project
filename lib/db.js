import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		'mongodb+srv://nikola:starwars93@cluster0.okrq5.mongodb.net/auth-demo?retryWrites=true&w=majority'
	);
	return client;
}
