/**
* Set the angular module named innova
*/
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngProgress']);

/**
* Create a function to easy render the views
*/
var render = function(path)
{
	return {
		templateUrl: 'public/templates/' + path + '.html',
		controller: path
	}
}

/**
* Set the run function to change progress status 
*/
app.run(function($rootScope, ngProgress)
{

	ngProgress.color('#36bcbe');

	$rootScope.$on('$routeChangeStart', function()
	{
		ngProgress.start();
	});

	$rootScope.$on('$routeUpdate', function()
	{
		ngProgress.start();
	});

	$rootScope.$on('$routeChangeSuccess', function()
	{
		ngProgress.complete();

		if(angular.element('#menu').hasClass('menu-open'))
		{
			angular.element('#menu').toggleClass('menu-open');
			angular.element('[menu]').html('<i class="ion-navicon-round"></i>');
		}

	});

	$rootScope.$on('$routeChangeError', function()
	{
		ngProgress.stop();
	});
});

/**
* Set the app router
*/
app.config(function($routeProvider, $locationProvider)
{
	$routeProvider.when('/', render('home'));
	$routeProvider.when('/whoops', render('whoops'));

	$routeProvider.otherwise('/whoops');

	$locationProvider.html5Mode(true);
});