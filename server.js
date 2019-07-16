const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;



app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log('API server is listening on port ' + PORT);
});



