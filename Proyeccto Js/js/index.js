//let entrada = ( prompt('Ingrese un Nombre: ') )
//console.log(typeof entrada)

//let salida  = entrada 

//console.log(salida)
 //alert('Bienvenido ' + entrada)

 for (let i = 1; i <= 5; i++) {
    let ingresarNombre = prompt('ingresar nombre');
    alert('turno nº ' + i + 'nombre : ' + ingresarNombre);
  }
  
for (let i = 1; i <= 5; i++) {
    if (i == 5){
      break;
    }
    alert ("Quedan "+ i + " lugares");
   }
 var numero = parseInt(prompt('Ingrese Presupuesto a gastar'));
 if(numero >120000){
    alert('Con este presupuesto cuenta con diversos tipos de opciones para crear el viaje ideal');
 } else {
    alert('Disponemos de ofertas limitadas para elegir');
 }

 var texto = prompt("Que tipo de Viaje desea?");

 if(texto=='Eurotrip'){
    alert('Disponemos de salidas los dias Domingos, Miercoles y viernes');
 }else{
    alert('Disculpe, no disponemos de la opcion que desea en estos momentos');
 }

 var texto = prompt ("Que día deseas viajar?")
if (texto == 'Domingo') {
    alert('Esta opción Tiene un Importe total de 1.500 Euros+IVA')
}
else if (texto == 'Miercoles') {
    alert('Enhorabuena! Hemos conseguido el mejor paquete por solo 1.000 Euros+IVA')
}
else if (texto == 'Viernes') {
    alert('Este paquete tiene un importe total de 1.200 Euros+IVA')


}

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
alert("importe total seria de "+(calculadora (1000, 0.5, "*")));


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
