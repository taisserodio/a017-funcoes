// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma 
// das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses 
// valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado 
// das operações
//função1
function soma (numero1,numero2){
    return numero1+numero2
}

//função2
function Subtrai(numero1,numero2){
    return numero1-numero2
}

//função3
function multiplique(numero1,numero2){
    return numero1*numero2
}

//função4
function divida(numero1,numero2){
    return numero1/numero2
}

//Em seguida, peça para o usuário inserir dois números
numero1 = Number(prompt("Insira um numero"))
numero2 = Number(prompt("Insira outro numero"))

//chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
soma(numero1,numero2),Subtrai(numero1,numero2),multiplique(numero1,numero2),divida(numero1,numero2)

console.log(`A soma deu:${soma(numero1,numero2)}, a subtração deu :${Subtrai(numero1,numero2)},a multiplicação deu ${multiplique(numero1,numero2)},e a divisão deu ${divida(numero1,numero2)}.`)


