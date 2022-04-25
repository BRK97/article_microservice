const makeNewArticle = (md5, sanitize) =>{

    return function getNewArticle({
        getAuthors,
        getMainCategory,
        getMainTitle,
        getDescription,
        getSeconderyHeadlines,
        getParagraphs,
        getTags,
        
        getIsPremium = false,
        getIsConfidential = false, //if true - author name should not be displayed
        getIsPublished = false,
        getIsNSFW = false, //true = not safe for work
        getIsPromoted = false,
        
    }={}){

        let hash = makeHash();

        if(!getAuthors){throw new Error("Article must have an Author")};
        if(!getMainCategory){throw new Error("Article must have a category")};
        if(!getDescription){throw new Error("Article must have a description")};
        if(getDescription.length < 1){throw new Error("Description contains no useable text")};
        if(!getMainTitle){throw new Error("Article must have a valid main headline")};
        if(getMainTitle.length < 1){throw new Error("Main headline contains no useable text")};
        if(!getParagraphs){throw new Error("Article must have text")};

        // this is an example on how to sanitize any text in order to protect from XSS attacks
        const sanitizedParagraphs = [];
        getParagraphs.forEach(paragraph => {
            sanitizedParagraphs.push(sanitize(paragraph).trim());
        });


        function makeHash(){
            return md5(
                getMainCategory +
                getMainTitle +
                getAuthors +
                getDescription
            );
        }
            
        const temp = {
            hash: hash,
            authors: getAuthors,
            mainCategory: getMainCategory,
            mainTitle: getMainTitle,
            description: getDescription,
            seconderyHeadlines: getSeconderyHeadlines,
            paragraphs: sanitizedParagraphs,
            tags: getTags,
            isNSFW: getIsNSFW,
            isPremium: getIsPremium, 
            isPromoted: getIsPromoted,
            isPublished: getIsPublished, 
            isConfidential: getIsConfidential, 
        }
        console.log(temp);
        return temp;        
    }
}

module.exports = makeNewArticle;