module.exports = (app) => {
    const greetings = require('../controllers/greeting.controller.js');

    app.post('/greetings', greetings.create);
    app.get('/greetings', greetings.findAll);
    app.get('/greetings/:greetingId',greetings.findOne);
}