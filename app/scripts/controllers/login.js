'use strict';

/**
 * @ngdoc function
 * @name angularShopingCartApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularShopingCartApp
 */
angular.module('angularShopingCartApp')
  .controller('LoginCtrl', ['$scope', 'auth', function ($scope, auth) {
     $scope.auth = auth;
  

  //   $scope.login = function() {
  //     auth.signin({}, function (profile, id_token, access_token, state, refresh_token) {
  //       store.set('profile', profile);
  //       store.set('token', id_token);
  //       $location.path('/');
  //     }, function () {
  //       // TODO Handle when login fails
  //     });
  // }

  // $scope.signin = function() {
  //   auth.signin({}, function(profile, idToken, accessToken, state, refreshToken) {
  //     $location.path('/about')
  //   }, function(err) {
  //     console.log("Error :(", err);
  //   });
  // }


}]);
