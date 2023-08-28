function success(req, res, messages, status) {
	res.status(status || 200).send({
		error: '',
		body: `${messages}`,
	});
}

function error(req, res, messages, status, details) {
	console.error(`[response error] ${details}`);
	res.status(status || 500).send({
		error: `${messages}`,
		body: '',
	});
}

const response = { success, error };

export default response;
