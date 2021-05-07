import { getHeroeById } from './08-imp-exp'

/* const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(3)
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    },2000)
})

promesa.then((heroe) => {
    console.log('Heroe', heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve,reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id)
            //console.log(heroe);
            heroe === undefined ? reject('NO CONOZCO ESTE HEROE') : resolve(heroe);
            // if(heroe === undefined) 
            //     reject('NO CONOZCO ESTE HEROE')
            // else 
            //     resolve(heroe);

            //reject('No se pudo encontrar el heroe')
        },2000)
    });
    return promesa;
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(err => console.warn(err));
    
getHeroeByIdAsync(10)
    .then(heroe => console.log('Heroe',heroe))
    .catch(console.warn);