// Desestructuración

const persona = {
    nombre: 'Tony',
    edad:45,
    clave:'Ironman'
}

//const {edad} = persona
//const {nombre:nombre2} = persona -- puede crear una alias nombre2
//const {nombre,edad,clave} = persona --No importa el orden
const {edad,nombre,clave} = persona

console.log(nombre)
console.log(edad)
console.log(clave)

const retornaPersona = (usuario) => {
    const {edad,nombre,clave} = usuario;
    console.log(nombre,edad,clave)
}

const retornaPersonaDetalle = ({clave,nombre,edad,rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.12,
            lng:-12.32
        }
    }
}


//const {nombreClave,anios,latlng} = retornaPersonaDetalle(persona)
const {nombreClave,anios,latlng:{lat,lng}} = retornaPersonaDetalle(persona)
console.log(nombreClave,anios)
console.log(lat,lng)