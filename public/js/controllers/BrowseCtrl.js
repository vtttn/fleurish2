// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('BrowseCtrl', []).controller('BrowseController', function($scope, $http) {

	// populates data from DB
	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	// dropdown of cities to select/filter
	$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];
	$scope.citySelect = null;
	// click function for city filter
	$scope.filterCitybtn = function(){
		$scope.selectedCity;
		console.log(selectedCity);

	};




});