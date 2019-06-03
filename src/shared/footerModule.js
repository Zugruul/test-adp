import angular from 'angular';
import footerDirective from './footer/FooterDirective';

export default angular
  .module('footer', [])
  .directive('githubFooter', footerDirective)
  .name;
