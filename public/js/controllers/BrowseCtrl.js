// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('BrowseCtrl', []).controller('BrowseController', function($scope, $http) {

	// populates data from DB
	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	// dropdown of event type
	$scope.types = ["Art" , "Cause" , "Crafts" , "Dance" , "Drink" , "Film" , "Fitness" , "Food" , "Game" , "Health" , "Home" , "Literature" , "Music" , "Networking" , "Other" , "Party" , "Recreation" , "Religion" , "Shopping" , "Theater" , "Wellness"];

	// dropdown of cities to select/filter
	$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];

	// dropdown of admission price
	$scope.admissions = ["Free!" , "Under $10" , "Under $25" , "Under $50" , "$75 and over"];

	// click function for city filter
	$scope.filterCitybtn = function(){
		var selectedCity = $scope.selectedCity;
		// var Events = $scope.events;
		console.log(selectedCity);
		// console.log(Events.find({ city:"New Orleans"}));
	};

	$scope.filterTypebtn = function(){
		console.log($scope.selectedType);
	};

	$scope.filterAdmissionbtn = function(){
		var selectedAdmission = $scope.selectedAdmission;
		console.log(selectedAdmission);

	};

	$scope.filterBy = function(x){
		$scope.filtering = x;
		console.log(x);
	}

});