'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductShowCtrl
 * @description
 * # ProductShowCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductShowCtrl', function ($scope, auth, store, $http, $state, $stateParams) {
  	var ref1 = firebase.database().ref('books/' + $stateParams.id);
    $scope.bookid = $stateParams.id;
    $scope.book_details = {};

    ref1.on('value', function(snapshot){
      // alert(angular.toJson(snapshot.val()));
      $scope.book_details = snapshot.val();
      $scope.$apply();

    });
    
  });
