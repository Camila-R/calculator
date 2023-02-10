// GET elements from HTML
var soma = document.getElementById('sum');
var subtracaoAB = document.getElementById('subAB');
var subtracaoBA = document.getElementById('subBA');
var multiplicacao = document.getElementById('multi');
var divisaoAB = document.getElementById('divAB');
var divisaoBA = document.getElementById('divBA');
var potenciaAB = document.getElementById('potAB');
var potenciaBA = document.getElementById('potBA');
var raizA = document.getElementById('raizA');
var raizB = document.getElementById('raizB');
var fatorialA = document.getElementById('fatA');
var fatorialB = document.getElementById('fatB');
var porcentagemAB = document.getElementById('porAB');
var porcentagemBA = document.getElementById('porBA');
var media = document.getElementById('media');

// input numbers on HTML
sum.innerHTML = 0;
subAB.innerHTML = 0;
subBA.innerHTML = 0;
multi.innerHTML = 0;
divAB.innerHTML = 0;
divBA.innerHTML = 0;
potAB.innerHTML = 0;
potBA.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatA.innerHTML = 0;
fatB.innerHTML = 0;
porAB.innerHTML = 0;
porBA.innerHTML = 0;
med.innerHTML = 0;

// FUNCTIONS WITH CALCULUS

// Sum (Soma)
function calculateSum(a, b) {
  return a + b;
}

//Substraction (Subtração)
function calculateSubAB(a, b) {
  return a - b;
}
function calculateSubBA(a, b) {
  return b - a;
}

//Multiplication (Multiplicação)
function calculateMulti(a, b) {
  return a * b;
}

//Division (Divisão)
function calculateDivAB(a, b) {
  return (a / b).toFixed(2);
}
function calculateDivBA(a, b) {
  return (b / a).toFixed(2);
}

//Pow (Potenciação)
function calculatePowAB(a, b) {
  return Math.pow(a, b).toFixed(0);
}
function calculatePowBA(a, b) {
  return Math.pow(b, a).toFixed(0);
}

//Square Root (Raiz Quadrada)
function calculateRootA(a) {
  return Math.sqrt(a).toFixed(2);
}
function calculateRootB(b) {
  return Math.sqrt(b).toFixed(2);
}

//Factorial (Fatorial)
function calculateFacA(a) {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result = result * i;
  }
  return result;
}
function calculateFacB(b) {
  let result = 1;
  for (let i = 2; i <= b; i++) {
    result = result * i;
  }
  return result;
}

// Percentage (Porcentagem)
function calculatePerBA(a, b) {
  return ((a * 100) / b).toFixed(0) + '%';
}
function calculatePerAB(a, b) {
  return ((b * 100) / a).toFixed(0) + '%';
}

//Average (Média)
function calculateAverage(a, b) {
  return (a + b) / 2;
}

// FUNCTION TO CALCULATE
function calculate() {
  var inputA = document.getElementById('firstNumber').value;
  var inputB = document.getElementById('secondNumber').value;

  var a = parseFloat(inputA);
  var b = parseFloat(inputB);

  sum.innerHTML = calculateSum(a, b);
  subAB.innerHTML = calculateSubAB(a, b);
  subBA.innerHTML = calculateSubBA(a, b);
  multi.innerHTML = calculateMulti(a, b);
  divAB.innerHTML = calculateDivAB(a, b);
  divBA.innerHTML = calculateDivBA(a, b);
  potAB.innerHTML = calculatePowAB(a, b);
  potBA.innerHTML = calculatePowBA(a, b);
  raizA.innerHTML = calculateRootA(a);
  raizB.innerHTML = calculateRootB(b);
  fatA.innerHTML = calculateFacA(a);
  fatB.innerHTML = calculateFacB(b);
  porAB.innerHTML = calculatePerAB(a, b);
  porBA.innerHTML = calculatePerBA(a, b);
  med.innerHTML = calculateAverage(a, b);
}
