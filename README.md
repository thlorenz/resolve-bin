# resolve-bin [![build status](https://secure.travis-ci.org/thlorenz/resolve-bin.png)](http://travis-ci.org/thlorenz/resolve-bin)

Resolves the full path to the bin file of a given package by inspecting the `"bin"` field in its package.json.

```js
var resolveBin = require('resolve-bin');

// package.json: "bin": "bin/tap.js"
resolveBin('tap', function (err, bin) {
  if (err) return console.error(err);
  console.log(bin);  
});

// => [..]/resolve-bin/node_modules/tap/bin/tap.js
```

## Installation

    npm install resolve-bin

## API

###*resolveBin(name, [executable], cb)*

```
/**
 * Resolves the full path to the bin file of a given package by inspecting the "bin" field in its package.json. 
 *
 * @name resolveBin
 * @function
 * @param name {String} module name, i.e. 'tap'
 * @param [executable] {String} executable name (optional, use if different than the module, e.g. 'buster-test' from 'buster')
 * @param cb {Function} called back with the full path to the bin file of the module or an error if it couldn't be resolved
 */
 ```

## License

MIT
