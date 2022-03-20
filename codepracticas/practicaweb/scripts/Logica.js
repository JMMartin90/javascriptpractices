// comparaciones
console.log(1 === 1) // es una comparación de valor y tipo, aqui da verdadero.
console.log(1 === '1') // compara valor y tipo, aqui da falso, mismo valor pero diferente typo.
console.log(1 == '1') // solo compara valores, daria verdadero pues es el mismo valor.
console.log(1 !== 1) // estamos comparando que sean distintos valores del mismo tipo, daria falto pues es el mismo valor.
console.log(2 >= 1) // aqui estamos comparando que el valor sea mayor o igal, daria verdadero.
console.log(2 <= 1) // aqui estamos comparando que el valor sea menor o igual, daria falso.

// la admiración significa negación !true == false.       
console.log(!true) //falso
console.log(!false) //verdadero
console.log(!0) //verdadero
console.log(!1) //falso
// todo numero que no sea 0 es verdadero, porlo que 0 es falso. incluido los numeros negativos.

// logica && (AND) las dos partes han de ser verdaderas "true"
console.log(Boolean(1*1), true && true) // true
console.log(Boolean(0*1), false && true) // false
console.log(Boolean(1*0), true && false) // false
console.log(Boolean(0*0), false && false) // false
// todos tienen que ser verdaderos para que (AND) de verdadero.

// logica || (OR) una de las dos partes han de ser verdaderas "true".
console.log(Boolean(1+1),true || true ) // true
console.log(Boolean(1+0),true || false ) // true
console.log(Boolean(0+1), false || true) // true
console.log(Boolean(0+0), false || false) // false
// en (OR) es como si sumaramos, la unica fora de dar falso es si todo es 0.