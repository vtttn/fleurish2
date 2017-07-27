angular.module('CreateCtrl', []).controller('CreateController', function($scope, $http) {

	// var URL = 'http://localhost:3000';
	var URL = 'https://fleurish.herokuapp.com';

		// onclick function for create event form
	$scope.createEvent = function(response){
		
		$http.post(URL+'/create-Event', $scope.newEvent).then(function(res){

			$('.alert').toggle();
		
			$scope.newEvent = {};

		});

	
	};

	$scope.close = function(){
		$('.alert').toggle();
	};

	
});