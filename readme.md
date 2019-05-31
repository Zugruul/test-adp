# Admission Test for ADP

This repository contains the admission test for [ADP](https://www.adp.com.br/). It's a visualizer of public github repositories that does the sum of the number of subscribers of selected repositories. It's written in [AngularJS](https://angularjs.org/) using NPM (package manager), Webpack (module loader), [Bootstrap](https://getbootstrap.com/) (toolkit) and [Karma](https://karma-runner.github.io/latest/index.html)/[Jasmine](https://jasmine.github.io/) (test runner and framework respectively).

## Setup
To start this repository you must clone it and then navigate into its folder, as follows:

```
 git clone [INSERT_GITHUB_LINK]
 cd <directory_name>
```

then yo must install the project dependencies, to do so run the following command:

```
 npm install
```

Once the repository has been cloned and it's dependencies installed you can proceed. The following sections explain how to run the project both in development and in production modes. 

## Run in Development Mode
To run in development mode run the following:

```
npm start
```

To build in development mode run the following:

```
npm run build
```

## Run tests
To run the unit tests run the following:

```
npm run test
```

To check code coverage run the following:

```
npm run test:coverage
```

## Run in Production Mode
To run in production mode run the following command:

```
npm run build:prd
```

To run the production build you can run it by running:
```
npm run serve:prd
```

## Seed
This project was created using the following seed: https://github.com/zxbodya/angular-webpack-seed
