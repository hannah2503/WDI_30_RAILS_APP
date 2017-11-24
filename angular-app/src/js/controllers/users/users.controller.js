angular
  .module('bestow')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['User'];
function UserCtrl(User){

  const vm = this;
  vm.users = User.query();
  console.log(vm.users);

}
