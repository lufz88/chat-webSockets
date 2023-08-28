import express from 'express';
import controller from './controller.js';
import response from '../../network/responses.js';

const messageRouter = express.Router();

messageRouter.get('/', (req, res) => {
	controller
		.getMessages()
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

export default messageRouter;
