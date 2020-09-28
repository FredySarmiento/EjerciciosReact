import '@testing-library/jest-dom';
const { getSaludo } = require('../../base/02-template-string')

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe eretornar Hola Fredy ', () => {
        
        const nombre = 'Fredy';
        const saludo = getSaludo (nombre);
        expect (saludo).toBe('Hola '+ nombre);
    })
    
})
