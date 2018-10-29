

//该方法用于防止自己在框架集中被打开
window.onload = function(){
  if (self != top) {
    if (top.location.replace) {
      top.location.replace(self.location.href);
    }else{
      top.location.href = self.document.href;
    }
  }
}
