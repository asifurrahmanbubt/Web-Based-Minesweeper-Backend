const express = require('express')
const router = express.Router()
const database = require('../models/database-config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken(payload){
    return jwt.sign(payload,process.env.SECRET_KEY)
}

router.post('/', (request,response) => {
    const username = request.body.username
    const password = request.body.password
    request.header('Origin')
    
    // Find username in db
    database('users').select('*').where('username',username)
        .then(foundUser => {
            if (foundUser[0]) {
                checkPassword(foundUser[0],foundUser[0].password)
            } else {
                response.status(401).json({status: '401', message: 'Username not found.'})
            }
        }).catch(error => {
            response.status(400).json({message: error})
        })

    async function checkPassword(user,hash){
        const payload = {id: user.id, display_name: user.display_name, username: user.username}
        const match = await bcrypt.compare(password, hash)

        try {
            if (match) {
                const token = generateToken(payload)
                response.status(202).json({status: '202', message: 'User logged in.', token, payload})
            } else {
                response.status(401).json({status: '401', message: 'Password incorrect.'})
            }
        } catch(error) {
            response.status(400).json({message: error})
        }
    }
})

module.exports = router