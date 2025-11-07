const express = require('express')
const app = express()
const port = 3000

const connection = require('./data/connection')

app.get('/', (req, res) => {
    res.send('hello world')
})


app.get('/api/movies', (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'database query failed' })
        res.json(result)

    })

})


app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})