const crypto = require('crypto');
const sanitizeHtml = require('sanitize-html');
const makeNewArticle = require('./article');

function md5 (text) {
    return crypto
    .createHash('md5')
    .update(text.toString(),'utf-8')
    .digest('hex')
}

function sanitize (text) {
  // TODO: allow more coding embeds
  return sanitizeHtml(text, {
    allowedIframeHostnames: ['codesandbox.io', 'repl.it']
  })
}

const newArticle = makeNewArticle(md5, sanitize);

module.exports = newArticle;