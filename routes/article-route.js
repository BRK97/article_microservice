const express = require('express');
const router = express();
const createNewArticle = require('../controllers/create-article');
const { getAllArticles, getSingleArticle } = require('../controllers/get-article');
const { updateSingleArticle } = require('../controllers/update-article');
const { deleteAllArticles, deleteSingleArticle } = require('../controllers/delete-article');




router.route('/')
    .get(getAllArticles, ()=>{console.log("ok");})
    .post(createNewArticle )
    .delete(deleteAllArticles);

router.route('/:id')
    .get(getSingleArticle)
    .delete(deleteSingleArticle)
    .put(updateSingleArticle)

module.exports = router;