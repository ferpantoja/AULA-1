let numA = 20;
let numB = 300;
let numC = 40;

let resultado = numA > numB ? "é maior" : "é menor";
// validação (?) se verdadeiro ---- (:) se falso

if (numA > numB && numA > numC) {
  console.log(numA + "É maior");
  if (numA % 2 != 0) {
    console.log(numA + "é par");
  }
} else if (numB > numA && numB > numC) {
  console.log(numB + "é maior");
} else {
  console.log(numC + "é maior");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//imprimir na tela só os numeros pares de 0 a 20
for (let i = 2; i < 22; i = i + 2) {
  console.log(i);
}
