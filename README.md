# eslint-plugin-boyscout

An experimental tool to help track refactoring efforts.

`eslint-plugin-boyscout` does only one thing for now: let you define your own eslint rule in your project, without deploying to the npm registry.

Up to you what you do with those rules, we use them to keep track of long-winded refactoring efforts such as gradual transition to another testing framework.

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

Your rules will be loaded by filename under the `boyscout` namespace. For example a rule file `boyscout-rule/replace-jquery.js` would be loaded as `boyscout/replace-jquery`


### Using your rules

Just ad them into your `.eslintrc` file, just like any other eslint rule
```json
{
    "rules": {
        "boyscout/rule-name": 2
    }
}
```





