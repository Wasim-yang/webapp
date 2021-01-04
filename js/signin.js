// /*初始加载与表单验证*/
// window.onload =function(){
//     var message = getQueryVariable("action");
//     if(message == "login")
//         alert("用户名或密码错误!");
//     document.getElementById("inputName").focus();
// }
//
// function getQueryVariable(message)
// {
//     var query = window.location.search.substring(1);
//     var vars = query.split("&");
//     for (var i=0;i<vars.length;i++) {
//         var pair = vars[i].split("=");
//         if(pair[0] == message){return pair[1];}
//     }
//     return(false);
// }

/*表单切换*/
function changeLoginToRegistered() {
    var form1 = document.getElementById("login");
    var form2 = document.getElementById("registered");
    form1.className = "form-signin changeLeave";
    setTimeout(function () {
        form1.className ="form-hidden";
        form2.className ="form-signin changeCome";
        document.getElementById("loginReset").click();
        document.getElementById("inputId").focus();
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
        document.getElementById("loginId").focus();
    },1000);
}


// /*注册功能Ajax交互*/
// var xmlHttp;
// function createXMLHttpRequest() {
//     if(window.XMLHttpRequest){
//         xmlHttp = new XMLHttpRequest();
//     }else{
//         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
// }
// /*查找*/
// function startSearch() {
//     var Name = document.getElementById("inputName").value;
//     var Password = document.getElementById("inputPassword").value;
//     var Verification = document.getElementById("inputVerification").value;
//     if(Verification == "")
//     {
//         alert("请输入企业暗码！");
//         return;
//     }
//     var url = "Controller?action=registered"+ createQueryString(Name,Password,Verification)+ "&ts=" + new Date().getTime();
//     createXMLHttpRequest();
//     xmlHttp.onreadystatechange = handleStateChange_Sel;
//     xmlHttp.open("GET",url,true);
//     xmlHttp.send(null);
// }
//
// function createQueryString(Name,Password,Verification) {
//     var queryString = "&Name=" + Name + "&Password=" + Password + "&Verification=" + Verification;
//     return queryString;
// }
//
// function handleStateChange_Sel() {
//     if(xmlHttp.readyState == 4){
//         if(xmlHttp.status == 200){
//             var message = xmlHttp.responseText;
//             if(message == "Success")
//             {
//                 alert("注册成功！");
//                 document.getElementById("inputReset").click();
//                 document.getElementById("inputName").focus();
//             }
//             else if(message == "NotVerification"){
//                 alert("暗码错误，注册失败！");
//                 document.getElementById("inputName").focus();
//             }
//             else{
//                 alert("用户名已被注册，请重新输入！");
//                 document.getElementById("inputName").focus();
//             }
//         }
//     }
// }

