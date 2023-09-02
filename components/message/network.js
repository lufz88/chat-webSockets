import express from 'express';
import controller from './controller.js';
import response from '../../network/responses.js';

const messageRouter = express.Router();

messageRouter.get('/', (req, res) => {
	const filterMessages = req.query.user || null;
	controller
		.getMessages(filterMessages)
		.then(messaggeList => {
			response.success(req, res, messaggeList, 200);
		})
		.catch(error => {
			response.error(req, res, 'Unespected Error', 500, error);
		});
});

messageRouter.post('/', (req, res) => {
	controller
		.addMessage(req.body.user, req.body.message)
		.then(fullMessage => {
			response.success(req, res, fullMessage, 201);
		})
		.catch(error => {
			response.error(req, res, 'Información inválida', 400, error);
		});
});

messageRouter.patch('/:id', (req, res) => {
	const { id } = req.params;
	constroller
		.updateMessage(id, req.body.message)
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(error => {
			response.error(req, res, 'Error interno', 500);
		});
});

messageRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	controller
		.deleteMessage(id)
		.then(() => {
			response.success(req, res, `Usuario ${id} eliminado`, 200);
		})
		.catch(error => {
			response.error(req, res, 'Error interno', 500, error);
		});
});

export default messageRouter;
