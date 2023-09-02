import express from 'express';

import dbConnect from './db.js';

import router from './network/router.js';

dbConnect(
	'mongodb+srv://lufz88:rPuJHvUcfhXhcLjU@cluster0.8zovn8k.mongodb.net/?retryWrites=true&w=majority'
);

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.use('/static', express.static('public'));

app.listen(PORT, (req, res) => {
	console.log(`Listen to port: ${PORT}
  http://localhost:${PORT}`);
});
