const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../', 'public')));

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

app.use((req, res, next) => {
	const error = new Error('404 Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	console.log(error);
	if (error.status === 404) {
		res.status(404);
		return res.render('errors/404');
	}

	res.status(500);
	res.render('errors/500');
});

app.listen(8080, () => {
	console.log('Server listening on port 8080');
});
