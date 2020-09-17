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

    app.post('/greetings/', greeting.create);

    app.get('/greetings/', greeting.find);

    app.put('/greetings/', greeting.modify);

    app.put('/greetings/:greetId', greeting.editGreeting);

    app.delete('/greetings', greeting.delete);

    app.delete('/greetings/:greetId', greeting.deleteGreeting);
};

