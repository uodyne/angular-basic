define(['modules/app'], function(app)
{
	app.controller('mainCtrl', ['$scope', '$http', function($scope,$http)
	{
		$scope.hasPendingRequests = function()
		{
			return $http.pendingRequests.length > 0;
		}
	}]);
});