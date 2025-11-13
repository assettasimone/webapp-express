function notFound(req, res) {
    res.status(404).json({ message: "The page not Exist" })

}

module.exports = notFound;