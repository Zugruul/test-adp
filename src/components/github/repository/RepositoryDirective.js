import './repository.scss';

import RepositoryController from './RepositoryController';

export default function() {
  return {
    controller: RepositoryController,
    controllerAs: 'repository',
    template: require('./repository.html'),
  };
}
