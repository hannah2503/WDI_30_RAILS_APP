angular
  .module('bestow')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersShowCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);

}
