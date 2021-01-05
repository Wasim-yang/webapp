window.onload = function() {
    secondKill();
    //秒杀倒计时
    function secondKill() {
        //父盒子
        var parent = $('.sk_time')[0];
        //span标签
        var timeList = $('.num');

        var times = 4 * 60 * 60;

        setInterval(function() {
            times--;
            var h = Math.floor(times / (60 * 60));
            var m = Math.floor(times / 60 % 60);
            var s = times % 60;


            timeList[0].innerHTML = h < 10 ? '0' + h : h;

            timeList[1].innerHTML = m < 10 ? '0' + m : m;

            timeList[2].innerHTML = s < 10 ? '0' + s : s;

        }, 1000)
    }
}