$(document).ready(function() {
    var i = 0;
    $('.banner ul li').first().clone().appendTo('.banner ul')

    $('.banner').hover(function() {
        $('.banner span').show()
    }, function() {
        $('.banner span').hide()
    });
    var num = $('.banner ul li').length;

    function showL(){
        i++;
        if (i == num) {
            $('.banner ul').css('left', '0');
            i=1;
        }
        $('.banner ul').stop().animate({left: -1130*i}, 500)
    }
    function showR(){
        i--;
        if (i ==-1) {
            $('.banner ul').css('left', -1130*(num-1));
            i=num-2;
        }
        $('.banner ul').stop().animate({left: -1130*i}, 500)
    }

    $('.banner .leftB').click(function(event) {
        showL()
    });
    $('.banner .rightB').click(function(event) {
        showR()
    });

    var show = setInterval(showL,3000)
    $('.banner').hover(function() {
        clearInterval(show);
    }, function() {
        show = setInterval(showL,3000);
    });

});
