/*JS da página inicial*/

document.addEventListener("DOMContentLoaded", () => {

  //Alterna os sub-botões de moda e acessórios
  const btnModa = document.getElementById("botaoModa");
  const btnAcessorios = document.getElementById("botaoAcessorios");
  const subModa = document.getElementById("subModa");
  const subAcessorios = document.getElementById("subAcessorios");

  btnModa.addEventListener("click", () => {
    subModa.classList.replace("d-none", "d-flex");
    subAcessorios.classList.replace("d-flex", "d-none");
  });

  btnAcessorios.addEventListener("click", () => {
    subAcessorios.classList.replace("d-none", "d-flex");
    subModa.classList.replace("d-flex", "d-none");
  });


  //Muda a cor de fundo dos cards quando clica em algum sub-botão de moda e acessórios
  const subBtns = document.querySelectorAll("#subModa .subBtn, #subAcessorios .subBtn");
  const cardsContainer = document.getElementById("cardsOutletFundo");

  subBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      cardsContainer.classList.add("filtrado");
    });
  });


  //Preenchendo o coração do favorito ao clicar
  document.querySelectorAll('.favorito-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const icon = this.querySelector('i');
      icon.classList.toggle('bi-heart');
      icon.classList.toggle('bi-heart-fill');
    });
  });


  //Apenas a "preparação" da função de atualizar o número de itens no carrinho
  function atualizarCarrinho(qtd) {
    const contador = document.getElementById('contadorCarrinho');
    contador.textContent = qtd;
  }

});




