
document.addEventListener("visibilitychange", function() {
  console.log(document.visibilityState);
  alert('msg' + document.visibilityState);
});

var heartbeattime = 0;
var fetchkey = 0;
    var runtime = 0;
var fetchDelay = 1000;
var timeoutDelay =15000; // 下次请求超时时间 默认:15000ms
var tempmaxdelay = fetchDelay;
function requestFn(nowRequest) {
        heartbeattime++; // 心跳间隔时间
        runtime++; // 轮询时间
        if (nowRequest || runtime * 1000 > tempmaxdelay) {
            runtime = 0;
           console.log(1111)
            var noHeart = true;
            if (heartbeattime > 15) {
                heartbeattime = 0;
                noHeart = false;
            }
            var im = new Image();
            im.src='https://www.baidu.com'
            alert('msg requestFn' + 'https://www.baidu.com');

        }
    }

window.setInterval(requestFn, 1000);


function xmlget() {
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
      xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET","https://www.baidu.com",true);
      xmlhttp.send();
      alert('msg XMLHttpRequest get' + 'https://www.baidu.com');

  }

}

function xmlPost() {
  var xmlhttp1;
  if (window.XMLHttpRequest)
  {
      xmlhttp1 =new XMLHttpRequest();
      xmlhttp1.open("POST","/try/ajax/demo_post.php",true);
      xmlhttp1.send();
      alert('msg XMLHttpRequest post' + 'https://www.baidu.com');
  }
}



window.setInterval("xmlget()",1500);

window.setInterval("xmlPost()",1700);
