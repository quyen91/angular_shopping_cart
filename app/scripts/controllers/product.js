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


      var ref1 = firebase.database().ref('books');


      $scope.book = {};
      $scope.category = {};
      $scope.test = 'sdsd';
      $scope.listbook = {};

      ref1.on('value', function(snapshot){
        // alert(angular.toJson(snapshot.val()));
        $scope.listbook = snapshot.val();
        $scope.$apply();

      });
      

      $scope.resetBook = function(){
         var ref2 = firebase.database().ref('books');
         ref2.remove();
      };


      $scope.addbook = function(e){
        var ref = firebase.database().ref();
        // get key
        var newBookKey = firebase.database().ref().child('books').push().key;
        var updates ={};
        $scope.book.user_id = store.get('profile').user_id;
        updates['/books/' + newBookKey] = $scope.book;
        ref.update(updates);

        if(e) {
          alert("Not save");
        }
        else{
          
        }

      }

      $scope.addtocart = function(e){
       var bookid = $(e.target).data('id');
        addtoCart.addtocart(bookid);
      }

     
    // GET REALTIME CATEGORIES
    $scope.catelist = {};
    var refCate = firebase.database().ref('categories');
    refCate.on('value', function(snapshot){
      $scope.catelist = snapshot.val();
      $scope.$apply();
    });
      
  });
