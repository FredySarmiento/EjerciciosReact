//variables y constantes

const nombre ='Fredy';
const apellido = 'Sarmiento';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

//var No se debe usar

//manejo de scope
if (true){
    const nombre='Antonio'
    console.log(nombre)
}
console.log(valorDado);