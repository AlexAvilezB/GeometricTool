//codigo del cuadrado

console.group("Cuadrados");


function perimetroCuadrado(lado) {
  return lado * 4;
}

console.log(
  "El perimetro del cuadrado es: " + perimetroCuadrado + " centimetros"
);

function areaCuadrado(lado) {
  return lado * lado;
}

console.log(
  "El area del cuadrado es: " + areaCuadrado + " centimetros cuadrados"
);

console.groupEnd();

//codigo del triangulo

console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(
  "El area del triangulo es de: " + areaTriangulo + " centimetros cuadrados"
);

console.groupEnd();

//codigo del circulo

console.group("Circulos");

const PI = Math.PI;

console.log("La medida de PI es: " + PI);


function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//conexion a html

//cuadrado

function calcularDatosCuadrado() {
  const input = document.getElementById("cuadrado");
  const value = input.value;
  const resPerimetro = document.getElementById("resP");
  const resArea = document.getElementById("resA");

  const perimetro = perimetroCuadrado(value);
  resPerimetro.innerHTML = perimetro.toFixed(2) + " cm";

  const area = areaCuadrado(value);
  resArea.innerHTML = area.toFixed(2) + " cm";
}

//triangulo

function calcularDatosTriangulo() {
  const input1 = document.getElementById("lado1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("lado2");
  const value2 = Number(input2.value);
  const base = document.getElementById("base");
  const value3 = Number(base.value);
  const resPerimetro = document.getElementById("resPT");
  const resArea = document.getElementById("resAT");

  const perimetro = perimetroTriangulo(value1, value2, value3);
  resPerimetro.innerHTML = perimetro.toFixed(2) + " cm";

  const area = areaTriangulo(value1, value3);
  resArea.innerHTML = area.toFixed(2) + " cm";
}

//circulo

function calcularDatosCirculo() {
  const input = document.getElementById("circulo");
  const value = input.value;
  const resPerimetro = document.getElementById("resPC");
  const resArea = document.getElementById("resAC");
  const resDiametro = document.getElementById("resD");

  const diametro = diametroCirculo(value);
  resDiametro.innerHTML = diametro.toFixed(2) + " cm";

  const perimetro = perimetroCirculo(value);
  resPerimetro.innerHTML = perimetro.toFixed(2) + " cm";

  const area = areaCirculo(value);
  resArea.innerHTML = area.toFixed(2) + " cm";
}

function reset() {
  document.getElementById("form").reset();
  document.getElementById("formT").reset();
  document.getElementById("formC").reset();
  resA.innerHTML = 0 + " cm";
  resP.innerHTML = 0 + " cm";
  resAT.innerHTML = 0 + " cm";
  resPT.innerHTML = 0 + " cm";
  resAC.innerHTML = 0 + " cm";
  resPC.innerHTML = 0 + " cm";
  resD.innerHTML = 0 + " cm";
}
