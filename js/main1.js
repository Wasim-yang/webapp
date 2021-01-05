window.onload = function() {
    //省份定位
    var data = [
        "北京", "天津", "上海", "重庆", "河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南", "陕西", "甘肃", "青海", "内蒙古", "广西", "西藏", "宁夏", "新疆", "香港", "澳门", "台湾"
    ]

    var ul = document.getElementById('position');
    var text1 = document.getElementById('positionText');
    var div = document.querySelector('.t-position');

    //动态的添加li标签，并把数组中的内容添加到li标签中
    var list = "";
    for (var i = 0; i < data.length; i++) {
        list += "<li class='item'>" + data[i] + "</li>";
    }
    ul.innerHTML = list;

    ul.children[0].className = "item selected";

    // console.log(ul.innerHTML);

    var lis = ul.children;

    // console.log(lis);

    for (var j = 0; j < lis.length; j++) {
        //先清除需要的类名
        lis[j].index = j;
        lis[j].onmouseover = function() {
            this.style.cursor = "pointer";

        }
        lis[j].onclick = function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "item";

            }
            this.className = "item selected";
            text1.innerHTML = this.innerHTML;

        }
    }

    div.onmouseover = function() {
        ul.style.display = "block";
    }

    div.onmouseout = function() {
        ul.style.display = "none";
    }

    // 网站导航
    var nav = document.getElementById('navBar');
    var uL = document.querySelector('.nav-bar');

    nav.onmouseover = function() {
        uL.style.display = "block";
    }

    nav.onmouseout = function() {
        uL.style.display = "none";
    }



    //回到顶部

    function show(obj) { obj.style.display = "block"; }

    function hide(obj) { obj.style.display = "none"; }


    function scroll() {
        if (window.pageYOffset != null) //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        } else if (document.compatMode == "CSS1Compat") // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }

    var gotop = document.getElementById('gotop');
    var leader = 0,
        target = 0,
        timer = null;
    window.onscroll = function() {
        scroll().top > 0 ? show(gotop) : hide(gotop);
        leader = scroll().top;
    }
    gotop.onclick = function() {
        target = 0; //点击完之后目标位置为0
        timer = setInterval(function() {
            leader = leader + (target - leader) / 10;
            window.scrollTo(0, leader);
            if (leader == target) {
                clearInterval(timer);
            }
        }, 20)
    }

}