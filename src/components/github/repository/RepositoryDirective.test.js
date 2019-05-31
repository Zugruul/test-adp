import angular from 'angular'
import 'angular-mocks'

import githubModule from '../githubModule'
import RepositoryController from './RepositoryController'

const { module, inject } = angular.mock

describe('githubModule directive', () => {
  let $compile
  let $rootScope

  beforeEach(module(githubModule))

  beforeEach(inject((_$compile_, _$rootScope_, $q) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
    spyOn(RepositoryController.prototype, 'getRepositories').and.callFake(function() {
      const deferred = $q.defer()
      deferred.resolve([])
      return deferred.promise
    })
  }))

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div github-repository=""></div>')($rootScope)
    $rootScope.$digest()
    expect(element.html()).toContain('Github Public Repositories')
  })
})
