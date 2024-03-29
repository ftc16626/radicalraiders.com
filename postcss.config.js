/* eslint-disable global-require */
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["**/*.html", "./src/**/*.js"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
