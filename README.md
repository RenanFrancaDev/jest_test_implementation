# Jest Test implementation
The objective over this project is high the API performance, which is presenting some failures and instability.

## Context
There is a web server built with JavaScript (node.js) suffering with outages because the high demand, in order to solve it, I’ll implementing TypeScript, aiming to improve the system quality. Furthermore, tests will be implemented, using the package Jest, in order to ensure the system working, performance and eliminate errors/failures. 

## Project Steps:

#### Migrate to TypeScript

###### Install TypeScript

```
npm install -g typescript
```

###### Create TypeScript configuration file
use `tsc --init` to create the file `tsconfig.json`. In thie file you can configure the typescript options to meet the project's needs

###### Migration
Start the migrations from JavaScript to TypeScript for the main files and modules. It's aboute add types over the objects, functions and variables.
Use the last version of TypeScript.

#### Jest Configuration

###### Install Jest:
```
npm install --save-dev jest @types/jest
```
###### File test configuration
create a Jest configurate File called `jest.config.js`. Configure necessary options to the test environment, like test files, file extensions...
Use the last version of Jest

