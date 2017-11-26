angular
  .module('bestow')
  .controller('UsersFormCtrl', UsersFormCtrl);

UsersFormCtrl.$inject = ['$scope', 'User', '$state'];

function UsersFormCtrl($scope, User, $state) {
  const vm = this;
  vm.submitFriend = addFriend;

  function createUser(){
    console.log(vm.user);
    User
      .save(vm.user)
      .$promise
      .then(user => {
        console.log('user created', user);
        $state.go('usersFriend');
      });
  }

  function addFriend(){
    User
      .save(vm.user)
      .$promise
      .then(user => {
        console.log('new friend added', user);
        $state.go('giftsNew');
      });
  }

}
