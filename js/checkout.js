
// Exercise 7, nivel 1
function validate() {
	//rehacer con array de objetos, para poner un bucle con if en vez de tantos if.
	// Get the input fields
	
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fLastName = document.getElementById("fLastN");
	let fAdress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");
	let fPassword = document.getElementById("fPassword");

	// Get the error elements. del div en donde se indica que el campo no es válido
	//cuando este bien cambiaré la clase y el mensaje-*/
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	let errorLastName = document.getElementById("errorLastN");
	let errorAdress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
	let errorPassword = document.getElementById("errorPassword");


	let expReg = {
		name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
		email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,//no consigo que me salga esta expReg
		adress: /^[a-zA-ZÀ-ÿ\s]{3,40}\s+\d+/,
		lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
		password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
		phone: /^(\d\s?){9,11}$/,
	}
	//validacion del nombre 
	let nombreValido = expReg.name.test(fName.value);
	console.log(fName.value);

	if (nombreValido == false) {//el nombre no es valido
		fName.style.borderColor = "red";
		errorName.style.display = "block";
		error += 1;
	}
	else {
		fName.style.borderColor = "green";
		errorName.style.display = "none";
			}

	//validacion del apellido
	console.log(fLastN.value);
	let apellidoValido = expReg.lastName.test(fLastN.value);
	if (apellidoValido == false) {//el nombre no es válid
		fLastName.style.borderColor = "red";
		errorLastName.style.display = "block";
		error += 1;
	}
	else {
		fLastName.style.borderColor = "green";
		errorLastName.style.display = "none";
			}


	//validacion del email 
	console.log(fEmail.value);
	let emailValido = expReg.name.test(fEmail.value);
	if (emailValido == false) {//el nombre no es válid
		fEmail.style.borderColor = "red";
		errorEmail.style.display = "block";
		error += 1;
	}
	else {
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "none";
	}

	//validacion del password 
	console.log(fPassword.value);
	let passwordValido = expReg.name.test(fPassword.value);
	if (passwordValido == false) {//el nombre no es válid
		fPassword.style.borderColor = "red";
		errorPassword.style.display = "block";
		error += 1;
	}
	else {
		fPassword.style.borderColor = "green";
		errorPassword.style.display = "none";
	}

	//validacion del nombre 
	console.log(fPhone.value);
	let phoneValido = expReg.name.test(fName.value);
	if (phoneValido == false) {//el nombre no es válid
		fPhone.style.borderColor = "red";
		errorPhone.style.display = "block";
		error += 1;
	}
	else {
		fPhone.style.borderColor = "green";
		errorPhone.style.display = "none";
	}

	//validacion del nombre 
	console.log(fAdress.value);
	let adressValido = expReg.name.test(fName.value);
	if (adressValido == false) {//el nombre no es válid
		fAdress.style.borderColor = "red";
		errorAdress.style.display = "block";
		error += 1;
	}
	else {
		fAdress.style.borderColor = "green";
		errorAdress.style.display = "none";
	}
	formSaver();
}

function formSaver() {
	if (error > 0) {
		alert("Error, all the fields might be filled");
		//si los campos no son correctos, los mantengo para que se corrijan 
	} else {//si son correcgtos los borro e indico que se ha enviado el formulario
		alert("OK, correct submited");
		fName.value = "";
		fLastName.value = "";
		fAdress.value = "";
		fPhone.value = 0;
		fEmail.value = "";
		fPassword = "";
		document.querySelectorAll("valid-feedback").display = "none";
		document.querySelectorAll("invalid-feedback").display = "none";
	}
}

