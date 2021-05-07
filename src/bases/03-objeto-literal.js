
const persona ={
    nombre:'Tony',
    apellido:'Stark',
    edad:46,
    direccion: {
        ciudad: 'New York',
        zip:343535,
        lat:12.9,
        lng:1090.34
    }
};


console.log({persona})// console.log({persona:persona})
//console.table({persona})

const persona2 = persona // Copy reference
console.log({persona2})
persona2.nombre = 'Peter'
console.log({persona})

const persona3 = {...persona} // CREACIÓN DE UN CLON DEL OBJETO

persona3.nombre = 'Carlos'
console.log({persona})
console.log({persona3})


