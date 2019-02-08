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

    $('.b-link').on('click', function () {
        $(body).removeClass('open');
        $('.b-menu, .b-container, .b-nav').removeClass('open');
        $('.landing-page').removeClass('blur');
    });
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

    //instagram Feed
    var customFeed = new Instafeed({
        get: 'user',
        userId: '2099259904',
        clientId: 'fc1efb2efb724a1d9f5cf56292fcadea',
        accessToken: '2099259904.1677ed0.62e0f96bf6f947e9bbc44d329f0d08c3',
        limit: 10,
        resolution: 'standard_resolution',
        template: '<div class="item" style="background:url({{image}}); background-size: cover; background-position: center;"><p class="item-description mr-2 text-center">{{caption}}</p></div>',
        after: function () {
            $('.item').each(function () {
                var size = Math.floor((Math.random() * 2) + 1);
                switch(size) {
                    case 1:
                        $(this).addClass('item--medium');
                        break;
                    case 2:
                        $(this).addClass('item--large');
                        break;
                    default:
                }
            });
        }
    });

    customFeed.run();

    //social-media item description effect
    $('.item').hover(
        function() {
            console.log('hover');
            $('.item-description', this).addClass('show');
        },
        function() {
            $('.item-description', this).removeClass('show');
        }
    );

    //smooth scroll
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
});
