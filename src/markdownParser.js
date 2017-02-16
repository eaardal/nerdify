const marked = require('marked');
const highlight = require('highlightjs');
const placeholderMap = require('./placeholderMap');

const replacePlaceholders = (markdown) => {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    if (!placeholderMap[href]) {
      return text;
    }

    const match = placeholderMap[href];
    return match.closing
      ? `</${match.element}>`
      : `<${match.element} class="${match.cssClass}">`;
  };

  marked.setOptions({
    highlight: code => highlight.highlightAuto(code).value,
  });

  return marked(markdown, { renderer });
};

module.exports = {
  replacePlaceholders,
};
