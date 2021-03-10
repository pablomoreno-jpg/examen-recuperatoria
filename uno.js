/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/

function mostrar()
{
	var nombre;
	var edad; 
	var sexo;
	var puesto;
	var sueldo;
	
	var respuesta;

	var contadordeprogramacion = 0;
	var contadordeanalistas = 0;
	var contadordeQa = 0;

	var sumadeprogramadores = 0;
	var sumadeanalistas = 0;
	var sumadeqa = 0;

	var sueldodeprogramador = 0;
	var sueldodeanalista = 0;
	var sueldodeqa = 0;

	var pormedioprogramacion;
	var promediodeanalista;
	var promedioqa;

	var sumademasculino = 0;
	var sumadefemenino = 0;
	var sumaddenobinario = 0;

	var flagfemenino = true;
	var nombrefemenino;
	var sueldodelfemenino;

	var porgramadornobinario = 0;


	do{

		nombre = prompt("ingrese el nombre del empleado");

		edad = parseInt(prompt("ingrese la edad"));

		while(edad < 20)
		{
			edad = parseInt(prompt("ingrese la edad correspondiente del empleado"));
		}

		sexo = prompt("sexo del empleado");

		while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario" );
		{
			sexo = prompt("ingrese el sexo correcto del empleado");
		}
	
		puesto = prompt("puesto del empleado");

		while(puesto != "programador" && puesto != "analista" && puesto != "Qa");
		{
			puesto = prompt("ingrese el puesto correspondiente del trabajador");
		}

		sueldo = parseInt(prompt("sueldo del empleado"));

		while(sueldo < 15000 || sueldo > 70000)
		{
			sueldo = parseInt(prompt("ingrese el sueldo correcto que ofrece la fabrica (entre 15000 y 70000)"));
		}


		switch(puesto){
			case "programador":
				contadordeprogramacion++;
				sumadeprogramadores = sumadeprogramadores + contadordeprogramacion;
				sueldodeprogramador = sueldo + sueldodeprogramador;
				break;
			case "analista":
				contadordeanalistas++;
				sumadeanalistas = sumadeanalistas + contadordeanalistas;
				sueldodeanalista = sueldo + sueldodeanalista;
				break;
			case "Qa":
				contadordeQa++;
				sumadeqa = sumadeqa + contadordeQa;
				sueldodeqa = sueldo + sueldodeqa;
				break;
		}


		switch(sexo)
		{
			case "masculino":
				sumademasculino = suledo + sumademasculino;
				break
			case "femenino":
				sumadefemenino = sueldo + sumadefemenino;
				break
			case "no binaro":
				sumaddenobinario = suledo + sumaddenobinario;
				break;
		}

		if(flagfemenino == true && sexo == "femenino")
		{
			nombrefemenino = nombre;
			sueldodelfemenino = sueldo;
			flagfemenino = false;
		}
		else(sueldo > sueldodelfemenino)
		{
			nombrefemenino = nombre;
			sueldodelfemenino = suledo
		}

		if(sexo == "no binario" && puesto == "programador" && sueldo >= 20000 && sueldo <= 55000)
		{
			porgramadornobinario++;
		}

		respuesta = prompt("desea continuar ?");

	}while(respuesta == "si")


	pormedioprogramacion = sueldodeprogramador / sumadeprogramadores;

	promediodeanalista = sueldodeanalista / sumadeanalistas;

	promedioqa = sueldodeqa / sumadeqa;


	//a
	console.log("el promedio del sueldo de los programadores es : " + pormedioprogramacion );
	console.log("el promedio del sueldo de los analistas es : " + promediodeanalista );
	console.log("el promedio del sueldo de los Qa es : " + promedioqa );

	//b 
	if(sumademasculino > sumadefemenino && sumademasculino > sumaddenobinario)
	{
		console.log("el genero masculino es quien precibe un mayor salario");
	}
	else if (sumadefemenino > sumaddenobinario)
	{
		console.log("el genero femenino es quien precibe mayor salario");
	}
	else
	{
		console.log("el genero no binario es quien precibe mayor salario");
	}

	//c

	console. log(nombrefemenino + " es la mujer que tiene el mayor salario");

	//d

	console.log("la canitdad de programadores no binarios que perciben un sueldo de entre 20000 y 55000 es de " + porgramadornobinario);



}	
