let nombre = prompt("ingrese un nombre");
let apellido = prompt("ingrese un apellido");
let edad = prompt("ingresa tu edad");
let esMayor = false;

if (edad <= 17 ) {
    alert("no podes ingresar, sos menor");
    esMayor = false;
}
else {
    alert("Podes ingresar sos mayor");
    alert(" bienvenido " + nombre + " " + apellido);
    esMayor = true;
}

if (esMayor == true) {
    alert('pagina de cotizacion online')
    let montoPrestamo = parseInt(prompt('Ingrese el valor a solicitar para su prestamo'));
    let interes3cuotas = 25;
    let interes6cuotas = 35;
    let interes12cuotas = 45;
    let interes18cuotas = 60;

    let cuotasPrestamo;
    while(!cuotasPrestamo || cuotasPrestamo == 0){
        cuotasPrestamo = parseInt(prompt('Ingrese 3, 6, 12 o 18 cuotas para su prestamo'));
        switch (cuotasPrestamo) {
            case 3:
                alert('Seleccionaste 3 cuotas y vas a tener un interes del: ' + interes3cuotas + '%');
                console.log('Te van a quedar 3 cuotas de: ' + calcular3cuotas());
                console.log('Vas a pagar un interes de: ' + calcular3cuotasInteres());
                break;
            case 6:
                alert('Seleccionaste 6 cuotas y vas a tener un interes del: ' + interes6cuotas + '%');
                console.log('Te van a quedar 6 cuotas de: ' + calcular6cuotas());
                console.log('Vas a pagar un interes de: ' + calcular6cuotasInteres());
                break;
    
    
            case 12:
                alert('Seleccionaste 12 cuotas y vas a tener un interes del: ' + interes12cuotas + '%');
                console.log('Te van a quedar 12 cuotas de: ' + calcular12cuotas());
                console.log('Vas a pagar un interes de: ' + calcular12cuotasInteres());
                break;
            case 18:
                alert('Seleccionaste 18 cuotas y vas a tener un interes del: ' + interes18cuotas + '%');
                console.log('Te van a quedar 18 cuotas de: ' + calcular18cuotas());
                console.log('Vas a pagar un interes de: ' + calcular18cuotasInteres());
                break;
            default:
                alert('Valor no valido intente nuevamente');
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

