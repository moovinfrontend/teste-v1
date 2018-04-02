(function(l){
    var i,s={touchend:function(){}};
    for(i in s)l.addEventListener(i,s)})(document); // iOS 'Sticky Hover' Fix: Now "Unhover" if click out the hover.

jQuery(document).ready(function($){

    // LightSlider Setup
    $('#items-list-surf, #items-list-clothes, #items-list-shoes, #items-list-acessories').lightSlider({
        pager:false,
        enableDrag: true,
        item:3,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1025,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:-80,
                  }
            },
            {
                breakpoint:769,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:-80,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    // Active f(eatured)-menu when click
    $('.f-menu').on('click', 'li', function() {
        $('.f-menu li.f-active').removeClass('f-active');
        $(this).addClass('f-active');
    });

    // Slider change category
    $('.f-surf').on('click', function() {
        $('#slider-items-clothes, #slider-items-shoes, #slider-items-acessories').addClass('hidden');
        $('#slider-items-surf').removeClass('hidden');
    });
    $('.f-clothes').on('click', function() {
        $('#slider-items-surf, #slider-items-shoes, #slider-items-acessories').addClass('hidden');
        $('#slider-items-clothes').removeClass('hidden');
    });
    $('.f-shoes').on('click', function() {
        $('#slider-items-clothes, #slider-items-surf, #slider-items-acessories').addClass('hidden');
        $('#slider-items-shoes').removeClass('hidden');
    });
    $('.f-acessories').on('click', function() {
        $('#slider-items-clothes, #slider-items-shoes, #slider-items-surf').addClass('hidden');
        $('#slider-items-acessories').removeClass('hidden');
    });

    // Mobile top-header hide/show
    $('#hidden-btn').on('click', function() {
        $('.top-header').animate({opacity: 'toggle'}, 800);
    });

    // Smooth scroll
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#0"]')
    .click(function(event) {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top-50 }, 1000);
        return false;
    });
});
