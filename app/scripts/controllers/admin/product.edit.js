'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:AdminProductEditCtrl
 * @description
 * # AdminProductEditCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('AdminProductEditCtrl', function ($scope, auth, store, $http, $state, $stateParams) {
    
       // GET REALTIME CATEGORIES
    $scope.catelist = {};
    var refCate = firebase.database().ref('categories');
    refCate.on('value', function(snapshot){
      $scope.catelist = snapshot.val();
      $scope.$apply();
    });
      

    var ref1 = firebase.database().ref('books/' + $stateParams.id);
    $scope.book = {};
     ref1.on('value', function(snapshot){
      // alert(angular.toJson(snapshot.val()));
      $scope.book = snapshot.val();
      $scope.$apply();

    });
     
      // GET OLD CATEGORY BEFORE UPDATE
      firebase.database().ref('books/' + $stateParams.id).once('value').then(function(snapshot) {
        $scope.oldcate = snapshot.val().category;
        $scope.$apply();
      });
      

    $scope.updatebook = function(e){

      var ref = firebase.database().ref();
      var updates ={};
      
      $scope.book.user_id = store.get('profile').user_id;
      if($scope.photo){
        $scope.book.images = $scope.photo['base64'];
      }
      updates['/books/' + $stateParams.id] = $scope.book;
      ref.update(updates);

      // update categories
      var cateSet = {};
      var updateCategory = {};
      $scope.oldbook = {};
      cateSet.have = true;
      // DELETE BOOK IN OLDCATE
      var refBookCate = firebase.database().ref('categories/' + $scope.oldcate + '/books/'+ $stateParams.id);
      refBookCate.remove();
      updateCategory['/categories/' + $scope.book.category + '/books/'+ $stateParams.id] = cateSet;
      ref.update(updateCategory);

      if(e){
        alert("Failed to update!");
      }else{
        alert('Update Successfully!');
        $state.go('private.admin.product.show', {id: $stateParams.id})
      }
    }

  });
