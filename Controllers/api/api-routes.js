const router = require('express').Router();

router.get('/test', function(req, res){
    console.log('pong')
    res.json({data: 'ok'});
});

module.exports = router;