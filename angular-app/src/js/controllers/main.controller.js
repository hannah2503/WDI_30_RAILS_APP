angular
  .module('bestow')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'User', '$state'];

function MainCtrl($scope, User, $state) {
  const vm = this;
  vm.submitForm = createUser;

  function createUser(){
    console.log('clicked mate');
    User
      .save(vm.user)
      .$promise
      .then(user => {
        console.log('user created', user);
        $state.go('usersNew');
      });
  }

}
