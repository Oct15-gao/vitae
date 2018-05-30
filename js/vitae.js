setTimeout(function(){
    $("#loading").slideUp(1500)
},0)
$(document).ready(function() {

    $('.menu li').click(function(event) {
    $(this).addClass('active').siblings().removeClass('active')
    });
    // 图片移入加长
    $('.item.length .img').mouseover(function(event) {
        $(this).stop().animate({'max-height': 800}, 500)
    });
    $('.item.length .img').mouseout(function(event) {
        $(this).stop().animate({'max-height': 150}, 200)
    });
});
