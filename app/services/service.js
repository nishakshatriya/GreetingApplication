const Greeting = require('../models/model');

let concatinate = "World";
let counter = 0;

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
