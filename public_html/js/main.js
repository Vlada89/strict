$(document).ready(function () {


    function checkHeader() {

        let scrollFromTop = $(window).scrollTop();
        let headerHeight = $('header').outerHeight();
        if (scrollFromTop > headerHeight) {
            $('header').addClass('has-bg py-lg-1').removeClass('py-lg-4');
        } else {
            $('header').removeClass('has-bg py-lg-1').addClass('py-lg-4');
        }
    }

    $(window).scroll(function () {

        checkHeader();


    });
    if ($('.full-slider').length > 0) {


        $('.full-slider').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            margin: 20,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                500: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1100: {
                    items: 4

                }
            }
        });
    }
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Name je obavezno polje'
                },
                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite validan email'
                },
                message: {
                    required: 'Poruka je obavezno polje'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });

});
