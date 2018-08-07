/**
 * @flow
 */

/**
 * $ node inner/index.js
 * inner/node_modules/Foo/index.js
 * inner/node_modules/Foo/index.js
 */
const Foo/*: 'Foo' */ = require('Foo');
const foo/*: 'foo' */ = require('foo'); // Flow error!
