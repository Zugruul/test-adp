import angular from 'angular'

import 'angular/angular-csp.css'
import 'angular-ui-bootstrap'
import './index.scss'

/** Shared Modules */
import navbar from './shared/navbar/navbarModule'
import footer from './shared/footer/footerModule'

/** Component Modules */
import github from './components/github/githubModule'

angular.module('main', [
  github,
  navbar,
  footer,
  'ui.bootstrap'
])

angular.bootstrap(document.documentElement, ['main'])
