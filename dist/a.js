"use strict";

var cov_1xspf6q2zl = function () {
  var path = "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\a.js",
      hash = "8ae7befcdd7aa8dab31a2f7561f4af4585d4eddb",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\a.js",
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

require("./b");

++cov_1xspf6q2zl.s[0];
console.log("a runs");