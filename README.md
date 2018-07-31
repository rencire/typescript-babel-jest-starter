# Typescript-Babel-Jest

Simple, barebones starter Typescript project with Jest setup.  
Typescript compiler only used for code checking. Babel is soley responsible for transpilation.

## Manually install dependencies

### Typescript
* Initializes `tsconfig.json` with default options.  Change as needed.
```
npm i -D typescript@3.0.1
npx tsc --init  
```

### Babel
```
npm i -D @babel/cli@7.0.0-beta.55
npm i -D @babel/core@7.0.0-beta.55 
npm i -D @babel/preset-env@7.0.0-beta.55 
npm i -D @babel/preset-typescript@7.0.0-beta.55
```

### Jest
* Need `babel-core@bridge` so that jest can use the new `@babel/core` package.
* Change options in `jest.config.js` as needed.
```
npm i -D @types/jest@23.3.1 
npm i -D jest@23.4.2
npm i -D babel-core@7.0.0-bridge.0
npx jest --init
```


### Targeting browsers
Queries in `.browserslistrc` dictate which browsers babel should target when transpiling.

See [browserslist](https://github.com/browserslist/browserslist) for more details.
