const path = require('path')
const requireIndex = require("requireindex")

module.exports = {
  get rules () {
    // eslint-disable-next-line prefer-destructuring
    const RULES_DIR = module.exports.RULES_DIR;
    if (typeof module.exports.RULES_DIR !== 'string') {
      throw new Error('To use eslint-plugin-boyscout, you must load it beforehand and set the `RULES_DIR` property on the module to a string. See https://npmjs.com/eslint-plugin-boyscout for an example');
    }
    return requireIndex(path.resolve(RULES_DIR))
  }
}

