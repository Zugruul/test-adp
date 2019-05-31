import angular from 'angular'
import 'angular-mocks'

import githubModule from '../githubModule'
import RepositoryController from './RepositoryController'

const { module, inject } = angular.mock

describe('RepositoryController', () => {
  const expectedData = [
    { full_name: 'Github Repository with long name', description: 'Short description' },
    { full_name: 'Github Repository with small name', description: 'Super mega hiper long description' },
  ]
  
  beforeEach(module(githubModule))

  let $controller
  let $rootScope

  beforeEach(inject((_$rootScope_, _$controller_, $q) => {
    $controller = _$controller_
    $rootScope = _$rootScope_
    spyOn(RepositoryController.prototype, 'getRepositories').and.callFake(function() {
      const deferred = $q.defer()
      deferred.resolve(expectedData)
      return deferred.promise
    })
  }));

  it('has list property, and it is non empty array', () => {
    const controller = $controller(RepositoryController, {});
    $rootScope.$digest()
    
    expect(controller.list).toBeTruthy()
    expect(controller.list.length).toBeGreaterThan(0)
  })
})
