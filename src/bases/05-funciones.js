

/* function saludar(nombre){
    return `Hola, ${nombre}`
} */

// Función en JS
const saludar = function(nombre){
    return `Hola, ${nombre}`
}

// Función flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola, Mundo`

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
)
const user = getUser2()


console.log(saludar);
console.log(saludar2);
console.log(saludar3);

console.log(saludar("Goku"));
console.log(saludar2("Carlos"));
console.log(saludar3("Vegeta"));
console.log(saludar4());
console.log(getUser())
console.log(getUser2())
console.log(user)

// Tarea
const usuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    }
    )


console.log(usuarioActivo('Carlos'))


