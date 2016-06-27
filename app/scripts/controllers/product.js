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
      $scope.$apply();
    });
     
    
  });
