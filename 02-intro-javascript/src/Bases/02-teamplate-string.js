const nombre = 'Fredy';
const apellido = 'Sarmiento';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `hola mundo `;
console.log(`${nombre} ${apellido}`)
console.log(nombreCompleto)

function getSaludo(){
    return 'Hola Mundo';
}

console.log(`Este es el texto que me retorna la funcion ${getSaludo()}`)

function getSaludo( nombre){
    return 'Hola Mundo';
}

console.log(`Este es el texto que me retorna la funcion ${getSaludo(nombre)}`)