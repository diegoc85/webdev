// query é mais generico e recente que o getelement
//const, pois o html não ira mudar. 
const btnCriar = document.querySelector('#btnCriar');
const inputUsuario = document.querySelector('#inputUsuario');
const listaFilmes = document.querySelector('#listaFilmes');

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault(); // cancelar o comportamento padrao. Deixa que eu controlo. Mandar a info e limpar o form
    const novoFilme = document.createElement('li'); // criando um item de lista
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement('button')
    btnEditar.innerText = 'Editar'
    btnEditar.addEventListener('click', function (){
        novoFilme.style.color = 'red';
        novoFilme.classList.toggle('fundo-preto')
    })

    const imagem = document.createElement('img');
    imagem.src = ''

    novoFilme.innerHTML = `
        <h1> ${inputUsuario.value}</h1>
        <p>Avaliação do filme</p>
    `
    novoFilme.append(btnEditar);
    listaFilmes.append(novoFilme);

    inputUsuario.value = ''

   // console.log(infosDoEvento.target.id)
})