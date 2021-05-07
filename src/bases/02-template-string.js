
const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = nombre + ' ' + apellido

console.log(nombreCompleto)

const nombre2 = 'Carlos';
const apellido2 = 'Hincapie';

const nombreCompleto2 = `${nombre2} 
${apellido2}
${1+1}`
console.log(nombreCompleto2)

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`ESte es un texto: ${getSaludo(nombre2)}`)