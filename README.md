
### Before

```
> dummy@1.0.0 test-cov C:\Users\Moti Z\Documents\GitHub\dummy
> cross-env BABEL_ENV=test npm run build && nyc --all node dist/a && nyc report --reporter text


> dummy@1.0.0 build C:\Users\Moti Z\Documents\GitHub\dummy
> babel src -d dist

src\a.js -> dist\a.js
src\b.js -> dist\b.js
src\c.js -> dist\c.js
b runs
a runs
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 a.js     |      100 |      100 |      100 |      100 |                |
 b.js     |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 a.js     |      100 |      100 |      100 |      100 |                |
 b.js     |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```

### After

```
> dummy@1.0.0 test-cov C:\Users\Moti Z\Documents\GitHub\dummy
> cross-env BABEL_ENV=test npm run build && nyc --all node dist/a && nyc report --reporter text


> dummy@1.0.0 build C:\Users\Moti Z\Documents\GitHub\dummy
> babel src -d dist

src\a.js -> dist\a.js
src\b.js -> dist\b.js
src\c.js -> dist\c.js
b runs
a runs
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |       50 |        0 |        0 |       50 |                |
 a.js     |      100 |      100 |      100 |      100 |                |
 b.js     |      100 |      100 |      100 |      100 |                |
 c.js     |        0 |        0 |        0 |        0 |            2,4 |
----------|----------|----------|----------|----------|----------------|
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |       50 |        0 |        0 |       50 |                |
 a.js     |      100 |      100 |      100 |      100 |                |
 b.js     |      100 |      100 |      100 |      100 |                |
 c.js     |        0 |        0 |        0 |        0 |            2,4 |
----------|----------|----------|----------|----------|----------------|
```

### Running this yourself

To get the "before" result - clone, run `npm install` (or `yarn`), and run `npm run test-cov`.

To get the "after" result, do all of the above, and additionally:

1. Check out and build:
    * [`babel@6bc10b5`](https://github.com/babel/babel/commit/6bc10b5573df7244170bc84840bad5d2fb992a7a)
    * [`istanbul-lib-instrument@eae6e05`](https://github.com/motiz88/istanbul-lib-instrument/commit/eae6e058139698f5dd11ebd22168e4ebac2e8209) ([PR #28](https://github.com/istanbuljs/istanbul-lib-instrument/pull/28)) 
    * [`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul)
    * [`nyc@6f060d9`](https://github.com/motiz88/nyc/commit/6f060d9806d708f0fd174e9e5f8f6c87499368ba) ([PR #420](https://github.com/istanbuljs/nyc/pull/420))
2. `npm link` the following packages:
    * `babel/packages/babel-traverse` into `istanbul-lib-instrument`
    * `istanbul-lib-instrument` into `babel-plugin-istanbul`
    * `istanbul-lib-instrument` into `nyc`
    * `babel-plugin-instanbul` into this repo
    * `nyc` into this repo
3. `npm run-test-cov`
