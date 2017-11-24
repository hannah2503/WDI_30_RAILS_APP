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
    // })
    // .state('eventsShow', {
    //   url: '/events/:id',
    //   templateUrl: '/js/views/events/show.html',
    //   controller: 'EventsShowCtrl as vm'
    // })
    // .state('groupsNew', {
    //   url: '/groups/new/:id',
    //   templateUrl: '/js/views/groups/new.html',
    //   controller: 'GroupsNewCtrl as vm'
    // })
    // .state('groupsShow', {
    //   url: '/groups/:id',
    //   templateUrl: '/js/views/groups/show.html',
    //   controller: 'GroupsShowCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
