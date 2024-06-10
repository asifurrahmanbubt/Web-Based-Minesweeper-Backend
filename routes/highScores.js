const express = require('express')
const router = express.Router()
const database = require('../models/database-config')

router.get('/easy', (request,response) => {
    database('scores')
        .where({difficulty: 'Easy'})
        .orderBy([{
            column:'time', order: 'asc'
        },{
            column:'created_at', order: 'asc'
        }])
        .limit(10)
        .then(scores => response.json(scores))
})

module.exports = router