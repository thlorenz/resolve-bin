# resolve-bin [![build status](https://secure.travis-ci.org/thlorenz/resolve-bin.png)](http://travis-ci.org/thlorenz/resolve-bin)

Resolves the full path to the bin file of a given package by inspecting the \"bin\" field in its package.json.

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


## License

MIT
