'use strict';

var findParentDir = require('find-parent-dir');
var path = require('path');

module.exports = function (name, cb) {
  var mod;
  try {
    mod = require.resolve(name);
  } catch (err) {
    return cb(err);
  }

  findParentDir(mod, 'package.json', function (err, dir) {
    if (err) return cb(err);

    var pack = require(path.join(dir, 'package.json'));
    var binfield = pack.bin;

    var binpath = typeof binfield === 'object' ? binfield[name] : binfield;
    var bin = path.join(dir, binpath);
    cb(null, bin);
  });
}
