/*JS da página do clube fidelidade*/

document.addEventListener("DOMContentLoaded", () => {

    //Preenchendo o coração do favorito ao clicar
    document.querySelectorAll('.favorito-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-heart');
            icon.classList.toggle('bi-heart-fill');
        });
    });

});