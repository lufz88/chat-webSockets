import store from './store.js';

function addMessage(user, message) {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error('[messageController] No hay usuario ni mensaje');
			return reject('Los datos son incorrectos');
		}

		const fullMessage = {
			user: user,
			message: message,
			date: new Date(),
		};
		store.add(fullMessage);

		resolve(fullMessage);
	});
}

function getMessages(filterUser) {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterUser));
	});
}

function updateMessage(id, message) {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			reject('Invalid data');
			return false;
		}
		const result = await store.updateText(id, message);

		resolve(result);
	});
}

function deleteMessage(id) {
	return new Promise((resolve, reject) => {
		if (!id) {
			reject('Id inválido');
			return false;
		}
		store
			.remove(id)
			.then(resolve())
			.catch(error => reject(error));
	});
}

const controller = { addMessage, getMessages, updateMessage, deleteMessage };

export default controller;
