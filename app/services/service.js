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

/**
 * @description function that create and save greeting message
 * @params {object} object of request body
 * 
 */

exports.create = (greetingData, callback)=>{
    const message = this.getMessage(greetingData).message;
    console.log('message received=========>',message);
        Greeting.create(greetingData, function(err, data) {
          if (err) {
            return callback(err);
          }   
          return callback(null, data);
        });
}

/**
 * @description function that get all greeting message
 * @return {object} greetings
 */
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

/**
 * @description function that get a single greeting message
 * @params {object} object id of request body
 * @return {object} greeting
 */
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

/**
 * @description function that delete greeting message
 * @params {object} object id of request body
 * @return {object} greetings
 */
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


/**
* @description function that updates/edits greeting message
* @params {object} object id of request body
* @return {object} greetings
*/
exports.updating = (req,res,callback) => {
    Greeting.findByIdAndUpdate(req.params.greetingId,{
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    message:message.message
    },{new: true})
    .then(data => {
    if(!data){
    throw new Error();
    }
    return callback(res,data);
    }).catch(err =>{
    return callback({message:{
    message:'error occured while updating'
    }})
    })
    
    }

