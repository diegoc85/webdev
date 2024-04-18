
    function calcular(){
        var numBooks = parseInt(document.getElementById('numBooks').value)
        var resultado = document.getElementById('resultado')

        if (numBooks <= 7){
            preco = document.getElementById('numBooks').innerText = numBooks * 22;
        }
        else{
            preco = document.getElementById('numBooks').innerText = numBooks * 15;
        }
        resultado.innerText = `O preço a ser pago é de R$ ${preco}`
        alert('O valor a ser pago é de R$ ' + preco);
    }
  
    
