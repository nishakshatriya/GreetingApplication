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
exports.create = (greetingData, callback)=>{
    const message = this.getMessage(greetingData).message;
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


  