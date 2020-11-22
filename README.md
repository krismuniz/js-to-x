# JS-to-X Template

![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Starter template for parsing a JavaScript syntax tree and turning it into another syntax tree.

Uses the [`meriyah`](https://npm.im/meriyah) module to generate a JavaScript AST and a `processNode` function that can be used to recursively traverse it.

I made this because I found myself repeating this same pattern for different "fun JavaScript-to-X-language" AST generators. I plan on making fun projects with it.

Example: JS to JSONLogic [(krismuniz/js-to-json-logic)](https://github.com/krismuniz/js-to-json-logic)

### License

[The MIT License (MIT)](/LICENSE)

Copyright (c) 2020 [Kristian Muñiz](https://krismuniz.com/)
