 function logger(req,res,next){
    console.log('calling at', Date(Date.now()))
    next();
}

module.exports = logger;