import angular from 'angular'
import 'angular-mocks'

import githubModule from '../githubModule'
import RepositoryController from './RepositoryController'

const { module, inject } = angular.mock

describe('RepositoryController', () => {
  const expectedData = [
    { full_name: 'Github Repository with long name', description: 'Short description' },
    { full_name: 'Github Repository with small name', description: 'Super mega hiper long description', subscribers: [0, 1] },
  ]
  
  beforeEach(module(githubModule))

  let $controller
  let $rootScope
  let $compile

  beforeEach(inject((_$compile_, _$rootScope_, _$controller_, $q) => {
    $compile = _$compile_
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

  it('clicking a repository with no subscribers yet should select it and should not call updateSubscriberSum function', () => {
    $compile(
      '</div><div github-repository=""></div>'
    )($rootScope)
    
    const updateSubscrierSumSpy = spyOn(RepositoryController.prototype, 'updateSubscriberSum').and.callFake(function(){})
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope });
    
    $rootScope.$digest()
    
    $scope.repository.selectRepository(0)
    
    $rootScope.$digest()

    expect($scope.repository.selected[0]).toBeUndefined()
    expect(updateSubscrierSumSpy).toHaveBeenCalledTimes(0)
  })

  it('clicking a repository with subscribers yet should select it, call updateSubscriberSum function, and mark that repository as active in css', () => {
    const updateSubscrierSumSpy = spyOn(RepositoryController.prototype, 'updateSubscriberSum').and.callFake(function(){})
    
    const element = $compile(
      '</div><div github-repository=""></div>'
    )($rootScope)
    
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope });
    
    $rootScope.$digest()
    
    $scope.repository.selectRepository(1)
    
    $rootScope.$digest()

    expect($scope.repository.selected[1]).toBeTruthy()
    expect(updateSubscrierSumSpy).toHaveBeenCalledTimes(1)
    expect(element.html()).toMatch(/(active)(.*)(Github Repository with small name)/sgi)
  })
})