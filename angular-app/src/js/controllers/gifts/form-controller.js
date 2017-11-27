angular
  .module('bestow')
  .controller('GiftsFormCtrl', GiftsFormCtrl);

GiftsFormCtrl.$inject = ['$scope', 'Gift', '$stateParams', 'User'];

function GiftsFormCtrl($scope, Gift, $stateParams, User) {
  const vm = this;
  vm.shuffle = shuffleGifts;
  vm.create = createPresent;

  User
    .query()
    .$promise
    .then(users => {
      vm.users = users;
      console.log(vm.users);
      const thisUser = vm.users.slice(-2);
      console.log(thisUser);
      vm.thisUser = thisUser[0];
      vm.friend = thisUser[1];
    });

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

  function createPresent(){
    console.log('clicked!');
    console.log(vm.gifts);
    Gift
      .save(vm.gifts)
      .$promise
      .then((gift) =>{
        console.log('saved this present', gift);
      });
  }



}
