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

function getMessages() {
	return new Promise((resolve, reject) => {
		resolve(store.list());
	});
}

const controller = { addMessage, getMessages };

export default controller;
