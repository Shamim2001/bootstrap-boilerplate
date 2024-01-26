$(function () {
    $(document).ready(function () {
        // Preloader
        setTimeout(() => {
            jQuery('.lovette_page_loading_area').fadeOut();
            jQuery("html,body").css('overflow', 'visible');
        }, 3000);



        // Nice Scroll
        $(".offcanvas-body").niceScroll();

        // Product Accordion
        var $myGroup = $('#product-accordion');
        $myGroup.on('show.bs.collapse', '.collapse', function () {
            $myGroup.find('.collapse.show').collapse('hide');
        });

        // Magnific Popup
        $('.product-main-slider').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

        // Signle Product Slider
        $('.product-main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: false,
            asNavFor: '.product-mini-slider'
        });
        $('.product-mini-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,
            asNavFor: '.product-main-slider',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            centerPadding: '40px',
            arrows: false,
        });


    });
}(jQuery));
