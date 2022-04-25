const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    hash:{type: 'string',required: true},
    authors:{type: 'array',required: true},
    mainCategory:{type: 'string',required: true},
    mainTitle:{type: 'string',required: true},
    description:{type: 'string',required: true},
    seconderyHeadlines:{type: 'array',required: false},
    paragraphs:{type: 'array',required: true},
    tags:{type: 'array',required: false},
    isNSFW:{type: 'boolean',required: true},
    isPremium:{type: 'boolean',required: true},
    isPromoted:{type: 'boolean',required: true},
    isPublished:{type: 'boolean',required: true},
    isConfidential:{type: 'boolean',required: true},
}, {timestamps: true});

const article = mongoose.model('Article', articleSchema);

module.exports = article;