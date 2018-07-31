module.exports = {
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "jest --bail",
    "post-commit": "git update-index -g"
  }
}