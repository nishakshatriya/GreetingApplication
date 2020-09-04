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

