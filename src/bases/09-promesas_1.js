import { getHeroeById } from './bases/08-imp-exp'


const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('2 segundos despues')
        const heroe = getHeroeById(2)
        console.log(heroe)
        resolve()
    },2000)
});

promesa.then(() => {
    console.log('Then de la promesa')
})
