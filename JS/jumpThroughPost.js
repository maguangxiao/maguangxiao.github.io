//发送POST请求跳转到指定页面
function httpPost(URL, PARAMS) {
    console.log('httpPost');
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";

    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp.appendChild(opt);
    }

    document.body.appendChild(temp);
    temp.submit();

    return temp;
}
function newPage(pagePath,pageId){

    var params = {
        "pagePath": pagePath,
        "pageId": pageId,
    };

    httpPost("pageForPostResearch/pagePost.html", params);
}
function bodyOnload(){
  window.alert("body onload方法调用");
}

// 作者：shiyonghm
// 来源：CSDN
// 原文：https://blog.csdn.net/shiyong1949/article/details/72471294
// 版权声明：本文为博主原创文章，转载请附上博文链接！
