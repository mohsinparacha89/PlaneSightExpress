const news = require('../actions/news');

function responseHandler(req,res,next){
   
    switch (req.originalUrl){
        case '/api/news':
            res.json(news());
            break;
        case '/api/something':
            res.send('something');
            break;
        default:
            next();

    }

}

module.exports = responseHandler;