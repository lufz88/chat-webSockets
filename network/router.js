import messageRouter from '../components/message/network.js';

const router = server => {
	server.use('/message', messageRouter);
};

export default router;
