$(document).ready(function() {
    setTimeout(function(){
        $("#loading").fadeOut(3000)
    },3000)
    $('#works').hide()
    $('#speak').hide()
    $('.menu li').click(function(event) {
    $(this).addClass('active').siblings().removeClass('active')
    });

    // 切换页面
    $('.about').click(function(event) {
    $('#index').slideDown(500).siblings('section').slideUp(30)
    });

    $('.portfolio').click(function(event) {
    $('#works').slideDown(500).siblings('section').slideUp(30)
    });
    $('.speak').click(function(event) {
    $('#speak').slideDown(500).siblings('section').slideUp(30)
    });


    // 图片移入加长
    $('.item.length .img').mouseover(function(event) {
        $(this).stop().animate({'max-height': 800}, 500)
    });
    $('.item.length .img').mouseout(function(event) {
        $(this).stop().animate({'max-height': 150}, 200)
    });

});
