'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductListCtrl
 * @description
 * # ProductListCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductListCtrl', function ($scope, auth, store, $http) {




    
  var ref1 = firebase.database().ref('books');
  $scope.listbook = {};

  ref1.on('value', function(snapshot){
  // alert(angular.toJson(snapshot.val()));
    $scope.listbook = snapshot.val();
    $scope.key = Object.keys($scope.listbook);
    $scope.totalItem = Object.keys($scope.listbook).length;
    $scope.$apply();
  });
      
  });
