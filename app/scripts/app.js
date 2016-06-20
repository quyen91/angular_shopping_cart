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
    'auth0',
    'angular-storage',
    'angular-jwt',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'authProvider', '$httpProvider', '$locationProvider',
  'jwtInterceptorProvider', function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider) {


  $urlRouterProvider.otherwise("/site");
  // -----------------------------------------------
  // ------------- PRODUCT ROUTER -----------------
  $stateProvider
  .state('public', {
    abstract: true,
    template: "<ui-view/>"
  })
  .state('public.site', {
    url: '/site',
    // controller: 'SiteCtrl',
    templateUrl: 'views/products/_site.html'
  })
  .state('public.site.home', {
    url: '/home',
    templateUrl: 'views/products/_home.html'
  })
  .state('public.site.product', {
    url: '/product',
    templateUrl: 'views/products/_product.html'
  })
  .state('public.site.product.list', {
    url: '/list',
    templateUrl: 'views/products/_list_product.html'
  })
   .state('public.site.product.details', {
    url: '/details',
    templateUrl: 'views/products/_product_details.html'
  })
  .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'AboutCtrl',
      data: {
        requiresLogin: true
      }
    })
    // .state('product', {
    //   url: "/product",
    //   templateUrl: "views/product.html",
    //   controller: 'ProductCtrl'
    // })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: 'LoginCtrl'
    })
    .state('error', {
      url: "/error",
      templateUrl: "404.html"
    });

    // --------------------------------------------------
    // ------------------- ADMIN ROUTER -----------------
    $stateProvider
    .state('private', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        requiresLogin: true
      }
    })
    .state('private.admin', {
      url: '/admin',
      templateUrl: 'views/admin/_site.html' 
    })
    .state('private.admin.dashboard', {
      url: '/dashboard',
      templateUrl: 'views/admin/_home.html' 
    })
    .state('private.admin.product', {
      url: '/product',
      templateUrl: 'views/admin/products/_layout.html'
    })
    .state('private.admin.product.new', {
      url: '/new',
      templateUrl: 'views/admin/products/_new.html',
      controller: 'AdminProductListCtrl'
    })
    .state('private.admin.product.list', {
      url: '/list',
      templateUrl: 'views/admin/products/_list.html',
      controller: 'AdminProductListCtrl'
    })
     .state('private.admin.product.show', {
      url: '/show',
      templateUrl: 'views/admin/products/_show.html'
    });

    
    // -------------------------------------------------
    
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
      $location.path('/site');

  });


   
}])
.run(['$rootScope', '$state', 'auth', 'jwtHelper', '$location', 'store' ,function($rootScope, $state, auth, jwtHelper, $location, store) {
 

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
      $location.path('/site');
    }
  });

}]);