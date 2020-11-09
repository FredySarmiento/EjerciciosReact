import '@testing-library/jest-dom'
import { getHeroeById , getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    
    test('debe retornar heroe id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData= heroes.find(h=>h.id === id )

        expect ( heroe ).toEqual(heroeData);
    })

    test('debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect ( heroe ).toBe(undefined);
    })
    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter( (heroe) => heroe.owner === owner );
        expect ( heroe ).toEqual(heroeData);
        console.log(heroe)
    })
    test('debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter( (heroe) => heroe.owner === owner );
        expect ( heroe.length ).toBe(2);
        console.log(heroe)
    })
})
