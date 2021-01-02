var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    hue = 217,
    stars = [],
    count = 0,
    maxStars = 1000;//星星数量
var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
//createRadialGradient(开始圆x,y,半径；结束圆x,y,半径) 方法创建放射状/圆形渐变对象。
var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
//addColorStop() 方法规定 gradient 对象中的颜色和位置
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');
ctx2.fillStyle = gradient2;
ctx2.beginPath();
//绘制弧线arc(x,y,r,起始角,结束角)
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();
//End cache
function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var hold = max;
        max = min;
        min = hold;
    }
    //Math.floor向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function maxOrbit(x, y) {
    var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
    //星星移动范围，值越大范围越小，
}
var Star = function () {
    this.orbitRadius = random(maxOrbit(w, h));  //在范围内取随机位置
    this.radius = random(60, this.orbitRadius) / 8;
    //星星大小
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 300000;
    //星星移动速度
    this.alpha = random(2, 10) / 10;
    count++;
    stars[count] = this;
}
Star.prototype.draw = function () {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);
    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}
for (var i = 0; i < maxStars; i++) {
    new Star();
}
function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.5; //尾巴
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
    ctx.fillRect(0, 0, w, h)
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
        canvas2.style.cssText = "display:none";
    };
    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
    // 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
    window.requestAnimationFrame(animation);
}
/*初始加载与表单验证*/
window.onload =function(){
    animation();
    var message = getQueryVariable("action");
    if(message == "login")
        alert("用户名或密码错误!");
    document.getElementById("inputName").focus();
}

function getQueryVariable(message)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == message){return pair[1];}
    }
    return(false);
}

/*表单切换*/
function changeLoginToRegistered() {
    var form1 = document.getElementById("login");
    var form2 = document.getElementById("registered");
    form1.className = "form-signin changeLeave";
    setTimeout(function () {
        form1.className ="form-hidden";
        form2.className ="form-signin changeCome";
        document.getElementById("loginReset").click();
        document.getElementById("inputName").focus();
    },1000);
}
function changeRegisteredToLogin() {
    var form1 = document.getElementById("login");
    var form2 = document.getElementById("registered");
    form2.className = "form-signin changeLeave";
    setTimeout(function () {
        form2.className = "form-hidden";
        form1.className = "form-signin changeCome";
        document.getElementById("inputReset").click();
        document.getElementById("loginName").focus();
    },1000);
}


/*注册功能Ajax交互*/
var xmlHttp;
function createXMLHttpRequest() {
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
}
/*查找*/
function startSearch() {
    var Name = document.getElementById("inputName").value;
    var Password = document.getElementById("inputPassword").value;
    var Verification = document.getElementById("inputVerification").value;
    if(Verification == "")
    {
        alert("请输入企业暗码！");
        return;
    }
    var url = "Controller?action=registered"+ createQueryString(Name,Password,Verification)+ "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Sel;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function createQueryString(Name,Password,Verification) {
    var queryString = "&Name=" + Name + "&Password=" + Password + "&Verification=" + Verification;
    return queryString;
}

function handleStateChange_Sel() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            var message = xmlHttp.responseText;
            if(message == "Success")
            {
                alert("注册成功！");
                document.getElementById("inputReset").click();
                document.getElementById("inputName").focus();
            }
            else if(message == "NotVerification"){
                alert("暗码错误，注册失败！");
                document.getElementById("inputName").focus();
            }
            else{
                alert("用户名已被注册，请重新输入！");
                document.getElementById("inputName").focus();
            }
        }
    }
}

