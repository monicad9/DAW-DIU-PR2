function anadirListeners() {
	var activador_menu_responsivo = document.getElementById("menu-nav-display");
	var activador_login_responsivo = document.getElementById("form-display");

	activador_menu_responsivo.addEventListener("click", function() {
		var menu_responsivo = document.querySelector("#menu-nav-display + ul");

		if (!menu_responsivo.style.display || menu_responsivo.style.display == "none") {
			menu_responsivo.style.display = "block";
		} else {
			menu_responsivo.style.display = "none";
		}
	});

	activador_login_responsivo.addEventListener("click", function(){
		var login_responsivo = document.getElementById("nav-login-form");

		if (!login_responsivo.style.display || login_responsivo.style.display == "none") {
			login_responsivo.style.display = "block";
		} else {
			login_responsivo.style.display = "none";
		}
	});

	window.onresize = resetearEstilosMenu;
}

function resetearEstilosMenu() {
	var menu_responsivo = document.querySelector("#menu-nav-display + ul");
	var login_responsivo = document.getElementById("nav-login-form");
	menu_responsivo.style.display = null;
	login_responsivo.style.display = null;
}

window.onload = function() {
	anadirListeners();
}