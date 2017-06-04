/**
 * Created by Administrator on 2017/6/4.
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