$(function() {

    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
        return false;
    });

    $('#nav-icon2').click(function() {
        $(this).toggleClass('open');
        $('#sidebar').slideToggle('normal');
    });

    var round = function() {
        $('.trigger').toggle();
        $('.menu').toggleClass('round');
        $('.close').toggle();
        $('.drop-down').toggleClass('down');
    };

    $('.menu a').click(function() {
        round();
        $('.navigation').slideToggle();
        return false;
    });

    // $(window).resize(function() {
        if ($(window).width() <= 1023) {
            $('.navigation a').click(function() {
                $('.navigation').slideUp('fast');
                round();
                return false;
            });
        }
    // });

});


$(function() {

    // checkbox
    $(".checkbox").uniform();
    // select styled
    $('.styled').selectmenu({
        position: {
            my: "left top", // default
            at: "left bottom", // default

            // "flip" will show the menu opposite side if there
            // is not enough available space

            collision: "flip" // default is ""
        }
    });
    // scroll
    $('.scroll').click(function(e) {
        e.preventDefault();
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000, { offset: 0 });
        return false;
    });
    // fancybox
    $('.fancybox').fancybox();
    $(".input[name='phone']").mask("+7 (999) 999-99-99");
    $('form').each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 2
                }
            }
        });
    });

    // header nav hidden
    $(document).on('click', '.button', function(e) {
        e.preventDefault();
        var title = $(this).attr('data-title');
        $('#popup').find('.popup-title').text(title);
        $('#popup').find('input[name=theme]').val(title);

    });
    // header nav hidden
    $(document).on('click', '.button-calc', function(e) {
        e.preventDefault();
        var type = $(this).parent().find('select[name=type]').val();
        var size1 = $(this).parent().find('input[name=size1]').val();
        var size2 = $(this).parent().find('input[name=size2]').val();
        var size3 = $(this).parent().find('input[name=size3]').val();
        if ($(this).parent().find('input[name=check1]').is(":checked")) {
            var check1 = 'С доставкой';
        }
        if ($(this).parent().find('input[name=check2]').is(":checked")) {
            var check2 = 'С монтажом'
        }

        $('#popup2').find('input[name=type]').val(type);
        $('#popup2').find('input[name=size1]').val(size1);
        $('#popup2').find('input[name=size2]').val(size2);
        $('#popup2').find('input[name=size3]').val(size3);
        $('#popup2').find('input[name=check1]').val(check1);
        $('#popup2').find('input[name=check2]').val(check2);

    });

});

