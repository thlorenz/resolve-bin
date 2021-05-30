'use strict';

var resolveBin = require('../');

// package.json:
// "bin": {
//   "open-cli": "cli.js"
// },

resolveBin('open-cli', function (err, bin) {
  if (err) return console.error(err);
  console.log(bin);
});

// => [..]/resolve-bin/node_modules/mocha/bin/mocha


resolveBin('open-cli', { executable: 'open-cli' }, function (err, bin) {
  if (err) return console.error(err);
  console.log(bin);
});

// => [..]/resolve-bin/node_modules/mocha/bin/_mocha
