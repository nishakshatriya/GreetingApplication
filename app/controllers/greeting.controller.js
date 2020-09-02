const Greeting = require('../models/greeting.model.js');

exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Greeting content can not be empty"
        });
    }

    const greeting = new Greeting({
        title: req.body.title || "Untitled Greeting",
        content: req.body.content
    });

     greeting.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};