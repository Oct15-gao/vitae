$(document).ready(function() {
    $(window).scroll(function(event) {
    var hei = $(window).scrollTop();
    if (hei >= 130) {
        $('.fixedNav').addClass('bgWhite')
        $('.fixedNav .bgWhiteSearch').show()
    }else {
        $('.fixedNav').removeClass('bgWhite')
        $('.fixedNav .bgWhiteSearch').hide()
    }

    });

});
