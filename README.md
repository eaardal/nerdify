# Nerdify
View markdown from GitHub with custom placeholders

## How do I even?

Say you have a markdown file in any GitHub repository.

In this markdown file, you can create _placeholders_ in the form of hidden anchor tags: `[](my-hidden-placeholder)`

You can then take the url to this markdown file and render it using Nerdify: `http://localhost:3000/nerdify?markdown={full url to github markdown file}`

The placeholder-to-css mapping rules are defined in `nerdschoolPlaceholders.js`

If a matching mapping rule for the placeholder `my-hidden-placeholder` is found, its replacement element and css class is injected into the rendered markdown instead of the placeholder anchor tag. This replaced element should then have a matching css class defined in Nerdify which will then style the replaced element correctly.

Nerdify renders markdown using GitHub styling by default.

## Install

`$ git clone https://github.com/eaardal/nerdify.git`
`$ npm install`

## Run

`$ npm start`
`$ npm run watch-css`
