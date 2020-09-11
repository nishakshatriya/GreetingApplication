
// importing db schema
const Greeting = require('../models/greeting');

/**
 * @description greeting service to manupulate greeting data
 * @return {object} message
 */
let concatinate = "World";
let counter = 0;

module.exports = class greetingService {
    /**
     * @description an function which returns Hello World message
     * @param {object} reqBody body of the request
     * @return {object} greeting message
     */

    getGreeting(reqBody) {
        if(reqBody.firstName!== undefined  && reqBody.lastName!== undefined){
                        if(typeof reqBody.firstName === 'string' || reqBody.firstName instanceof String && typeof reqBody.lastName === 'string' || reqBody.firstName instanceof String){
                            var message = "Hello";
                               if(reqBody.firstName !== ''){
                                   message+= " " +reqBody.firstName;
                                   counter++;
                               }
                               if(reqBody.lastName !== ''){
                                   message+= " " +reqBody.lastName;
                                   counter++;
                               }
                               if(counter == 0){
                                   message+= " "+concatinate;                 
                               }
                        }
                    }
                    console.log('message generated', message);
                return { 'message': message }
    };

    /**
     * @description function to save greeting to repo
     * @param {object} reqBody body of the request
      */
    createGreeting(reqBody,res,callback) {
        const message = this.getGreeting(reqBody).message;

        const greeting = new Greeting({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            message: message,
        });
        greeting.save()
            .then((item) => {
                callback(res,item)
            })
            .catch((err) => {
                callback(res,{'error':'couldn\'t create greeting'})
            });
    }

    /**
     * @description function to get greeting by Id
     * @param {string} id id of the greeting
     * @return {object} greeting
     */
    async findOne(id,res,callback) {
        Greeting.findById(id)
            .then( (item) => {
                if (!item) {
                    throw new Error();
                }
                callback(res,item);
            }).catch( (err) => {
                callback(res,{'error':'Greeting not found with id ' + id})
            });
    }

    /**
     * @description function to get greeting by Id
     * @return {object} array of greetings
     */
    findAll(res,callback) {
        Greeting.find()
            .then( (item) => {
                if (!item) {
                    throw new Error();
                }
                callback(res,item);
            }).catch( (err) => {
                callback(res,{'error':'Greetings not found'})
            });
    }


    /**
     * @description function to edit greeting by Id
     * @param {object} req request
     * @return {object} array of greetings
     */
    editGreeting(req,res,callback) {
        const message = this.getGreeting(req.body);
        Greeting.findByIdAndUpdate(req.params.greetId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            message: message.message,
        }, {new: true})
            .then( (item) => {
                if (!item) {
                    throw new Error();
                }
                callback(res,item);
            }).catch( (err) => {
                callback(res,{'error': 'couldn\'t edit greeting'});
            });
    }

    /**
     * @description function to delete greeting by Id
     * @param {string} id request
     * @return {object} array of greetings
     */
    deleteGreeting(id,res,callback) {
        Greeting.findByIdAndRemove(id)
            .then( (item) => {
                if (!item) {
                    return new Error('Greeting not found ');
                }
                callback(res,{'message': 'deleted successfully'});
            }).catch( (err) => {
                callback(res,{'error': 'couldn\'t delete greeting'});
            });
    }
};

