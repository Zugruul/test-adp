import angular from 'angular'
import 'angular-mocks'

import footerModule from '../footerModule'
import githubModule from '../../components/github/githubModule'
import RepositoryController from '../../components/github/repository/RepositoryController'

const { module, inject } = angular.mock

describe('footerModule directive', () => {
  const expectedData = [
    { full_name: 'Github Repository with long name', description: 'Short description', subscribers: [] },
    { full_name: 'Github Repository with small name', description: 'Super mega hiper long description', subscribers: [] },
  ]

  let $compile
  let $controller
  let $rootScope

  beforeEach(module(footerModule))
  beforeEach(module(githubModule))

  beforeEach(inject((_$compile_, _$rootScope_, _$controller_, $q) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
    $controller = _$controller_
    spyOn(RepositoryController.prototype, 'getRepositories').and.callFake(function() {
      const deferred = $q.defer()
      deferred.resolve(expectedData)
      return deferred.promise
    })
  }))

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div github-footer=""></div>')($rootScope)
    $rootScope.$digest()
    
    expect(element.html()).toContain('Selected repository count: ')
  })

  it('Replaces the element with the appropriate content', () => {
    const element = $compile(
      '<div><div github-repository=""></div><div github-footer=""></div></div>'
    )($rootScope)
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope })

    $rootScope.$digest()
    
    expect(element.html()).toContain('Selected repository count: 0')
  })

  it('Selects github-repositories and show correct count', () => {
    const element = $compile(
      '<div><div github-repository=""></div><div github-footer=""></div></div>'
    )($rootScope)
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope }) 
    
    $rootScope.$digest()

    $scope.repository.selectRepository(0)
    $scope.repository.selectRepository(1)
    
    $rootScope.$digest()

    expect(element.html()).toContain('Selected repository count: 2')
  })

  it('Deselects github-repositories and show correct count', () => {
    const element = $compile(
      '<div><div github-repository=""></div><div github-footer=""></div></div>'
    )($rootScope)
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope }) 
    
    $rootScope.$digest()

    $scope.repository.selectRepository(0)
    $scope.repository.selectRepository(1)
    $scope.repository.selectRepository(0)
    
    $rootScope.$digest()

    expect(element.html()).toContain('Selected repository count: 1')
  })
})
