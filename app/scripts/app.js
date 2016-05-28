'use strict';

/**
 * @ngdoc overview
 * @name angularShopingCartApp
 * @description
 * # angularShopingCartApp
 *
 * Main module of the application.
 */
angular
  .module('angularShopingCartApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'auth0',
    'angular-storage',
    'angular-jwt',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider) {
    // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/about");
  //
  // Now set up the states
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'AboutCtr'
    })
    .state('product', {
      url: "/product",
      templateUrl: "views/product.html",
      controller: 'ProductCtr'
    });
   
  });
