//Funciones JS
//Function Normal 

//const saludar = function (nombre){
//    return `Hola, ${nombre}`;
//}

//console.log(saludar('Antonio'))

//Arrow function
const saludar2=(nombre)=>
{
    return `Hola, ${nombre}`;
}
console.log(saludar2('Fredy'))
//Arrow function simplificada
const saludar3=(nombre)=>`Hola, ${nombre}`;
const saludar4=()=>`Hola, Mundo`;
console.log(saludar3('Fredy'));
console.log(saludar4());
//todo lo que se quiere regresar va entre () como en la funcion siguiente
const getUser = () =>({
        uid:'ABC123',
        username: 'El_papi1502'
})

console.log(getUser());

//Tarea 
//1. Transformar a una funcion de flecha 
//2. Tienen que retornar un objeto
//3. Pruebas

//Funcion Original

/* funcion getUsuarioActivo(nombre){
    return{
       uid:'ABC567',
       username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('FredyS');
console.log(usuarioActivo); */
//Solucion
//retorno implicito
const getUsuarioActivo = (nombre)=>({
          uid:'ABC567',
          username: nombre
});

usuarioActivo = getUsuarioActivo('FredyS');
console.log(usuarioActivo);  