import '@testing-library/jest-dom';
const { getSaludo } = require('../../base/02-template-string')

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Fredy ', () => {
        //variable
        const nombre = 'Fredy';
        //estimulo
        const saludo = getSaludo (nombre);
        //lo que se espera
        expect (saludo).toBe('Hola '+ nombre);
    })

    test('getSaludo debe retornar Hola Carlos si no hay argumento ', () => {
        
        const saludo = getSaludo();
        expect (saludo).toBe('Hola Carlos');
    })
    
})
