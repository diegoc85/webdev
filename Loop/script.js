// node .\Loop\script.js

// for(i=10; i >=0; i--){
//     console.log(i)
// }
// for(i=1; i<=10; i+=2){
//     console.log(i)
// }
// Faça um programa usando estrutura de repetição que mostre a tabuada até 10 de qualquer número

const resultado = document.getElementById('resultado')

function calcular(){
    var numero = parseInt(document.getElementById('numero').value)

    for(i=0;i<=10;i++){
        console.log(`A tabuada do ${numero} é: ${numero} x ${i} é igual a ${numero *i}`)
    }
}