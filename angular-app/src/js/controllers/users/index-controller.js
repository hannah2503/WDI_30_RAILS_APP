angular
  .module('bestow')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['$scope', 'User'];

function UsersIndexCtrl($scope, User) {
  const vm = this;
  User
    .query()
    .$promise
    .then(users => {
      vm.users = users;
      console.log(vm.users);
    });
}
