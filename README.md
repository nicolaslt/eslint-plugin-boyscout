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

Add `boyscout` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "boyscout"
    ]
}
```

### Creating rules

First, make sure you have a `boyscout-rules` directory at the root of your project (or where you will run eslint from)
Then add your rules, following the [eslint-rule syntax](https://eslint.org/docs/developer-guide/working-with-rules) exactly as if they were under the `lib/rules` directory. 

Your rules will be loaded by filename under the `boyscout` namespace. For example a rule file `boyscout-rules/replace-jquery.js` will be loaded as `boyscout/replace-jquery`

### Adding tests for your rules

Any file/directory under `boyscout-rules` that starts with an underscore will be ignored by this plugin. You can take advantage of this to write [rule tester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) files.

### Using your rules

Add them into your `.eslintrc` file, just like any other eslint rule
```json
{
    "rules": {
        "boyscout/rule-name": 2
    }
}
```
