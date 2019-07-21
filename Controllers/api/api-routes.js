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

            $(".post-block").each(function() {
              results[i] = {};
              results[i].title = $(this)
                .find(".post-block__title a")
                .text().trim();
              results[i].link = $(this)
                .find(".post-block__title a")
                .attr("href");
              results[i].text = $(this)
                .find(".post-block__content")
                .text().trim() + '...';
              i++;

            })

            console.log(results)
            return results;
    })
    res.json(data)
});


router.get('/saved-articles', (req, res) => {
    db.Article.find({}).then(data => res.json(data))
});

router.post('/save', (req, res) => {
    db.Article.create(req.body).then(data => res.json(data))
});

router.put('/comments:id', (req, res) => {
    db.Comment.create(req.body)
        .then( comment => {
            return db.Article.findOneAndUpdate(
              { _id: req.params.id },
              { comment: comment._id },
              { new: true }
            );
        })
        .then(article => res.json(article))
        .catch(e => res.json(e));
});
      //res.json({route: 'leave comment on article and save to db'})

router.get("/comments:id", (req, res) => {
    db.Article.findOne({ _id: req.params.id})
        .populate("comment")
        .then(article => res.json(article))
        .catch(function(err){
          res.json(err);
        })
      })

router.get('/clear', (req, res) => {
    db.Article.collection.drop();
    res.status(200).send({message: 'success'});
});

router.get('/delete-one:id', (req, res) => {
    console.log(req.params.id)
    db.Article.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
});



module.exports = router;