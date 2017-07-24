// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('BrowseCtrl', []).controller('BrowseController', function($scope, $http) {

	$http.get(URL+"/all-event").then(function(response){
		
		$scope.events = response.data;
	
	});

});