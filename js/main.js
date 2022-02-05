$(document).ready(function(){

	//Slider

	if(window.location.href.indexOf('index') > -1){

		$('.galeria').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 1200,
			responsive: true,
			pager: true
		});

	}


	//Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
		{
			title: 'Mi primer proyecto',
			date: 'Publicado el dia sábado 29 de enero del 2022' /* + moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")*/,
			content: 'Este proyecto lo realicé junto al curso Master en JS de la plataforma Udemy, donde aprendí las tecnologías que usé para el mismo de la mano de Victor Robles. Es un diseño para una página web donde se pueden adaptar muchas cosas, pero a primera vista pareciera un sitio web dedicado a postear artículos, ya sea siguiendo algún tema en específico, o de temas variados.'
		},
			{
			title: 'Mi formación',
			date: 'Publicado el dia sabado 29 de enero del 2022' /*+ moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")*/,
			content: 'Mi inicio en este mundo se dio cuando en plena pandemia 2020, al estar encerrado todo el día en mi casa decidí aprender cosas nuevas de forma autodidacta. De esta decisión fue que empecé a investigar qué tecnologías/actividades me gustarían aprender.'
		},
			{
			title: 'Prueba de titulo 3',
			date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio non arcu blandit dapibus. Nulla vitae congue urna, eu feugiat nibh. Curabitur et hendrerit ligula. Integer consequat pulvinar nulla eu commodo. Proin eget neque libero. Fusce posuere sodales arcu, non convallis lacus tristique et. Sed nulla nisl, vulputate quis gravida at, pellentesque sed lacus.'
		},
			{
			title: 'Prueba de titulo 4',
			date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio non arcu blandit dapibus. Nulla vitae congue urna, eu feugiat nibh. Curabitur et hendrerit ligula. Integer consequat pulvinar nulla eu commodo. Proin eget neque libero. Fusce posuere sodales arcu, non convallis lacus tristique et. Sed nulla nisl, vulputate quis gravida at, pellentesque sed lacus.'
		},
			{
			title: 'Prueba de titulo 5',
			date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio non arcu blandit dapibus. Nulla vitae congue urna, eu feugiat nibh. Curabitur et hendrerit ligula. Integer consequat pulvinar nulla eu commodo. Proin eget neque libero. Fusce posuere sodales arcu, non convallis lacus tristique et. Sed nulla nisl, vulputate quis gravida at, pellentesque sed lacus.'
		},
			{	
			title: 'Prueba de titulo 6',
			date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio non arcu blandit dapibus. Nulla vitae congue urna, eu feugiat nibh. Curabitur et hendrerit ligula. Integer consequat pulvinar nulla eu commodo. Proin eget neque libero. Fusce posuere sodales arcu, non convallis lacus tristique et. Sed nulla nisl, vulputate quis gravida at, pellentesque sed lacus.'
		},
		]

		posts.forEach((item, index) =>{
			var post = `
				<article class="post">
							<h2>${item.title}</h2>
							<span class="date">${item.date}</span>
							<p>
								${item.content}
							</p>
							<a href="leer-mas.html" class="button-more">Leer más</a>
						</article>
			`;

			$('#posts').append(post);

		});
}
	
	//Boton para leer mas


	//Selector de tema
	var theme = $('#theme');

	$('#to-green').click(function(){
		theme.attr("href", "css/green.css");
		localStorage.setItem('theme', "theme-green");
		console.log("Estoy verde");
	});

	$('#to-red').click(function(){
		theme.attr("href", "css/red.css");
		localStorage.setItem('theme', "theme-red");
		console.log("Estoy rojo");
	});

	$('#to-blue').click(function(){
		theme.attr("href", "css/blue.css");
		localStorage.setItem('theme', "theme-blue");
		console.log("Estoy azul");
	});

	var actual_theme = localStorage.getItem('theme');
	if(actual_theme == "theme-green"){
		theme.attr("href", "css/green.css");
	}else if(actual_theme == "theme-red"){
		theme.attr("href", "css/red.css");
	}else if(actual_theme == "theme-blue"){
		theme.attr("href", "css/blue.css");
	}

	//Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Log-in falso
	var caja_login = $('#login').submit(function(){
		var form_name = $('#form_name').val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var login_parrafo = $('#login');
		login_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
		login_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

		caja_login.hide();
		login_parrafo.show();

		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){

			var reloj = moment().format("h:mm:ss a");
			$("#reloj").html(reloj);

		}, 1000)

	}

	//Validacion
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy',
			changeMonth: true,
			changeYear: true,
		});

		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
}
	
	//Boton leer mas
	if(window.location.href.indexOf('leer-mas') > -1){
		$(".leer-mas-acordeon").accordion();
	}

	//Cambiar color al boton entrar
	var boton_entrar = $('#boton_entrar');
	boton_entrar.hover(function(){
		$(this).css('background','pink');
	});

	boton_entrar.mouseout(function(){
		$(this).css('background', 'lightgrey');
	});

	//Crear cuenta (sign-up)
	//Cambiar el color al boton sign up
	var boton_sign_up = $('#boton-sign-up');
	boton_sign_up.hover(function(){
		$(this).css('background','pink');
	});

	boton_sign_up.mouseout(function(){
		$(this).css('background', 'lightgrey');
	});

	//Formulario para crear cuenta


	if(window.location.href.indexOf('sign-up') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy',
			changeMonth: true,
			changeYear: true,
		});

		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
}
});