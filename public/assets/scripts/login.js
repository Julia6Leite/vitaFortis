/*JS da página de login. Faz abrir o novo formulário quando clica na frase "cadastre-se agora" e voltar quando clica na frase "já tenho conta"*/

document.addEventListener('DOMContentLoaded', () => {
    const btnCadastro = document.getElementById('botaoCadastreAgora');
    const btnCriarConta = document.getElementById('btnEntreAgora');
    const primeiroCard = document.getElementById('cardLogin');
    const segundoCard = document.getElementById('cardCadastro');

    btnCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        primeiroCard.style.display = 'none';
        segundoCard.style.display = 'block';
    });

    btnCriarConta.addEventListener('click', (e) => {
        e.preventDefault();
        segundoCard.style.display = 'none';
        primeiroCard.style.display = 'block';
    });
});