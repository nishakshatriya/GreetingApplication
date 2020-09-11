/**
 * @description importing express
 * @var {class} express class instance of express
 */
const express = require('express');


/**
 * @description importing express
 * @var {class} bodyParser class instance of body-parser
 */
const bodyParser= require('body-parser');

/**
 * @description exporting instance of express
 * @var {class} app class instance of express
 */
module.exports = app = express();

// using bodyparser middleware to parse the url of json type
app.use(bodyParser.json());


/**
 * @description importing the db configuration
 */
require('../greeting-application/config/database.config');

/**
 * @description importing a instance of greeting routes
 * passing app as param
 */
require('../greeting-application/app/routes/greeting')(app);

// checking if the server is running
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
