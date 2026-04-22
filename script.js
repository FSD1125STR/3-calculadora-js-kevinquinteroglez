function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function product(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function limpiar() {
  document.getElementById("pantalla").value = "";
}

function escribir(dato) {
  document.getElementById("pantalla").value += dato;
}

function calcular() {
  let pantalla = document.getElementById("pantalla").value;
  let operacion = "";

  if (pantalla.includes("+")) operacion = "+";
  if (pantalla.includes("-")) operacion = "-";
  if (pantalla.includes("*")) operacion = "*";
  if (pantalla.includes("/")) operacion = "/";

  let partes = pantalla.split(operacion);
  let n1 = parseFloat(partes[0]);
  let n2 = parseFloat(partes[1]);
  let resultado = 0;

  if (operacion === "+") resultado = add(n1, n2);
  if (operacion === "-") resultado = substract(n1, n2);
  if (operacion === "*") resultado = product(n1, n2);
  if (operacion === "/") resultado = division(n1, n2);

  document.getElementById("pantalla").value = resultado;
}
