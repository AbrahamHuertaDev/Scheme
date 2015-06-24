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

	ngProgress.color('#e74c3c');

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

		if(jQuery('.sidebar').hasClass('sidebar-open'))
		{
			angular.element('.sidebar').toggleClass('sidebar-open');
			angular.element('.overlay').toggleClass('sidebar-open');
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

	$locationProvider.html5Mode(true);
});