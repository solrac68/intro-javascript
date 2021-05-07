const personajes = ['Goku','Vegeta','Trunks'];
const [,p1,p2] = personajes
console.log(p1,p2) // Imprime Vegeta Trunks

const retornaArreglo = () => {
    return ['ABC',123]
}

const ar = retornaArreglo();
console.log(ar)

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros)

const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
}

const arr = useState('Goku');
console.log(arr)

const[val,fun] = useState('Goku');
console.log(val)
fun()



