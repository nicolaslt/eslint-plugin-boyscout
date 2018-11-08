# eslint-plugin-boyscout

An experimental tool to help track refactoring efforts.

`eslint-plugin-boyscout` lets you define your own eslint rule in your project, without creating and deploying an eslint-plugin to the npm registry.

Up to you what you do with those rules, we use them to keep track of long-winded refactoring efforts.

## Installation

Install `eslint-plugin-boyscout`:

```
$ npm install eslint-plugin-boyscout --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-boyscout` globally.

## Usage

Boyscout needs to know where the rules are defined, this forces you to use an `eslintrc.js` file to configure the plugin like so:

```js
require('eslint-plugin-boyscout').RULES_DIR = "/path/to/your/directory"
```

Youl also need to add `boyscout` to your configuration file:

```js
{
    plugins: [
        "boyscout"
    ]
}
```

**Warning**: We highly recommend the `RULES_DIR` to be an absolute path. If a relative path is used boyscout will try to load the rules relative to the current working directory... that works fine until you have more than one project using eslint and you don't change your directory before opening other projects files. Relative paths also probably don't work if you're using a global eslint.

### Creating rules

Add rules in the directory you configured in [#usage](), following the [eslint-rule syntax](https://eslint.org/docs/developer-guide/working-with-rules) exactly as if they were under the `lib/rules` directory. 

The rules will be loaded by filename under the `boyscout` namespace. For example a rule file `any-directory/replace-jquery.js` will be loaded as `boyscout/replace-jquery`

### Adding tests for rules

Any file/directory that starts with an underscore will be ignored by this plugin. You can take advantage of this to write [rule tester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) files.

### Using the rules

Add them into the eslint configuration file, just like any other eslint rule
```js
{
    rules: {
        "boyscout/rule-name": 2
    }
}
```

## Acknowledgement
This plugin now contains some fixes taken from [eslint-plugin-rulesdir](https://npmjs.com/eslint-plugin-rulesdir)
