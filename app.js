const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./config/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

app.use('/api/v1/', routes);
app.use((req, res) => {
    return res.status(404).json({ success: false, message: 'Not found' });
});

app.set('port', process.env.PORT);

const server = app.listen(app.get('port'), () => {
    console.log(`app server running on PORT ${server.address().port}`);
});

module.exports = app;