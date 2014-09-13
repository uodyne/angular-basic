define([
	'modules/app', 
	'controllers/homeCtrl', 
	'controllers/loginCtrl'
], function(app)
{
	return app.config(function($stateProvider,$urlRouterProvider) {
	  $urlRouterProvider.otherwise("/")
	  $stateProvider
	    .state('home', {
	      url: "/",
	      views: {
	        "header": { templateUrl: './app/templates/header.html' },
	        "content": { 
				controller: 'homeCtrl',
				templateUrl: './app/views/home.html'	        
	        },
	        "footer": { templateUrl: './app/templates/footer.html' }
	      }
	    })
	    .state('login', {
	      url: "/login",
		  abstract: true,
	      views: {
	        "header": { templateUrl: './app/templates/header.html' },
	        "content": { 
	        	controller: 'loginCtrl',
				templateUrl: './app/views/login.html'
			},
	        "footer": { templateUrl: './app/templates/footer.html' }
	      }
	    })
	    .state('login.subs', {
    	 	url: '',
            views: {
                'menu@login': {
                    templateUrl: './app/views/login.menu.html'
                },
                'content@login': {
                    templateUrl: './app/views/login.content.html'
                }
            }
	    })
	}).run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
);

});