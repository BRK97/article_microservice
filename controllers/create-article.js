const newArticle = require('../article/index');
const Article = require('../db-access/article-model');

const createNewArticle = (req, res) => {
    const article = newArticle({
        hash, authors, createdOn,
        lastEdited, mainCategory, mainTitle, description,
        seconderyHeadlines, paragraphs, images, tags,
        isNSFW, isPremium, isPromoted, isPublished,
        isConfidential
        } = req.body
    )
    console.log(article);
    const saveArticle = new Article({
        hash: article.hash,
        authors: article.authors,
        mainCategory: article.mainCategory,
        mainTitle: article.mainTitle,
        description: article.description,
        seconderyHeadlines: article.seconderyHeadlines,
        paragraphs: article.paragraphs,
        images: article.images,
        tags: article.tags,
        isNSFW: article.isNSFW,
        isPremium: article.isPremium,
        isPromoted: article.isPromoted,
        isPublished: article.isPublished,
        isConfidential: article.isConfidential,
    });

    saveArticle.save()
    .then((result) => {
        res.status(200).json(result)
    } )
    .catch((err) => {console.log(err);})
}

module.exports = createNewArticle;