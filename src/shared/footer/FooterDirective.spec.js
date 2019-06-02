import angular from 'angular'
import 'angular-mocks'

import footerModule from './footerModule'

const { module, inject } = angular.mock

describe('githubModule directive', () => {
  let $compile
  let $rootScope

  beforeEach(module(githubModule))

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div github-footer=""></div>')($rootScope)

    expect(element.html()).toContain('Selected repository count:')
  })
})
