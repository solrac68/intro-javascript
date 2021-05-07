// ---------------Template String ---------------------------

console.log("Hola Mundo")
console.log("Hola Mundo")

const nombre = 'Fernando'
const apellido = 'Herrera'

const nombreCompleto = `${nombre} 
${apellido}`

console.log(nombreCompleto)

// ------------ Objetos -------------------------

const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    dieccion: {
        ciudad:'New York',
        zip:234234,
        lat:14.234,
        lng:23.98234,
    }
}

console.log(persona)
console.log({persona:persona})
console.log({persona})

console.table(persona)

const persona2 = persona
persona2.nombre = 'Peter'

console.log({persona2})
console.log({persona}) // El cambio se ve reflejado aquí

const persona3 = {...persona}
persona3.nombre = 'Sam'

console.log({persona3})
console.log({persona})

// ------------- Arreglos ----------------------------

// const arreglo = new Array()
// console.log(arreglo)

// const arreglo100 = new Array(100) // (100) [empty × 100]
// console.log(arreglo100)
// arreglo100.push(1)
// console.log(arreglo100) // (101) [empty × 100, 1]


// Arreglo forma recomendada


const arreglo2 = []
arreglo2.push(1) // No se recomienda utilizar push
arreglo2.push(2)
arreglo2.push(3)
arreglo2.push(4)

console.log(arreglo2)

const arreglo3 = [1,2,3,4]


let arreglo4 = [...arreglo3,5] // Copia arreglo y agrega un nuevo elemento

console.log(arreglo4)


const arreglo5 = arreglo4.map( function(num){
    return 3*num
});

console.log(arreglo5)

// Funciones

function saludar(nombre){
    return `Hola,${nombre}`
}

console.log(saludar('Juan'))


const saludar2 = function(nombre){
    return `Hola, ${nombre}`
}

console.log(saludar2('Carlos'))

const saludar3 = (nombre) => {
    return `Hola, ${nombre}`
}

console.log(saludar3('Augusto'))

const saludar4 = (nombre) => `Hola, ${nombre}`


console.log(saludar4('Hincapie')) 

const getUser = () => {
    return {
        uid: 'ABC123',
        username:'El_Papi15'
    }    
}

console.log(getUser())


const getUser2 = () => ({
        uid: 'ABC145',
        username:'El_Papi15'
    });

console.log(getUser2())


// Transformar en función flecha
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC123',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando')

console.log(usuarioActivo)

// ==========================================00


const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC123',
        username: nombre
    });


const usuarioActivo2 = getUsuarioActivo2('Juancho')

console.log(usuarioActivo2)




