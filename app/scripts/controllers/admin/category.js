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
      refDelete.remove();
    }

  });
