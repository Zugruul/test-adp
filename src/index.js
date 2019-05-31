import angular from 'angular';

import 'angular/angular-csp.css';
import './index.scss';

import github from './components/github/githubModule';

angular.module('main', [
  github,
]);

angular.bootstrap(document.documentElement, ['main']);
