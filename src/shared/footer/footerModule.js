import angular from 'angular';
import footerDirective from './FooterDirective';

export default angular
  .module('footer', [])
  .directive('githubFooter', footerDirective)
  .name;
