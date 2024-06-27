document.addEventListener("DOMContentLoaded", function() {
    var btnExp = document.querySelector('#click-expend');
    var menuSide = document.querySelector('.menu_side');
    var btnSair = document.querySelector('#click-exit');

    btnExp.addEventListener('click', function() {
        menuSide.classList.add('expend');
    });

    btnSair.addEventListener('click', function() {
        menuSide.classList.remove('expend');
    });
});