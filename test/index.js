'use strict';
/*jshint asi: true */

var test = require('tap').test
var path = require('path')
var resolveBin = require('../');

function relative(dir) {
  return path.relative(path.join(__dirname, '..'), dir)
}

test('\ntap', function (t) {
  resolveBin('tap', function (err, bin) {
    if (err) return t.fail(err);
    t.equal(relative(bin), 'node_modules/tap/bin/tap.js')
    t.end()
  });
})

test('\nmocha', function (t) {
  resolveBin('mocha', function (err, bin) {
    if (err) return t.fail(err);
    t.equal(relative(bin), 'node_modules/mocha/bin/mocha')
    t.end()
  });
})

test('\n_mocha', function (t) {
  resolveBin('mocha', { executable: "_mocha" }, function (err, bin) {
    if (err) throw err;
    t.equal(relative(bin), 'node_modules/mocha/bin/_mocha')
    t.end()
  });
})

test('\nno `executable` in options', function (t) {
  resolveBin('mocha', {}, function (err, bin) {
    if (err) throw err;
    t.equal(relative(bin), 'node_modules/mocha/bin/mocha')
    t.end()
  });
})

test('\nnon-existent', function (t) {
  resolveBin('non-existent', function (err, bin) {
    t.ok(err, 'returns error')
    t.equal(err.code, 'MODULE_NOT_FOUND', 'saying module not found')
    t.similar(err.message, /non-existent/, 'stating module name')
    t.end()
  });
})
