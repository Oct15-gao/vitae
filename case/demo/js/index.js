$(document).ready(function() {
    $('.a-c-content li').eq(0).show().siblings().hide();
    $('.a-c-title li').each(function(index) {
        $(this).click(function(event) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.a-c-content li').eq(index).slideDown(500).siblings().hide()
        });
    });
});
