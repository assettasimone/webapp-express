const connection = require('../data/connection')

const index = (req, res) => {

    const sql = 'SELECT movies.*, AVG(reviews.vote) as reviews_avg FROM movies LEFT JOIN reviews ON reviews.movie_id = movies.id GROUP BY movies.id'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'database query failed' })
        res.json(result)

    })

}


const show = (req, res) => {

    const { id } = req.params

    const sql = 'SELECT * FROM movies WHERE id = ?'
    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'database query failed' })
        if (result.length === 0) return res.status(404).json({ error: 'movie not found' })

        connection.query(reviewSql, [id], (reviewErr, reviewsResult) => {
            if (reviewErr) return res.status(500).json({ error: 'database query failed' })
            const thisMovie = { ...result[0], reviews: reviewsResult }

            res.json(thisMovie)

        })


    })
}

module.exports = {
    index,
    show
}