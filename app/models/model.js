/**
 * @description import mongoose library
 */
const mongoose = require('mongoose');
/**
 * @description schema for in which format data is being stored
 */
const GreetingSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String
}, {
  timestamps: true
});

module.exports = mongoose.model('GreetingSchema', GreetingSchema);

const messageSchema = mongoose.model('GreetingSchema', GreetingSchema);

exports.create = (greetingData, callback) => {
  const greetingSchema = new messageSchema();
  greetingSchema.firstName = greetingData.firstName;
  greetingSchema.lastName = greetingData.lastName;
  greetingSchema.message = greetingData.message;

  messageSchema.save()
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(
        { message: "Error occured while storing greeting" },
        null
      );
    });
};

exports.findAll = (res, callback) => {
  messageSchema.find()
    .then((item) => {
      if (!item) {
        throw new Error();
      }
      callback(res, item);
    }).catch((err) => {
      callback(res, { err })
    });
}

exports.findOne = (data, callback) => {
  console.log(data);
  messageSchema.findById(data).
    then(data => {
      console.log("note data--> ", data)
      return callback(null, data)
    }).catch(err => {
      return callback({ message: "Error retrieving with node Id" })
    })
}


