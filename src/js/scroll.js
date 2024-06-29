document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.menu1 a, .menu2 a'); // Seleciona os links dos dois menus
    var header = document.querySelector('header');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var headerHeight = header ? header.offsetHeight : 0;

                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});