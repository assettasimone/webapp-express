const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const moviesRouter = require('./routers/moviesRouter')
const serverError = require('./middleware/serverError')
const notFound = require('./middleware/notFound')

app.use(cors());

app.use(express.static('public'));
app.use(express.json());



app.get('/', (req, res) => {
    res.send('hello world')
})

//middleware per i film
app.use('/api/movies', moviesRouter)


app.listen(port, () => {
    console.log(`app listening at port http://localhost:${port}`)
})


//middleware error

app.use(serverError);

app.use(notFound)