angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	// var URL = 'http://localhost:3000';
	var URL = 'https://fleurish.herokuapp.com';


	// dropdown of event type
	$scope.types = ["Art" , "Cause" , "Crafts" , "Dance" , "Drink" , "Film" , "Fitness" , "Food" , "Game" , "Health" , "Home" , "Literature" , "Music" , "Networking" , "Other" , "Party" , "Recreation" , "Religion" , "Shopping" , "Theater" , "Wellness"];

	// dropdown of cities to select/filter
	$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];

	// dropdown of admission price
	$scope.admissions = ["Free!" , "Under $10" , "Under $25" , "Under $50" , "$75 and over"];

	// click function for city filter
	$scope.indexCitybtn = function(){
		var selectedCity = $scope.selectedCity;
		// var Events = $scope.events;
		console.log(selectedCity);
		// console.log(Events.find({ city:"New Orleans"}));
	};

	// click function for type filter
	$scope.indexTypebtn = function(){
		console.log($scope.selectedType);
	};

	// click function for admission filter
	$scope.indexAdmissionbtn = function(){
		var selectedAdmission = $scope.selectedAdmission;
		console.log(selectedAdmission);
	};


	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

});