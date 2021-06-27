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
    .then(console.log)
    .catch(console.warn);

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);