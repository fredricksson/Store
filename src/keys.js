if (process.env.NODE_ENV == 'production') {
module.exports = {
    mongoDB : {
        url: 'mongodb+srv://netninjatoo:1234@nodetuts.59gc9.mongodb.net/stores?retryWrites=true&w=majority'
    }
}
} else {
module.exports = {
    mongoDB : {
        url: 'mongodb://localhost/stores'
    }
}
}