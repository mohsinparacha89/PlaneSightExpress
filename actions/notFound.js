function notFound(req,res,next) {
    res.status(404).send('Cant find what you looking for mate')
}

module.exports = notFound;