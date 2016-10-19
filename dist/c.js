"use strict";

var cov_jbrdgjq1w = function () {
    var path = "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\c.js",
        hash = "469c52aac3bb9bd2d38f70f00f9d3b652e5205ee",
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "C:\\Users\\Moti Z\\Documents\\GitHub\\dummy\\src\\c.js",
        statementMap: {
            "0": {
                start: {
                    line: 2,
                    column: 4
                },
                end: {
                    line: 2,
                    column: 26
                }
            },
            "1": {
                start: {
                    line: 4,
                    column: 0
                },
                end: {
                    line: 4,
                    column: 11
                }
            }
        },
        fnMap: {
            "0": {
                name: "c",
                decl: {
                    start: {
                        line: 1,
                        column: 9
                    },
                    end: {
                        line: 1,
                        column: 10
                    }
                },
                loc: {
                    start: {
                        line: 1,
                        column: 13
                    },
                    end: {
                        line: 3,
                        column: 1
                    }
                }
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 4,
                        column: 0
                    },
                    end: {
                        line: 4,
                        column: 10
                    }
                },
                type: "binary-expr",
                locations: [{
                    start: {
                        line: 4,
                        column: 0
                    },
                    end: {
                        line: 4,
                        column: 3
                    }
                }, {
                    start: {
                        line: 4,
                        column: 7
                    },
                    end: {
                        line: 4,
                        column: 10
                    }
                }]
            }
        },
        s: {
            "0": 0,
            "1": 0
        },
        f: {
            "0": 0
        },
        b: {
            "0": [0, 0]
        },
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

function c() {
    ++cov_jbrdgjq1w.f[0];
    ++cov_jbrdgjq1w.s[0];

    console.log("c runs");
}
++cov_jbrdgjq1w.s[1];
(++cov_jbrdgjq1w.b[0][0], c()) || (++cov_jbrdgjq1w.b[0][1], c());