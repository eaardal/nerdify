const marked = require('marked');
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

  return marked(markdown, { renderer });
};

module.exports = {
  replaceNerdschoolPlaceholders,
};
