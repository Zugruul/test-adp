import angular from 'angular';
import repositoryDirective from './repository/RepositoryDirective';

export default angular
  .module('github', [])
  .directive('githubRepository', repositoryDirective)
  .name;
