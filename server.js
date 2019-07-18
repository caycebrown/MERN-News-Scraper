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

mongoose.connect("mongodb://localhost/MernScraper", { useNewUrlParser: true });


app.get('/', function(req, res){
    res.send('connected to home')
});


app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log('API server is listening on port ' + PORT);
});




