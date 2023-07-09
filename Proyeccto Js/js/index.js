//let entrada = ( prompt('Ingrese un Nombre: ') )
//console.log(typeof entrada)

//let salida  = entrada 

//console.log(salida)
 //alert('Bienvenido ' + entrada)

 //for (let i = 1; i <= 5; i++) {
  //  let ingresarNombre = prompt('ingresar nombre');
   // alert('turno nº ' + i + 'nombre : ' + ingresarNombre);
 // }
  
//for (let i = 1; i <= 5; i++) {
   // if (i == 5){
    //  break;
   // }
   // alert ("Quedan "+ i + " lugares");
  // }
 //var numero = parseInt(prompt('Ingrese Presupuesto a gastar'));
 //if(numero >120000){
  //  alert('Con este presupuesto cuenta con diversos tipos de opciones para crear el viaje ideal');
 //} else {
  //  alert('Disponemos de ofertas limitadas para elegir');
 //}

 //var texto = prompt("Que tipo de Viaje desea?");

 //if(texto=='Eurotrip'){
   // alert('Disponemos de salidas los dias Domingos, Miercoles y viernes');
 //}else{
   // alert('Disculpe, no disponemos de la opcion que desea en estos momentos');
 //}

 //var texto = prompt ("Que día deseas viajar?")
//if (texto == 'Domingo') {
    //alert('Esta opción Tiene un Importe total de 1.500 Euros+IVA')
//}
//else if (texto == 'Miercoles') {
   // alert('Enhorabuena! Hemos conseguido el mejor paquete por solo 1.000 Euros+IVA')
//}
//else if (texto == 'Viernes') {
   // alert('Este paquete tiene un importe total de 1.200 Euros+IVA')


//}

//function calculadora(primerNumero, segundoNumero, operacion) {
 //   switch (operacion) {
      //  case "+":
      //      return primerNumero + segundoNumero;
       //     break;
       // case "-":
         //   return primerNumero - segundoNumero;
         //   break;
        //case "*":
         //   return primerNumero * segundoNumero;
          //  break;
      //  case "/":
          //  return primerNumero / segundoNumero;
          //  break;
       // default:
          //  return 0;
          //  break;
   // }
//}
//alert("importe total con el IVA final seria de "+(calculadora (1000, 5, "*")));


//let entrada = prompt ("ingrese destino");
//while (entrada != "ESC"){
  //switch (entrada){
 // case "EUROPA":
  //  alert ("Tenemos variedad de destinos en EUROPA");
   // break;
   // case "LATINOAMERICA":
   //   alert("Contamos con varios paquetes en LATINOAMERICA");
    //  break;
   //   case "CRUCEROS":
    //  alert("Tenemos salidas de CRUCEROS los días jueves");
    //  break;
    //  default: 
    //  alert("Contamos con diversos paquetes adaptados a tu presupuesto")
    //  break;
//}

//}
//                                              Pre Entrga N2                                     ///
function saludar (){
    console.log ("Bienvenido a Deviajes.com");
}
  saludar();

  function solicitarDestino (){
    let destinoIngresado = prompt("Ingrese destino")
    alert ("El destino Seleccionado es " + destinoIngresado)
  }

  solicitarDestino ();

// Calculando Cuotas
function dividir(primerNumero, segundoNumero) {
    var resultado = primerNumero / segundoNumero;
    return resultado; 
}

function mostrar(mensaje) {
    console.log(mensaje);
}

var resultadoDivison = dividir(1350, 18);
mostrar(resultadoDivison); 

//Calculando IVA paquetes y descuentos
const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.21
let precioPaquete = 1000
let descuento = 50 
let precioDescuento = resta(suma(precioPaquete, iva(precioPaquete)), descuento)
console.log (precioDescuento)

//objetos

let paquete = "Africa Salvaje";
let precio = 1200;
let salidas = "vuelos desde Barcelona y Madrid";
 const Ofertas = {paquete: "Africa Salvaje", precio: "1200", salidas: "vuelos desde Barcelona y Madrid"
}
console.log (Ofertas.paquete)
console.log (Ofertas.precio)
console.log (Ofertas.salidas)

function viajesDePromo (destino, precio, salidas){
    this.destino = destino;
    this.precio = precio;
    this.salidas = salidas;
}
const paquete1 = new viajesDePromo ("Tailandia sorprendente", "750", "Vuelos desde Barcelona y Madrid");
const paquete2 = new viajesDePromo ("Italia Paradisso", "1500", "vuelos desde Barcelona");
console.log (paquete2);

const paquete3 ={ pais: "Africa Salvaje", CuotasDisponibles :"12", precioFinal: "1200"};
console.log ("pais" in paquete3);
console.log ("salidas" in paquete3);
for(const propiedad in paquete3){
    console.log(paquete3 [propiedad]);
}
//  Clase producto//
class producto {
    constructor (destino, precio){
        this.destino = destino.toUpperCase();
        this.precio = parseFloat(precio);
        this.disponibilidad = false;

    }
    sumaIVA(){
        this.precio = this.precio * 1.21;

    }
    venta (){
        this.disponibilidad = true;

    }
}

const destino1 = new producto ("Tailandia Sorprendente", "800");
const destino2 = new producto ("Italia Paradisso", "1200");
destino1.sumaIVA();
destino2.sumaIVA();
destino1.venta();


/// Arrays //


const listaDestinos = [];
let cantidad = 6;
do{
    let entrada = prompt ("Ingrese destino");
    listaDestinos.push(entrada.toUpperCase());
    console.log(listaDestinos.length);

}while (listaDestinos.length != cantidad)

const nuevoDestino = listaDestinos.concat (["Egipto"]);
alert(nuevoDestino.join("/n"));

//7

const cruceros = [
    { nombre: 'Italia Paradisso', precio: 1500 },
    { nombre: 'Sudeste Asiatico', precio: 2200 },
];

const resultado = cruceros.find((el) => el.nombre === "Italia Paradisso");
const resultado2 = cruceros.find((el) => el.nombre === "Sudeste Asiatico");

console.log(resultado); 
console.log(resultado2); 