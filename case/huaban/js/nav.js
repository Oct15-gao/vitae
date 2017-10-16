$(document).ready(function() {
    $(window).scroll(function(event) {
    var hei = $(window).scrollTop();
    if (hei >= 250) {
        $('.bgWhiteNav').fadeIn()
        $('.fixedNav').fadeOut();
    }else {
        $('.fixedNav').fadeIn();
        $('.bgWhiteNav').fadeOut()
    }
    });
    $('.registerPage').hide()
    $('.regi').click(function(event) {
        $('.registerPage').show()
    });
    $('.remove').click(function(event) {
        $('.registerPage').hide()
    });
});
