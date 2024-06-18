let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('TIPOS PRIMITIVOS');
//Creamos un objeto
let persona = {
    nombre:'Santiago',
    apellido:'Castro',
    email:'santiagomkastro10@gmial.com',
    edad:18,
    idioma:"es",
    get lang(){
        return this.idioma.toUpperCase(); //toUpperCase:Convierte las minusculas a mayuscula
    },//Creamos el metodo set 
    set lang(Lang){
        this.idioma = this.lang.toUpperCase();
    },
    nombreCompleto: function(){ //creamos un metodo o funcion
        return this.nombre +' '+ this.apellido
    },//agregamos el metodo get
    get nombreEdad(){
        return "nombre: "+this.nombre +"edad: "+ this.edad 
    }
    
}
//Mostramos atributos del objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('EJECUTANDO CON UN OBEJTO');
let persona2 = new Object(); //Crea una objeto nuevo en memoria
persona2.nombre = 'Angi';
persona2.direccion = 'Mite 333';
persona2.telefono = '2604 824634'
console.log(persona2.telefono);
console.log('CREAMOS UN NUEVO OBJETO');
console.log(persona['apellido'])//Accedemos como su fuera un arreglo
//for in para acceder al objeto como si fuera un arreglo
console.log('USAMOS EL CICLO FOR IN ')
for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
//Agregar y eliminar propiedades de un objeto
console.log('CAMBIAMOS Y ELIMINAMOS UN ERROR')
persona.apellido = 'Nuñez'; //Cambiamos dinamicamente el valor de un objeto
console.log(persona)
//Creamos un atributo erroneo para luego borrarlo
persona.Apellidos = 'Ruiz';//Creamos una nuevo propiedad
delete persona.Apellidos;//Borramos la propiedad erronea

//DISTINTAS FORMAS DE IMPRIMIR UN OBJETO
//Numero 1(la mas sencilla): concatenar cada valor de cada propiedad
console.log(persona.nombre+' '+persona.apellido);
//Numero 2: mediante el ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//Numero 3: la funcion Object.values()
let personaArray = Object.values(persona);
console.log(personaArray);
//Numero 4: Utilizaremos el metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

//CLASE 5
//CLASE 5 Metodos get y set
//GET-Obtener: en la linea 19

console.log("Comenzamos a utilizar el metodo get");
console.log(persona.nombreEdad);
//Set-:En la linea 13
console.log('Comenzamos con el metodo get y set para idiomas');
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang)

//Constructores
function Persona3(nombre,apellido,email){ //Esta funcion sería nuestro constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ //Creamos un metodo dentro del constructor
        return this.nombre+" "+this.apellido;
    }
}

let padre = new Persona3("Reginald","Specter","liveisthisilikethis@gmail.com.suits");
padre.nombre = "Harvey";
padre.telefono = "542604660298" 
console.log(padre);
console.log(padre.nombreCompleto())//Utilizamos la funcion
let madre = new Persona3("Jessica","Pearson","jessipearson@gmail.com.suits");
console.log(madre);
console.log(madre.nombreCompleto())//Utilizamos la funcion

//Distintas formas de crear objetos

//Caso objeto 1:
let miObjeto = new Object();
//Caso objeto 2:
let miObjeto2 = {}; //Esta opcion es breve y recomendad

//Caso String 1:
let miCadena1 = new String("Hola");//Sintaxis formal
//Caso String 2:
let miCadena2 = "Hola"; //Sintaxis simplificada y recomendada

//Caso con numeros 1 
let miNumero = new Number(5);//Es formal no recomendable
//Caso con numeros 2
let miNumero2 = 5; 

//Caso booleanos 1
let miBoolean = new Boolean(false);//Formal 
//Caso booleanos 2
let miBoolean2 = false; //Recomendada

//Caso arreglos 1
let miArreglo = new Array();//Formal
//Caso arreglos 2
let miArreglo2 = [];

//Caso function 1
let mifuncion = new function(){}; //Todo despues de new se considera objeto
//Caso function 2
let mifuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = "2651658198"
console.log(padre);
console.log(madre.telefono);
madre.telefono = "542651658198";
console.log(madre.telefono);


//Uso de call
let Persona4 = {
    nombre: "Facundo",
    apellido: "Ruiz",
    nombreCompleto2: function(titulo,telefono){
        //return titulo+": "+this.nombre+" "+this.apellido+" "+telefono
        return this.nombre+" "+this.apellido
    }
}

let Persona5 = {
    nombre: "Juan Cruz",
    apellido: "Hernandez",
}

console.log(Persona4.nombreCompleto2("Lic.","5895968565"));
console.log(Persona4.nombreCompleto2.call(Persona5,"Ing.","546523784203"));


//Metodo Apply
let arreglo = ["Ing.","6544686315968"];
console.log(Persona4.nombreCompleto2.apply(Persona5,arreglo));










