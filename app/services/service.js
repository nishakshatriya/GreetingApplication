/**
 * @description imports model file for reference
 */
const Greeting = require('../models/model');

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

module.exports = class HelloMessage{
    getMessage(object){
        if(object.firstName!== undefined  && object.lastName!== undefined){
            if(typeof object.firstName === 'string' || object.firstName instanceof String && typeof object.lastName === 'string' || object.firstName instanceof String){
                var message = "Hello";
                   if(object.firstName !== ''){
                       message+= " " +object.firstName;
                       counter++;
                   }
                   if(object.lastName !== ''){
                       message+= " " +object.lastName;
                       counter++;
                   }
                   if(counter == 0){
                       message+= " "+concatinate;                   
                   }
            }
        }
    return { 'message': message }
    }
}
