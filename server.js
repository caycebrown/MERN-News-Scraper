const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001;
const Routes = require('./Controllers/api/api-routes');
const mongoose = require('mongoose');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use api routes
app.use('/api', Routes);

//Setup for connecting db via heroku or locally
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/MernScraper";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.use('/', express.static("./client/build"));

//if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./client/build"));
//  }


app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log('API server is listening on port ' + PORT);
});




