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
                 alert("未登录")
                window.location.href="./user_login.html"
            }
        },
        error: function (data) {
            alert("failed")
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
                alert("未登录")
                window.location.href = "./admin_login.html"
            }
        },
        error: function (data) {
            alert("failed")
        }
    });
}

