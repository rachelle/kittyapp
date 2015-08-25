(function(){
  'use strict';


  angular
   .module("kittyapp")
   .controller("KittiesController", KittiesController);

   KittiesController.$inject = [];

   function KittiesController() {
   var vm = this; 

   vm.ids = 4; 
   vm.allKittens = 
[
    {
      id: 0, 
      catName: 'Karl',
      monthsOld: 5,
      gender: 'boy',
      image: "images/gingerkitten.png",
      adopted: true,
    },
    {
      id: 1, 
      catName: 'Jack',
      monthsOld: 4,
      gender: 'boy',
      image: "images/bow-kitten.png",
      adopted: false
    },
    {
      id: 2, 
      catName: 'Oscar',
      monthsOld: 2,
      gender: 'boy',
      image: "images/winkykitty.gif",
      adopted: false
    },
    {
      id: 3, 
      catName: 'Princess Mew',
      monthsOld: 3,
      gender: 'girl',
      image: "images/whitekitty.png",
      adopted: false
    }

  ]; 

}

})();
