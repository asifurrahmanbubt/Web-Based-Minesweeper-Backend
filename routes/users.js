const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10
require('dotenv').config()
const authenticateToken = require('../helpers/authenticateToken')

const User = require('../models/User')

router.get('/', authenticateToken, (request,response) => {
    User.query().withGraphFetched('scores').select()
        .then(scores => response.json(scores))
})

router.get(`/scores`, authenticateToken, (request,response) => {
    User.query().where('id',request.user.id).withGraphFetched('scores').select()
        .then(scores => response.json(scores[0]))
})

router.post('/', (request, response) => {
    User.query().select('username').where('username', request.body.username)
        .then(foundUsers => {
            if (foundUsers.length === 0) {
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    if (err) {
                        console.error('Salt generation failed:', err);
                        return response.status(500).json({message: 'Internal server error during salt generation'});
                    }
                    bcrypt.hash(request.body.password, salt, function(err, hash) {
                        if (err) {
                            console.error('Password hashing failed:', err);
                            return response.status(500).json({message: 'Internal server error during password hashing'});
                        }
                        let userData = {...request.body, password: hash};
                        User.query().insert(userData).returning('*')
                            .then(user => response.status(201).json({user: user, status: '201', message: 'User successfully created.'}))
                            .catch(error => {
                                console.error('User creation failed:', error);
                                response.status(500).json({message: 'Internal server error during user creation'});
                            });
                    });
                });
            } else {
                response.status(409).json({status: '409', message: 'Username already exists.'});
            }
        })
        .catch(error => {
            console.error('Database query failed:', error);
            response.status(500).json({message: 'Internal server error during database query'});
        });
});

module.exports = router