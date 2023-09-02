import mongoose from 'mongoose';

const db = mongoose;

db.Promise = global.Promise;

async function connect(url) {
	await db.connect(url, { useNewUrlParser: true });

	console.log('[db] Conectada con exito');
}

export default connect;
