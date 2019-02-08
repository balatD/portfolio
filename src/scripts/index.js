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

        var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // ——————————————————————————————————————————————————
        var TextScramble = function () {
                function TextScramble(el) {_classCallCheck(this, TextScramble);
                    this.el = el;
                    this.chars = '!<>-_\\/[]{}—=+*^?#________';
                    this.update = this.update.bind(this);
                }_createClass(TextScramble, [{ key: 'setText', value: function setText(
                        newText) {var _this = this;
                        var oldText = this.el.innerText;
                        var length = Math.max(oldText.length, newText.length);
                        var promise = new Promise(function (resolve) {return _this.resolve = resolve;});
                        this.queue = [];
                        for (var i = 0; i < length; i++) {
                            var from = oldText[i] || '';
                            var to = newText[i] || '';
                            var start = Math.floor(Math.random() * 40);
                            var end = start + Math.floor(Math.random() * 40);
                            this.queue.push({ from: from, to: to, start: start, end: end });
                        }
                        cancelAnimationFrame(this.frameRequest);
                        this.frame = 0;
                        this.update();
                        return promise;
                    } }, { key: 'update', value: function update()
                    {
                        var output = '';
                        var complete = 0;
                        for (var i = 0, n = this.queue.length; i < n; i++) {var _queue$i =
                            this.queue[i],from = _queue$i.from,to = _queue$i.to,start = _queue$i.start,end = _queue$i.end,char = _queue$i.char;
                            if (this.frame >= end) {
                                complete++;
                                output += to;
                            } else if (this.frame >= start) {
                                if (!char || Math.random() < 0.28) {
                                    char = this.randomChar();
                                    this.queue[i].char = char;
                                }
                                output += '<span class="dud">' + char + '</span>';
                            } else {
                                output += from;
                            }
                        }
                        this.el.innerHTML = output;
                        if (complete === this.queue.length) {
                            this.resolve();
                        } else {
                            this.frameRequest = requestAnimationFrame(this.update);
                            this.frame++;
                        }
                    } }, { key: 'randomChar', value: function randomChar()
                    {
                        return this.chars[Math.floor(Math.random() * this.chars.length)];
                    } }]);return TextScramble;}();

                var phrases = [
                    'Dragan Balatinac',
                    'trainee frontend developer',
                    'trainee backend developer',
                    'photography',
                    'guitar / drums'
                ];


                var el = document.querySelector('.text');
                var fx = new TextScramble(el);

                var counter = 0;
                var next = function next() {
                    fx.setText(phrases[counter]).then(function () {
                        setTimeout(next, 800);
                    });
                    counter = (counter + 1) % phrases.length;
                };

                next();
});
