document.addEventListener("DOMContentLoaded", () => {

  //alterna os sub-botões de moda e acessórios
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


  //muda a cor de fundo dos cards quando clica em algum sub-botão de moda e acessórios
  const subBtns = document.querySelectorAll("#subModa .subBtn, #subAcessorios .subBtn");
  const cardsContainer = document.getElementById("cardsOutletFundo");

  subBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      cardsContainer.classList.add("filtrado");
    });
  });


  //preenchendo o coração do favorito ao clicar
  document.querySelectorAll('.favorito-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const icon = this.querySelector('i');
      icon.classList.toggle('bi-heart');
      icon.classList.toggle('bi-heart-fill');
    });
  });

});




