$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    })

    // Slide-up
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop: 0})
    })

    // Text animation 
    var typed = new Typed(".typing", {
        strings: ['Development', 'Mr. Web Designer', 'Boss', 'GOD OF CODE'],
        typeSpeed: 90,
        backSpeed: 80,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ['Development', 'Mr. Web Designer', 'Boss', 'GOD OF CODE'],
        typeSpeed: 90,
        backSpeed: 80,
        loop: true
    })

    // Toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
})