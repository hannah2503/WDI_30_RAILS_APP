angular
  .module('bestow')
  .controller('UsersFormCtrl', UsersFormCtrl);

UsersFormCtrl.$inject = ['$scope', 'User'];

function UsersFormCtrl($scope, User) {
  const vm = this;
  vm.submitForm = createUser;

  function createUser(){

    User
      .save(vm.user)
      .$promise
      .then(user => {
        console.log('user created', user);
      });

  }
}
