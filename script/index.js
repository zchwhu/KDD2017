/**
 * Created by Administrator on 2017/5/8.
 */
$(function () {
    // speakers slide
    var $personList = $("#personList"),
        $personItem = $(".person-item"),
        $leftSlide = $("#leftSlide"),
        $rightSlide = $("#rightSlide");

    var speakerslide = new Speakslide($personList,$personItem,$leftSlide,$rightSlide);

    $(window).scroll(function () {
        if($(window).scrollTop()>100){
            $(".header").addClass('hidden');
            $(".fixed-header").addClass('fixed');
        }else{
            $(".header").removeClass('hidden');
            $(".fixed-header").removeClass('fixed');
        }
    })

    $(".down").click(function () {
        var $target = $(".intro").offset().top - 65;
        $('html,body').animate({
            scrollTop: $target
        }, 1000);
    })
})

/**
 * 图片滑动组件构造函数
 * @param container 图片滑动父容器
 * @param items 滑动图片项目
 * @param leftControl 向左滑动箭头
 * @param rightControl 向右滑动箭头
 * @constructor
 */
function Speakslide(container,items,leftControl,rightControl) {
    this.container = container;
    this.items = items;
    this.length = items.length;
    this.width = items.width();
    this.leftSlide = leftControl;
    this.rightSlide = rightControl;
    this.currentIndex = 0;
    this.init();
}

Speakslide.prototype.init = function () {
    this.container.width(this.length*this.width);
    this.bindEvent();
}

Speakslide.prototype.bindEvent = function () {
    var that = this;
    this.leftSlide.click(function () {
        that.moveLeft();
    })
    this.rightSlide.click(function () {
        that.moveRight();
    })
}

Speakslide.prototype.moveLeft = function () {
    if(this.container.is(":animated")){
        return;
    }
    var $dis;
    if(this.currentIndex === 0){
        $dis = -this.width*4;
        this.currentIndex = 4;
    }else{
        $dis = this.width;
        this.currentIndex--;
    }
    this.move($dis);
}

Speakslide.prototype.moveRight = function () {
    if(this.container.is(":animated")){
        return;
    }
    var $dis;
    if(this.currentIndex === 4){
        $dis = this.width*4;
        this.currentIndex = 0;
    }else{
        $dis = -this.width;
        this.currentIndex++;
    }
    this.move($dis);
}

/**
 * 图片滑动
 * @param dis 图片滑动距离
 */
Speakslide.prototype.move = function (dis) {
    this.container.animate({
        "marginLeft" : "+=" + dis
    },600,"swing")
}
