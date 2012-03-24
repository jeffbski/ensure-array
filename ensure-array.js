(function (root, factory) {
  /*global define:true */

    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.ensureArray = factory();
    }
}(this, function () {
  'use strict';

  function ensureArray(a, b, n) {
    if (arguments.length === 0) return [];            //no args, ret []
    if (arguments.length === 1) {                     //single argument
      if (a === undefined || a === null) return [];   //  undefined or null, ret []
      if (Array.isArray(a)) return a;                 //  isArray, return it
    }
    return Array.prototype.slice.call(arguments);     //return array with copy of all arguments
  }

  return ensureArray;
}));

