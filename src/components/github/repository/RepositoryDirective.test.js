import angular from 'angular';
import 'angular-mocks';

import githubModule from '../githubModule';

const { module, inject } = angular.mock;

describe('githubModule directive', () => {
  let $compile;
  let $rootScope;

  beforeEach(module(githubModule));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div github-repository=""></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Hello, this is demo page');
  });
});
