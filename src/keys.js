if (process.env.NODE_ENV == 'production') {
module.exports = {
    mongoDB : {
        url: 'mongodb://localhost/stores'
    }
}
} else {
module.exports = {
    mongoDB : {
        url: 'mongodb://localhost/stores'
    }
}
}