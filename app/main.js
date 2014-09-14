require.config({
	baseUrl: './',
	paths: {
		'angular': './components/angular/angular',
		'angular-resource': './components/angular-resource/angular-resource',
		'domReady': './components/requirejs-domready/domReady',
		'ui.router': './components/angular-ui-router/release/angular-ui-router'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'ui.router': { deps: ['angular']},
		'angular-resource': { deps: ['angular']}
	}
});
	


require(['angular', 'routes/routes', 'domReady'], function(angular, mainRoutes, domReady)
{
    domReady(function () {
		document.getElementById( 'appContainer' ).className = 'loader';
		document.getElementById( 'appLoading' ).className = 'loader';
    });
	return angular.bootstrap(document, ["app"]);
});
