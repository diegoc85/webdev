function escolhaComp(){
    const jokeipo = ['Pedra', 'Papel', 'Tesoura']
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]
}

function jogar(escolhaDoUsuario){
    let escolhaPC = escolhaComp()
    let resultado

    if(escolhaDoUsuario === escolhaPC){
        let resultado = 'Empate!'
    }
    document.getElementById('resultado').innerText = resultado
}
// resolver com if else if e else  