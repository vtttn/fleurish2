// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('BrowseCtrl', []).controller('BrowseController', function($scope, $http) {

	// populates data from DB
	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	// dropdown of event type
	$scope.types = ["art" , "cause" , "crafts" , "dance" , "drink" , "film" , "fitness" , "food" , "game" , "health" , "home" , "literature" , "music" , "networking" , "other" , "party" , "recreation" , "religion" , "shopping" , "theater" , "wellness"];

	// dropdown of cities to select/filter
	$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];
	// $scope.selectedCity = null;

	// dropdown of admission price
	$scope.admissions = ["Free!" , "Under $10" , "Under $25" , "Under $50" , "$75 and over"];
	
	// click function for city filter
	$scope.filterCitybtn = function(){
		// $scope.selectedCity;
		console.log($scope.selectedCity);

	};

	$scope.filterTypebtn = function(){};
	$scope.filterCitybtn = function(){};
	$scope.filterAdmissionbtn = function(){};

});