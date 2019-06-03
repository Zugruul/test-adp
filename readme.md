# Admission Test for ADP [![Build Status](https://travis-ci.org/Zugruul/test-adp.svg?branch=dev)](https://travis-ci.org/Zugruul/test-adp)

This repository contains the admission test for [ADP](https://www.adp.com.br/). It's a visualizer of public github repositories that does the sum of the number of subscribers of selected repositories. It's written in [AngularJS](https://angularjs.org/) using NPM (package manager), Webpack (module loader), [Bootstrap](https://getbootstrap.com/), [Karma](https://karma-runner.github.io/latest/index.html)/[Jasmine](https://jasmine.github.io/) (test runner and framework respectively) and [Travis-CI](https://travis-ci.org/).

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

## Problems you may encounter
+ As of right now I didn't plan on a way to get an access token. So beware of reloading. To mitigate this you can get an access token by going [here](https://github.com/settings/tokens) and generating one yourself. Then you may modify the file located at `src/components/github/repository/RepositoryController.js` at `line 3` (uncomment that line and exchange your token with the `TOKEN_HERE` string)

## Notes and Todos
I used Travis-CI (took my time to learn it a bit, using a pre-build script I found) to ensure that tests were passing as of each commit. (Ofcourse the ones I was setting things up caused some red 'flags'! :p)
Some problems I would like to present:
+ As of this commit the header and footer directives are dependent on the repository directive. Thats something I would like to have had time to refactor.
+ As of for tests I didn't have time to really play a lot with them using AngularJS. I worked most of my free time on understanding AngularJS modules, injection to create tests that test what the user will interact and try to do and verify that all functionalities work according to some sidenotes I should've included here (BDD I've done).
I'm sure that there is lots more I could've have done, but those two are the things I would like to comment on.

## Coverage summary
``` 
Statements   : 92% ( 184/200 )
Branches     : 58.33% ( 7/12 )
Functions    : 76.74% ( 33/43 )
Lines        : 93.44% ( 171/183 )
Total of 12 successful tests
```

## Seed
This project was created using the following seed: https://github.com/zxbodya/angular-webpack-seed
