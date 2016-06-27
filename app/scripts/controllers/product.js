'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductCtrl', function ($scope, auth, store, $http, addtoCart) {

    // GET REALTIME CATEGORIES
    $scope.catelist = {};
    var refCate = firebase.database().ref('categories');
    refCate.on('value', function(snapshot){
      $scope.catelist = snapshot.val();

      angular.forEach($scope.catelist, function(value,key){
        // key is id CATEGORY 
        $scope.bookInCate = {};
        var refBookInCate = firebase.database().ref('categories/' + key + '/books');
        refBookInCate.on('value', function(snapshot){
          $scope.bookInCate = snapshot.val();
          $scope.count = Object.keys($scope.bookInCate).length;
          $scope.catelist[key].count = $scope.count;
          $scope.$apply();
        });
      });
      $scope.$apply();
    });

    $scope.resetBook = function(){
       var ref2 = firebase.database().ref('books');
       ref2.remove();
    };

    $scope.addtocart = function(e){
     var bookid = $(e.target).data('id');
      addtoCart.addtocart(bookid);
      }

    // GET NEW PRODUCT WITH LIMIT
    $scope.newproduct = {};
    var ref1 = firebase.database().ref('books').limitToLast(3);
    ref1.on('value', function(snapshot){
      // alert(angular.toJson(snapshot.val()));
      $scope.newproduct = snapshot.val();
      // $scope.count = Object.keys($scope.newproduct).length;
      // alert($scope.count)
      $scope.$apply();
    });
    
    
  });
