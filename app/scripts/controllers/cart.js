'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the angularShopingCartApp
 * 
 *
 * Display Cart realtime from firebase with id in localStorage
 * Upload all 
 *
 *
 *



 */
angular.module('angularShopingCartApp')
  .controller('CartCtrl', function ($scope, auth, store, $http, $state, $stateParams,  $filter, addtoCart) {
    $scope.service = addtoCart;

    // identify this is your cart
   var newCartKey = store.get('userCartKey');
   $scope.listID = {};
   $scope.book = {};
   var refCart = firebase.database().ref().child('carts/' + newCartKey);

   refCart.on('value', function(snapshot){
      $scope.listID = snapshot.val(); 
      $scope.arrayCart = [];
     
      angular.forEach($scope.listID, function(value, key){  // key is bookid
        firebase.database().ref().child('books/' + key).on('value',function(snapshot){
          $scope.book = snapshot.val();
          $scope.book.bookid = key;
       
        
          // $scope.arrayCart.push($scope.book);

          //filter the array
          var foundItem = $filter('filter')($scope.arrayCart, { bookid: key }, true)[0];
          //get the index
          var index = $scope.arrayCart.indexOf(foundItem);
        
          if(index == -1){
             $scope.arrayCart.push($scope.book);
          }else{
            $scope.arrayCart[index] = $scope.book;
            // $scope.arrayCart.splice(index, 0, $scope.book);

          }
          
          $scope.$apply();

        });
        
      });
      $scope.$apply();

   });

    
  });
