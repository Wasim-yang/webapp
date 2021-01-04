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

/*清除表单*/
function admin_deleteTable() {
    document.getElementById("tbody_list").remove()
    // document.getElementById("pageResult").remove()
    let table = document.getElementById("cTable")
    let tbody = document.createElement("tbody")
    let pageResultBox = document.getElementById("pageResultBox")
    let pageResult = document.createElement("p")
    tbody.id = "tbody_list"
    pageResult.id = "pageResult"
    let row = document.createElement("tr")
    let cell1 = document.createElement("td")
    table.appendChild(tbody)
    // pageResultBox.appendChild(pageResult)
}

function updategoods() {
    let id = document.getElementById("modalgoodsid").value;
    let name = document.getElementById("modalgoodsname").value;
    let cost = document.getElementById("modalgoodscost").value;
    let number = document.getElementById("modalgoodsnumber").value;
    let ean = document.getElementById("modalgoodsean").value;
    let description = document.getElementById("modalgoodsdescription").value;
    if (flag == 1) {
        let formData = new FormData();
        formData.append('upload', $("#modalgoodsfile")[0].files[0]);
        formData.append('originpath', originpath)
        $.ajax({
            url: "http://127.0.0.1:8080/upload/update",//后端接口
            type: "post",
            data: formData,
            contentType: false,
            processData: false,
            mimeType: "multipart/form-data",
            success: function (data) {
                flag = 0
                path = data
                alert('image upload successful!')
                request("http://127.0.0.1:8080/goods/update", `id=${id}&name=${name}&cost=${cost}&number=${number}&ean=${ean}&description=${description}&path=${path}`, res => {
                    alert(res.message)
                    admin_deleteTable()
                    selectgoods()
                    document.getElementById('goodsmodal').style.display = 'none'
                })
            }
        })
    } else {
        request("http://127.0.0.1:8080/goods/update", `id=${id}&name=${name}&cost=${cost}&number=${number}&ean=${ean}&description=${description}&path=${originpath}`, res => {
            alert(res.message)
            admin_deleteTable()
            selectgoods()
            document.getElementById('goodsmodal').style.display = 'none'
        })
    }
}

function admin_firstPage() {
    currentPage = 1
    admin_deleteTable()
}

function admin_previousPage() {
    if (currentPage > 1) {
        currentPage = currentPage - 1
    }
    admin_deleteTable()
}

function admin_nextPage() {
    if (currentPage < totalPage)
        currentPage = currentPage + 1
    admin_deleteTable()
}

function admin_lastPage() {
    currentPage = totalPage
    admin_deleteTable()
}