angular.module("Users", [])
	.controller("UsersCtrl", function($scope) {

		$scope.infos = [];
		$scope.user = {username: '', email: '', age:''};
		$scope.soumission = function () {
				$scope.infos.push($scope.user);
				$scope.user = {username: '', email: '', age:''};
			};
	});