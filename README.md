Demo of webpack ts-loader failure using TS 4.7 nightly

# Repo

```
npm i
npm run build
```

Using the current typescript@next, this prints:

```
ERROR in ./src/index.ts
Module build failed (from ./node_modules/ts-loader/index.js):
TypeError: path.indexOf is not a function
    at normalizeSlashes (/Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:7691:26)
    at Object.combinePaths (/Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:7757:28)
    at /Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:41922:40
    at Object.firstDefined (/Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:407:26)
    at primaryLookup (/Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:41921:27)
    at Object.resolveTypeReferenceDirective (/Users/matb/projects/san/ts-webpack/node_modules/typescript/lib/typescript.js:41880:24)
    at /Users/matb/projects/san/ts-webpack/node_modules/ts-loader/dist/servicesHost.js:713:18
    at /Users/matb/projects/san/ts-webpack/node_modules/ts-loader/dist/servicesHost.js:128:141
    at Array.map (<anonymous>)
    at Object.resolveTypeReferenceDirectives (/Users/matb/projects/san/ts-webpack/node_modules/ts-loader/dist/servicesHost.js:128:124)
```