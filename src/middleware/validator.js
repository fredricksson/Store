
module.exports = (req, res, next) => {
    console.log(req.body);
    for (const key in req.body) {
        if (Object.hasOwnProperty.call(req.body, key)) {
            const element = req.body[key];
            if (element === undefined)
             return res.send({error: true, message: 'body malformed'})
            
             return next()
        }
    }
}