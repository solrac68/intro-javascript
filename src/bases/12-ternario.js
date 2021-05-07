const activo = true;

const mensaje = (activo) ? 'Activo':'Inactivo'; // Activo

console.log(mensaje); // Activo


const mensaje2 = (activo) && 'Activo'; // Activo

console.log(mensaje2); // Activo

const mensaje3 = (!activo) && 'Activo'; // false

console.log(mensaje3); // false