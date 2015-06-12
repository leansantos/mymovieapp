var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl:'partials/home.html',
			controller:'HomeController'

		})
		.when('/movies', {
			templateUrl:'partials/movies.html',
			controller:'MovieController'
		})
		.when('/movies/watch/:title', {
			templateUrl:'partials/watch.html',
			controller:'MovieController'
		})
		.when('/tv-series', {
			templateUrl:'partials/tv-series.html',
			controller:'SeriesController'
		})

		.when('/anime', {
			templateUrl:'partials/anime.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);





