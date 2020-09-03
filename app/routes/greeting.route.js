module.exports = (app) => {
    const greetings = require('../controllers/greeting.controller.js');

    app.post('/', greetings.create);
    app.get('/', greetings.findAll);
    app.get('/',greetings.findOne);
    app.put('/',greetings.update);
    app.delete('/',greetings.delete)
}