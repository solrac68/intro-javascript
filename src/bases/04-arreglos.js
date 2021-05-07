

// Arreglo
// const arreglo = new Array(10);
const arreglo = [1,2,3,4];
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) */

let arreglo2 =  [...arreglo,5] // Mejor este método que push
const arreglo3 = arreglo2.map(function(num){
    return 2*num
})
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

