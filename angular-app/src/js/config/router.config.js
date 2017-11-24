angular
  .module('bestow')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UserCtrl as vm'
    });
  $urlRouterProvider.otherwise('/');
}
