const router = require('express').Router();

router.get('/test', (req, res) =>{
    console.log('pong')
    res.json({data: 'ok'});
});


router.get('/saved-articles', (req, res) => {
    res.json({route: 'fetch saved articles from db'})
});

router.post('/save', (req, res) => {
    res.json({route: 'save a new article to db'})
});

router.put('/comment', (req, res) => {
    res.json({route: 'leave comment on article and save to db'})
});

router.delete('/clear', (req, res) => {
    res.json({route: 'clear all saved articles from db'})
});

module.exports = router;