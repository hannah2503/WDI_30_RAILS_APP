angular
  .module('bestow')
  .controller('GiftsIndexCtrl', GiftsIndexCtrl);

GiftsIndexCtrl.$inject = ['$scope', 'Gift'];

function GiftsIndexCtrl($scope, Gift) {
  const vm = this;
  vm.shuffle = shuffleGifts;
  vm.save = saveGift;

  Gift
    .query()
    .$promise
    .then(gifts => {
      vm.gifts = gifts;
      console.log(vm.gifts);
    });

  function shuffleGifts(array){
    const newArray = array.sort(function (){
      return 0.5 - Math.random();
    });
    console.log(newArray);
  }

  function saveGift(){

  }



}
