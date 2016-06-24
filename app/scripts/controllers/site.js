'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:SiteCtrl
 * @description
 * # SiteCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('SiteCtrl', function ($scope, auth, store, addtoCart) {
    	$scope.service = addtoCart;
  });
