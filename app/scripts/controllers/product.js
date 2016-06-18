'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductCtrl', function ($scope, auth, store, $http) {


      var ref1 = firebase.database().ref('books');


      $scope.book = {};
      $scope.category = {};
      $scope.test = 'sdsd';
      $scope.author = {};

      ref1.on('value', function(snapshot){
        // alert(angular.toJson(snapshot.val()));
        $scope.author = snapshot.val();
        $scope.$apply();

      });
      // ref1.on('child_changed', function(snapshot){
      //   alert('realtime');
      // });

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
      $scope.addcategory = function(){
        var categoryRef = firebase.database().ref('categories').set({
          cate1: {
            name: "Comic 2"
          },
          cate2: {
            name: 'TextBook 2'
          }
        });
      }
      
      // $scope.addnew = function(){
      //   var usersRef = ref.child("books");
      //   usersRef.update({
      //     a: {
      //       date_of_birth: "June 23, 1912",
      //       full_name: "Alan Turing"
      //     },
      //     test2: {
      //       date_of_birth: "December 9, 1906",
      //       full_name: "Change"
      //     }
      //   });
      // };
      // $scope.addbook = function(){
      //   var usersRef = ref.child("books");
      //   usersRef.set({
      //     a: {
      //       name: "June 23, 1912",
      //       author: "Alan Turing",
      //       category: {
      //         vanhoc: true
      //       }
      //     },
      //     b: {
      //       name: "December 9, 1906",
      //       author: "Change",
      //       category: {
      //         toan: true
      //       }
      //     }
      //   });
      // };
      
  });
