angular
  .module('bestow', [])
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$state'];
function MainCtrl($state){
  const vm = this;
  console.log(vm);
}
