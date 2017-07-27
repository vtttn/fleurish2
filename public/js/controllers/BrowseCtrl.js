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

	// click function for type filter
	$scope.filterTypebtn = function(){
		console.log($scope.selectedType);
	};

	// click function for admission filter
	$scope.filterAdmissionbtn = function(){
		var selectedAdmission = $scope.selectedAdmission;
		console.log(selectedAdmission);
	};

	// plus & minus of fleur click function + add & change to DB
	$scope.plusOne = function(index, fleurs, response) { 
  	var results = $scope.events[index].fleur ++;
  	console.log(index);
		console.log(fleurs);
		var tempobj = {'id': index};
		console.log(tempobj);


		$http.post(URL+"/edit-event", tempobj).then(function(err,response){
			// if(err){
			// 	console.log("there is an error!")
			// }else{
				console.log(response);
			// }

			console.log(fleurs)
		})

	};
	
	$scope.minusOne = function(index) { 
  		var results = $scope.events[index].fleur --;
  		console.log(results);
	};


	// click function to delete
	// $scope.deleteEvent = function(index){

	// 	console.log(index)

	// 	$http.post(URL+"/delete-event", index).then(function(response){

	// 	})
	// }


	// $http.post(URL+"/edit-event").then(function(response){
	// 		// var donkey = $scope.events = response.data;
	// 		// console.log(donkey);
	// 		console.log(response.data)
	// 	});


});