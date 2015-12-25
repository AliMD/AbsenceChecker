(function(ng){
  'use strict';

    ng
    .module('starter.config', [])
      .run(['$ionicPlatform', ($ionicPlatform) => {
       $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    }])

    .config(['$stateProvider','$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
      $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/app.html'
      })

      .state('app.userlist', {
        url: '/userlist',
        views: {
          'tab-userlist': {
            templateUrl: 'templates/userlist.html',
            controller: 'UserListCtrl'
          }
        }
      })
      ;

      $urlRouterProvider.otherwise('/app/userlist');
    }]);

})(angular);
