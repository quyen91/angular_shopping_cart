'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('ProductCtrl', function ($scope) {


     var rootRef = firebase.database().ref();


      $scope.book = {};
      $scope.test = 'sdsd';

      $scope.addnew = function(){
        alert('sdsd');
        
        var bookRef = firebase.database().ref('books').set({
          book4: {
            title: 'lam',
            author: 'diep'
          },
          book2: {
            title: "quyen",
            author: 'toi'
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
