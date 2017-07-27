angular.module('BrowseService', []).service('New', ['$http', function($http, $scope, New) {

	var URL = 'http://localhost:8080';
// var URL = 'https://fleurish.herokuapp.com';

	return {

	editEvent: function(tempobj){
		return $http.post(URL+"/edit-event", tempobj)
	}

			}

}]);