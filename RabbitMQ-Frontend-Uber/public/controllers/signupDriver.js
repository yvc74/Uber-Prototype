var app = angular.module('signupDriver', []);
app.controller("signupDriverController", signupCustomerController);
signupCustomerController.$inject = [ '$scope', '$http', '$window'];
function signupCustomerController($scope, $http, $window) {
			
	$scope.signup = function() {
		$http({
			method : 'POST',
			url : '/bk_driver_signup',
			data : {
				"ssn" : $scope.ssn,
				"email" : $scope.email,
				"password": $scope.password,
				"firstname" : $scope.firstname,
				"lastname" : $scope.lastname,
				"mobileno" : $scope.mobileno,
				
				"postalcode" : $scope.postalcode
			}
		}).success(function(response) {
			if (response.result != "error") {
				alert("Success");
			} else {
			}			
		}).error(function(error) {
			console.log(error);
		});
	};
}