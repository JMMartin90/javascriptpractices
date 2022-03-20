// las funciones se utilizan para reutilizar piezas de código.

// declaramos una función con la palabra clave "function", seguida del nombre de la función
// y entre parentesis los valores (argumentos) que acepta la función.
function log(valor) {
    console.log(valor)
}
// llamamos a la función log de la siguiente manera.
log("hello world")

function doble(n) {
    return n*2
}

doble(4)

const dobleDe4 = doble(4)
log(dobleDe4)
log(doble(4))
/* para descubrir un numero como impar o par, 
la solución mas facil seria aplicarle un 
resto por 2( %2) con la funcion (if),
si fuera par daria verdadero y ejecutaria (console.log("par") 
y si fuera falso se ejecuta (else)*/
function esPar(n) {
    const resultado = n%2
    if (resultado ===0) {
        console.log("par")
    } else {
        console.log("impar")
    }
    return !Boolean(resultado) //para finalizar utilizamos la funcion (return) para darnos verdadero o falso dependiendo del resultado.
}
