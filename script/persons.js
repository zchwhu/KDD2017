/**
 * Created by Administrator on 2017/5/9.
 */
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>100){
            $(".header").addClass('hidden');
            $(".fixed-header").addClass('fixed');
        }else{
            $(".header").removeClass('hidden');
            $(".fixed-header").removeClass('fixed');
        }
    })
})