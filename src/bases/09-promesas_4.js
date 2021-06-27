import { getHeroeById } from './bases/08-imp-exp'

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve,reject) => {
    
        setTimeout(() => {
            console.log('2 segundos despues')
            const heroe = getHeroeById(id)
            if (heroe === undefined)
                reject('Heroe no existe')
            else
                resolve(heroe)
        },2000)
    });
}

getHeroeByIdAsync(1)
    .then(heroe => console.log('Heroe',heroe))
    .catch(obj => console.warn('Error', obj));

getHeroeByIdAsync(10)
    .then(heroe => console.log('Heroe',heroe))
    .catch(obj => console.warn('Error', obj));