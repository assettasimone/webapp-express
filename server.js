const express = require('express')
const app = express()
const port = 3000
const moviesRouter = require('./routers/moviesRouter')


app.get('/', (req, res) => {
    res.send('hello world')
})


app.use('/api/movies', moviesRouter)


app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})