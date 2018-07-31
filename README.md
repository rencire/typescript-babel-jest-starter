# Typescript-Babel-Jest

Simple, barebones starter Typescript project with Jest setup.  
Typescript compiler only used for code editing. Babel is solely responsible for transpilation.

To use:
```
git clone git@github.com:rencire/ts-babel-jest.git <your_project_name>
```

## Manually install dependencies

### Typescript

- Initializes `tsconfig.json` with default options. Change as needed.

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

- Need `babel-core@bridge` so that jest can use the new `@babel/core` package.
- Change options in `jest.config.js` as needed.

```
npm i -D @types/jest@23.3.1
npm i -D jest@23.4.2
npm i -D babel-core@7.0.0-bridge.0
npx jest --init
```

### tslint

```
npm i -D tslint@5.11.0
npx tslint --init
```

### prettier

- install `tslint-config-prettier` to disable conflicting rules between prettier and tslint.
  `prettier` takes care of formatting, while `tslint` takes care of all the rest.
- Add `"tslint-config-prettier"` to `tslint.json`.

```
npm i -D prettier@1.14.0
npm i -D tslint-config-prettier@1.14.0
```

### husky

```
npm i -D husky@1.0.0-rc.13
```

### lint-staged

```
npm i -D lint-staged@7.2.0
```

### Targeting browsers

Queries in `.browserslistrc` dictate which browsers babel should target when transpiling.

See [browserslist](https://github.com/browserslist/browserslist) for more details.

# Resources

- https://github.com/Microsoft/TypeScript
- https://github.com/palantir/tslint
- https://github.com/prettier/prettier
- https://github.com/alexjoverm/tslint-config-prettier
- https://github.com/typicode/husky
- https://github.com/okonet/lint-staged
