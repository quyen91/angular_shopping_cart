'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductByCateCtrl
 * @description
 * # ProductByCateCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductByCateCtrl', function ($scope, auth, store, $http, $state, $stateParams) {
    var cateID = $stateParams.id;

    var ref1 = firebase.database().ref('categories/' + cateID +  '/books');
      $scope.listIDBook = {};
      $scope.listbook = {};
      ref1.on('value', function(snapshot){
        // alert(angular.toJson(snapshot.val()));
        $scope.listIDBook = snapshot.val();
         
         angular.forEach($scope.listIDBook, function(value, key) {
          $scope.productPerCate ++;
          // key is bookID
          var refBook = firebase.database().ref('books/' + key);
          refBook.on('value', function(snapshot){
            $scope.onebook = {};
            $scope.onebook = snapshot.val();
            $scope.listbook[key] = $scope.onebook;
            $scope.$apply();
          });
         });
        // console.log($scope.listbook);
        $scope.$apply();

      });
      
});
