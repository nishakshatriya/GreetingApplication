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

exports.findAll = (req, res) => {
    Greeting.find().then(greetings => res.send(greetings))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured during retreiving"
            })
        })
};

exports.findOne = (req, res) => {
    Greeting.findById(req.params.greetingId).then(greeting => {
        if (!greeting) {
            return res.status(404).send({
                message: "Note not found" + req.params.greetingId
            })
        }
        res.send(greeting);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return req.status(400).send({
                message: "Note not found" + req.params.greetingId
            })
        }
        return res.status(500).send({
            message: "Error while retreiving notes"
        })
    })
}