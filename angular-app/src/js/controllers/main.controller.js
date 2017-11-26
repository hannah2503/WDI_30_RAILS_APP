angular
  .module('bestow')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'User'];

function MainCtrl($scope, User) {
  const vm = this;
  vm.submitForm = createUser;

  function createUser(){
console.log('clicked');
  //   User
  //     .save(vm.user)
  //     .$promise
  //     .then(user => {
  //       console.log('user created', user);
  //     });
  //
  }
}
