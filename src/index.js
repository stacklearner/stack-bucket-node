const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

app.listen(8080, () => {
	console.log('Server listening on port 8080');
});
