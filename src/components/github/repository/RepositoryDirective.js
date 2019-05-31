import './repository.scss';

import RepositoryController from './RepositoryController';

export default function repositoryController() {
  return {
    controller: RepositoryController,
    controllerAs: 'repository',
    template: require('./repository.html'),
  };
}
