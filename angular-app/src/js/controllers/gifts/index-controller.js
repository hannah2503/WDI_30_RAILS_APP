angular
  .module('bestow')
  .controller('GiftsIndexCtrl', GiftsIndexCtrl);

GiftsIndexCtrl.$inject = ['$scope', 'Gift'];

function GiftsIndexCtrl($scope, Gift) {
  const vm = this;

  Gift
    .query()
    .$promise
    .then(gifts => {
      vm.gifts = gifts;
      console.log(vm.gifts);
    });

}
