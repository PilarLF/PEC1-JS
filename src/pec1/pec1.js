//Implementa una función ex1 que calcule el perímetro (longitud) de una circunferencia a partir de su radio.
//La función recibirá el siguiente parámetro: * r: Representa el radio de la circunferencia. Es un valor numérico.
//La función devolverá el perímetro de la circunferencia aplicando la fórmula P = 2 * π * r.
export function ex1(r) {
    if (r < 0) return null; 
    return 2 * Math.PI * r
}


//Implementa una función ex2 que calcule el área de un círculo a partir de su radio.
//La función recibirá el siguiente parámetro: * r: Representa el radio del círculo.
//La función devolverá el área del círculo aplicando la fórmula A = π * r^2.
export function ex2(r) {
    if (r < 0) return null; 
    return Math.PI * r^2 
} 

module.exports = { ex1, ex2}