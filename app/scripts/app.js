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
  $urlRouterProvider.otherwise("/error");
  //
  // Now set up the states
  $stateProvider
  .state('main', {
      url: "/main",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'AboutCtrl',
      data: {
        requiresLogin: true
      }
    })
    .state('product', {
      url: "/product",
      templateUrl: "views/product.html",
      controller: 'ProductCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: 'LoginCtrl'
    })
    .state('error', {
      url: "/error",
      templateUrl: "404.html"
    });


    authProvider.init({
        domain: 'top3.auth0.com',
        clientID: 'jJZRo0j53V0ULwoI6KSRnYP6aV0ghqc2',
        loginUrl: '/login',
        loginState: 'login'
      });

   authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
        console.log("Login Success");
        profilePromise.then(function(profile) {
          store.set('profile', profile);
          store.set('token', idToken);
        });
        $location.path('/about');
  });

  authProvider.on('loginFailure', function() {
    alert("Error");
  });

  authProvider.on('authenticated', function($location) {
    console.log("Authenticated");

  });
  authProvider.on('logout', function($location) {
      $location.path('/login');

  });

  

      


   
})
.run(function($rootScope, $state, auth, jwtHelper, $location, store) {
 

    $rootScope.$on('$locationChangeStart', function() {
    // Get the JWT that is saved in local storage
    // and if it is there, check whether it is expired.
    // If it isn't, set the user's auth state
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      }
    }
    else {
      // Otherwise, redirect to the home route
      $location.path('/about');
    }
  });

});