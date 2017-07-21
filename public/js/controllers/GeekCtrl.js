// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('GeekCtrl', []).controller('GeekController', function($scope, $http) {

		$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
		console.log("i am here!");
	});

	// onclick function for create event form
	$scope.createEvent = function(response){
		
		$http.post(URL+'/create-Event', $scope.newEvent).then(function(res){
			// $scope.$apply();
		});

		$('.alert').toggle();
		
		$scope.newEvent = {};

		
	};

});