document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {

            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
