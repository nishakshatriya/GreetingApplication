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

exports.create = (greetingData, callback)=>{
        Greeting.create(greetingData, function(err, data) {
          if (err) {
            return callback(err);
          }
          return callback(null, data);
        });
}
