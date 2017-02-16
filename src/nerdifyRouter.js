const express = require('express');
const request = require('request');
const marked = require('marked');
const pug = require('pug');
const urlParser = require('./urlParser');
const router = express.Router();

const getAndRenderMarkdownHtml = (url, res) =>
  request(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log(`${response.statusCode} getting markdown`, error);
      res.status(response.statusCode).send(error);
    }
    res.render('markdown', { markdownHtml: marked(body) });
  });

router.get('/', (req, res) => {
  const markdownUrl = req.query.markdown;
  if (!markdownUrl) {
    res.status(400).send('Missing url to markdown file');
  }

  if (urlParser.isGitHubRawUserContentUrl(markdownUrl)) {
    getAndRenderMarkdownHtml(markdownUrl, res);
    return;
  }

  const constructedMarkdownUrl = urlParser.parseToRawUserContentUrl(markdownUrl);
  getAndRenderMarkdownHtml(constructedMarkdownUrl, res);
});

module.exports = router;
