// <script src="https://unpkg.com/flyio/dist/fly.min.js"></script>
// var log = console.log;
// //切换fly engine为真正的XMLHttpRequest
// fly.engine = XMLHttpRequest;
// var engine = EngineWrapper(function (request, responseCallback) {
//     console.log(request.url, request.method)
//     //发起真正的ajax请求
//     fly.request(request.url, request.data, request)
//         .then(function (d) {
//             responseCallback({
//                 statusCode: d.engine.status,
//                 responseText: d.engine.responseText,
//                 statusMessage: d.engine.statusText
//             })
//         })
//         .catch(function (err) {
//             responseCallback({
//                 statusCode:err.status,
//                 statusMessage:err.message
//             })
//         })
// })
// //覆盖默认
// XMLHttpRequest = engine;
var x = document.getElementsByTagName('video');
x.setAttribute('webkit-playsinline','true');
x.setAttribute('playsinline','true');
