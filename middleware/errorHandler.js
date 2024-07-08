
function errorHandler(err,req,res,next){
    const status = res.statusCode ? res.statusCode : 500;
    
    res.json({message:err.message, stackTrace:err.stack});
}

module.exports = errorHandler