'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('AboutCtrl', ['$scope', 'auth', 'store', '$http', function ($scope, auth, store, $http) {
    $scope.auth = auth;

    $scope.logout = function() {
	  auth.signout();
	  store.remove('profile');
	  store.remove('token');
	  auth.isAuthenticated = false;
	}

    auth.profilePromise.then(function(profile) {
    	$scope.profile = profile;
  	});
  	
  }]);
