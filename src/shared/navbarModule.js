import angular from 'angular';
import navbarDirecrive from './navbar/NavbarDirective';

import githubModule from '../components/github/githubModule'

export default angular
  .module('navbar', [githubModule])
  .directive('githubNavbar', navbarDirecrive)
  .name;
