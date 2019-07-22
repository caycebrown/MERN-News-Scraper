const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const CommentSchema = new Schema({

  author: String,

  body: String
});



const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  comment: [CommentSchema]
});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;