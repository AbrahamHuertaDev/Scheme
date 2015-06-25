app.directive('menu', function()
{
	return {
		link: function(scope, e, a)
		{
			angular.element(e).on('click', function()
			{
				angular.element('#menu').toggleClass('menu-open');

				if(angular.element('#menu').hasClass('menu-open'))
				{
					angular.element(e).html('<i class="ion-close"></i>');
				}
				else
				{
					angular.element(e).html('<i class="ion-navicon-round"></i>');
				}
			});
		}
	}
});

app.directive('scroll', function()
{
	return {
		link: function(scope, element, attrs)
		{
			$(element).niceScroll({
			    styler:"fb",
			    cursorcolor:"#36bcbe", 
			    cursorwidth: '8', 
			    cursorborderradius: '0', 
			    background: 'transparent', 
			    spacebarenabled:false,  
			    autohidemode: true,
			    cursorborder: '', 
			    zindex: '997'
			});
		}
	}
});