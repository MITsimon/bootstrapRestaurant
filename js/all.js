$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { /* 要滑動到選單的距離 */
            $('.drop-down-menu').addClass('nav-fixed'); /* 幫選單加上固定效果 */
        } else {
            $('.drop-down-menu').removeClass('nav-fixed'); /* 移除選單固定效果 */
        }
    });
});