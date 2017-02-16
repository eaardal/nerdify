const express = require('express');
const request = require('request');
const marked = require('marked');
const pug = require('pug');
const router = express.Router();

router.get('/', (req, res) => {
  const markdownUrl = req.query.markdown;
  console.log('Markdown URL', markdownUrl);

  request(markdownUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log(`${response.statusCode} getting markdown`, error);
      res.status(response.statusCode).send(error);
    }
    res.render('markdown', { markdownHtml: marked(body) });
  });
});

module.exports = router;
