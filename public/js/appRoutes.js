angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'NerdController'
		})

		.when('/browse', {
			templateUrl: 'views/browse.html',
			controller: 'BrowseController'	
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'	
		})

		.when('/getapp', {
			templateUrl: 'views/getapp.html',
			controller: 'GetController'	
		});

	$locationProvider.html5Mode(true);

}]);