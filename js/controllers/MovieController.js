app.controller('MovieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get("./js/data/movies.json")
		.success(function(response){
			$scope.movies = response.movies;
			$scope.watch = $routeParams.title;
		});
	
}]);
