// var URL = 'http://localhost:3000';
var URL = 'https://fleurish.herokuapp.com';

angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

		$scope.locations = ["New Orleans" , "Metairie" , "Gretna" , "Kenner" , "Avondale" , "Belle Chasse" , "Chalmette" , "Elmwood" , "Harahan" , "Harvey" , "Marrero"];

	$scope.filterCitybtn = function(){
		var selectedCity = $scope.selectedCity;
		console.log(selectedCity);
	};
});