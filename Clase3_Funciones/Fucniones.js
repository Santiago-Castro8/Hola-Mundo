
//Hosting:Podemos llamar la funcion donde queramos, hasta antes de definirla. laramente tambien podremos definirla despues de definirla
miFuncion(5,8);


function miFuncion(a,b){ //Creamos la funcion
    //console.log('Sumamos '+(a+b));
    return a+b;
}
//Llamamos a la funcion
miFuncion(5,5);

//Asignamos el valor de la suma de la funcion a una variable
let resultado = miFuncion(5,6);
//mostramos la funcion
console.log(resultado);

//funciones de tipo exprecion o anonima, la declaramos
let x = function(a,b){return a+b};//necesita cerrarse con punto y coma
resultado = x(8,4); //al llamarla se pone la variable y parentesis (reutilizamos la var resultado, le estamos dando el valor de x) 
console.log(resultado);

//Definimos funciones que se mandan a llamar a si mismas.Se conoce como funciones de tipo self e invoking
(function(a,b){
    console.log('Ejecutando la funcion self: '+(a+b));
})(9,6);//Con estos parentesis y argumentos dentro de los mismos, definimos esta funcion pero no le estamos asignando a ninguna variable. 
//Tambien es una funcion anonima, primero con los parametros (a,b) y con los parametros luego (9,6)
//Esta funcion solo se podrá ejecutar una sola vez, ya que no la estamos asignando a ninguna variable, ni tampoco le asignamos un nombre(no se podrá reutilizar)  
//Esto puede ser util al trabajar con proyectos web y cuando necesitemos que se mande a llamar una funcion a si misma

//TIPOS DE DATOS EN UNA FUNCIÓN
console.log(typeof miFuncion); //Será de tipo funcion
//Pero las funciones tambien puedes ser descritas como objetos, y los objetos en js pueden tener propiedades, y metodos asociados a cada uno de los objetos
//EJ: Si en la funcion  que hemos definido, queremos saber cuantos argumentos ha recibido, en el llamado, tenemos una propiedad llamada arguments, para saber cuantos argumentos se definieron en la funcion
//si la propiedad arguments, la utilizamos sola, mostrará la posicion en la que estan los argumentos como su fuera un arreglo, y el valor de cada argumento.
//en cambio si solo queremos ver la cantidad de argumentos 
//argument se podrá utilizar dentro de la funcion, fuera de la funcion no se podrá
function miFuncionDos(a,b){ //Creamos la funcion
    console.log(arguments.length);
}
miFuncionDos(5,3);

//ToString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);//Aqui vemos el toString

//Funciones flecha(similar a las funciones de tipo expresion)
const  sumarFuncionFlecha = (a,b) => a+b;
resultado = sumarFuncionFlecha(8,9);//asignamos el valor a una variable
console.log(resultado);

//Diferencia entre argumentos y parametros
/*
Los valores que se encuentran entre parentesis al lado del nombre de la funcion una vez que ya a la definimos, son los paramentros.
Al llamar a la funcion, es lo que se conocerá como argumentos
PARAMETROS: Lista de variables que definimos en una funcion
ARGUMENTOS: Valores que pasamos a una funcion
*/
//La propiedad de argument es un arreglo, es para poder acceder a los deferentes valores de los parametros
let sumar = function(a,b){
    console.log(arguments[0]);//muestra el paramtro de a
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}
resultado = sumar(5,7,1);
console.log(resultado);

//Hosting: usar nuestra funcion en cualquier parte de nuestro archivo despues de haberla declarado
let respuesta = sumarTodo(5, 4, 7, 8, 9); //llamamos a la funion
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0;i<arguments.length;i++){
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}

//Paso por valor y paso por referencia
//Paso por valor: Cuando utilizamos tipos que no son objetos, numericos, booleanos,etc. Se aplicaran cuando estemos trabajando con funciones, y estemos enviendo argumentos a dichas funciones.
//Al asignar un valor numerico a una varieble, este valor, se lo conoce como valor primitivo, ya que no tiene ni propiedades ni metodos, no podemos asociar ni propiedades ni metodos a este valor, por eso se conoce como valor primitivo
let j = 10;
function cambiarValor(a){//paso por valor
    a=20;
}
cambiarValor(j);
console.log(j);

//Paso por referencia: para poder ver el paso por referencia vamos a tener que crear un objeto, ya que a un objeto se le puede asociar propiedades y metodos.
const persona= { //creamos un objeto con sus referencias(nombre y apellido) 
    Nombre: "Santiago",
    Apellido: 'Castro'
}
console.log(persona);
function cambiarValorObjeto(persona1){
    persona1.Nombre = "Santino"
    persona1.Apellido = "Nunez"
}
cambiarValorObjeto(persona);
console.log(persona);




