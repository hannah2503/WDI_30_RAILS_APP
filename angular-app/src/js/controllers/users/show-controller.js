angular
  .module('bestow')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams) {
  const vm = this;
  vm.user = User.get($stateParams);

  console.log($stateParams);


}
