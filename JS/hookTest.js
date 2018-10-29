function registerFormSubmit()
{
    oldSubmitMethod = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function()
    {
        var argumentsAsArray = Array.prototype.slice.apply(arguments);
        if ((this.method.toLowerCase() == "post"))
        {
            window.alert("Submit 发送关闭消息");
            window.webkit.messageHandlers.BBAWKWebViewCloseURLProtocol.postMessage("");
            var that = this;
            setTimeout(function()
                       {
                       oldSubmitMethod.call(that, ...argumentsAsArray);
                       }, 30);
        }
        else
        {
            oldOpenMethod.call(this, ...argumentsAsArray);
        }
    };
}
registerFormSubmit();


function _postMessage(val, name){
    var channel = new MessageChannel(); // 创建一个 MessageChannel
    window.nativeCallBack = function(nativeValue) {
        // 3.
        channel.port1.postMessage(nativeValue);
        window.alert(nativeValue);
    };
    // 1.
    window.webkit.messageHandlers[name].postMessage(val);
    return new Promise((resolve, reject) => {
                       channel.port2.onmessage = function(e){
                       // 4
                       var data = e.data;
                       // 5.
                       resolve(data);
                       channel = null;
                       window.nativeCallBack = null;
                       }
                     });
}

/*

//    window.alert("Ajax 发送开启消息");
//    ("");

//    var oldOpenMethod = XMLHttpRequest.prototype.open;
//    XMLHttpRequest.prototype.open = function()
//    {
//        var date = new Date();
//        var argumentsAsArray = Array.prototype.slice.apply(arguments);
//        if (argumentsAsArray.length > 0 && (arguments[0].toLowerCase() == "post"))
//        {
//            window.alert("Ajax 发送关闭消息");
//            window.webkit.messageHandlers.BBAWKWebViewCloseURLProtocol.postMessage(arguments[0]);
//            var that = this;
//            var start = Date.now();
//            while (Date.now() - start < 30) {
//                continue;
//            }
//            oldOpenMethod.call(that, ...argumentsAsArray);
//
//        }
//        else
//        {
//            oldOpenMethod.call(this, ...argumentsAsArray);
//        }
//    };
*/
function registerAjaxMethod()
{

    const  arg1 = 100;
    const  arg2 = 200;
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
    };
    _postMessage(person, 'nativeMethod').then((val) => {
                                              // 6.
                                              window.alert(val);
                                              window.alert(arg1 + arg2);
                                              })

}
registerAjaxMethod();



var oldFectch = fetch;
self.fetch = function(input, init)
{
    if(init)
    {
        if(init["method"] == "post" || init["method"] == "POST" || init["method"] == "Post")
        {
            window.alert("fetch 发送关闭消息");
            window.webkit.messageHandlers.BBAWKWebViewCloseURLProtocol.postMessage("");
            var start = Date.now();
            while (Date.now() - start < 30) {
                continue;
            }
        }
    }
    return oldFectch(input,init);
};


if (!window['bbaSendBeacon'])
{
    bbaSendBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function ()
    {
        var argumentsAsArray1 = Array.prototype.slice.apply(arguments);
        window.alert("sendBeacon 发送关闭消息");
        window.webkit.messageHandlers.BBAWKWebViewCloseURLProtocol.postMessage("");
        var that = this;
        var start = Date.now();
        while (Date.now() - start < 30) {
            continue;
        }
        bbaSendBeacon.call(that, ...argumentsAsArray1);
    };
}
