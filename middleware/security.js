
function securityHandler(req, res, next) {

    let token = req.headers['authorization']
    if (!token) {
        res.status(401).send('go away');
        return;
    }

    next();
}

module.exports = securityHandler;