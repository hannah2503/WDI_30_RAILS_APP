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
      templateUrl: '/js/views/users/friend.html',
      controller: 'UsersFormCtrl as vm'
    })
    .state('giftsChoose', {
      url: '/users/new/friend/:id',
      templateUrl: '/js/views/gifts/index.html',
      controller: 'GiftsIndexCtrl as vm'
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
    });

  $urlRouterProvider.otherwise('/');
}
