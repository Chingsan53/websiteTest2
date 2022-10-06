module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(true)
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })
}
module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "_includes"
    }
  }
};
