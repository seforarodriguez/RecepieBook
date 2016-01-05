var app = angular.module("RecipeBook", ["ngRoute", "firebase", "naif.base64", "door3.css"])
app.config(function($routeProvider) {

		$routeProvider
			.when('/auth', {
				templateUrl:"partials/auth.html",
				controller:'loginCtrl',
				css: '/styles/auth.css'
			})
			.when('/mainPage', {
      	templateUrl: "partials/main.html",
      	controller: "mainCtrl",
      	css: '/styles/main.css'
    	})
    	.when('/filteredSearch', {
    		templateUrl: "partials/searched.html",
    		controller: "mainCtrl",
    		css: '/styles/main.css'
    	})
			.otherwise('auth')
});
