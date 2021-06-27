import { getHeroeById } from './bases/08-imp-exp'


const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('2 segundos despues')
        const heroe = getHeroeById(2)
        reject(`No se pudo encontrar el heroe`)
    },2000)
});

promesa.then((heroe) => {
    console.log('Then de la promesa',heroe)
})
.catch(err => console.warn(err))
