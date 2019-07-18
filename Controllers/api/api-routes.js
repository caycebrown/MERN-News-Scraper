const router = require('express').Router();
const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const db = require('../../Models');



router.use(express.urlencoded({ extended: true }));
router.use(express.json());



router.get('/scrape', async (req, res) => {

    data = await axios.get('https://techcrunch.com/').then(function(response){

            var $ = cheerio.load(response.data)
            var i = 0;
            var results = [];

            $(".post-block__title").each(function() {
              results[i] = {};
              results[i].title = $(this)
                .find("a")
                .text().trim();
              results[i].link = $(this)
                .find("a")
                .attr("href");
              i++;
            })

            console.log(results)
            return results;
    })
    res.json(data)
});


router.get('/saved-articles', (req, res) => {
    db.Article.find({}).then(data => res.json(data))
    //res.json({route: 'fetch saved articles from db'})

});

router.post('/save', (req, res) => {
    db.Article.create(req.body).then(data => res.json(data))
    //res.json({route: 'save a new article to db'})
});

router.put('/comment', (req, res) => {
    res.json({route: 'leave comment on article and save to db'})
});

router.get('/clear', (req, res) => {
    db.Article.collection.drop();
    res.status(200).send('success')
    //res.json({route: 'clear all saved articles from db'})
});

module.exports = router;