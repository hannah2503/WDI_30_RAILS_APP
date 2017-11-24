angular
  .module('bestow')
  .controller('GiftsIndexCtrl', GiftsIndexCtrl);

GiftsIndexCtrl.$inject = ['$scope', 'Gift'];

function GiftsIndexCtrl($scope, Gift) {
  const vm = this;
  vm.gifts = Gift.query();
}
