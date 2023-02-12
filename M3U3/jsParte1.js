
// edad=18
// const esMayor = edad >= 21 ? true : false;
// const cuota = esMayor ? 500 : 350;
// console.log(cuota)

//   const mensaje ="Hola estoy dentro de un bucle"
// // let num=0
//   for(let i=0 ; i<5; i++){
//     //    num=num+1
//      //  alert(mensaje+num)
//       document.write( `${mensaje} ${i} <br>` ) 
//     //   num= ++num;
//  }

// let x=1;
// while(x <= 10){
//     document.write(`${x} <br>`);
//      x++;

// }
// let nombre = prompt("ingrese su nombrese")
// alert("hola como estas "+ nombre)
// document.write("hola como estas "+nombre)

// concatenar

//  let nom = "sergio", saludo="hola" ,num=5;
//  flase = `hola ${num} como estas`;
//  document.write(flase)

// CONDICIONAL
// let edad=22;

// let nombre=prompt("ingrese su nombre")
// let apellido=prompt(`ingrese su apellido`)

// if (nombre ==`sergio` && apellido ==`marquez`){
//     alert(`su nombre y apellido es ${nombre} ${apellido} y tiene ${edad} años de edad`)
// }else if(nombre == "sergio" || apellido == "marquez"){
//     alert(`datos incompletos `)
// }else{ alert(`todo es incorrecto`)}


// Escribe un programa que responda a un usuario que quiere comprar un helado en
//  una conocida marca de comida rápida cuanto le costará en función del topping que elija.

// El helado sin topping cuesta 1.90€.
// El topping de oreo cuesta 1€.
// El topping de KitKat cuesta 1.50€.
// El topping de brownie cuesta 0.75€.
// El topping de lacasitos cuesta 0.95€.

// En caso de no disponer del topping solicitado por el usuario el programa escribirá
//  por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del 
// precio del helado sin ningún topping.

// Finalmente, el programa escribe por pantalla el precio del helado con el topping 
// seleccionado (o ninguno).
// let pedido=prompt(`eliga el helado que quiera complar`)
// let precio=0.00;
// let helado = 1.90;
// let precioFinal=0.00;

// if (pedido == "oreo"){
//     precio=1;
// }else if(pedido =="kitkat"){
//     precio = 1.50;
// }else if(pedido == "brownie"){
//     precio = 0.75;
// }else if(pedido == "lacasitos"){
//     precio=0.95;
// }else{
//     alert("no tenemos este topping, lo sentimos")
//     precio=0.00
// }
// precioFinal=helado+precio
// document.write(`el precio del helado es de  $`+precioFinal)

// array
// let comida=["papas","piza","panchos","minalesa",90]
// document.write(comida[4])  

// let pc1={
//     nombre:"sergioPC",
//     procesador:"intel icore",
//     ram:"16GB",
//     espacio:"1TB"
// }
//    let nombre=pc1["sergioPC"]
//    let procesador=pc1["procesador"]
//   let ram=pc1["ram"]
//    let  espacio=pc1["espacio"];

// let frase=` el nombre de mi PC es: <b>${nombre} </b> <br>
//             el procesador es : <b>${procesador}</b> <br>
//             la memoria ram es de : <b>${ram}</b> <br>
//             el espacio es de : <b>${espacio}</b> `;
// document.write(frase)

// bucle while(mientras)
// let numero=0;
// while (numero<5){
//     numero++
//     document.write(numero+"<br>")
// }

// bucle do while(mientras que)
// let num = 0;
// do {
//     document.write( num + "<br>");
//     num++;
// } while (num <3)

// sentencia (break)MUY IMPORTANTE-----------------------------------------------------------------------------------
//  let num=0
// while (num <20){
//     document.write(num+"<br>")
//     num++;
//     if (num==10){
//         break;
//     }
// }
// document.write("FIN")

// bucle for (para)

// for(let i=0+1 ; i<6 ; i++){
// se salto el 3
    // if(i == 3){
        // continue;
    // }
    // document.write(i+"<br>")
// }

//Pedir un String y mostrar true si tiene 5 caracteres o mas, caso
//  contrario, mostrar false utilizar el operador ternario.

// let palabla ="hola";
// let responda=palabla.length >=5? "verdadero" : "falso"
// document.write(responda)




// Juan tiene N dólares, David tiene la mitad de lo que posee Juan
//  y José la mitad de lo que poseen Juan y David juntos. 
// Mostrar el promedio de la cantidad de dinero que tienen
//  entre los tres y redondearlo

//entrada 
// let juan = 47;
// let david = juan / 2; 
// let jose = (juan + david) / 2;

//mostrando el promedio
// let promedio = Math.round((juan + david + jose) / 3);

// console.log(`El promedio de la suma de dólares de los tres juntos es de: ${promedio}`);
//respuesta: El promedio de la suma de dólares de los tres juntos es de: 35





//9 Pedir una cadena de texto si al menos tiene una letra mayúscula
//  mostrar false si todas son minúsculas mostrar true, utilizar el
//  operador ternario.

// let texto="hola Mundo";
// let contenedor=texto;
// let respuesta=contenedor.toLowerCase()==texto? true:false;
// document.write(respuesta)



// Crear un número aleatorio entre el 1 y 20, si es par mostrar true 
// seguido el número si es impar mostrar  false seguido del número,
//  utilizar el operador ternario.

// let aleatorio = Math.ceil(Math.random()*20);
// let respuesta = aleatorio % 2 === 0? true: false;
// document.write(`${respuesta} - ${aleatorio}`)



// Usando un bucle for escribir un script que pida un valor entero y 
// muestre en pantalla una lista de números desde el 0 al valor tecleado.
// //  Los números se separarán por comas.  

// let contar, max, msg='';
// max = parseInt(prompt("Teclear un número entero"));
// for(contar = max; contar > 0;  contar--)
// {
// msg += contar + ", ";
// }
// msg += contar;   //Evita la coma al final
// alert(msg);




//Realizar un programa el cual muestre los números del 60 hasta el 100 de 5 en 5,
//  estos nümeros deben ser sumados y su resultado debe ser mostrado por consola.
//  let resultado=``
//  let num=60
// for (num ; num<=100 ; num+=5){
//     resultado += num + `<br>`;
// }
//  resultado+=num
//  document.write(resultado)

// Diseña un algoritmo que realice el promedio de 4 números. 
// Los números podrán ser decimales y serán ingresados 
// por pantalla por el usuario,
// let num,promedio=0,acomulador=0
// for (let i = 0 ; i < 4 ;i++){
//     num = prompt("ingrese un numero")
//     num = parseInt(num);
//     acomulador = acomulador + num
// // 8,7,8,10 promedio final es 8.25
// }
// promedio = promedio += acomulador/4
// document.write(`el numero promediado es ${promedio}`)



// hora de 10:00 a 10:59 
//  let horas,min,seg

//  for ( horas = 10 ; horas <11 ; horas++){
//      for ( min =0 ; min<60 ; min++){
//          for ( seg =0; seg<60 ; seg++){
//              if (min < 10 & seg < 10 ){
//                  document.write(horas+" :0 "+ min+" :0 "+seg+" am "+`<br>`)
//               }else if (min < 10 & seg >=10 ){
//                   document.write(horas+" :0 " +min+ " : "+seg+ " am "+`<br>`)
//               }else if (min > 10 & seg < 10){
//                   document.write(horas+" : "+min+" :0 " +seg+ " am "+`<br>`)
//               }else{
//                   document.write(horas+" : "+min+" : "+seg+ " am "+`<br>`)
//               }
//          }
//      }
//  }



// Mostrar por pantalla los números de la tabla del 1 al 4 e
//  indicar en cada resultado, si es par o impar.
// let resultado=0,num=0,num1=0

// for (num=1; num<5; num++){
//     document.write(`TABLA NUMERO : `+num+`<br>`)
//      for (num1=1 ; num1<11 ; num1++){
//         resultado = num*num1
//       if (resultado % 2==0){
//         document.write(num+` x ` + num1 +`=`+resultado+"  Par"+`<br>`)
//        }else{
//           document.write(num+ `x` +num1+ `=`+ resultado+" Impar"+`<br>`)       
//        }
//     }
// }

// 6) Mostrar los números del 50 al 0 
// junto con un mensaje de éxito al finalizar la ejecución.
// for(let i=50; i>0; i--){
//     document.write(i+`<br>`)
// }
// document.write("Exito")



// Realice un algoritmo que, al Introducir 5 números enteros 
// positivos, devuelva el mayor
// let num,nMayor=0

// for (let i =0 ; i<5; i++){
//     num=prompt("ingrese un numero "+(i+1))

//     if(num>nMayor){
//         nMayor=num
//     }
// }
// document.write("EL numero mayor es : "+nMayor)



// 9) Introducir 10 números y mostrar por consola cuántos números son positivos,
//  cuántos números son negativos y cuántas veces se introdujo solo el número
//  0(es decir un número que no es positivo ni negativo);
// let numeroP=0,numeroN=0,numero0=0,num=0
// for (let i=0; i<10 ;i++){
//     num=prompt("Ingrese un numero "+(i+1))
//     num=parseInt(num)
//     if (num==0){
//         numero0=numero0+1
//     }else if(num>0){
//         numeroP=numeroP+1
//     }else{
//         numeroN=numeroN+1
//     }
// }
// document.write("Los veses qe se introdujo un numero Positivo fueron : "+numeroP+`<br>`)
// document.write("Los veses qe se introdujo un numero Negativo fueron : "+numeroN+`<br>`)
// document.write("Los veses qe se introdujo el numero 0 fueron : "+numero0+`<br>`)

// Permita vaciar un contenedor con capacidad total de 500 kg. 
// realizando sustracciones de 50kg.
//      Muestre el valor del contenido cada vez que se extraigan 50kg.
//      Indique cuándo termina su ejecución.
// let contenedor=500
// while(contenedor>0){
//     document.write(contenedor+`<br>`)
//     contenedor=contenedor-50
// }
// document.write("FIn")

//4 Desarrolle un algoritmo que permita al usuario ingresar cuantas palabras desee.---------------------------------------------------------------------
//  Cuando ya no quiera ingresar más palabras, deberá mostrar cuántas de las 
// palabras ingresadas poseen más de 6 (seis) caracteres.

// Usando un bucle while escribir un script que pida un valor entero y cree 
// una lista con los números desde el 0 al valor tecleado. Luego deberá sacar
//  esa lista con un alert. Los números se separarán por comas. 

// let max,contar,lista;
// contar=0
// lista=``;
// max=parseInt(prompt("Ingrese un numero"));

// while(contar < max){
//     lista+=contar+`, `;
//     contar++;
// }
// lista+=contar;
// document.write(lista)

//  mi estilo erroneo
//  let num=0,max;
//  max=parseInt(prompt("ingrese un numero"))
// while(num <= max){
//      document.write(num+`,`)
//      num++
// }


// Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe
//  alguno que esté fuera de ese rango deberá volver a pedir el número
// let num=0
// while(num < 1 || num > 5){
//     num=parseInt(prompt("Ingrese un numero del 1 al 5 para salir"))
// }
// alert("saliste")

//3) Un script que preguntará al usuario si desea continuar con el programa.
// Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará.
// Cualquier otra entrada repetirá la pregunta
// let resp
// while(resp != `n` & resp != `N`){
//     resp=prompt("ingrese un letra minuscula o mayuscaula")
// }
// alert("saliste")

//4 Determinar si el número que teclea el usuario es primo o no.
//  Recordar que un número primo es el que solo puede dividirse por si
//  mismo y por la unidad.

// let numero, resto, divisor = 2, esPrimo = " Si";
// numero = parseInt(prompt("Teclear un numero entero"));
// while (divisor < numero ){
//     if( numero % divisor == 0){
//       esPrimo = " No"
//        break;
//     }
//    divisor++;
// }
// alert("El numero "+ numero + esPrimo + " es primo");


// como yo lo aria
// let primo,salir=true
// while(salir==true){
//      primo=parseInt(prompt("ingrese un numero primo"))
//     if (primo % 2 == 1  ){
//         alert("es primo ")
//         salir=false
//         break
//     }else{
//         alert("no es primo, repetir")
//     }
// }
// alert("Fin")



//5 Escribir un script que pida al usuario una contraseña. Si coincide le 
// devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el 
// mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje 
// "Alerta, intruso"

// let contador=0,contraseña=0

// while(contraseña != 1234){
//     contraseña=parseInt(prompt("Ingrese la contraseña"))
//     if(contraseña==1234){
//         alert("entraste, bienvenido")
//     }
//     contador++
//     if (contador >= 3){       
//         alert("Alerta Intruso")
//         break
//     }
// }




//6) En este script se pedirá al usuario que teclee un número cada vez. 
// El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de
//  todos los números tecleados.
// let num,contenedor=0
// while (num !== 0  ){
//     num=parseInt(prompt("Ingrese un numero"))
//     contenedor=contenedor+num
// }
// alert("esta es la contidad total de numeros sumados "+contenedor)




//7 Este script le pide al usuario que vaya tecleando números enteros positivos 
// hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando
//  el valor máximo y mínimo de los números tecleados.
// let max=0, min=0, numero;
// numero = parseInt(prompt("Teclee un número"));
// min = numero;
// while (numero !=0){
//     max = (numero > max)?numero:max;
//     min = (numero < min)?numero:min;
//     numero = parseInt(prompt("Teclee un número"));
// }
// if ( max== 0){
//     alert("No ha tecleado ningún número ")
// }
// else{
//     alert("El máximo es "+ max + "\nEl mínimo es "+min);
// }

//8 Este script le pide al usuario que vaya tecleando números una y otra vez,
//  pero solo números pares, en caso de que teclee un número impar el programa 
// acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
// let contenedor=0,num=0
// while(num % 2 == 0 ){    
//     num = parseInt(prompt("Ingrese un numero"))
//     contenedor++
// }
// contenedor--
// document.write(`La cantidad de numeros pares fueron ${contenedor}`)

//9 Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin.
//  El usuario deberá teclear uno de ellos y el programa mostrará la opción 
// elegida. Si teclea un valor fuera del menus se mostrará un mensaje de error y 
// se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.
// num=0
// while(num != 3){
//     num=parseInt(prompt("menu de opciones 1-leer datos|2-mostrar datos|3-salir"))
//     if (num==1){
//         alert("Leer datos")
//     }else if(num==2){
//         alert("Mostrar datos")
//     }else if(num==3){
//         alert("Fin del programa")
//     }
//     if (num >3){
//         alert("ERROR")
//     }
// }

// Un script pedirá al usuario que vaya tecleando números hasta llegar al 0,
//  entocnes el programa muestra "La suma es " seguido de la suma de los números.
//  Si esta suma es par el programa se repite y si es impar el programa acaba.
let num,suma=0,respuesta=0
while(respuesta %2==0){
    num=parseInt(prompt("Ingrese un numero"))
    suma=suma+num
    if(num==0){

        alert("La suma es: "+suma)
        respuesta=respuesta+suma
    }
}
alert("saliste,Fin")

// let suma=0, numero;
// while (suma%2==0){
//     numero = parseInt(prompt("Teclear un número"));
//     while(numero != 0){
//         suma += numero;
//         numero = parseInt(prompt("Teclear un número"));
//   	     }
//     alert("La suma es "+suma);
// }
// alert("Fin de la prueba");