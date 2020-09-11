/**
 * @description importing greeting controller
 * @var {class} greeting class instance of greetingController
 */
const Controller = require('../controllers/greeting');

// creating a instance of controller
const greeting= new Controller();

/**
 * @description Exports greeting routes
 * @param {function} app that takes http requests
 */
module.exports = (app) => {
    app.get('/greeting/:greetId', greeting.findOne);

    app.get('/greetings', greeting.findAll);

    app.post('/greeting/', greeting.create);

    app.get('/greeting/', greeting.find);

    app.put('/greeting/', greeting.modify);

    app.put('/greeting/:greetId', greeting.editGreeting);

    app.delete('/greeting', greeting.delete);

    app.delete('/greeting/:greetId', greeting.deleteGreeting);
};

