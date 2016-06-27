'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:SiteCtrl
 * @description
 * # SiteCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('SiteCtrl', function ($scope, auth, store, addtoCart) {
    	$scope.service = addtoCart;
    	// COUNT ITEM IN CART
    // identify this is your cart
    var newCartKey = store.get('userCartKey');
    $scope.bookInCart = {};
    var refCart = firebase.database().ref().child('carts/' + newCartKey);
    refCart.on('value', function(snapshot){
      if(newCartKey == null){$scope.countCart= 0 }
      $scope.bookInCart = snapshot.val();
      if($scope.bookInCart == null) { $scope.countCart = 0} else{
        $scope.countCart = Object.keys($scope.bookInCart).length;
      }
      $scope.$apply();
  });
  });
