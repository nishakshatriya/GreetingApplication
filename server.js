/**
 * @description Configuration of server
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/**
 * @description Database connectivity
 */
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

/**
 * @description import routes file
 */
require('./app/routes/greeting.route.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});