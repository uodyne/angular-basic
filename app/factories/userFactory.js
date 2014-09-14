define(["modules/app"], function(app)
{
	app.factory('User', ['$resource', function($resource)
	{
		return $resource("resources/contacts.json", {},
		{
			getUsers: {
				method: "GET",
				isArray: true
			}
		});
	}]);
});