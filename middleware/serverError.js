function serverError(req, res) {
    res.statut(500).json({ error: "Something went wrong" })
}
module.exports = serverError