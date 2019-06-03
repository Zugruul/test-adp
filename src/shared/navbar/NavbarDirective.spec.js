import angular from 'angular'
import 'angular-mocks'

import navbarModule from '../navbarModule'
import githubModule from '../../components/github/githubModule'
import RepositoryController from '../../components/github/repository/RepositoryController'

const { module, inject } = angular.mock

describe('navbarModule directive', () => {
  const expectedData = [
    { full_name: 'Github Repository with long name', description: 'Short description', subscribers: [0, 1] },
    { full_name: 'Github Repository with small name', description: 'Super mega hiper long description', subscribers: [0, 1, 2] },
  ]

  let $compile
  let $controller
  let $rootScope

  beforeEach(module(navbarModule))
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
    const element = $compile('<div github-navbar=""></div>')($rootScope)
    $rootScope.$digest()
    
    expect(element.html()).toContain('subscriber count')
  })

  it('Replaces the element with the appropriate content', () => {
    const element = $compile(
      '<div><div github-navbar=""></div><div github-repository=""></div></div>'
    )($rootScope)
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope })

    $rootScope.$digest()
    expect(element.html()).toMatch(/[subscriber count].*[0]/gi)
  })

  it('Selecting github-repositories and show correct sum of subscribers', () => {
    const element = $compile(
      '<div><div github-repository=""></div><div github-footer=""></div></div>'
    )($rootScope)
    
    const $scope = $rootScope.$new()
    $controller(RepositoryController, { $scope }) 
    
    $rootScope.$digest()

    $scope.repository.selectRepository(0)
    $scope.repository.selectRepository(1)
    
    $rootScope.$digest()

    expect(element.html()).toMatch(/[subscriber count].*[5]/gi)
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

    expect(element.html()).toMatch(/[subscriber count].*[3]/gi)
  })
})
