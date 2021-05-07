//import {heroes} from './data/heroes' // Se usa con export const heroes en heroes.js
//const { heroes } = require("./data/heroes") // Se usa con export const heroes en heroes.js
//import heroes, {owners} from '../data/heroes' // Se usa con export default en heroes.js
import heroes from '../data/heroes' // Se usa con export default en heroes.js


//console.log(heroes)

/* const getHeroeById = (id) => {
    return heroes.find(element => element.id === id)
} */

export const getHeroeById = (id) => heroes.find(element => element.id === id)

export const getHeroeByOwner = (owner) => heroes.filter(element => element.owner === owner)

//console.log(getHeroeById(2))
//console.log(getHeroeByOwner('DC'))
//console.log(owners)