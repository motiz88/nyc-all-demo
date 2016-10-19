"use strict";

var cov_f3d72d7xq = function () {
  var path = "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\b.js",
      hash = "fad11afd360fba8014838392f2d9a5407c6617f8",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\b.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 22
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_f3d72d7xq.s[0];
console.log("b runs");