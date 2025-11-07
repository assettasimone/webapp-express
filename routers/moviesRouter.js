const express = require('express')
const router = express.Router()
const connection = require('../data/connection')

//index
router.get('/', (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'database query failed' })
        res.json(result)

    })

})




module.exports = router