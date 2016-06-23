'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:AdminProductListCtrl
 * @description
 * # AdminProductListCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('AdminProductListCtrl', function ($scope, auth, store, $http, $state, $stateParams) {

  	  var ref1 = firebase.database().ref('books');
      
// sssss
      $scope.book = {};
      $scope.category = {};
      $scope.test = 'sdsd';
      $scope.listbook = {};


      ref1.on('value', function(snapshot){
        // alert(angular.toJson(snapshot.val()));
        $scope.listbook = snapshot.val();
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
        $scope.book.images = $scope.photo['base64'];
        updates['/books/' + newBookKey] = $scope.book;
        ref.update(updates);

        if(e) {
          alert("Not save");
        }
        else{
        	  alert('add new successfully');
            $state.go('private.admin.product.list');	 
        }

      }

      $scope.deletebook = function(e){
        var bookid = $(e.target).data('id');
        var refDelete = firebase.database().ref('books/' + bookid);
        if(confirm('Are you sure to delete?')){
           refDelete.remove();
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
   
  });
