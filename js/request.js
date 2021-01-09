function request(url, body, callback) {
    let formRequest = new Request(url, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        },
        body: body
    })
    fetch(formRequest).then(response => {
        let result = response.json()
        result.then(res => {
            // 返回值
            callback(res)
        })
    })
}

function usr_authorization() {
    $.ajax({
        url: "http://127.0.0.1:8080/usr/authorization",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code != 200) {
                 alert("未登录，请您先登录！")
                 window.location.href="./user_login.html"
            }
            else
                uid=data.uid
        }
    });
}

function admin_authorization() {
    $.ajax({
        url: "http://127.0.0.1:8080/admin/authorization",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code != 200) {
                alert("未登录，请您先登录！")
                window.location.href = "./admin_login.html"
            }
            else
                mid=data.mid
        }
    });
}

function business_authorization() {
    $.ajax({
        url: "http://127.0.0.1:8080/business/authorization",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code != 200) {
                alert("未登录，请您先登录！")
                window.location.href = "./admin_login.html"
            }
            else
                bid=data.bid
        }
    });
}

function pleader_authorization() {
    $.ajax({
        url: "http://127.0.0.1:8080/pleader/authorization",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code != 200) {
                alert("未登录，请您先登录！")
                window.location.href = "./admin_login.html"
            }
            else
                pid=data.pid
        }
    });
}

function usr_logout() {
    $.ajax({
        url: "http://127.0.0.1:8080/usr/logout",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code == 200) {
                alert("登出成功！");
                usr_authorization();
            }
        }
    });
}

function usr_delete() {
    $.ajax({
        url: "http://127.0.0.1:8080/usr/logout",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code == 200) {
                usr_authorization();
            }
        }
    });
}

function admin_logout() {
    $.ajax({
        url: "http://127.0.0.1:8080/admin/logout",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code == 200) {
                alert("登出成功！");
                admin_authorization();
            }
        }
    });
}

function business_logout() {
    $.ajax({
        url: "http://127.0.0.1:8080/business/logout",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code == 200) {
                alert("登出成功！");
                business_authorization();
            }
        }
    });
}

function pleader_logout() {
    $.ajax({
        url: "http://127.0.0.1:8080/pleader/logout",
        type: "POST",
        contentType: false,
        data: {},
        xhrFields: {withCredentials: true},
        success: function (data) {
            if (data.code == 200) {
                alert("登出成功！");
                pleader_authorization();
            }
        }
    });
}
