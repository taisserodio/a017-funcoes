// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimaOlaTais(tais){
    console.log("Ola Tais")
}
console.log("Ola Tais")


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
let i = 1;
function imprimaTabuada(tabuada)
{
    for(let i = 1; i <= 10; i++){
        console.log(`${(tabuada)} x ${i} = ${Number(tabuada)*Number (i)}`)
    }
}
imprimaTabuada(6);

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
// ou __arrow functions__
 const imprimaOlaTais = () => 
{
    console.log(`Olá Tais`)
}
imprimaOlaTais('Tais');

//
       // b           c 
const imprimaTabuada = (tabuada) =>{
    for(let i = 1; i <+ 10; i ++){
        console.log(`${(tabuada)} x ${i} = ${Number(tabuada)*Number(i)}`);
    }
}
(imprimaTabuada(6));
