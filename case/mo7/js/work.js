$(document).ready(function() {
    $('.text').hide()

    $('.card').hover(function() {
        $(this).children('.text').stop().fadeIn(300)
    }, function() {
        $(this).children('.text').hide()
    });


    $('.cardfirst').hover(function() {
        $(this).children('.text').stop().fadeIn(300)
    }, function() {
        $(this).children('.text').hide()
    });

    // 点击图片放大
    $('.clickImg').click(function(event) {
        var text = $(this).children('.text').children('span').text()
        var img = $(this).css('background-image');
        // alert(img.match(/\/(.*)"/)[1];
        $('.imgBg').css('background-image',img);
        $('.bigImg .bigImgHeader').text(text)
        $('.bigImg').stop().fadeIn(300)

    });
    $('.bigImg').click(function(event) {
        $('.bigImg').hide()
    });
    $('.imgBg').click(function(e){e.stopPropagation();})
    // var x =  "url("file:///G:/1%E9%AB%98%E8%BE%89%E8%B6%85/%E4%BD%9C%E4%B8%9A/mo7/images/banner/5.jpg")";
    // alert(x.match(/\/(.*)'/)[1]);

});
