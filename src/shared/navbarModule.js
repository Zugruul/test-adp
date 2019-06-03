import angular from 'angular';
import navbarDirecrive from './navbar/NavbarDirective';

export default angular
  .module('navbar', [])
  .directive('githubNavbar', navbarDirecrive)
  .name;
