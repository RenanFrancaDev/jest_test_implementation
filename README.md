# Jest Test implementation

The objective over this project is high the API performance, which is presenting some failures and instability.

## Context

There is a web server, built with JavaScript (node.js), suffering with outages because the high demand, in order to solve it, I’ll implementing TypeScript, aiming to improve the system quality. Furthermore, tests will be implemented, using the package Jest, in order to ensure the system working, performance and eliminate errors/failures.

## Project Steps

#### Migrate to TypeScript

###### Install TypeScript:

```
npm install -g typescript
```

###### Create TypeScript configuration file:

Use `tsc --init` to create the file `tsconfig.json`. In thie file you can configure the typescript options to meet the project's needs

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,
    "target": "es5",
    "skipLibCheck": true
  },
  "include": ["./src/**/*"]
}
```

Install ts-node-dev to get hot reload with TypeScript

```
npm i ts-node-dev
```

package.json

```
  "scripts": {
    "dev": "tsnd --respawn index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Install @types of all the packages

```
npm i --save-dev @types/express
```

```
npm i --save-dev @types/knex
```

###### Migration:

Start the migrations from JavaScript to TypeScript for the main files and modules. It's aboute add types over the objects, functions and variables.
Use the last version of TypeScript.

#### Jest Configuration

###### Install Jest:

```

npm install --save-dev jest @types/jest

```

###### Start Jest

```
npx  jest --init
```

###### Creating a basic configuration file, using TypeScript

```
npm install --save-dev ts-jest
```

#### File test configuration:

Create a Jest configurate File called `jest.config.js`. Configure necessary options to the test environment, like test files, file extensions...
Use the last version of Jest

#### Integration Testing:

After the packages and interface implemented, it's time to create test for main back-end features.

#### Diretory Structure:

organize tests into a clear and consistent directory structure, separating by modules and features.

#### Unit Testing x Integration Testing:

Ensure the tests are in a clear and consistent directory and separete them by modules and features.

#### Coverage:

Ensure that this repository cover differents paths, including valid and invalid entries to make the system with higher performance.

## Techs:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Noje.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/pt-br/)
- [Knex](https://knexjs.org/guide/query-builder.html#knex)
- [MySQL](https://www.mysql.com/)

## Contact

Send an email to renanfranca.dev@gmail.com or visit the [GitHub](https://github.com/RenanFrancaDev) and [Linkedin](https://www.linkedin.com/in/renan-franca/)

```

```
