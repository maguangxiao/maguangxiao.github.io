
//AJax入门方法测试
function loadXMLDoc (){
  <!-- http://rap2api.taobao.org/app/mock/166865/post/test/login -->
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
  }
  else
  {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
          document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      }
  }

  xmlhttp.open("POST","https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("name=Henry&password=Ford");
}
//将参数拼接在URL中，data属性为空
function getFormInfo(){
  var name='name';
  var user='user';
  $.ajax({
   url: "https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login?name="+name+"&user="+user,
   type: "POST",
   data:{},
   dataType: "json",
   success: function(data){
     console.log(data);
    },
    error:function(err){
      console.log(err.statusText);
      console.log('异常');
    }
  });
}

// https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login
//第二种写法（参数写成json数据形式）
//拦截到的this._type = "application/x-www-form-urlencoded; charset=UTF-8"
  function getFormInfoWithJSONStyle(){
      $.ajax({
       url: "https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login",
       type: "POST",
       data:{
          name:'name',
          user:'user'
       },
       cache:false,
       dataType: "json",
       success: function(data){

        },
        error:function(err){
        }
      });
  }

  // 第三种写法（根据表单id属性，把表单封装数据，调用JQuery的serialize()方法序列化为字符串）
  // 前提是：发送请求的必须是一个form表单，而且表单内要做参数的标签必须具有name属性，因为name属性会被认为请求参数名
  //代码如下
function getFormInfoWithStringStyle(){
    var params=$('#login').serialize(); //把id为login的form表单里的参数自动封装为参数传递
    console.log(params);
    $.ajax({
     url: "https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login",
     type: "POST",
     data:params,
     cache:false,
     dataType: "json",
     success: function(data){

      },
      error:function(err){
      }
    });
}


      //第四种写法（拼接data）
function getFormInfoWithData(){
    var name='name';
    var user='user';
    $.ajax({
     url: "https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login",
     type: "POST",
     data:'name='+name+'&user='+user,
     cache:false,
     dataType: "json",
     success: function(data){

      },
      error:function(err){
      }
    });
}


//=================FormData对象
function loadWithFormData()
{
  var form = document.forms.namedItem("fileinfo");
  form.addEventListener('submit', function(ev) {

    var oOutput = document.querySelector("div"),
        oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");
    var fileField = document.querySelector("input[type='file']");
    oData.append('avatar', fileField.files[0]);

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "https://www.easy-mock.com/mock/5cc179f879522a0fe12bcda1/post/post/test/login", true);
    oReq.onload = function(oEvent) {
      if (oReq.status == 200) {
        alert('oReq.status == 200')
      } else {
        alert('"Error " + oReq.status + " occurred when trying to upload your file.<br \/>"')
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  }, false);
}
