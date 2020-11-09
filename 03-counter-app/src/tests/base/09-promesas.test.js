import '@testing-library/jest-dom';
import {getHeroeByIdAsync} from '../../base/09-promesas'
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIDAsync debe retornar un héroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync( id )
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done();
            });
    });
    
    test('Debe obetener un error si el heroe por id no existe ', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(e=>{
            expect(e).toBe('No se pudo encontrar el héroe');
            done();//se envia la terminacion de una tarea asincrona
        })
    });
    
})
