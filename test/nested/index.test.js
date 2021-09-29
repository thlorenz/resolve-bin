'use strict';

var test = require('tap').test;
var path = require('path');
var resolveBin = require('../..');

function relative(dir) {
  return path.relative(path.join(__dirname), dir);
}

test('\rtest-package (nested local)', function (t) {
  resolveBin('test-package', function (err, bin) {
    if (err) return t.fail(err);
    t.equal(relative(bin), 'node_modules/test-package/bin.js');
    t.end();
  });
});

test('\ntest-package (nested local), sync', function (t) {
  var bin = resolveBin.sync('test-package');
  t.equal(relative(bin), 'node_modules/test-package/bin.js');
  t.end();
});

test('\ntap (nested global)', function (t) {
  resolveBin('tap', function (err, bin) {
    if (err) return t.fail(err);
    t.equal(relative(bin), '../../node_modules/tap/bin/tap.js');
    t.end();
  });
});

test('\ntap (nested global), sync', function (t) {
  var bin = resolveBin.sync('tap');
  t.equal(relative(bin), '../../node_modules/tap/bin/tap.js');
  t.end();
});
