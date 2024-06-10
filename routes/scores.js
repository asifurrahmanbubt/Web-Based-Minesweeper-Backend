const express = require('express')
const router = express.Router()
const database = require('../models/database-config')

router.use(express.json())

router.get('/', (request,response) => {
    database('scores').select()
        .then(scores => response.json(scores))
})

router.post('/', (request,response) => {
    database.insert(request.body).returning('*').into('scores')
        .then(score => response.json({score}))
})

module.exports = router