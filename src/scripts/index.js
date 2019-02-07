'use strict';

(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);
})();


$( document ).ready(function() {
    //navigation blur effect
    $('.b-menu').on('click', function () {
        $('.landing-page').toggleClass('blur');
    });

    //is loading landing page effect
    setTimeout(function() {
        $("#main").removeClass("is-loading");
    }, 200);
});
