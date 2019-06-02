import angular from 'angular';
import navbarDirecrive from './NavbarDirective';

export default angular
  .module('navbar', [])
  .directive('githubNavbar', navbarDirecrive)
  .name;
