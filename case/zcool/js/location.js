$(document).ready(function() {
    $(window).scroll(function(event) {
        var roll = $('.hgrho').offset().top - $(window).scrollTop() ;
        // var gundong = $('.hgrho').offset().top - $(window).scrollTop() + 240 ;
        if (roll < 0) {
            $('.gundong').show()
            $('.hgr').addClass('hgrtopfixed')
            // if (gundong < 0) {
            //     $('.gundong').addclass('rela');
            //
            // }
        }else {
            $('.gundong').hide()
            $('.hgr').removeClass('hgrtopfixed')
        }
        $('h1').html(gundong)
    });

});
