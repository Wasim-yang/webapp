/*侧边导航栏下拉框*/
function ulControl_1() {
    if (document.getElementById("adminControl_1").style.display === 'none' )
    {
        document.getElementById("adminControl_1").style.display = '';
        // document.getElementById("father_adminControl_1").className = "nav-father";
         document.getElementById("span1").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_1").style.display = 'none' ;
        // document.getElementById("father_adminControl_1").className = "";
         document.getElementById("span1").className="app-menu__icon fa fa-angle-up";
    }
}
function ulControl_2() {
    if (document.getElementById("adminControl_2").style.display === 'none' )
    {
        document.getElementById("adminControl_2").style.display = '';
        // document.getElementById("father_adminControl_2").className = "nav-father";
        document.getElementById("span2").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_2").style.display = 'none' ;
        // document.getElementById("father_adminControl_2").className = "";
        document.getElementById("span2").className="app-menu__icon fa fa-angle-up";
    }
}

function ulControl_3() {
    if (document.getElementById("adminControl_3").style.display === 'none' )
    {
        document.getElementById("adminControl_3").style.display = '';
        // document.getElementById("father_adminControl_3").className = "nav-father";
        document.getElementById("span3").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_3").style.display = 'none' ;
        // document.getElementById("father_adminControl_3").className = "";
        document.getElementById("span3").className="app-menu__icon fa fa-angle-up";
    }
}

function ulControl_4() {
    if (document.getElementById("adminControl_4").style.display === 'none' )
    {
        document.getElementById("adminControl_4").style.display = '';
        // document.getElementById("father_adminControl_4").className = "nav-father";
        document.getElementById("span4").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_4").style.display = 'none' ;
        // document.getElementById("father_adminControl_4").className = "";
        document.getElementById("span4").className="app-menu__icon fa fa-angle-up";
    }
}

function ulControl_5() {
    if (document.getElementById("adminControl_5").style.display === 'none' )
    {
        document.getElementById("adminControl_5").style.display = '';
        // document.getElementById("father_adminControl_5").className = "nav-father";
        document.getElementById("span5").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_5").style.display = 'none' ;
        // document.getElementById("father_adminControl_5").className = "";
        document.getElementById("span5").className="app-menu__icon fa fa-angle-up";
    }
}

function ulControl_6() {
    if (document.getElementById("adminControl_6").style.display === 'none' )
    {
        document.getElementById("adminControl_6").style.display = '';
        // document.getElementById("father_adminControl_6").className = "nav-father";
        document.getElementById("span6").className="app-menu__icon fa fa-angle-down";
    }
    else
    {
        document.getElementById("adminControl_6").style.display = 'none' ;
        // document.getElementById("father_adminControl_6").className = "";
        document.getElementById("span6").className="app-menu__icon fa fa-angle-up";
    }
}

/*Ajax交互*/
var xmlHttp;

function createXMLHttpRequest() {
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
}
/*查找成绩*/
function startSearch() {
    var Sno = document.getElementById("SelectSno");
    var Cno = document.getElementById("SelectCno");
    var url = "Controller?action=SelectScores"+ "&Sno=" + escape(Sno.value)+ "&Cno=" + escape(Cno.value)
        + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Sel;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function handleStateChange_Sel() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResults();
        }
    }
}

function clearResults() {
    var header = document.getElementById("header");
    if(header.hasChildNodes()){
        header.removeChild(header.childNodes[0]);
    }
    var tableHead = document.getElementById("resultsHead");
    while(tableHead.childNodes.length>0) {
        tableHead.removeChild(tableHead.childNodes[0]);
    }
    var tableBody = document.getElementById("resultsBody");
    while(tableBody.childNodes.length>0){
        tableBody.removeChild(tableBody.childNodes[0]);
    }
}

function parseResults() {
    clearForm();            //为了美观，清除修改信息表的内容并隐藏
    var results = xmlHttp.responseXML;
    var scores= results.getElementsByTagName("scores");
    var items = scores[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var cname = null;
    var tname = null;
    var term = null;
    var credit = null;
    var score = null;

    addTableRow_7(0,"学号","姓名","课程","任课教师","开课学期","课程学分","成绩");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        addTableRow_7(1,sno,sname,cname,tname,term,credit,score);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

function addTableRow_7(flag, p1, p2, p3, p4, p5, p6, p7) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    cell = createCellWithText(p4);
    row.appendChild(cell);
    cell = createCellWithText(p5);
    row.appendChild(cell);
    cell = createCellWithText(p6);
    row.appendChild(cell);
    cell = createCellWithText(p7);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

function createCellWithText(text) {
    var cell = document.createElement("td");
    var textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    return cell;
}

/*添加*/
function startInsert() {
    var Sno = document.getElementById("InOrDeSno").value;
    var Cno = document.getElementById("InOrDeCno").value;
    var Tno = document.getElementById("InOrDeTno").value;
    var Term = document.getElementById("InOrDeTerm").value;
    var Score = document.getElementById("InOrDeScore").value;
    if(Sno == "" || Cno == "" || Tno == "" || Term == "" || Score == ""){
        alert("信息不全，添加失败！");
        return;
    }
    var url = "Controller?action=InsertScores"+ createQueryString(Sno,Cno,Tno,Term,Score) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Int;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function handleStateChange_Int() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            alert(xmlHttp.responseText);
            clearForm();            //为了美观，清除修改信息表的内容并隐藏
        }
    }
}

function createQueryString(Sno,Cno,Tno,Term,Score) {
    var queryString = "&Sno=" + Sno + "&Cno=" + Cno + "&Tno=" + Tno + "&Term=" + Term + "&Score=" + Score;
    return queryString;
}

/*删除*/
function startDelete() {
    var Sno = document.getElementById("InOrDeSno").value;
    var Cno = document.getElementById("InOrDeCno").value;
    var Tno = document.getElementById("InOrDeTno").value;
    var Term = document.getElementById("InOrDeTerm").value;
    if(Sno == "" || Cno == "" || Tno == "" || Term == ""){
        alert("信息不全，删除失败！");
        return;
    }
    var url = "Controller?action=DeleteScores"+createQueryString(Sno,Cno,Tno,Term,"")+ "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Del;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function handleStateChange_Del() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            alert(xmlHttp.responseText);
            clearForm();            //为了美观，清除修改信息表的内容并隐藏
        }
    }
}

/*修改*/
//查找，显示表单
function startUpdate_Search() {
    var Sno = document.getElementById("SelectSno");
    var Cno = document.getElementById("SelectCno");
    if(Sno.value == "")
    {
        alert("请输入学号!");
        return;
    }
    else if( Cno.value == "")
    {
        alert("请输入课程号!");
        return;
    }
    var url = "Controller?action=SelectUpdScores"+ "&Sno=" + escape(Sno.value)+ "&Cno=" + escape(Cno.value)
        + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Upd_Sel;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function handleStateChange_Upd_Sel() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearForm();
            parseResults_Upd_Sel();
        }
    }
}
function clearForm(){
    var header = document.getElementById("UpdateHeader");
    if(header.hasChildNodes())
    {
        document.getElementById("UpdateReset").click();
        header.removeChild(header.childNodes[0]);
        document.getElementById("UpdateForm").setAttribute("style","display: none");
    }
}

function parseResults_Upd_Sel() {
    var results = xmlHttp.responseXML;
    var scores= results.getElementsByTagName("scores");
    var items = scores[0].getElementsByTagName("student");

    if(items.length == 0)
    {
        alert("无记录!");
        return;
    }

    var item = items[0];
    var sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
    var cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
    var tno = item.getElementsByTagName("tno")[0].firstChild.nodeValue;
    var term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
    var score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
    addForm(sno,cno,tno,term,score);
}

function addForm(p1,p2,p3,p4,p5) {
    document.getElementById("UpdateSno").setAttribute("value",p1);
    document.getElementById("UpdateCno").setAttribute("value",p2);
    document.getElementById("UpdateTno").setAttribute("value",p3);
    document.getElementById("UpdateTerm").setAttribute("value",p4);
    document.getElementById("UpdateScore").setAttribute("value",p5);

    var headerText = document.createTextNode("成绩信息表：");
    document.getElementById("UpdateHeader").appendChild(headerText);

    document.getElementById("UpdateForm").setAttribute("style","visibility:visible");
}

function startUpdate() {
    var Sno = document.getElementById("UpdateSno").value;
    var Cno = document.getElementById("UpdateCno").value;
    var Tno = document.getElementById("UpdateTno").value;
    var Term = document.getElementById("UpdateTerm").value;
    var Score = document.getElementById("UpdateScore").value;

    var url = "Controller?action=UpdateScores" + createQueryString(Sno,Cno,Tno,Term,Score) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_Upd;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}
function handleStateChange_Upd() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            alert(xmlHttp.responseText);
        }
    }
}

/*显示全部学生*/
function startAllSearch_Students() {
    var url = "Controller?action=SelectAllStudents"+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllStu;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllStu() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Stu();
        }
    }
}

function parseResultsAll_Stu() {
    var results = xmlHttp.responseXML;
    var students = results.getElementsByTagName("students");
    var items = students[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var sex = null;
    var age = null;
    var mname = null;
    var claname = null;
    var scredit = null;
    var sourse = null;
    var address = null;

    addTableRow_9(0,"学号","姓名","性别","年龄","专业","班级","已修学分","生源地","家庭住址");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        sex = item.getElementsByTagName("sex")[0].firstChild.nodeValue;
        age = item.getElementsByTagName("age")[0].firstChild.nodeValue;
        mname = item.getElementsByTagName("mname")[0].firstChild.nodeValue;
        claname = item.getElementsByTagName("claname")[0].firstChild.nodeValue;
        scredit = item.getElementsByTagName("scredit")[0].firstChild.nodeValue;
        sourse = item.getElementsByTagName("sourse")[0].firstChild.nodeValue;
        address = item.getElementsByTagName("address")[0].firstChild.nodeValue;
        addTableRow_9(1,sno,sname,sex,age,mname,claname,scredit,sourse,address);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

function addTableRow_9(flag,p1,p2,p3,p4,p5,p6,p7,p8,p9) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    cell = createCellWithText(p4);
    row.appendChild(cell);
    cell = createCellWithText(p5);
    row.appendChild(cell);
    cell = createCellWithText(p6);
    row.appendChild(cell);
    cell = createCellWithText(p7);
    row.appendChild(cell);
    cell = createCellWithText(p8);
    row.appendChild(cell);
    cell = createCellWithText(p9);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*显示全部教师*/
function startAllSearch_Teachers() {
    var url = "Controller?action=SelectAllTeachers"+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllTea;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllTea() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Tea();
        }
    }
}

function parseResultsAll_Tea() {
    var results = xmlHttp.responseXML;
    var teachers = results.getElementsByTagName("teachers");
    var items = teachers[0].getElementsByTagName("teacher");
    var item = null;
    var tno = null;
    var tname = null;
    var sex = null;
    var age = null;
    var status = null;
    var phone = null;

    addTableRow_6(0,"教师编号","姓名","性别","年龄","职称","联系电话");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        tno = item.getElementsByTagName("tno")[0].firstChild.nodeValue;
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        sex = item.getElementsByTagName("sex")[0].firstChild.nodeValue;
        age = item.getElementsByTagName("age")[0].firstChild.nodeValue;
        status = item.getElementsByTagName("status")[0].firstChild.nodeValue;
        phone = item.getElementsByTagName("phone")[0].firstChild.nodeValue;

        addTableRow_6(1,tno,tname,sex,age,status,phone);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}
function addTableRow_6(flag,p1,p2,p3,p4,p5,p6) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    cell = createCellWithText(p4);
    row.appendChild(cell);
    cell = createCellWithText(p5);
    row.appendChild(cell);
    cell = createCellWithText(p6);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*显示全部课程*/
function startAllSearch_Courses() {
    var url = "Controller?action=SelectAllCourses"+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllCourse;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllCourse() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Course();
        }
    }
}

function parseResultsAll_Course() {
    var results = xmlHttp.responseXML;
    var courses = results.getElementsByTagName("courses");
    var items = courses[0].getElementsByTagName("course");
    var item = null;
    var cno = null;
    var cname = null;
    var tname = null;
    var credit = null;
    var exam = null;
    var term = null;
    var chour = null;

    addTableRow_7(0,"课程编号","课程名","任课教师","课程学分","考核方式","开设学期","学时");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        exam = item.getElementsByTagName("exam")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        chour = item.getElementsByTagName("chour")[0].firstChild.nodeValue;
        addTableRow_7(1,cno,cname,tname,credit,exam,term,chour);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*显示全部专业*/
function startAllSearch_Majors() {
    var url = "Controller?action=SelectAllMajors"+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllMajors;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllMajors() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Majors();
        }
    }
}

function parseResultsAll_Majors() {
    var results = xmlHttp.responseXML;
    var majors = results.getElementsByTagName("majors");
    var items = majors[0].getElementsByTagName("major");
    var item = null;
    var mno = null;
    var mname = null;

    addTableRow_2(0,"专业编号","专业名");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        mno = item.getElementsByTagName("mno")[0].firstChild.nodeValue;
        mname = item.getElementsByTagName("mname")[0].firstChild.nodeValue;
        addTableRow_2(1,mno,mname);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}
function addTableRow_2(flag,p1,p2) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*显示全部班级*/
function startAllSearch_Classes() {
    var url = "Controller?action=SelectAllClasses"+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllCla;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllCla() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Cla();
        }
    }
}

function parseResultsAll_Cla() {
    var results = xmlHttp.responseXML;
    var classes = results.getElementsByTagName("classes");
    var items = classes[0].getElementsByTagName("class");
    var item = null;
    var clano = null;
    var claname = null;
    var mno = null;
    var mname = null;

    addTableRow_4(0,"班级编号","班级名","专业编号","专业名");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        clano = item.getElementsByTagName("clano")[0].firstChild.nodeValue;
        claname = item.getElementsByTagName("claname")[0].firstChild.nodeValue;
        mno = item.getElementsByTagName("mno")[0].firstChild.nodeValue;
        mname = item.getElementsByTagName("mname")[0].firstChild.nodeValue;
        addTableRow_4(1,clano,claname,mno,mname);
    }
    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}
function addTableRow_4(flag,p1,p2,p3,p4) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    cell = createCellWithText(p4);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*显示学生学分统计*/
function startAllSearch_Credits() {
    var Sno = document.getElementById("SelectSno");
    if(Sno.value == "")
    {
        alert("请输入要查询学生的学号！");
        return;
    }
    var url = "Controller?action=SelectAllCredits"+"&Sno=" + escape(Sno.value) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelAllCredits;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelAllCredits() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Credits();
        }
    }
}

function parseResultsAll_Credits() {
    var results = xmlHttp.responseXML;
    var credits = results.getElementsByTagName("credits");
    var items = credits[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var cname = null;
    var credit = null;
    var status = null;

    addTableRow_4(0,"学号","课程名","课程学分","状态");
    var i;
    for(i = 0; i < items.length-1; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        if (item.getElementsByTagName("status")[0].firstChild.nodeValue=="true")
            status = "已通过";
        else
            status = "未通过";
        addTableRow_4(1,sno,cname,credit,status);
    }

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
    else{
        //给id=header对象添加文字元素
        item = items[i];
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        var str = sname + "已修总学分：" + credit;
        var headerText = document.createTextNode(str);
        document.getElementById("header").appendChild(headerText);
    }
}
/*学生学年成绩统计*/
function startAllSearch_TermScore() {
    var Sno = document.getElementById("SelectSno");
    var Term = document.getElementById("SelectTerm");
    if(Sno.value == "")
    {
        alert("请输入要查询学生的学号！");
        return;
    }
    var url = "Controller?action=SelectTermScore"+"&Sno=" + escape(Sno.value) +
        "&Term=" + escape(Term.value) +"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelTermScore;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelTermScore() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_TermScore();
        }
    }
}

function parseResultsAll_TermScore() {
    var results = xmlHttp.responseXML;
    var student = results.getElementsByTagName("student");
    var items = student[0].getElementsByTagName("course");
    var item = null;
    var sno = null;
    var sname = null;
    var cno = null;
    var cname = null;
    var credit = null;
    var score = null;
    var term = null;

    addTableRow_5(0,"课程编号","课程名","课程学分","成绩","开设学期");
    var i;
    for(i = 0; i < items.length-1; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        addTableRow_5(1,cno,cname,credit,score,term);
    }

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
    else{
        //给id=header对象添加文字元素
        item = items[i];
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        var str = sname +"同学"+ term + "学年      |" + "已修总学分：" + credit + "      |绩点：" + score;
        var headerText = document.createTextNode(str);
        document.getElementById("header").appendChild(headerText);
    }
}
function addTableRow_5(flag,p1,p2,p3,p4,p5) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    cell = createCellWithText(p4);
    row.appendChild(cell);
    cell = createCellWithText(p5);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*课程平均分统计*/
function startAllSearch_CourseAvg() {
    var Cno = document.getElementById("SelectCno");
    var url = "Controller?action=SelectCourseAvg"+"&Cno=" + escape(Cno.value)+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelCourAvg;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelCourAvg() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_CourAvg();
        }
    }
}

function parseResultsAll_CourAvg() {
    var results = xmlHttp.responseXML;
    var courses = results.getElementsByTagName("courses");
    var items = courses[0].getElementsByTagName("course");
    var item = null;
    var cno = null;
    var cname = null;
    var cavg = null;

    addTableRow_3(0,"课程编号","课程名","课程平均分");
    var i;
    for(i = 0; i < items.length; i++){
        item = items[i];
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        cavg = item.getElementsByTagName("cavg")[0].firstChild.nodeValue;
        addTableRow_3(1,cno,cname,cavg);
    }

    //给id=header对象添加文字元素
    var headerText = document.createTextNode("查询结果如下");
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}
function addTableRow_3(flag,p1,p2,p3) {
    var row = document.createElement("tr");
    var cell = createCellWithText(p1);
    row.appendChild(cell);
    cell = createCellWithText(p2);
    row.appendChild(cell);
    cell = createCellWithText(p3);
    row.appendChild(cell);
    if(flag == 0) {
        document.getElementById("resultsHead").appendChild(row);
    }
    else{
        document.getElementById("resultsBody").appendChild(row);
    }
}

/*课程学生排名统计*/
function startAllSearch_CourseRank() {
    var Cno = document.getElementById("SelectCno");
    if(Cno.value == "")
    {
        alert("请输入要查询课程的课程编号！");
        return;
    }
    var url = "Controller?action=SelectCourseRank"+"&Cno=" + escape(Cno.value)+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelCourseRank;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelCourseRank() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_CourseRank();
        }
    }
}

function parseResultsAll_CourseRank() {
    var results = xmlHttp.responseXML;
    var students = results.getElementsByTagName("students");
    var items = students[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var cname = null;
    var score = null;
    var rank = null;

    addTableRow_4(0,"学号","姓名","成绩","排名");
    var i;
    for(i = 0; i < items.length; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        rank = item.getElementsByTagName("rank")[0].firstChild.nodeValue;
        addTableRow_4(1,sno,sname,score,rank);
    }

    //给id=header对象添加文字元素
    var str = cname + " 课程排名如下：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*班级学生排名统计*/
function startAllSearch_ClassRank() {
    var Clano = document.getElementById("SelectClano");
    if(Clano.value == "")
    {
        alert("请输入要查询班级的班级编号！");
        return;
    }
    var url = "Controller?action=SelectClassRank"+"&Clano=" + escape(Clano.value)+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelClassRank;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelClassRank() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_ClassRank();
        }
    }
}

function parseResultsAll_ClassRank() {
    var results = xmlHttp.responseXML;
    var students = results.getElementsByTagName("students");
    var items = students[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var claname = null;
    var score = null;
    var rank = null;

    addTableRow_4(0,"学号","姓名","绩点","排名");
    var i;
    for(i = 0; i < items.length; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        claname = item.getElementsByTagName("claname")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        rank = item.getElementsByTagName("rank")[0].firstChild.nodeValue;
        addTableRow_4(1,sno,sname,score,rank);
    }

    //给id=header对象添加文字元素
    var str = claname + " 班级排名如下：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*专业学生排名统计*/
function startAllSearch_MajorRank() {
    var Mno = document.getElementById("SelectMno");
    if(Mno.value == "")
    {
        alert("请输入要查询专业的专业编号！");
        return;
    }
    var url = "Controller?action=SelectMajorRank"+"&Mno=" + escape(Mno.value)+"&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelMajorRank;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelMajorRank() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_MajorRank();
        }
    }
}

function parseResultsAll_MajorRank() {
    var results = xmlHttp.responseXML;
    var students = results.getElementsByTagName("students");
    var items = students[0].getElementsByTagName("student");
    var item = null;
    var sno = null;
    var sname = null;
    var mname = null;
    var score = null;
    var rank = null;

    addTableRow_4(0,"学号","姓名","绩点","排名");
    var i;
    for(i = 0; i < items.length; i++){
        item = items[i];
        sno = item.getElementsByTagName("sno")[0].firstChild.nodeValue;
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        mname = item.getElementsByTagName("mname")[0].firstChild.nodeValue;
        score = item.getElementsByTagName("score")[0].firstChild.nodeValue;
        rank = item.getElementsByTagName("rank")[0].firstChild.nodeValue;
        addTableRow_4(1,sno,sname,score,rank);
    }

    //给id=header对象添加文字元素
    var str = mname + " 专业排名如下：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*班级课表查询*/
function startAllSearch_ClaCourses() {
    var Clano = document.getElementById("SelectClano");
    var Year = document.getElementById("SelectYear");
    var Term = document.getElementById("SelectTerm");
    if(Clano.value == "")
    {
        alert("请输入要查询班级的班级编号！");
        return;
    }
    var url = "Controller?action=SelectClaCourses"+"&Clano=" + escape(Clano.value) +"&Year=" + escape(Year.value)
        +"&Term=" + escape(Term.value) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelClaCourses;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelClaCourses() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_ClaCourses();
        }
    }
}

function parseResultsAll_ClaCourses() {
    var results = xmlHttp.responseXML;
    var classes = results.getElementsByTagName("class");
    var items = classes[0].getElementsByTagName("course");
    var item = null;
    var claname = null;
    var cno = null;
    var cname = null;
    var tname = null;
    var credit = null;
    var chours = null;
    var cexam = null;
    var term = null;

    addTableRow_7(0,"课程编号","课程名","任课教师","课程学分","课程学时","考核方式","开设学期");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        claname = item.getElementsByTagName("claname")[0].firstChild.nodeValue;
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        chours = item.getElementsByTagName("chours")[0].firstChild.nodeValue;
        cexam = item.getElementsByTagName("cexam")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        addTableRow_7(1,cno,cname,tname,credit,chours,cexam,term);
    }

    //给id=header对象添加文字元素
    var str = claname + " 班级课程表：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*学生课表查询*/
function startAllSearch_StuCourses() {
    var Sno = document.getElementById("SelectSno");
    var Year = document.getElementById("SelectYear");
    var Term = document.getElementById("SelectTerm");
    if(Sno.value == "")
    {
        alert("请输入要查询学生的学号！");
        return;
    }
    var url = "Controller?action=SelectStuCourses"+"&Sno=" + escape(Sno.value) +"&Year=" + escape(Year.value)
        +"&Term=" + escape(Term.value) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelStuCourses;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelStuCourses() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_StuCourses();
        }
    }
}

function parseResultsAll_StuCourses() {
    var results = xmlHttp.responseXML;
    var student = results.getElementsByTagName("student");
    var items = student[0].getElementsByTagName("course");
    var item = null;
    var sname = null;
    var cno = null;
    var cname = null;
    var tname = null;
    var credit = null;
    var chour = null;
    var cexam = null;
    var term = null;

    addTableRow_7(0,"课程编号","课程名","任课教师","课程学分","课程学时","考核方式","开设学期");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        sname = item.getElementsByTagName("sname")[0].firstChild.nodeValue;
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        chour = item.getElementsByTagName("chour")[0].firstChild.nodeValue;
        cexam = item.getElementsByTagName("cexam")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        addTableRow_7(1,cno,cname,tname,credit,chour,cexam,term);
    }

    //给id=header对象添加文字元素
    var str = sname + " 同学的课程表：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*教师课表查询*/
function startAllSearch_TeaCourses() {
    var Tno = document.getElementById("SelectTno");
    var Year = document.getElementById("SelectYear");
    var Term = document.getElementById("SelectTerm");
    if(Tno.value == "")
    {
        alert("请输入要查询教师的教师编号！");
        return;
    }
    var url = "Controller?action=SelectTeaCourses"+"&Tno=" + escape(Tno.value) +"&Year=" + escape(Year.value)
        +"&Term=" + escape(Term.value) + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelTeaCourses;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelTeaCourses() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_TeaCourses();
        }
    }
}

function parseResultsAll_TeaCourses() {
    var results = xmlHttp.responseXML;
    var teacher = results.getElementsByTagName("teacher");
    var items = teacher[0].getElementsByTagName("course");
    var item = null;
    var tname = null;
    var cno = null;
    var cname = null;
    var claname = null;
    var credit = null;
    var chours = null;
    var cexam = null;
    var term = null;

    addTableRow_7(0,"课程编号","课程名","授课班级","课程学分","课程学时","考核方式","开设学期");
    for(var i = 0; i < items.length; i++){
        item = items[i];
        tname = item.getElementsByTagName("tname")[0].firstChild.nodeValue;
        cno = item.getElementsByTagName("cno")[0].firstChild.nodeValue;
        cname = item.getElementsByTagName("cname")[0].firstChild.nodeValue;
        claname = item.getElementsByTagName("claname")[0].firstChild.nodeValue;
        credit = item.getElementsByTagName("credit")[0].firstChild.nodeValue;
        chours = item.getElementsByTagName("chours")[0].firstChild.nodeValue;
        cexam = item.getElementsByTagName("cexam")[0].firstChild.nodeValue;
        term = item.getElementsByTagName("term")[0].firstChild.nodeValue;
        addTableRow_7(1,cno,cname,claname,credit,chours,cexam,term);
    }

    //给id=header对象添加文字元素
    var str = tname + " 老师的课程表：";
    var headerText = document.createTextNode(str);
    document.getElementById("header").appendChild(headerText);

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}

/*生源地查询*/
function startAllSearch_Sourse() {
    var Province = document.getElementById("SelectProvince").value;
    var City = document.getElementById("SelectCity").value;
    if(Province == "")
    {
        alert("请输入要查询省（市）！");
        return;
    }
    var str = "&Province=" + Province +"&City=" + City;
    var url = "Controller?action=SelectSourse"+ str + "&ts=" + new Date().getTime();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange_SelSourse;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
function handleStateChange_SelSourse() {
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            clearResults();
            parseResultsAll_Sourse();
        }
    }
}

function parseResultsAll_Sourse() {
    var results = xmlHttp.responseXML;
    var sourses = results.getElementsByTagName("sourses");
    var items = sourses[0].getElementsByTagName("sourse");
    var item = null;
    var city = null;
    var count = null;

    addTableRow_2(0,"生源地","人数");
    var i;
    if(items.length == 1)
    {
        item = items[0];
        city = item.getElementsByTagName("city")[0].firstChild.nodeValue;
        count = item.getElementsByTagName("count")[0].firstChild.nodeValue;
        addTableRow_2(1,city,count);
    }
    else
        for(i = 0; i < items.length-1; i++){
            item = items[i];
            city = item.getElementsByTagName("city")[0].firstChild.nodeValue;
            count = item.getElementsByTagName("count")[0].firstChild.nodeValue;
            addTableRow_2(1,city,count);
        }

    //给id=header对象添加文字元素
    if(items.length > 1)
    {
        item = items[i];
        city = item.getElementsByTagName("city")[0].firstChild.nodeValue;
        count = item.getElementsByTagName("count")[0].firstChild.nodeValue;
        var str = city + "学生总数为：" + count;
        var headerText = document.createTextNode(str);
        document.getElementById("header").appendChild(headerText);
    }
    else
    {
        var headerText = document.createTextNode("查询结果如下：");
        document.getElementById("header").appendChild(headerText);
    }

    var tableBody = document.getElementById("resultsBody");
    if(tableBody.childNodes.length == 0)
    {
        clearResults();
        alert("无记录!");
    }
}