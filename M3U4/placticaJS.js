// const parrafo = document.querySelector('p');
// console.log(parrafo) 

// const ide = document.querySelector('#t-cursos');
// console.log(ide) 

// const clases = document.querySelector('.punto');
// console.log(clases) 

// const listas = document.querySelector('li');
// console.log(listas) 

// const esco = document.querySelector('section div p')
// console.log(esco)



// const otro=document.querySelectorAll('span')
// console.log(otro)

// const anio=document.querySelectorAll('h2')
// console.log(anio)

// const otraClas=document.querySelectorAll('.classP')
// console.log(otraClas)
// // --------
// // le cambie el contenido al id seleccionado
// let cambio = document.getElementById('lorem1')
// console.log(cambio)
// // console.dir() sirve para vel el id con asterisco y todas sus propiedades
// console.dir(cambio)
// lorem1.textContent="hola mundo, le cambie el contenido usando javascript DOM"

// let classP = document.getElementsByClassName('classP')
// console.log(classP)
// console.dir(classP)



// let colecc=document.getElementsByTagName('li')
// console.dir(colecc)
// muesta detalladamente el valor ,parece un array pero es una coleccion
// console.log(colecc[1])
// lo paso a un array ,creo una copia
// let miArray=[...colecc];
// console.log(miArray)

// for( let li of colecc){console.log(li)}
// recorrer o mostrar el contenido de una coleccion 
// for( let li of colecc){console.log(li.textContent)}
// esto es valido tanto para una coleccion y un array

// algregar elemento


const listaN=document.createElement('li');

const textoLista=document.createTextNode
('lista creada en js con cretaElement');

// seleccionar elemento padre
const lista =document.querySelector('.padre');

// agregar nodog
lista.appendChild(listaN);
listaN.appendChild(textoLista);

const eliminar=document.getElementById('classP');
eliminar.remove();

const eliminarLorem=document.querySelector('.lorem2');
eliminarLorem.remove();


// innerHTML e innerText
function getHTML(){
    console.log(document.getElementById('demo').innerHTML);
}
function getInnerText(){
    console.log(document.getElementById('demo').innerText);
}
getHTML()

getInnerText()

let demo=document.querySelector('#demo');
// console.log(demo)
demo.innerText="hora de aventura con INNERtext"
// demo.innerHTML="innerHTML"



// atributos de los elementos
// const liLink = document.getElementsByTagName('a')[0]
// alert(liLink.href)

// estilos de los elementos
const color = document.getElementById('t-cursos')
color.style.backgroundColor='orange'


// eventos
const boton = document.getElementById('boton')
boton.addEventListener('click',function(){
    alert('hola mundo')
},false)



//Metodos de array: map,filter y find
// MAP
const numeros=[1,3,8,20];
const dobles = numeros.map(num=>num*2)
console.log(dobles);
// FILTER
const numerosDel1a10=[1,2,3,4,5,6,7,8,9,10];
const par=numerosDel1a10.filter(num=>num % 2 == 0);
console.log(par)
// FIND
const numerosFind=[3,5,10,15,28,76,149];
const numFind = numerosFind.find(num => num > 12);
console.log(numFind)



// templane strings
let edad1=18;
let edad2=32;
let mensaje1 =`La cuota para personas de ${edad1} es de 
${edad1 >=21 ? 500 : 350}`;

let mensaje2 =`La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 500 : 350}`;
// alert(mensaje2)

// JSON
const persona ={
    nombre:"valentina",
    edad:28,
    esEstudiante:true,
    hobbies:[
        "futbol",
        "programacion",
        "cine",
    ]
};
console.log(persona.nombre);
console.log(persona.hobbies.length);




// Destructuring y operadoes spread
const colores =["#ff0000", "#00ff00", "#0000ff"];
// Arrays
const [rojo, verde, azul] = colores;
console.log(colores)




// Objetos
const pelota={
    posicion:{
        x: 150,
        y: 150
    },
    coloresDeRelleno:"tomato",
    radio:25,
}
const {posicion,radio,coloresDeRelleno} = pelota
console.log(pelota)


// pread
// arrays
const vocales=["a","e","i"];
const vocalesCompletas=[...vocales,"o","u"];
console.log(vocales);
console.log(vocalesCompletas);

// Objetos
const usado={
    marca: "chevrolet",
    modelo:"Corsa",
    anio:2012
};

const nuevo={
    ...usado,
    anio:2020
};

console.log(nuevo.marca);
console.log(nuevo.anio);