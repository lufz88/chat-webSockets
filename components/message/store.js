import mongoose from 'mongoose';
import Model from './model.js';

const db = mongoose;

db.Promise = global.Promise;
db.connect(
	'mongodb+srv://lufz88:rPuJHvUcfhXhcLjU@cluster0.8zovn8k.mongodb.net/?retryWrites=true&w=majority'
);

console.log('[db] Conectada con exito');

const list = [];

function addMessage(message) {
	const myMessage = new Model(message);
	myMessage.save();
}

async function getMessages() {
	const messages = await Model.find();
	return JSON.stringify(messages);
}

const store = { add: addMessage, list: getMessages /*, get, update, delete */ };

export default store;
