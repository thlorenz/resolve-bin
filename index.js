'use strict';

var findParentDir = require('find-parent-dir');
var path = require('path');

/**
 * Resolves the full path to the bin file of a given package by inspecting the "bin" field in its package.json. 
 *
 * @name resolveBin
 * @function
 * @param name {String} module name, i.e. 'tap'
 * @param cb {Function} called back with the full path to the bin file of the module or an error if it couldn't be resolved
 */
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
