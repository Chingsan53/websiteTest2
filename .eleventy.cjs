module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(true)
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })
}
