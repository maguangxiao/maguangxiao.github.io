

function registerFormSubmit()
{
    oldSubmitMethod = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function()
    {
        var argumentsAsArray = Array.prototype.slice.apply(arguments);
        if ((this.method.toLowerCase() == "post"))
        {
          // dosomething
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

function registerAjaxMethod()
{
  // dosomething

    var oldOpenMethod = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function()
    {
        var date = new Date();
        var argumentsAsArray = Array.prototype.slice.apply(arguments);
        if (argumentsAsArray.length > 0 && (arguments[0].toLowerCase() == "post"))
        {
// dosomething
            var that = this;
            var start = Date.now();
            while (Date.now() - start < 30) {
                continue;
            }
            oldOpenMethod.call(that, ...argumentsAsArray);

        }
        else
        {
            oldOpenMethod.call(this, ...argumentsAsArray);
        }
    };
}
registerAjaxMethod();

var oldFectch = fetch;
self.fetch = function(input, init)
{
    if(init)
    {
        if(init["method"] == "post" || init["method"] == "POST" || init["method"] == "Post")
        {
          // dosomething
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
// dosomething
        var that = this;
        var start = Date.now();
        while (Date.now() - start < 30) {
            continue;
        }
        bbaSendBeacon.call(that, ...argumentsAsArray1);
    };
}
