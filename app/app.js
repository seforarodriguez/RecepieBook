var app = angular.module("RecipeBook", ["ui.router", "firebase"])
app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/main-page");

		$stateProvider
			.state('#/auth', {
			url: '/auth',
			templateUrl:"partials/auth.html",
			controller:'loginCtrl'
			})
			.state('main-page', {
      url: "/main-page",
      templateUrl: "partials/main.html",
      controller: "mainCtrl"
    })
});
