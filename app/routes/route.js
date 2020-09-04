/**
 * @description exports greeting routes for redirection
 * @param {function} app 
 */
module.exports = (app) => {
    /**
     * @description imports controller file
     */
    const greetings = require('../controllers/controller.js');

    app.post('/', greetings.create);
    app.get('/', greetings.findAll);
    app.get('/',greetings.findOne);
    app.put('/',greetings.update);
    app.delete('/',greetings.delete)
}