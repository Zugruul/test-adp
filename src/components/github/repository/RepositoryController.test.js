import angular from 'angular';
import 'angular-mocks';

import githubModule from '../githubModule';
import RepositoryController from './RepositoryController';

const { module, inject } = angular.mock;

describe('RepositoryController', () => {
  beforeEach(module(githubModule));

  let $controller;

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_;
  }));


  it('has items property, and it is non empty array', () => {
    const controller = $controller(RepositoryController, {});

    expect(controller.items).toBeTruthy();
    expect(controller.items.length).toBeGreaterThan(0);
  });
});
