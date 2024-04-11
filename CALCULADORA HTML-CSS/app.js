function clicar(){
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value) //parse converte
    var resultado = document.getElementById('resultado')
    var soma

    function divisao (){
        var numero1 = parseFloat(document.getElementById('numero1').value)
        var numero2 = parseFloat(document.getElementById('numero2').value)
        if (numero2 === o){
            document.getElementById('resultado').innerText = 'Erro: divisão por zero'
        }else{
            document.getElementById('resultado').innerText = numero1 / numero2;
        }
    }

    function multiplicacao(){
        var numero1 = parseFloat(document.getElementById('numero1').value)
        var numero2 = parseFloat(document.getElementById('numero2').value)
        resultado.innerText = numero1 * numero2
    }


    //processamento
    var soma = numero1 + numero2

    //saida
    console.log(soma)
    console.log(typeof soma)
    resultado.innerText =`O resultado da soma é ${soma}` //coloca um texto lá dentro
}