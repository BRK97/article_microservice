const articleDB = require('../db-access/article-model');

const updateSingleArticle = (req, res) => {
    articleDB.updateOne({_id: req.params.id}, {mainTitle: req.query.mainTitle})
        .then((result) => {res.status(200).json(`${result}`)})
        .catch((err) => {console.log(err);})
}

module.exports = {
    updateSingleArticle
}