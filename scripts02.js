
var estudiante =[];

estudiante.push(["laura", "femenino", 26, "Salinas", "true", "java"]);
estudiante.push(["manuel", "masculino", 36, "Libertad", "true", "c++"]);
estudiante.push(["monica", "femenino", 46, "Playas", "true", "pascal"]);
estudiante.push(["andrea", "femenino", 16, "Sta. Elena", "flaso", "visual"]);
estudiante.push(["hector", "masculino", 6, "Ancon", "falso", "word"]);



function printHTML(mensaje)
{
	var outputDiv = document.getElementById("info");
	outputDiv.innerHTML = mensaje;
}

while (true)
{
	var buscarEstudiante = (prompt("Ingrese s para salir o escriba el nombre de estudienta que desea buscas?"));
	if(buscarEstudiante == "s")
	{
		break;
	}
	else if (buscarEstudiante == "l")
	{
		var saludo= '';
		for (var i = 0; i < estudiante.length; i++)
		{
			 	saludo += "<h1> DATOS DE: " + estudiante[i][0] + "</h1>"

				saludo += "<p> GENERO: " + estudiante[i][1] + "</p>";
				saludo += "<p> EDAD: " + estudiante[i][2] + "</p>";
				saludo += "<p> CIUDAD: " + estudiante[i][3] + "</p>";
				saludo += "<p> TRABAJA: " + estudiante[i][4] + "</p>";
				saludo += "<p> LENGUAJE: " + estudiante[i][5] + "</p>";
				//estudiante[i][1] = "Tratando de entender JS";
				//saludo += "<p> tu nombre de usuario es: " + estudiante[i][2] + "</p>";
				//saludo += "<p> tu edad pronto sera: " + (estudianteA[i][4]) + "</p>";
				
		 
		}
		printHTML(saludo);
		//break;
	}
	else
	{
		for (var i = 0; i < estudiante.length; i++)
		{
			if (estudiante[i][0] == buscarEstudiante)
			 {
			 	var saludo = "<h1> DATOS DE: " + estudiante[i][0] + "</h1>"

				saludo += "<p> GENERO: " + estudiante[i][1] + "</p>";
				saludo += "<p> EDAD: " + estudiante[i][2] + "</p>";
				saludo += "<p> CIUDAD: " + estudiante[i][3] + "</p>";
				saludo += "<p> TRABAJA: " + estudiante[i][4] + "</p>";
				saludo += "<p> LENGUAJE: " + estudiante[i][5] + "</p>";
				//estudiante[i][1] = "Tratando de entender JS";
				//saludo += "<p> tu nombre de usuario es: " + estudiante[i][2] + "</p>";
				//saludo += "<p> tu edad pronto sera: " + (estudianteA[i][4]) + "</p>";
				printHTML(saludo);
			 	break;
			 }
			 else
			 {
			 	alert("no encontrado");
			 	break;
			 };
			
		}

		
	}
}

function printHTML(mensaje)
{
	var outputDiv = document.getElementById("info-estudiantes");
	outputDiv.innerHTML = mensaje;
}
