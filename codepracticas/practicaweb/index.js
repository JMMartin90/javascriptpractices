function log(argumento) {
  console.log(argumento);
}
let alumEdad = 32; //esto es una variable: Let
log(alumEdad);
alumEdad = "treintaidos"; //esto es como se reasigna una variable: nombre de variable=reasignacion
log(alumEdad);
const texto = "me cuelgan los huevos"; //esto es una constante: const
log(texto);
// texto ="tengo los huevos de acero"
log(32 + 16);
log(33 % 2);
log(texto + " " + "por el calor"); //concatenar cadenas
let alumMedia = 20;
alumMedia += 1; //reasignar una variable sumando su valor +1
alumMedia = alumMedia + 1;
log(alumMedia);
//arrays. una arrays es una lista de cositas ;)
let alumEdades = [23, 43, 23, 12, 51, 33, 19, 34];
log(alumEdades);
log(alumEdades[0], alumEdades[1]); // seleccionar dos numeros de la lista
log(alumEdades[0] + alumEdades[1]); // sumar dos numeros de la lista
for (let i = 0; i < alumEdades.length; i++ /*++ igual a sumar +1*/) {
  const element = alumEdades[i];
  log(element);
}
for (let i = alumEdades.length - 1; i >= 0; i--) {
  const element = alumEdades[i];
  log(element);
}
let edadTotal = 0;
for (let i = 0; i < alumEdades.length; i++) {
  edadTotal += alumEdades[i];
}
log(edadTotal);
const edadMedia = edadTotal / alumEdades.length;
log(edadMedia);
alumEdades.push(40);
log(alumEdades);
//objetos
const alumno = {
  nombre: "pedro",
  edad: 78,
  hobies: ["furbo", "pinta wahamer", "comer", "cagar"],
  miNombre: () => log("mi nombre es Pietro"),
};
log(alumno);
log(alumno.nombre);
log(alumno.hobies[2]);
log(alumno.hobies.length);
let textoComillaDoble = "don't stop me now";
let textoComillaSimple = 'y el dijo:"degluteme las gonadas"';
let textoComillaPervertida = `el alumno ${alumno.nombre} me deglute las gonadas`; // solo en las comillas pervertidas se puede invocar a variables.
log(textoComillaPervertida);
//funciones son piezas de codigo reutilizables.
function dosMasDos() {
  const suma = 2 + 2;
  return suma;
}
log(dosMasDos());
log(dosMasDos() + dosMasDos());
function suma(numeroUno, numeroDos) {
  const sumita = numeroUno + numeroDos;
  return sumita;
}
log(suma(8, 5));
alumno.miNombre();
