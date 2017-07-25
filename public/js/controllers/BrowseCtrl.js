// var URL = 'http://localhost:8080';
var URL = 'https://fleurish.herokuapp.com';

angular.module('BrowseCtrl', []).controller('BrowseController', function($scope, $http) {

	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	$scope.types = ["art" , "cause" , "crafts" , "dance" , "drink" , "film" , "fitness" , "food" , "game" , "health" , "home" , "literature" , "music" , "networking" , "other" , "party" , "recreation" , "religion" , "shopping" , "theater" , "wellness"];
	$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];
	$scope.admissions = ["Free" , "Under $10" , "Under $25" , "Under $50" , "$75 and over"];
	$scope.citySelect = null;

		// {id: 1, value: "Metairie"},
		// {id: 2, value: "Gretna"}, 
		// {id: 3, value: "Kenner"}, 
		// {id: 4, value: "Avondale"}, 
		// {id: 5, value: "Belle Chasse"}
		// {id: 6, value: "Chalmette"},
		// {id: 7, value: "Elmwood"}, 
		// {id: 8, value: "Harahan"}, 
		// {id: 9, value: "Harvey"}, 
		// {id:10, value: "Marrero"}

	$scope.filterTypebtn = function(){};
	$scope.filterCitybtn = function(){};
	$scope.filterAdmissionbtn = function(){};

});