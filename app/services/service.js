/**
 * @description imports model file for reference
 */
const Greeting = require('../models/model');
const { response } = require('express');

/**
 * @description service to get greeting message
 * @return {object} message
 */

let concatinate = "World";
let counter = 0;

/**
 * @description function that returns custom greeting message
 * @params {object} object of request body
 * @return {object} message
 */
exports.getMessage =(greetingData)=>{
        if(greetingData.firstName!== undefined  && greetingData.lastName!== undefined){
            if(typeof greetingData.firstName === 'string' || greetingData.firstName instanceof String && typeof greetingData.lastName === 'string' || greetingData.firstName instanceof String){
                var message = "Hello";
                   if(greetingData.firstName !== ''){
                       message+= " " +greetingData.firstName;
                       counter++;
                   }
                   if(greetingData.lastName !== ''){
                       message+= " " +greetingData.lastName;
                       counter++;
                   }
                   if(counter == 0){
                       message+= " "+concatinate;                 
                   }
            }
        }
        console.log('message generated', message);
    return { 'message': message }
}
exports.creating = (greetingData, callback)=>{
    const message = this.getMessage(greetingData).message;
    console.log('message received=========>',message);
        greetingData.create(greetingData, function(err, data) {
          if (err) {
            return callback(err);
          }   
          return callback(null, data);
        });
}

exports.findAll=(res,callback)=> {
    Greeting.find()
        .then( (item) => {
            if (!item) {
                throw new Error();
            }
            callback(res,item);
        }).catch( (err) => {
            callback(res,{err})
        });
}

exports.findOne=(data,callback)=>{
    console.log(data);
   Greeting.findById(data).
       then(data => {
           console.log("note data--> ",data)
           return callback(null,data)
       }).catch(err =>{
                       return callback({message : "Error retrieving with node Id"}) 
                   })
               }

exports.deleting = (id,res,callback) => {  
    Greeting.findByIdAndRemove(id).
        then(data => {
            if(!data){
                return res.status(404).send({
                    message:"Note not found with this id"
                })
            }
            }).catch(err => {
                    return callback({message:"Error occurred while deleting"})
                })
                return res.status(200).send({
                    message:"Sucessfully Deleted"
                })
            }

