angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.page', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

  .state('menu.sENDMESSAGE', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sENDMESSAGE.html',
        controller: 'sENDMESSAGECtrl'
      }
    }
  })

  .state('menu.page2', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('menu.sendMessage', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sendMessage.html',
        controller: 'sendMessageCtrl'
      }
    }
  })

  .state('menu.page3', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('menu.sendMessage2', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sendMessage2.html',
        controller: 'sendMessage2Ctrl'
      }
    }
  })

  .state('menu.messageSent', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messageSent.html',
        controller: 'messageSentCtrl'
      }
    }
  })

  .state('menu.messageSent2', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messageSent2.html',
        controller: 'messageSent2Ctrl'
      }
    }
  })

  .state('menu.messageSent3', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messageSent3.html',
        controller: 'messageSent3Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});