import './welcome.scss';

import WelcomeController from './WelcomeController';

export default function welcomeDirective() {
  return {
    controller: WelcomeController,
    controllerAs: 'welcome',
    template: require('./welcome.html'),
  };
}
