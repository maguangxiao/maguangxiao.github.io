
var request;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
        try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
request.open("GET", 'https://www.baidu.com', true);
request.send();


document.addEventListener('readystatechange', (event) => {
  console.log(`readystate: ${document.readyState}\n`);
});

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
  console.log("body onload方法调用");
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("浏览器已经完全加载了 HTML，DOM 树已经构建完毕，但是像是 <img> 和样式表等外部资源可能并没有下载完毕");
    });

window.addEventListener("load", function(event) {
      console.log("浏览器已经加载了所有的资源（图像，样式表等");
    });
window.addEventListener("unload",function(event){
  console.log("浏览器unload");
})

document.addEventListener('readystatechange', () => console.log('readyState:' + document.readyState));

// XMLHttpRequest.onProgress = {
//
// }

function alert1(args){
  window.alert(args);
}

function confirm1(args){
  var result = window.confirm(args);
  console.log("选择了" + (result ? "是" : "否"));
}

function prompt1(args){
  var result = window.prompt(args);

  console.log(result ? result : "取消");
}

function openAutoDefineWindow(){
  window.open("https://www.baidu.com","test","width=375,height=400,toolbar=yes");
}
