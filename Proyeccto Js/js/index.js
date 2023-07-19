//Entrega3

console.dir(document);
console.dir(document.head);
console.dir(document.body);

//Codigo Js ID app getElementsbyID
let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

//Codigo JS Class paises getElementsbyclassname

//let paises = document.getElementsByClassName("paises");

//console.log(paises[1].innerHTML);
//console.log(paises[2].innerHTML);

//Codigo JS getelementsbytagname

let paises = document.getElementsByTagName("div");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);


let pais = document.getElementsByClassName("paises");

for (const pais of paises) {
 console.log(pais.innerHTML);
}

// Innet text- Nos permite modificar su nodo de texto. Acceder y/o modificar el contenido textual

let titulo = document.getElementById("titulo")
console.log (titulo.innerText)

titulo.innerText = "Bienvenidos a Deviajes.com"

//Innet HTML

let paquete = document.getElementById("opciones")
paquete.innerHTML = "<h2>Bienvenido al area VIP!!!</h2><p>Lorem ipsum</p>"

//Class name

let ofertas = document.getElementById("lista")
 ofertas.innerHTML = "<h2>Buenas buenas ! </h2>"

 ofertas.className = "container row"

 //Creacion de elementos

 let parrafo3 = document.createElement("p");
 parrafo3.innerHTML = "<h2/>Benvenutti al area de descuentos</h2>";
 document.body.append(parrafo3);

//eliminar elementos

let parrafo1 = document.getElementById("parrafo1");
parrafo.remove();

//let paises = document.getElementsByClassName("paises");
//paises [0] . remove()

//Obtener datos de Inputs

document.getElementById("Country").value = "Argentina";
document.getElementById("Price").value = "1500";

//Creando Opciones desde un Array

let padre = document.getElementById("lista");
let destinosArray = ["Italia", "Francia", "Etiopia", "Egipto", "España"];
for (const destino of destinosArray) {
    let li = document.createElement ("li");
    li.innerHTML = destino
    padre.appendChild(li);
}

//creacion de elementos desde objetos
const promos = [
    {id:1, 
    nombre: "italia Paradisso", 
    precio: 400, categoria: "Europa", 
    imgUrl:'https://cdn0.bodas.net/article/3813/3_2/1280/jpg/63183-1.webp'},
    {id:2, 
    nombre: "Tailandia Sorprendente", 
    precio:750, categoria: "Asia", 
    imgUrl:'https://www.eltiempo.com/files/article_main_1200/uploads/2022/05/24/628ce8c59cf62.jpeg'},
    {id:3, 
    nombre: "China Milenaria", 
    precio: 1000, 
    categoria: "Asia", 
    imgUrl:'https://www.sprachcaffe.com/fileadmin/_processed_/f/6/csm_China__shanghai_yuyuan_garden__web-2048__e953ddf7e2.jpg'},
    {id:4, 
    nombre: "Africa premium", 
    precio:1200, 
    categoria:"Africa", 
    imgUrl:'https://wp.growproexperience.com/wp-content/uploads/2022/06/Safaris-en-Suda%CC%81frica.jpg'}
];
const listadoPromos = document.getElementById('listadoPromos')
const divRow = document.createElement('div')
divRow.classList.add('row', 'w-100')
listadoPromos.appendChild(divRow)
let contenedor = document.createElement('div')//div row



for (const promo of promos){
    const divCard = document.createElement('div')
    divCard.classList.add('card', 'col-4')
    divCard.innerHTML = `<div class='card-body'>
    <img src='${promo.imgUrl} 'class='card-img-top'>
    <h3>Destino: ${promo.nombre} </h3>
    <h3>categoria: ${promo.categoria} </h3>
    <p>Precio: ${promo.precio}</p>
    <div class='card-footer'>
    <button class='btn btn-outline-dark id='detalle'>Agregar al carrito</button>
    </div>
    </div>`
    divRow.appendChild(divCard)
}
listadoPromos.appendChild(divRow)

//Query selector
//permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS

let parrafo2 = document.querySelector("#prueba p")
let prueba = document.querySelector("#prueba")
let radioChecked = document.querySelector(".radio:checked")
//let input =document.querySelectorAll('input')
//console.log(input)

//Clase 10 -
//eventos del mouse
let boton = document.getElementById("btnMain");
boton.onclick = () => { console.log("click"); };
boton.onmousemove = () => { console.log("move"); };

//formulario

let miFormularioB = document.getElementById('formulario')
miFormularioB.onsubmit = (evt)=>{
    evt.preventDeFault()
    let form = evt.target

    console.log(form.children[0].value)
    console.log(form.children[1].value)
    console.log(form.children[2].value)
    console.log(form.children[3].value)
    console.log(form.children[4].value)
    console.log(form.children[5].value)
}