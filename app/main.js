require.config({
	baseUrl: './',
	paths: {
		'angular': './components/angular/angular',
		'angular-resource': './components/angular-resource/angular-resource',
		'ui.router': './components/angular-ui-router/release/angular-ui-router'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'ui.router': { deps: ['angular']},
		'angular-resource': { deps: ['angular']}
	}
});

require(['angular', 'routes/routes'], function(angular, mainRoutes)
{
	setTimeout(function() {
		document.getElementById( 'appContainer' ).className = 'loader';
		document.getElementById( 'appLoading' ).className = 'loader';
	},100);
	return angular.bootstrap(document, ["app"]);
});