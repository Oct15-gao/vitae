
$(document).ready(function() {
    // 产品展示
    var num = 0;
    var itemW = $('article.display .article-sections .item').eq(0).outerWidth(true);
    var itemLength = $('article.display .article-sections .item').length;
    $('.arrow-left').click(function(event) {
        num++;
        if (num>2) {
            num=0
        }
        $('.article-sections').stop().animate({left: -num*itemW}, 500)
    });
    $('.arrow-right').click(function(event) {
        num--;
        if (num<0) {
            num=2;
        }
        $('.article-sections').stop().animate({left: -num*itemW}, 500)
    });

// 幻灯片轮播图
    var Bnum = 0;
    var bannerW = $('#banner').width()
    var BLen = $('#sections .section').length;
    $('#sections').css('width', bannerW*BLen);
    $('#sections .section').css('width', bannerW);
    $('#sections .section').each(function(index, el) {
        $('#rounds').append('<div class="round"></div>')
    });
    $('#rounds .round').eq(0).addClass('active')
    function move() {
        $('#sections').stop().animate({left: -Bnum*bannerW}, 1000)
        $('#rounds .round').eq(Bnum).addClass('active').siblings().removeClass('active')
    }
    setInterval((function() {
        Bnum++;
        move()
        if (Bnum>=BLen-1) {
            Bnum = -1;
        }
    }),5000)

    $('#rounds .round').mouseover(function(event) {
        // num = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $('#sections').stop().animate({left: -bannerW*$(this).index()}, 500)
        Bnum = $(this).index()
        if (Bnum>=BLen-1) {
            Bnum = -1;
        }
        console.log(-bannerW*$(this).index());
    });
});
