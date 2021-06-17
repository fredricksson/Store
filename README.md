# Story
node.js
express
mongoDB

## Install the dependencies
```bash
npm install
```

## create archive keys and set your data folder src/keys.js.
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
### link of app on production:
```
https://story-server-api.herokuapp.com/
```
