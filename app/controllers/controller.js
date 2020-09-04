/**
 * @description imports service file for reference
 */
const Greeting = require('../services/service');

/**
 * @description creating instance of greeting
 */
const greeting = new Greeting();

/**
 * @description performs CRUD operations
 * @param {object} req 
 * @param {object} res 
 */
exports.create = (req, res) => {
    const greetingMsg = greeting.getMessage(req.body);
    res.send(greetingMsg);
}

exports.findAll = (req, res) => {
    const greetingMsg = greeting.getMessage(req.body);
    res.send(greetingMsg); 
}

exports.findOne = (req, res) => {
    const greetingMsg = greeting.getMessage(req.body);
    res.send(greetingMsg);
}


exports.update = (req, res) => {
    const greetingMsg = greeting.getMessage(req.body);
    res.send(greetingMsg); 
}

exports.delete = (req, res) => {
    const greetingMsg = greeting.getMessage(req.body);
    res.send(greetingMsg); 
}
