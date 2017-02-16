const marked = require('marked');
const highlight = require('highlightjs');
const nerdschoolPlaceholders = require('./nerdschoolPlaceholders');

const replaceNerdschoolPlaceholders = (markdown) => {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    if (!nerdschoolPlaceholders[href]) {
      return text;
    }

    const match = nerdschoolPlaceholders[href];
    return match.closing
      ? `</${match.element}>`
      : `<${match.element} class="${match.cssClass}">`;
  };

  marked.setOptions({
    highlight: code => {
      console.log('highlighting');
      return highlight.highlightAuto(code).value;
    }
  })
  return marked(markdown, { renderer });
};

module.exports = {
  replaceNerdschoolPlaceholders,
};
