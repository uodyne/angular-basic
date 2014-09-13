define(['modules/app', 'factories/userFactory'], function(app)
{
	app.controller('homeCtrl', ['$scope', 'User', function($scope, User)
	{
		$scope.ctrl = "homeCtrl";
		$scope.users = User.getUsers();
	}]);
});