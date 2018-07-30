# Typescript-Babel-Jest

Simple, barebones starter Typescript project with Jest setup.  
Typescript compiler only used for code checking. Babel is soley responsible for transpilation.

## Manually install dependencies

### Typescript
* Initializes `tsconfig.json` with default options.  Change as needed.
```
npm i -D typescript
npx tsc --init  

```

### Babel
```
npm i -D @babel/cli @babel/core 
npm i -D @babel/preset-env @babel/preset-typescript
```

### jest
* Need `babel-core@bridge` so that jest can use the new `@babel/core` package.
```
npm i -D @types/jest jest
npm i -D babel-core@bridge
npx jest --init
```


### Targeting browsers
Queries in `.browserslistrc` dictate which browsers babel should target when transpiling.

See [browserslist](https://github.com/browserslist/browserslist) for more details.
