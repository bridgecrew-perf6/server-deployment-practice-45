'use strict';

//middleware is really good at adding things onto the erquest object

module.exports = (req, res, next) => {
    //stop the request object and add a property claled 'timestamp' with a value of new Date()

    req.timeStamp = new Date();
//as long as we don't give an argument, it will jsut move along to the next middleware
    next();
}

