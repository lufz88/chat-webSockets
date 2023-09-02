import Model from './model.js';

const list = [];

function addMessage(message) {
	const myMessage = new Model(message);
	myMessage.save();
}

async function getMessages(filterUser) {
	let filter = {};
	if (filterUser !== null) {
		filter = { user: filterUser };
	}
	const messages = await Model.find(filter);
	return JSON.stringify(messages);
}

async function updateText(id, message) {
	const foundMessage = await Model.findOne({ _id: id });
	foundMessage.message = message;
	const newMessage = await foundMessage.save();
	return newMessage;
}

async function removeMessage(id) {
	return Model.deleteOne({ _id: id });
}

const store = {
	add: addMessage,
	list: getMessages,
	updateText: updateText,
	remove: removeMessage /*, get, update, delete */,
};

export default store;
