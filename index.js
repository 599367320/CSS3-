var $Wrapper = $('.wrapper.init');

//初始动画效果
setTimeout(function() {
    $Wrapper.removeClass('init');
}, 200);

$('li').on('click', function() {
    $(this).addClass('active');
    $Wrapper.addClass('make');
});

$('.close').on('click', function(e) {
    //阻止事件冒泡
    e.stopPropagation();
    $('.active').removeClass('active');
    $Wrapper.removeClass('make');
});