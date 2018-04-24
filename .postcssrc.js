// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('postcss-pxtorem')({
      rootValue: 75,
      propWhiteList: []
    })
  ]
};
