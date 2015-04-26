	
	/********************************************************************************************************************
	 * Route controller/provider                                                                                        *
	 * We use angular route provider for UI and sails for services                                                      *
	 ********************************************************************************************************************/

	angular.module('ItemModule').config(
	  
	  function($routeProvider, $locationProvider) {
	  	//$locationProvider.html5Mode(false);
		$routeProvider
		.when('/', //after login this is my landing page
					{
						templateUrl: 'upload.html',
						controller: 'ItemController'
					}
			)
		
  		.otherwise(
  					{
  						templateUrl: '404.html'
  					}
  		)	  
	});
