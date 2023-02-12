// Ejercicio 1:
// Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color 
// de fondo del documento. Cada cuadrado debera tener un color distinto.
function caja(color,n){
    const caja = document.getElementsByTagName('div')[n]
    caja.style.backgroundColor = color

    caja.addEventListener('click',function(){
        const fondo = document.querySelector('.fond')
        fondo.style.backgroundColor = color
    });
}
caja('red',0)
caja('blue',1)
caja('green',2)








// Ejercicio 2: 
// Programar un contador de caracteres para un textarea.

function contador(num ){
    document.getElementById("charNum").innerHTML = num.value.length+' caracteres';
}






// Ejercicio 3:
// Dado el siguiente array de alumnos utilizar los métodos de array vistos para 
// generar un array con los alumnos aprobados. Se considera aprobado todo alumno que
//  tenga una nota mayor o igual a 7.
 let alumnos = [
   {
     nombre: 'Juan Gomez',
     nota: 7
   }, {
     nombre: 'Pedro Rodriguez',
     nota: 4
   }, {
     nombre: 'Roxana García',
     nota: 8
   }, {
     nombre: 'Luciano Lopez',
     nota: 5
   }, {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, {
    nombre: 'Florencia Martinez',
    nota: 10
  }, {
    nombre: 'Raul Sanchez',
    nota: 7
  }, {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];
document.write(`APROBADOS <br> <br>`)

const apro =alumnos.filter(alumno=> alumno.nota >=7 )
console.log(apro)
for(x of apro){
    document.write(`Alumno : ${x.nombre}, Nota: ${x.nota} <br><br>`)
}