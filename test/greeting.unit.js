const chai = require('chai');
const chaiHttp = require('chai-http');
const {assert} = require('chai');
const app = require('../server');

chai.use(chaiHttp);

let result;

let newId;

describe('Greeting App Test', () => {
    describe('Repository Greeting Test', () => {
        it('When given POST then should return model', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': 'Aveena',
                    'lastName': 'Sharma',
                })
                .end( (err, response) => {
                    result = response.body;
                    assert.equal(result.message, 'Hello Aveena Sharma');
                    assert.equal(result.firstName, 'Aveena');
                    assert.equal(result.lastName, 'Sharma');
                    newId = result._id;
                    done();
                });
        });

        it('When given GET with id then should return model', (done) => {
            chai.request(app)
                .get('/greeting/'+newId)
                .end( (err, response) => {
                    result = response.body;
                    assert.equal(result.message, 'Hello Aveena Sharma');
                    assert.equal(result.firstName, 'Aveena');
                    assert.equal(result.lastName, 'Sharma');
                    done();
                });
        });

        it('When given GET without id then should return all greeting', (done) => {
            chai.request(app)
                .get('/greetings')
                .end( (err, response) => {
                    result = response.body;
                    assert.equal(response.status, 200);
                    done();
                });
        });

        it('When given PUT with id then should edit model', (done) => {
            chai.request(app)
                .put('/greeting/'+newId)
                .send({
                    'firstName': 'abc',
                    'lastName': 'xyz',
                })
                .end( (err, response) => {
                    result = response.body;
                    assert.equal(result.message, 'Hello abc xyz');
                    assert.equal(result.firstName, 'abc');
                    assert.equal(result.lastName, 'xyz');
                    done();
                });
        });

        it('When given DELETE req then should delete model', (done) => {
            chai.request(app)
                .delete('/greeting/'+newId)
                .end( (err, response) => {
                    result = response.body;
                    assert.equal(result.message, 'deleted successfully');
                    done();
                });
        });
    }),

    describe('Testing Responses', () => {
        it('When given firstname then should return firstname + Hello', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': 'Mona',
                    'lastName': '',
                })
                .end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello Mona');
                    done();
                });
        });

        it('When given lastname then should return lastname + Hello', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': '',
                    'lastName': 'Ghost',
                }).end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello Ghost');
                    done();
                });
        });

        it('When given firstname - lastname then should return firstname + lastname + Hello', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': 'Bloody',
                    'lastName': 'Mary',
                }).end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello Bloody Mary');
                    done();
                });
        });

        it('When no name given then should return Hello world', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': '',
                    'lastName': '',
                }).end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello World');
                    done();
                });
        });
    })
});