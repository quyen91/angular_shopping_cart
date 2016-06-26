'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:AdminCategoryCtrl
 * @description
 * # AdminCategoryCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('AdminCategoryCtrl', function ($scope, auth, store, $http, $state, $stateParams) {

    $scope.listcate = {};
    var refAll =  firebase.database().ref('categories');
    refAll.on('value', function(snapshot){
      $scope.listcate = snapshot.val();
      $scope.$apply();
    });

    $scope.addnew = function(e){
      var ref = firebase.database().ref();
        // get key
        var newCategoryKey = firebase.database().ref().child('categories').push().key;
        var updates ={};
        updates['/categories/' + newCategoryKey] = $scope.cate;
        ref.update(updates);
        $scope.cate ={};
    }
    $scope.delete = function(e){
      var cateID = $(e.target).data('id');
      var refDelete = firebase.database().ref('categories/' + cateID);

      // FIND ALL BOOK IN CATEGORY AND REMOVE CATEGORY FIELD
      refDelete.child('books').on('value', function(snapshot){
        $scope.bookInCate = snapshot.val();
        angular.forEach($scope.bookInCate, function(value, key) {
          // key is book_id
          alert(key);
          var refUpdate = firebase.database().ref();
          firebase.database().ref('books/' + key).on('value', function(snapshot){
            var updates = {};
            $scope. booktoUpdate = snapshot.val();
            $scope.booktoUpdate.category = null;
            updates['/books/' + key] = $scope.booktoUpdate;
            refUpdate.update(updates);
            $scope.$apply();
          });
          
        });
        $scope.$apply();
      });

      refDelete.remove();
      store.remove('tempCartTitle');
      
     
    }

  });
