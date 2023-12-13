function soma(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt("Informe um valor: "));
let num2 = parseFloat(prompt("Informe um segundo valor: "));

let resultado = soma(num1, num2);
console.log("A soma: " + resultado);