$(document).ready(function() {
    var num = 0;
    $('.backgroundImage div').first().show()
    $('.left_btn').click(function() {
        if (num==-1) {
            num=5
        }
        num--;
        $('.backgroundImage div').eq(num).stop().fadeIn(500).siblings().fadeOut();
    });
    $('.right_btn').click(function() {

        if (num==5) {
            num=-1
        }
        num++;
        $('.backgroundImage div').eq(num).stop().fadeIn(1000).siblings().fadeOut();

    });
    var show = setInterval(function(){
        if (num==5) {
            num=-1
        }
        num++;
        $('.backgroundImage div').eq(num).stop().fadeIn(1000).siblings().fadeOut();
    },3000)

$('.btn').children().hover(function() {
    clearInterval(show)
}, function() {
    show = setInterval(function(){
        if (num==5) {
            num=-1
        }
        num++;
        $('.backgroundImage div').eq(num).stop().fadeIn(1000).siblings().fadeOut();
    },3000)
});
});
