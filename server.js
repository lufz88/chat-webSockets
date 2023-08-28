import express from 'express';
import router from './network/router.js';

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
