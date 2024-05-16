//const evita que alguem redefina o array 
//Pra fazer rodar pelo terminal do code, tem que entrar sempre na pasta no js e depois node e o nome do arquivo. 
const pessoas = ['Fulano', 'Ciclano', 'Beltrano']
console.log([pessoas[2]])
//adiciona um elemento ao final do array
pessoas.push('Caio')
console.log(pessoas)
//Remove o último elemento do array
pessoas.pop()
console.log(pessoas)
//Adiciona um elemento no início do array
//Usar para adicionar os posts no cp3
pessoas.unshift('Caio')
console.log(pessoas)
//Remover o primeiro elemento do array
pessoas.shift()
console.log(pessoas)
//Atualiza o valor de um array
//Editar um post
pessoas[1] = 'Caio'
console.log(pessoas)

// for(i=0; i<= 10; i++){
//     console.log(i)
// }

//foreach precisa de uma função dentro dele. For each nao tem retorno. 
pessoas.forEach(
    function rodarArray(usuario){
        console.log(usuario + ' Vai Flamengo!')
    }
)

// pessoas.forEach(
//     function rodarArray(usuario){
//         console.log(usuario.toLowerCase())
//     }
// )
//array function é uma forma de escrever função de forma simplificada. Quando aparece, é pq tem funcao. 
pessoas.forEach( usuario => console.log(usuario.toLowerCase()))


//nao mexe no array original. 
const pessoasModificado = pessoas.map(usuario => usuario.toLowerCase())

console.log(pessoasModificado)

function modificarPessoas(){
    return pessoas.map(usuario => usuario.toLowerCase())
}
console.log(modificarPessoas())

pessoas.map(
    function mudarUsuario(usuario){
         usuario.toLowerCase()})


function dobrarNumeros(num){
    return num.map(num => num * 2);  
}

let resultado = dobrarNumeros([1,2,3]);
console.log(resultado);

function caps(array){
    return array.map(trocar => trocar.toUpperCase())
 }
 console.log(caps(['oi','tudo', 'bem']))

const filmes = [{
    nome: 'Céu de Outubro',
    Diretor: 'Nolan',
    Ano: 1993,
    
    
}, {
    nome:'Procurando Nemo',
    Diretor:'Mr. Beast',
    Ano: 2007
}, {
    nome: 'Top Gun',
    Diretor: 'Tarantino',
    Ano: 1986
}]

console.log(filmes[0].nome)

// const filmesModificado = filmes.map(filme => filme.nome)
// console.log(filmesModificado)

const filmesModificado = filmes.filter(filme => filme.Ano > 2000)
console.log(filmesModificado)

