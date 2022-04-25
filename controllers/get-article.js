const articleDB = require('../db-access/article-model');

const getAllArticles = (req, res) =>{
    articleDB.find()
        .then((result) => {res.status(200).json(result)})
        .catch((err) => {console.log(err);});
}

const getSingleArticle = (req, res) =>{
    const articleId = req.params.id;
    articleDB.findById(articleId)
        .then((result) => {res.status(200).json(result)})
        .catch(err => {res.status(500).json({err})});
}

module.exports = {
    getAllArticles,
    getSingleArticle
}