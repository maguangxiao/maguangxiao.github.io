
function catchEvent(eventObj,event,eventHandler){
  if (eventObj) {
    if (eventObj.addEventListener) {
      eventObj.addEventListener(event,eventHandler,false);
    }else if (eventObj.attachEvent){
      event = "on" + event;
      eventObj.attachEvent(event,eventHandler);
    }

  }
}

function cancelEvent(event){
  if (event.preventDefault) {
    event.preventDefault();
    event.stopPropagation();
  }else{
    event.returnValue = fasle;
    event.cancelBubble = true;
  }
}
catchEvent(window,"load",setupEvents);

function setupEvents(evnt){
  /*
  someForm submit时 调用 checkForm方法校验是否有提交选中值
  */
  catchEvent(document.getElementById("someForm"),"submit",checkForm);
  /* someForm1 submit时 调用 checkColors方法校验是否至少选中了一个颜色*/
  catchEvent(document.getElementById("someForm1"),"submit",checkColors);
}

/*
该方法用于验证表格选项的有效性，如果有合法选择，则弹框提示
暂时无任何服务器端的处理，取消submit事件
*/
function checkForm(evnt){
  var opts = document.getElementById("someForm").selectOpts.options;

  for (var i = 0; i < opts.length; i++) {
    if (opts[i].selected) {
      window.alert(opts[i].text + " " + opts[i].value);
    }
  }
  //没有任何服务器端的处理，取消submit事件

  return false ;
}

/*删除选中的选项*/
function deleteSelectedOpt(evnt){
  var theEvent = evnt ? evnt : window.event;
  var opts = document.getElementById("someForm").selectOpts.options;
  for (var i = 0; i < opts.length; i++) {
    if (opts[i].selected) {
      opts[i] = null;
    }
  }
  /*
      使用该方法来取消表单提交操作。因为当表单提交之后，该页面将重载，
      这样会使所有选项重新填充列表，这样在JavaScript中所做的修改就彻底消除了
  */
  cancelEvent(theEvent);
}
/*自动选中奇数个选项从第0个开始算 第一个算是奇数*/
function autoSelectOddOpt(evnt){
  var theEvent = evnt ? evnt : window.event;
  var opts = document.getElementById("someForm").selectOpts.options;
  for (var i = 0; i < opts.length; i++) {
    if (i%2 != 0) {
      opts[i].selected=true;
    }
  }
  /*
      使用该方法来取消表单提交操作。因为当表单提交之后，该页面将重载，
      这样会使所有选项重新填充列表，这样在JavaScript中所做的修改就彻底消除了
  */
  cancelEvent(theEvent);

}
/*校验是否至少选中了一个颜色，如果一个颜色都未选中则弹框提示错误*/
function checkColors(evnt){
  var theEvent = evnt ? evnt : window.event;
  var colorOpts = document.getElementById("someForm1").getElementsByTagName("input");
  //遍历复选中中的每个元素，检查是否选中
  var isChecked = false;
  for (var i = 0; i < colorOpts.length; i++) {
    if ((colorOpts[i].type == "checkbox") && (colorOpts[i].checked)) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    window.alert("You must check one of the four color checkBoxes");
    cancelEvent(theEvent);
  }
}
