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
 *
 *
 *
 *



 */
angular.module('angularShopingCartApp')
  .controller('CartCtrl', function ($scope, auth, store, $http, $state, $stateParams) {

   var cartList = [];
   cartList = store.get('cartList');
   $scope.book = {};
   $scope.arrayCart = [];
   var ref1 = firebase.database().ref('books');

         // alert(angular.toJson(snapshot.val()));
      for(var i=0; i<cartList.length; i++){
   
         firebase.database().ref('books/' + cartList[i]).on('value', function(snapshot){
            $scope.book = snapshot.val();
            $scope.book.id = cartList[i];
            $scope.arrayCart.push($scope.book);
            $scope.$apply();
         });
         
      }

console.log($scope.arrayCart);

       // $scope.book = snapshot.val();
       // $scope.arrayCart.push($scope.book);
       // $scope.$apply();
       // alert(angular.toJson($scope.book));     


   

    
  });
