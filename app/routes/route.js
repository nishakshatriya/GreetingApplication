/**
 * @description exports greeting routes for redirection
 * @param {function} app 
 */
module.exports = (app) => {
    /**
     * @description imports controller file
     */
    const greetings = require('../controllers/controller.js');

    app.post('/greetings/', greetings.create);
    app.get('/greetings/', greetings.findAll); 
    app.get('/greetings/:greetingId',greetings.findOne)
    app.delete('/greetings/:greetingId',greetings.delete)
}