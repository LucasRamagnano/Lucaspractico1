let nombre = prompt("ingrese un nombre");
let apellido = prompt("ingrese un apellido");
let edad = prompt("ingresa tu edad");
let esMayor = false;

if (edad <= 17) {
  DOM("no podes ingresar, sos menor");
  esMayor = false;
} else {
  DOM("Podes ingresar sos mayor");
  DOM(" bienvenido " + nombre + " " + apellido);
  esMayor = true;
}

if (esMayor == true) {
  alert("pagina de cotizacion online");
  let montoPrestamo = parseInt(
    prompt("Ingrese el valor a solicitar para su prestamo")
  );
  let interes3cuotas = 25;
  let interes6cuotas = 35;
  let interes12cuotas = 45;
  let interes18cuotas = 60;

  let cuotasPrestamo;
  while (!cuotasPrestamo || cuotasPrestamo == 0) {
    cuotasPrestamo = parseInt(
      prompt("Ingrese 3, 6, 12 o 18 cuotas para su prestamo")
    );
    switch (cuotasPrestamo) {
      case 3:
        DOM(
          "Seleccionaste 3 cuotas y vas a tener un interes del: " +
            interes3cuotas +
            "%"
        );
        console.log("Te van a quedar 3 cuotas de: " + calcular3cuotas());
        console.log("Vas a pagar un interes de: " + calcular3cuotasInteres());
        break;
      case 6:
        DOM(
          "Seleccionaste 6 cuotas y vas a tener un interes del: " +
            interes6cuotas +
            "%"
        );
        console.log("Te van a quedar 6 cuotas de: " + calcular6cuotas());
        console.log("Vas a pagar un interes de: " + calcular6cuotasInteres());
        break;

      case 12:
        DOM(
          "Seleccionaste 12 cuotas y vas a tener un interes del: " +
            interes12cuotas +
            "%"
        );
        console.log("Te van a quedar 12 cuotas de: " + calcular12cuotas());
        console.log("Vas a pagar un interes de: " + calcular12cuotasInteres());
        break;
      case 18:
        DOM(
          "Seleccionaste 18 cuotas y vas a tener un interes del: " +
            interes18cuotas +
            "%"
        );
        console.log("Te van a quedar 18 cuotas de: " + calcular18cuotas());
        console.log("Vas a pagar un interes de: " + calcular18cuotasInteres());
        break;
      default:
        DOM("Valor no valido intente nuevamente");
        cuotasPrestamo = 0;
        break;
    }
  }
}

function calcular3cuotas(cuotas) {
  porcentaje = (montoPrestamo * 25) / 100;
  resultado = porcentaje + montoPrestamo;
  cuotas = resultado / cuotasPrestamo;
  return cuotas;
}
function calcular3cuotasInteres(porcentaje) {
  porcentaje = (montoPrestamo * 25) / 100;
  return porcentaje;
}
function calcular6cuotas(cuotas) {
  porcentaje = (montoPrestamo * 35) / 100;
  resultado = porcentaje + montoPrestamo;
  cuotas = resultado / cuotasPrestamo;
  return cuotas;
}
function calcular6cuotasInteres(porcentaje) {
  porcentaje = (montoPrestamo * 35) / 100;
  return porcentaje;
}
function calcular12cuotasInteres(porcentaje) {
  porcentaje = (montoPrestamo * 45) / 100;
  return porcentaje;
}
function calcular12cuotas(cuotas) {
  porcentaje = (montoPrestamo * 45) / 100;
  resultado = porcentaje + montoPrestamo;
  cuotas = resultado / cuotasPrestamo;
  return porcentaje;
}
function calcular18cuotasInteres(porcentaje) {
  porcentaje = (montoPrestamo * 60) / 100;
}
function cancular18cuotas(cuotas) {
  porcentaje = (montoPrestamo * 60) / 100;
  resultado = porcentaje + montoPrestamo;
  cuotas = resultado / cuotasPrestamo;
  return porcentaje;
}

let baseDatosPersonas = new Array();

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

function capturar() {
  let nombreCapturar = document.getElementById("nombre").value;
  let edadCapturar = document.getElementById("edad").value;
  let nuevaPersona = new Persona(nombreCapturar, edadCapturar);
  console.log(nuevaPersona);
  agregar(baseDatosPersonas, nuevaPersona);
}

function agregar(baseDatos, personaAgregar) {
  baseDatos.push(personaAgregar);
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    personaAgregar.nombre +
    "</td><td>" +
    personaAgregar.edad +
    "</td></tbody>";
};
const listaDeDatos =  document.querySelector('ul');

const ld = document.createElement('ld');
ld.textContent = 'cuotas';
listaDeDatos.appendChild(ld);

const datos = ['nombre', 'apellido', 'edad','cotizacion', 'cuotas'];


  ld.forEach.add(item => {
    const ld = document.createElement('ld');
    ld.texContent = item;
    listaDeDatos.appendChild(ld);
  }); {
} 
function obtener_localstorage(){

if (localStorage.getItem("nombre")){
let usuario = localstorage.getItem("Lucas");
let nombre = JSON.parse((usuario)) ;
console.log(usuario);}
else{
  console.log("no hay entradas en el local Storage");

}


function local_storage() {
  let persona = {
    nombre: "Lucas",
    edad: "26",
    correo: "lucas.ramagnano@gmail.com",
    coords: {
      lat: 10,
      lng: -10
    }
  }};

let usuario = "Lucas"

localStorage.setItem("Lucas", JSON.stringify("persona", usuario));
local_storage.setItem("persona", JSON.stringify(persona) );
}
const escritorio = {
  altura: "1 metro",
  peso: "30 libras",
  color: "marrón",
  material: "madera",
};
const Juego = {
  Genero: "Terror",
  Tamaño: "27 G",
  Jugablidad: "Multijugador,RPG"
};

const carritoDeCompras = {
  1: "GTA",
  2: "LoL",
  3: "Age Of Ampire II",
  4: "Isaac",
  5: "Rocket League"
};

console.log(carritoDeCompras);

const programador = {
  primerNombre: "Lucas",
  edad: 26,
  dessarrolladorBackend: true,
  lenguajes: ["JavaScript, C++"]
  
};
