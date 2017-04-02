
### Before

[![Greenkeeper badge](https://badges.greenkeeper.io/motiz88/nyc-all-demo.svg)](https://greenkeeper.io/)

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

1. Check out and build: [`nyc@6f060d9`](https://github.com/motiz88/nyc/commit/6f060d9806d708f0fd174e9e5f8f6c87499368ba) ([PR #420](https://github.com/istanbuljs/nyc/pull/420))
2. Run `npm link` in the `nyc` repo
3. Run `npm link nyc` in this repo
4. `npm run test-cov`
