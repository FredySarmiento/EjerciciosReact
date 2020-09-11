import heroes, { owners } from '../data/heroes'


//console.log(owners);

export const getHeroeById = (id) => heroes.find(heroe=>heroe.id===id);

//console.log(getHeroeById(1));

export const getHeroeByOwner = (owner) => heroes.filter(heroe=>heroe.owner===owner);
//console.log(getHeroeByOwner('Marvel'));
