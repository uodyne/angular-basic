define(["modules/app"], function(app)
{
	app.factory('User', ['$resource', function($resource)
	{
		return $resource("app/resources/contacts.json", {},
		{
			getUsers: {
				method: "GET",
				isArray: true
			}
		});
	}]);
});