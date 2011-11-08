'use strict';

var tap = require('tap');
var test = tap.test;

var array = require('../ensure-array.js');

test('empty arg list becomes empty array', function (t) {
  var result = array();
  t.same(result, [], 'should be empty array');
  t.end();
});

test('undefined single argument becomes empty array', function (t) {
  var result = array(undefined);
  t.same(result, [], 'should be empty array');
  t.end();
});

test('null single argument becomes empty array', function (t) {
  var result = array(null);
  t.same(result, [], 'should be empty array');
  t.end();
});

test('array single argument returns itself unchanged', function (t) {
  var result = array([1, 2, 3]);
  t.same(result, [1, 2, 3]);
  t.end();
});

test('single argument non-array becomes an array containing itself', function (t) {
  var result = array(10);
  t.same(result, [10]);
  t.end();
});

test('undefined argument as first of many arguments returns array of all args', function (t) {
  var result = array(undefined, 1, 'two');
  t.same(result, [undefined, 1, 'two']);
  t.end();
});

test('null argument as first of many arguments returns array of all args', function (t) {
  var result = array(null, 1, 'two');
  t.same(result, [null, 1, 'two']);
  t.end();
});



