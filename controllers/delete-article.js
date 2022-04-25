const articleDB = require('../db-access/article-model');

const deleteAllArticles = (req, res) => {
    articleDB.deleteMany()
        .then(()=>{res.status(200).json(`All the documents has been deleted`)})
        .catch((err)=>{console.log(err);});
}

const deleteSingleArticle = (req, res) => {
    const id = req.params.id;
    articleDB.deleteOne({_id: id})
        .then(()=>{res.status(200).json(`the document with the id ${id} has been deleted`)})
        .catch((err)=>{console.log(err);});
}

module.exports = {
    deleteAllArticles,
    deleteSingleArticle
};