/**
 * @description imports service file for reference
 */
const Greeting = require('../services/service');
var { response } = require('express');


/**
 * @description performs CRUD operations
 * @param {object} req 
 * @param {object} res 
 */
exports.create = (req, res) => {
    var greetingData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        message:req.body.message

      };

    Greeting.create(greetingData, function(err, data){
        if(err){
            response = {
                success:false,
                message: err
            };
            res.status(500).send(response)
        }
        response = {
            success: true,
            data: data
        }
        res.status(200).send(data)
    } )
}

exports.findAll=(greetingData, res)=>{
    try {
        Greeting.findAll(res,(res,item) => {res.send(item)});
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.findOne = (req, res) => {

    Greeting.findOne(req.params.greetingId,((err,data)=>{
        if(err){
            message: err.message || "something went wrong"
        }
                res.send(data);
    }))
}

exports.delete = (req, res) => {
    Greeting.deleting(req.params.greetingId,((err,data)=> {
        if(err){
            message:"something went wrong"
        }
        res.send(data)
    
}))
}