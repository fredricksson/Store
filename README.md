# Story
node.js
express
mongoDB

## Install the dependencies
```bash
npm install
```

## create archive keys.js on root of folder src.
```
if (NODE.ENV == "production") {
  module.exports = {
    mongoDB : {
        url: 'yourUrlOnlineMongo'
    }
 }
} else {
  module.exports = {
    mongoDB : {
        url: 'yourLocalUrlMongo'
    }
 }
}
```
link:
https://story-server-api.herokuapp.com/
