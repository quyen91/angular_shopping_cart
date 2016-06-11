var app = angular.module('bookapp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
	function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "views/home.html"
			})
			.state('check-out', {
				url: "/check-out",
				templateUrl: "views/check-out.html"
			})
			.state('furniture', {
				url: "/furniture",
				templateUrl: "views/furniture.html"
			})
			.state('login', {
				url: "/login",
				templateUrl: "views/login.html"
			})
			.state('mail', {
				url: "/mail",
				templateUrl: "views/mail.html"
			})
			.state('products', {
				url: "/products",
				templateUrl: "views/products.html"
			})
			.state('register', {
				url: "/register",
				templateUrl: "views/register.html"
			})
			.state('single', {
				url: "/single",
				templateUrl: "views/single.html"
			})
	}
]);

app.run(function($rootScope, $state) {
	$rootScope.$state = $state;
});

