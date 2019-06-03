import angular from 'angular';
import footerDirective from './footer/FooterDirective';

import githubModule from '../components/github/githubModule'

export default angular
  .module('footer', [githubModule])
  .directive('githubFooter', footerDirective)
  .name;
