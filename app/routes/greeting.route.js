module.exports = (app) => {
    const greetings = require('../controllers/greeting.controller.js');

    app.post('/greetings', greetings.create);
}