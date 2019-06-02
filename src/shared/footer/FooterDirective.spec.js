import angular from 'angular'
import 'angular-mocks'

import footerModule from './footerModule'
import githubModule from './footerModule'
import RepositoryController from '../../components/github/repository/RepositoryController'

const { module, inject } = angular.mock

describe('githubModule directive', () => {

  let $compile
  let $controller
  let $rootScope

  beforeEach(module(footerModule))

  beforeEach(inject((_$compile_, _$rootScope_, _$controller_, $q) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
    $controller = _$controller_
  }))

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div github-footer=""></div>')($rootScope)

    $rootScope.$digest()
    
    expect(element.html()).toContain('Selected repository count: ')
  })
})
