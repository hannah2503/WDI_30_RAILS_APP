angular
  .module('bestow')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'];

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl as vm'
    })
    .state('usersNew', {
      url: '/users/new',
      templateUrl: '/js/views/users/form.html',
      controller: 'UsersFormCtrl as vm'
    })
    .state('usersFriend', {
      url: '/users/new/friend',
      templateUrl: '/js/views/users/friend.html',
      controller: 'UsersFormCtrl as vm'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl as vm'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/form.html',
      controller: 'UsersEditCtrl as vm'
    })
    .state('giftsIndex', {
      url: '/gifts',
      templateUrl: '/js/views/gifts/index.html',
      controller: 'GiftsIndexCtrl as vm'
    })
    .state('giftsNew', {
      url: '/gifts/new',
      templateUrl: '/js/views/gifts/form.html',
      controller: 'GiftsFormCtrl as vm'
    })
    .state('giftsShow', {
      url: '/gifts/:id',
      templateUrl: '/js/views/gifts/show.html',
      controller: 'GiftsShowCtrl as vm'
    })
    .state('giftsEdit', {
      url: '/gifts/:id/edit',
      templateUrl: '/js/views/gifts/form.html',
      controller: 'GiftsEditCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
