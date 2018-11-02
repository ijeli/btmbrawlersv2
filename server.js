const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('client/build'));

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/reactBoilerplate';

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
