define([
	'modules/app', 
	'controllers/homeCtrl', 
	'controllers/loginCtrl'
], function(app)
{
/*	return app.config(['$routeProvider',function($routeProvider) 
	{
		$routeProvider.when("/", {
			controller: 'homeCtrl',
			templateUrl: './app/views/home.html'
		})
		.when("/login", {
			controller: 'loginCtrl',
			templateUrl: './app/views/login.html'
		});
	}]); */
	return app.config(function($stateProvider) {
	  $stateProvider
	    .state('home', {
	      url: "/",
	      views: {
	        "cabecera": { templateUrl: './app/templates/header.html' },
	        "contenido": { 
				controller: 'homeCtrl',
				templateUrl: './app/views/home.html'	        
	        },
	        "pie": { templateUrl: './app/templates/pie.html' }
	      }
	    })
	    .state('login', {
	      url: "/login",
	      views: {
	        "cabecera": { templateUrl: './app/templates/header.html' },
	        "contenido": { 
	        	controller: 'loginCtrl',
				templateUrl: './app/views/login.html'
			},
	        "pie": { templateUrl: './app/templates/pie.html' }
	      }
	    })
	});

});