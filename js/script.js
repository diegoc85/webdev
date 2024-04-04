/* alert("Olá, mundo!");
prompt("Digite seu nome:");
confirm("Você deseja sair?");

 */
//O ; é opcional, mas é bom colocar. Alt + Shift + A

//Entrada
var nome = prompt('Digite seu nome:')
var idade = 23
//saida
console.log("Olá " +nome+ ", seja bem-vindo!")
console.log(`Olá ${nome}, seja bem-vindo!`)
//console.log(nome + idade)

var nome2 = prompt('Digite seu nome:')
var idade2 = prompt('Digite sua idade:')
var profissao = prompt('Digite sua profissão:')

document.querySelector('h1').innerText = `Olá ${nome2}, seja bem-vindo!`

console.log(`Olá, ${nome2}, você tem ${idade2} anos e sua profissão é ${profissao}`)