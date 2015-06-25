<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Transforma</title>
	<base href="/">
	<link rel="stylesheet" href="public/lib/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/lib/ionicons/css/ionicons.min.css">
	<link rel="stylesheet" href="public/lib/ngprogress/ngProgress.css">
	<link rel="stylesheet" href="public/app/css/app.css">
	<link rel="stylesheet" href="public/app/css/animations.css">

	<script src="public/lib/jquery/dist/jquery.min.js"></script>
	<script src="public/lib/angular/angular.min.js"></script>
</head>
<body ng-app="app">

	<!-- set the nav menu trigger -->
	<a href="" class="trigger" menu><i class="ion-navicon-round"></i></a>

	<!-- set the nav menu -->
	<div class="nav-menu" id="menu">
		<div class="col-sm-5">
			<img src="public/media/logo.png" alt="">
		</div>
		<div class="col-sm-7 wrapper">
			<div class="col-sm-4 item">
				<h4>Acerca de nosotros</h4>
				<a href="/">Nuestra filosofía</a>
				<a href="">Nuestra equipo</a>
				<a href="">Clientes</a>
				<a href="">Preguntas frequentes</a>
			</div>
			<div class="col-sm-4 item">
				<h4>¿Qué hacemos?</h4>
				<a href="">Acompañamiento</a>
				<a href="">Coaching ejecutivo individual</a>
				<a href="">Coacing grupal</a>
				<a href="">Coaching de equipos</a>
			</div>
			<div class="col-sm-4 item">
				<h4>Más</h4>
				<a href="/blog">Blog</a>
				<a href="/contact">Contacto</a>
			</div>
		</div>
	</div>

	<div ng-view class="view" scroll></div>
	
	<script src="public/lib/angular-route/angular-route.min.js"></script>
	<script src="public/lib/angular-animate/angular-animate.min.js"></script>
	<script src="public/lib/ngprogress/build/ngProgress.js"></script>
	<script src="public/app/js/scroll.js"></script>
	<script src="public/app/js/app.js"></script>
	<script src="public/app/js/controllers.js"></script>
	<script src="public/app/js/services.js"></script>
</body>
</html>