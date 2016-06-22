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
    var ref1 = firebase.database().ref('books/' + $stateParams.id);
    $scope.book = {};
     ref1.on('value', function(snapshot){
      // alert(angular.toJson(snapshot.val()));
      $scope.book = snapshot.val();
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
      if(e){
        alert("Failed to update!");
      }else{
        alert('Update Successfully!');
        $state.go('private.admin.product.show', {id: $stateParams.id})
      }
    }

  });
