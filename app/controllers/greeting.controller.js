const Greeting = require('../services/greeting.service');
const greeting = new Greeting();

exports.create = (req, res) => {
    const greetingMsg = greeting.getMessage();
    res.send(greetingMsg);
}

exports.findAll = (req, res) => {
    const greetingMsg = greeting.getMessage();
    res.send(greetingMsg); 
}

exports.findOne = (req, res) => {
    const greetingMsg = greeting.getMessage();
    res.send(greetingMsg); 
}


exports.update = (req, res) => {
    let greeting = new Greeting();
    const greetingMsg = greeting.getMessage();
    res.send(greetingMsg); 
}

exports.delete = (req, res) => {
    let greeting = new Greeting();
    const greetingMsg = greeting.getMessage();
    res.send(greetingMsg); 
}
