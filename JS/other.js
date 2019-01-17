!
function(t) {
    'use strict';
    if (window['__Use_TBS_PXY__'] !== true) {
        return
    };
    if (window['__qbFetchFixIsExist']) {
        return
    };
    window['__qbFetchFixIsExist'] = true;
    function e(t) {
        if ('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError('Invalid character in header field name');
        return t.toLowerCase()
    }
    function r(t) {
        return 'string' != typeof t && (t = String(t)),
        t
    }
    function o(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return m.iterable && (e[Symbol.iterator] = function() {
            return e
        }),
        e
    }
    function n(t) {
        this.map = {},
        t instanceof n ? t.forEach(function(t, e) {
            this.append(e, t)
        },
        this) : Array.isArray(t) ? t.forEach(function(t) {
            this.append(t[0], t[1])
        },
        this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e])
        },
        this)
    }
    function i(t) {
        return t.bodyUsed ? Promise.reject(new TypeError('Already read')) : void(t.bodyUsed = !0)
    }
    function s(t) {
        return new Promise(function(e, r) {
            t.onload = function() {
                e(t.result)
            },
            t.onerror = function() {
                r(t.error)
            }
        })
    }
    function a(t) {
        var e = new FileReader,
        r = s(e);
        return e.readAsArrayBuffer(t),
        r
    }
    function u(t) {
        var e = new FileReader,
        r = s(e);
        return e.readAsText(t),
        r
    }
    function h(t) {
        for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
        return r.join('')
    }
    function f(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)),
        e.buffer
    }
    function d() {
        return this.bodyUsed = !1,
        this._initBody = function(t) {
            if (this._bodyInit = t, t) if ('string' == typeof t) this._bodyText = t;
            else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (m.arrayBuffer && m.blob && v(t)) this._bodyArrayBuffer = f(t.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !B(t)) throw new Error('unsupported BodyInit type');
                this._bodyArrayBuffer = f(t)
            } else this._bodyText = '';
            this.headers.get('content-type') || ('string' == typeof t ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'))
        },
        m.blob && (this.blob = function() {
            var t = i(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([this._bodyText]))
        },
        this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
        }),
        this.text = function() {
            var t = i(this);
            if (t) return t;
            if (this._bodyBlob) return u(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(h(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText)
        },
        m.formData && (this.formData = function() {
            return this.text().then(p)
        }),
        this.json = function() {
            return this.text().then(JSON.parse)
        },
        this
    }
    function y(t) {
        var e = t.toUpperCase();
        return _.indexOf(e) > -1 ? e: t
    }
    function l(t, e) {
        e = e || {};
        var r = e.body;
        if (t instanceof l) {
            if (t.bodyUsed) throw new TypeError('Already read');
            this.url = t.url,
            this.credentials = t.credentials,
            e.headers || (this.headers = new n(t.headers)),
            this.method = t.method,
            this.mode = t.mode,
            r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || 'omit', !e.headers && this.headers || (this.headers = new n(e.headers)), this.method = y(e.method || this.method || 'GET'), this.mode = e.mode || this.mode || null, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) && r) throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(r)
    }
    function p(t) {
        var e = new FormData;
        return t.trim().split('&').forEach(function(t) {
            if (t) {
                var r = t.split('='),
                o = r.shift().replace(/\+/g, ' '),
                n = r.join('=').replace(/\+/g, ' ');
                e.append(decodeURIComponent(o), decodeURIComponent(n))
            }
        }),
        e
    }
    function c(t) {
        var e = new n;
        return t.split(/\r?\n/).forEach(function(t) {
            var r = t.split(':'),
            o = r.shift().trim();
            if (o) {
                var n = r.join(':').trim();
                e.append(o, n)
            }
        }),
        e
    }
    function b(t, e) {
        e || (e = {}),
        this.type = 'default',
        this.status = 'status' in e ? e.status: 200,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = 'statusText' in e ? e.statusText: 'OK',
        this.headers = new n(e.headers),
        this.url = e.url || '',
        this._initBody(t)
    }
    if (true) {
        var m = {
            searchParams: 'URLSearchParams' in t,
            iterable: 'Symbol' in t && 'iterator' in Symbol,
            blob: 'FileReader' in t && 'Blob' in t &&
            function() {
                try {
                    return new Blob,
                    !0
                } catch(t) {
                    return ! 1
                }
            } (),
            formData: 'FormData' in t,
            arrayBuffer: 'ArrayBuffer' in t
        };
        if (m.arrayBuffer) var w = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'],
        v = function(t) {
            return t && DataView.prototype.isPrototypeOf(t)
        },
        B = ArrayBuffer.isView ||
        function(t) {
            return t && w.indexOf(Object.prototype.toString.call(t)) > -1
        };
        n.prototype.append = function(t, o) {
            t = e(t),
            o = r(o);
            var n = this.map[t];
            this.map[t] = n ? n + ',' + o: o
        },
        n.prototype.delete = function(t) {
            delete this.map[e(t)]
        },
        n.prototype.get = function(t) {
            return t = e(t),
            this.has(t) ? this.map[t] : null
        },
        n.prototype.has = function(t) {
            return this.map.hasOwnProperty(e(t))
        },
        n.prototype.set = function(t, o) {
            this.map[e(t)] = r(o)
        },
        n.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        },
        n.prototype.keys = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push(r)
            }),
            o(t)
        },
        n.prototype.values = function() {
            var t = [];
            return this.forEach(function(e) {
                t.push(e)
            }),
            o(t)
        },
        n.prototype.entries = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push([r, e])
            }),
            o(t)
        },
        m.iterable && (n.prototype[Symbol.iterator] = n.prototype.entries);
        var _ = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        l.prototype.clone = function() {
            return new l(this, {
                body: this._bodyInit
            })
        },
        d.call(l.prototype),
        d.call(b.prototype),
        b.prototype.clone = function() {
            return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new n(this.headers),
                url: this.url
            })
        },
        b.error = function() {
            var t = new b(null, {
                status: 0,
                statusText: ''
            });
            return t.type = 'error',
            t
        };
        var A = [301, 302, 303, 307, 308];
        b.redirect = function(t, e) {
            if (A.indexOf(e) === -1) throw new RangeError('Invalid status code');
            return new b(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        },
        t.Headers = n,
        t.Request = l,
        t.Response = b,
        t.fetch = function(t, e) {
            return new Promise(function(r, o) {
                var n = new l(t, e),
                i = new XMLHttpRequest;
                i.onload = function() {
                    var t = {
                        status: i.status,
                        statusText: i.statusText,
                        headers: c(i.getAllResponseHeaders() || '')
                    };
                    t.url = 'responseURL' in i ? i.responseURL: t.headers.get('X-Request-URL');
                    var e = 'response' in i ? i.response: i.responseText;
                    r(new b(e, t))
                },
                i.onerror = function() {
                    o(new TypeError('Network request failed'))
                },
                i.ontimeout = function() {
                    o(new TypeError('Network request failed'))
                },
                i.open(n.method, n.url, !0),
                'include' === n.credentials && (i.withCredentials = !0),
                'responseType' in i && m.blob && (i.responseType = 'blob'),
                n.headers.forEach(function(t, e) {
                    i.setRequestHeader(e, t)
                }),
                i.send('undefined' == typeof n._bodyInit ? null: n._bodyInit)
            })
        },
        t.fetch.polyfill = !0
    }
} ('undefined' != typeof self ? self: this);


function tbs_wk_check_js_135() {
    var str = 'window=';
    if (window) {
        str += '1'
    } else {
        str += '0'
    };
    str += ' post=';
    if (window.__qbPostHxxkerCheckVar) {
        str += '1'
    } else {
        str += '0'
    };
    str += ' cookie=';
    if (window.__qbCK3CheckVar) {
        str += '1'
    } else {
        str += '0'
    };
    str += ' post head=';
    if (typeof window.__qbPostHxxkerCheckVarHead == 'boolean') {
        str += '1'
    } else {
        str += '0'
    };
    str += ' document=';
    if (!document) {
        str += '0'
    } else {
        str += '1'
    };
    str += ' documentElement=';
    if (!document.documentElement) {
        str += '0'
    } else {
        str += '1'
    };
    str += ' page type=';
    if (document.xmlVersion != null) {
        str += 'xml'
    } else {
        str += 'html'
    };
    return str
};
tbs_wk_check_js_135();

function showMeta() {
    var metas = document.getElementsByTagName('meta');
    var strMeta = new String();
    var strTemp;
    strMeta += '{';
    for (var i = 0; i < metas.length; i++) {
        if (metas[i].name) {
            if (strMeta != '{') {
                strMeta += ',';
            }
            strTemp = '"' + metas[i].name + '"' + ':' + '"' + metas[i].content + '"';
            strMeta = strMeta.concat(strTemp);
        }
    }
    strMeta += '}';
    return (strMeta);
}
showMeta();


document.addEventListener('submit', function(event){
    var formElement = event.target;
    var formInfo = new Object();
    formInfo.formID = formElement.id;
    formInfo.url = location.href;
    var inputsArray = new Array();
    for (var i = 0; i < formElement.elements.length; i++) {
        var inputElement = formElement.elements[i];
        if (inputElement.tagName.toLowerCase() === 'input') {
            if (inputElement.type === 'password' ||
                inputElement.type === 'text' ||
                inputElement.type === 'email') {
                var inputObject = new Object();
                inputObject.id = inputElement.id;
                inputObject.value = inputElement.value;
                inputObject.name = inputElement.name;
                inputObject.type = inputElement.type;
                inputsArray.push(inputObject);
            };
        };
    };
    formInfo.inputsArray = inputsArray;
    var jsonFormInfo = JSON.stringify(formInfo);
    if (window.webkit) {
        window.webkit.messageHandlers.pwdSave.postMessage(jsonFormInfo);
    }
    else {
        //找到密码之后为了防止继续找到验证码输入框，就立刻停止查找
        pwdSave(jsonFormInfo);
    }
}, false);

document.addEventListener('selectionchange',
function() {
    if (typeof window['webkit'] == 'undefined' || typeof window.webkit.messageHandlers == 'undefined') {
        return
    };
    var __QB_SelectedString__ = window.webkit.messageHandlers.qbWKSelectedStringHandler;
    if (typeof __QB_SelectedString__ == 'undefined') {
        return
    };
    var t = window.getSelection().toString();
    if (t.length > 0) {
        __QB_SelectedString__.postMessage(t)
    }
},
false)

function MTT_WKSetTextSizeIndex(textSize) {
    if (window.webkit) {
        var metas = document.getElementsByTagName('meta');
        for (var i = 0; i < metas.length; i++) {
            var oneMeta = metas[i];
            if (oneMeta.name == 'x5-text-size-adjust' && oneMeta.content == 'enable') {
                return
            }
        }
        var size = textSize * 12 + 76 + '%';
        if (size !== document.body.style.webkitTextSizeAdjust) {
            document.body.style.webkitTextSizeAdjust = size
        }
    }
}

function getAllInputElementsToJSON() {
    if(document.forms.length == 0) {
        return;
    };
    var mttinputsArray = document.getElementsByTagName('input');
    var mttobject = new Object();
    mttobject.url = location.href;
    var mttarray = new Array();
    for (var i = 0; i < mttinputsArray.length; i++) {
        var mttinputElement = mttinputsArray[i];
        if ('password' === mttinputElement.type || 'text' === mttinputElement.type || 'email' === mttinputElement.type) {
            var mttinputObject = new Object();
            mttinputObject.id = mttinputElement.id;
            mttinputObject.value = mttinputElement.value;
            mttinputObject.name = mttinputElement.name;
            mttinputObject.type = mttinputElement.type;
            mttarray.push(mttinputObject);
        }
    };
    mttobject.inputsArray = mttarray;
    var jsonFormInfo = JSON.stringify(mttobject);
    return jsonFormInfo;
}

function setInputValue(inputId, name, type,value) {
    var inputElement = document.getElementById(inputId);
    if (null == inputElement) {
        var elements = document.getElementsByTagName('input');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].name === name && elements[i].type === type) {
                inputElement = elements[i];
            };
        };
    };
    if (inputElement) {
        inputElement.value = value;
    };
}

function __qbGetBaseURL(url) {
    var bases = document.getElementsByTagName('base');
    var baseURLString = null;
    for (var i = bases.length - 1; i >= 0; i--) {
        var base = bases[i];
        var baseURL = base.getAttribute('href');
        if (baseURL) {
            var jsURL = new URL(baseURL, location.href);
            if (jsURL) {
                jsURLString = jsURL.toString();
                var finalBaseURL = new URL(url, jsURLString);
                baseURLString = finalBaseURL.toString();
                return baseURLString;
            } else {
                continue;
            }
        }
    }
    if (null == baseURLString) {
        var finalBaseURL = new URL(url, location.href);
        return finalBaseURL.toString();
    }
    return url;
}

function getFavIcon() {
    var links = document.getElementsByTagName('LINK');
    if (links == null) {
        return null;
    }
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel').indexOf('shortcut') != -1) {
            return links[i].href;
        }
    }
}
getFavIcon();

function mttLPGetTitleAndLink() {
    var mttLPVar = window.mttLongPressVar;
    if (mttLPVar) {
        var title = mttLPVar.innerText;
        var link = mttLPVar.href;
        while ((null == title || null == link) && null != mttLPVar) {
            mttLPVar = mttLPVar.parentElement;
            if (mttLPVar && 'body' !== mttLPVar.tagName.toLowerCase() && 'html' !== mttLPVar.tagName.toLowerCase()) {
                if (null == title) {
                    title = mttLPVar.innerText
                };
                if (null == link) {
                    link = mttLPVar.href
                }
            }
        };
        if (null != title && null != link) {
            var mttLPInfo = {
                'title': title,
                'link': link
            };
            return JSON.stringify(mttLPInfo)
        }
    }
}

function mttTextEnCheck(a) {
    var e = document.createTreeWalker(document.getElementsByTagName("html")[0], NodeFilter.SHOW_TEXT, null, false);
    var f = {
        script: 1,
        style: 1,
        noscript: 1,
        embed: 1,
        object: 1
    };
    var d = 0;
    var c;
    while (c = e.nextNode()) {
        var b = c.nodeValue.trim();
        if ((c.parentNode != null && f[c.parentNode.nodeName.toLowerCase()]) || !b.length) {
            continue
        }
        if (/^[\x00-\x7E\s]+/.test(b)) {
            d += b.length;
            if (d >= a) {
                return 1
            }
        } else {
            return 0
        }
    }
    return d > 100 ? 1 : 0
}

function mttLangCheck() {
    var h = "";
    if (document.title.length > 0) {
        h = document.title
    } else {
        var f = document.getElementsByTagName("meta");
        var d = "";
        for (i = 0; i < f.length; i++) {
            if (f[i].getAttribute("name") == "description") {
                d = f[i].getAttribute("content")
            }
        }
        h = d
    }
    if (/[\u4e00-\u9fa5]+/.test(h) || h.length <= 0) {
        return "CN-T"
    }
    var e = document.documentElement.lang;
    if (e != null && e.length) {
        return e
    }
    e = document.getElementsByTagName("html")[0].getAttribute("xml:lang");
    if (e != null && e.length) {
        return e
    }
    for (var a = document.getElementsByTagName("meta"), g = 0; g < a.length; ++g) {
        if (a[g].httpEquiv.toLowerCase() === "content-language") {
            e = a[g].content
        }
    }
    if (e != null && e.length) {
        return e
    }
    mttTextEnCheck(1000) == 1 ? e = "en-tc": e = null;
    if (e != null && e.length) {
        return e
    }
    return e
}
mttLangCheck();


# 好像是广告过滤
var _0x9aed = ["\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x6F\x73\x74", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "", "\x70\x61\x72\x61\x6D", "\x66\x75\x6E\x4E\x61\x6D\x65", "\x67\x65\x74\x41\x64\x46\x65\x61\x74\x75\x72\x65\x52\x75\x6C\x65\x73", "\x63\x61\x6C\x6C\x62\x61\x63\x6B", "\x47\x5F\x41\x44\x46\x5F\x52\x75\x6E\x5F\x41\x66\x74\x65\x72\x47\x65\x74\x41\x64\x46\x65\x61\x74\x75\x72\x65\x52\x75\x6C\x65\x73\x28\x27\x25\x73\x27\x29", "\x71\x71\x2E\x63\x6F\x6D", "\x69\x6E\x64\x65\x78\x4F\x66", "\x70\x6F\x73\x74\x4D\x65\x73\x73\x61\x67\x65", "\x61\x64\x46\x69\x6C\x74\x65\x72\x48\x61\x6E\x64\x6C\x65\x72", "\x6D\x65\x73\x73\x61\x67\x65\x48\x61\x6E\x64\x6C\x65\x72\x73", "\x77\x65\x62\x6B\x69\x74", "\x44\x4F\x4D\x4E\x6F\x64\x65\x49\x6E\x73\x65\x72\x74\x65\x64", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x3B", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x26", "\x3D", "\x6B\x65\x79\x73", "\x70\x75\x73\x68", "\x6F\x72\x69\x67\x69\x6E", "\x2F", "\x72\x65\x70\x6C\x61\x63\x65", "\x62\x6F\x64\x79", "\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74", "\x6F\x6E\x6C\x6F\x61\x64", "\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x6D\x6F\x64\x75\x6C\x65", "\x30", "\x31", "\x32", "\x33", "\x34", "\x63\x6C\x65\x61\x72\x49\x6E\x74\x65\x72\x76\x61\x6C", "\x72\x75\x6E\x41\x67\x61\x69\x6E", "\x66\x34", "\x66\x35", "\x66\x36", "\x66\x39", "\x66\x31\x30", "\x66\x31\x31", "\x66\x31\x33", "\x66\x31\x34", "\x66\x31\x35", "\x66\x31\x36", "\x66\x31\x37", "\x66\x33", "\x66\x31\x38", "\x6E\x6F\x64\x65\x54\x79\x70\x65", "\x74\x61\x72\x67\x65\x74", "\x2A", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65", "\x63\x61\x6C\x6C", "\x73\x6C\x69\x63\x65", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x61\x70\x70\x6C\x79", "\x67\x65\x74\x43\x6F\x6D\x70\x75\x74\x65\x64\x53\x74\x79\x6C\x65", "\x64\x65\x66\x61\x75\x6C\x74\x56\x69\x65\x77", "\x67\x65\x74\x42\x6F\x75\x6E\x64\x69\x6E\x67\x43\x6C\x69\x65\x6E\x74\x52\x65\x63\x74", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x66\x69\x78\x65\x64", "\x7A\x49\x6E\x64\x65\x78", "\x61\x75\x74\x6F", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x6C\x65\x66\x74", "\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74", "\x6F\x75\x74\x65\x72\x48\x54\x4D\x4C", "\x3C\x68\x65\x61\x64\x65\x72", "\x3C\x66\x6F\x6F\x74\x65\x72", "\x69\x66\x72\x61\x6D\x65", "\x69\x6D\x67", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65", "\x6E\x6F\x6E\x65", "\u7AE0", "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74", "\u76EE\u5F55", "\u6536\u85CF", "\u4E66\u67B6", "\x63\x6F\x6E\x74\x61\x69\x6E\x73", "\x72\x65\x6C\x61\x74\x69\x76\x65", "\x61\x62\x73\x6F\x6C\x75\x74\x65", "\x73\x74\x61\x74\x69\x63", "\x74\x6F\x70", "\x30\x70\x78", "\x62\x6F\x74\x74\x6F\x6D", "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70", "\x3C\x75\x6C", "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x69\x64", "\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x65\x78\x65\x63", "\x68\x74\x74\x70\x3A\x2F\x2F", "\x68\x74\x74\x70\x73\x3A\x2F\x2F", "\x6C\x61\x73\x74\x49\x6E\x64\x65\x78", "\x0D\x0A", "\x67\x6D", "\x20", "\x0A", "\x3A", "\x69\x6D\x67\x5F\x72\x61\x74\x69\x6F", "\x69\x6D\x67\x5F\x6E\x75\x6D", "\x66\x31", "\x31\x3A\x30", "\x7C\x33\x3A", "\x7C\x34\x3A", "\x7C\x35\x3A", "\x7C\x36\x3A", "\x7C\x39\x3A", "\x7C\x31\x30\x3A", "\x7C\x31\x31\x3A", "\x7C\x31\x33\x3A", "\x7C\x31\x34\x3A", "\x7C\x31\x35\x3A", "\x7C\x31\x36\x3A", "\x7C\x31\x37\x3A", "\x5F", "\x63\x68\x65\x63\x6B\x49\x66\x41\x64\x73", "\x47\x5F\x41\x44\x46\x5F\x52\x75\x6E\x5F\x41\x66\x74\x65\x72\x43\x68\x65\x63\x6B\x49\x66\x41\x64\x73\x28\x27\x25\x73\x27\x29", "\x61\x64\x66\x69\x6C\x74\x65\x72", "\x73\x65\x61\x72\x63\x68", "\u6253\u5F00", "\u4E0B\u8F7D", "\x3C", "\x73\x75\x62\x73\x74\x72", "\x64\x69\x73\x70\x6C\x61\x79", "\x73\x74\x79\x6C\x65", "\x7C", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x64\x66\x69\x6C\x74\x65\x72\x2E\x69\x6D\x74\x74\x2E\x71\x71\x2E\x63\x6F\x6D\x2F\x72\x65\x70\x6F\x72\x74", "\x6F\x70\x65\x6E", "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72", "\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65", "\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65", "\x73\x74\x61\x74\x75\x73", "\x73\x65\x6E\x64", "\x3C\x69\x6D\x67", "\x63\x68\x69\x6C\x64\x72\x65\x6E", "\x78", "\x58", "\xD7"];
var G_ADF_URL = window[_0x9aed[1]][_0x9aed[0]];
var G_ADF_Domain = window[_0x9aed[1]][_0x9aed[2]];
var G_ADF_WindowRatio = parseFloat(window[_0x9aed[3]] / 360);
var G_ADF_featureCmdRules = [];
var G_ADF_F0_Fiter_front_guanggao = false;
var G_ADF_F0_Fiter_front_xiazai = false;
var G_ADF_F0_Fiter_front_dakai = false;
var G_ADF_F0_Fiter_xgboost = false;
var G_ADF_F0_Clear_interval = false;
var G_ADF_F0_Fiter_host_arry = [];
var G_ADF_F0_Fiter_run_again = false;
var G_ADF_F_features = [];
var G_ADF_Global_Dom_map = {};
var G_ADF_Global_Id = 0;
var G_ADF_Global_NavNode_map = {};
var G_ADF_Global_Timeout_Ids = [];
var G_ADF_Global_report_num = 0;
var G_ADF_ALL_Nodes_More = [];
var G_ADF_MAX_MORE_NUM = 150;
var G_ADF_FeatureRules = _0x9aed[4];
var G_ADF_Message_GetAdFeatureRules = {};
G_ADF_Message_GetAdFeatureRules[_0x9aed[5]] = G_ADF_Domain;
G_ADF_Message_GetAdFeatureRules[_0x9aed[6]] = _0x9aed[7];
G_ADF_Message_GetAdFeatureRules[_0x9aed[8]] = _0x9aed[9];
if (G_ADF_Domain[_0x9aed[11]](_0x9aed[10]) == -1) {
    window[_0x9aed[15]][_0x9aed[14]][_0x9aed[13]][_0x9aed[12]](G_ADF_Message_GetAdFeatureRules)
};
function G_ADF_Run_AfterGetAdFeatureRules(_0xf559x17) {
    if (_0xf559x17 == _0x9aed[4]) {
        return
    } else {
        G_ADF_FeatureRules = _0xf559x17
    };
    document[_0x9aed[17]](_0x9aed[16], G_ADF_runDomADFiterWhenDomChanged, false);
    G_ADF_main(G_ADF_FeatureRules)
}
function G_ADF_main(_0xf559x19) {
    G_ADF_featureCmdRules = _0xf559x19[_0x9aed[19]](_0x9aed[18]);
    for (var _0xf559x1a = 0; _0xf559x1a < G_ADF_featureCmdRules[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x1b = {};
        var _0xf559x1c = G_ADF_featureCmdRules[_0xf559x1a][_0x9aed[19]](_0x9aed[21]);
        var _0xf559x1d = true;
        for (var _0xf559x1e = 0; _0xf559x1e < _0xf559x1c[_0x9aed[20]]; _0xf559x1e++) {
            var _0xf559x1f = _0xf559x1c[_0xf559x1e][_0x9aed[19]](_0x9aed[22]);
            if (_0xf559x1f[_0x9aed[20]] == 2) {
                var _0xf559x20 = _0xf559x1f[0];
                var _0xf559x21 = _0xf559x1f[1];
                if (!G_ADF_parseFeature(_0xf559x20, _0xf559x21, _0xf559x1b)) {
                    _0xf559x1d = false;
                    break
                }
            }
        };
        if (Object[_0x9aed[23]](_0xf559x1b)[_0x9aed[20]] > 0 && _0xf559x1d) {
            G_ADF_F_features[_0x9aed[24]](_0xf559x1b)
        }
    };
    var _0xf559x22 = window[_0x9aed[1]][_0x9aed[0]][_0x9aed[27]](window[_0x9aed[1]][_0x9aed[25]] + _0x9aed[26], _0x9aed[4]);
    if (G_ADF_F0_Fiter_host_arry[_0x9aed[20]] == 0 || _0xf559x22 == _0x9aed[4]) {} else {
        if (G_ADF_F0_Fiter_host_arry[_0x9aed[11]](_0xf559x22) == -1) {
            return
        }
    };
    var _0xf559x23 = document[_0x9aed[28]];
    G_ADF_runDomADFiterfunc(_0xf559x23);
    if (G_ADF_F0_Fiter_run_again) {
        var _0xf559x24 = window[_0x9aed[29]](G_ADF_runDomADFiterfunc, 5000, document[_0x9aed[28]]);
        G_ADF_Global_Timeout_Ids[_0x9aed[24]](_0xf559x24);
        var _0xf559x25 = window[_0x9aed[30]];
        window[_0x9aed[30]] = function() {
            if (typeof _0xf559x25 == _0x9aed[31]) {
                _0xf559x25();
                G_ADF_runDomADFiterfunc(document[_0x9aed[28]])
            } else {
                G_ADF_runDomADFiterfunc(document[_0x9aed[28]])
            }
        }
    }
}
function G_ADF_parseFeature(_0xf559x20, _0xf559x21, _0xf559x1b) {
    if (_0xf559x20 == _0x9aed[2]) {
        G_ADF_F0_Fiter_host_arry[_0x9aed[24]](decodeURIComponent(_0xf559x21));
        return true
    };
    if (_0xf559x20 == _0x9aed[32]) {
        switch (_0xf559x21) {
        case _0x9aed[33]:
            G_ADF_F0_Fiter_front_guanggao = true;
            G_ADF_F0_Fiter_front_xiazai = true;
            G_ADF_F0_Fiter_front_dakai = true;
            G_ADF_F0_Fiter_xgboost = true;
            break;
        case _0x9aed[34]:
            G_ADF_F0_Fiter_front_xiazai = true;
            break;
        case _0x9aed[35]:
            G_ADF_F0_Fiter_front_guanggao = true;
            break;
        case _0x9aed[36]:
            G_ADF_F0_Fiter_front_dakai = true;
            break;
        case _0x9aed[37]:
            G_ADF_F0_Fiter_xgboost = true;
        default:
            break
        };
        return true
    };
    if (_0xf559x20 == _0x9aed[38]) {
        if (_0xf559x21 == _0x9aed[34]) {
            G_ADF_F0_Clear_interval = true
        };
        return true
    };
    if (_0xf559x20 == _0x9aed[39]) {
        if (_0xf559x21 == _0x9aed[34]) {
            G_ADF_F0_Fiter_run_again = true
        };
        return true
    };
    if (_0xf559x20 == _0x9aed[40] || _0xf559x20 == _0x9aed[41] || _0xf559x20 == _0x9aed[42] || _0xf559x20 == _0x9aed[43] || _0xf559x20 == _0x9aed[44] || _0xf559x20 == _0x9aed[45] || _0xf559x20 == _0x9aed[46] || _0xf559x20 == _0x9aed[47] || _0xf559x20 == _0x9aed[48] || _0xf559x20 == _0x9aed[49] || _0xf559x20 == _0x9aed[50]) {
        _0xf559x1b[_0xf559x20] = parseInt(_0xf559x21);
        return true
    };
    if (_0xf559x20 == _0x9aed[51]) {
        _0xf559x1b[_0xf559x20] = parseFloat(_0xf559x21);
        return true
    };
    if (_0xf559x20 == _0x9aed[52]) {
        _0xf559x1b[_0xf559x20] = _0xf559x21;
        return true
    };
    return false
}
function G_ADF_runDomADFiterWhenDomChanged(_0xf559x28) {
    if (_0xf559x28[_0x9aed[54]][_0x9aed[53]] == 1) {
        timeoutId = window[_0x9aed[29]](G_ADF_runDomADFiterfunc, 0, _0xf559x28[_0x9aed[54]]);
        G_ADF_Global_Timeout_Ids[_0x9aed[24]](timeoutId);
        if (G_ADF_ALL_Nodes_More[_0x9aed[20]] > G_ADF_MAX_MORE_NUM) {
            G_ADF_ALL_Nodes_More = []
        }
    }
}
function G_ADF_runDomADFiterfunc(_0xf559x2a) {
    G_ADF_run_clearInterVal();
    var _0xf559x2b = _0xf559x2a[_0x9aed[56]](_0x9aed[55]);
    var _0xf559x2c = Array[_0x9aed[59]][_0x9aed[58]][_0x9aed[57]](_0xf559x2b, 0);
    _0xf559x2c[_0x9aed[24]](_0xf559x2a);
    Array[_0x9aed[59]][_0x9aed[24]][_0x9aed[60]](G_ADF_ALL_Nodes_More, _0xf559x2c);
    var _0xf559x2d = {};
    var _0xf559x2e = {};
    var _0xf559x2f = {};
    var _0xf559x30 = [];
    var _0xf559x31 = [];
    for (var _0xf559x1a = 0; _0xf559x1a < G_ADF_ALL_Nodes_More[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x32 = _0xf559x1a;
        var _0xf559x33 = G_ADF_ALL_Nodes_More[_0xf559x1a];
        var _0xf559x34 = document[_0x9aed[62]][_0x9aed[61]](_0xf559x33);
        _0xf559x2d[_0xf559x32] = _0xf559x34;
        var _0xf559x35 = _0xf559x33[_0x9aed[63]]();
        _0xf559x2e[_0xf559x32] = _0xf559x35;
        if (_0xf559x34[_0x9aed[64]] == _0x9aed[65]) {
            _0xf559x30[_0x9aed[24]](_0xf559x33)
        };
        if (_0xf559x34[_0x9aed[66]] != _0x9aed[67] && _0xf559x34[_0x9aed[66]] != _0x9aed[33]) {
            _0xf559x31[_0x9aed[24]](_0xf559x33)
        };
        if (G_ADF_isKeepByAttribute(_0xf559x33, _0xf559x32, _0xf559x2e)) {
            _0xf559x2f[_0xf559x32] = _0xf559x33
        }
    };
    G_ADF_getFatherNodes(_0xf559x2f);
    G_ADF_runAdsFilter(_0xf559x2f, _0xf559x2d, _0xf559x2e, _0xf559x30, _0xf559x31)
}
function G_ADF_isKeepByAttribute(_0xf559x33, _0xf559x32, _0xf559x2e) {
    var _0xf559x37 = parseInt(_0xf559x2e[_0xf559x32][_0x9aed[68]]) / G_ADF_WindowRatio;
    var _0xf559x38 = parseInt(_0xf559x2e[_0xf559x32][_0x9aed[69]]) / G_ADF_WindowRatio;
    var _0xf559x39 = parseInt(_0xf559x2e[_0xf559x32][_0x9aed[70]]) + document[_0x9aed[28]][_0x9aed[71]];
    if (_0xf559x37 * _0xf559x38 < 5000 || _0xf559x37 * _0xf559x38 > 320 * 320) {
        return false
    };
    if ((_0xf559x39 + _0xf559x37) > 360 || _0xf559x39 < 0) {
        return false
    };
    var _0xf559x3a = _0xf559x33[_0x9aed[72]];
    if (_0xf559x3a[_0x9aed[11]](_0x9aed[73]) == 0 || _0xf559x3a[_0x9aed[11]](_0x9aed[74]) == 0) {
        return false
    };
    if (_0xf559x3a[_0x9aed[11]](_0x9aed[75]) == -1 && _0xf559x3a[_0x9aed[11]](_0x9aed[76]) == -1) {
        var _0xf559x3b = _0xf559x33[_0x9aed[56]](_0x9aed[55]);
        var _0xf559x3c = true;
        for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x3b[_0x9aed[20]]; _0xf559x1a++) {
            var _0xf559x3d = _0xf559x3b[_0xf559x1a];
            var _0xf559x3e = document[_0x9aed[62]][_0x9aed[61]](_0xf559x3d)[_0x9aed[77]];
            if (_0xf559x3e != _0x9aed[4] && _0xf559x3e != _0x9aed[78]) {
                _0xf559x3c = false
            }
        };
        if (_0xf559x3c) {
            return false
        }
    };
    if (_0xf559x33[_0x9aed[80]][_0x9aed[11]](_0x9aed[79]) != -1 || _0xf559x33[_0x9aed[80]][_0x9aed[11]](_0x9aed[81]) != -1 || _0xf559x33[_0x9aed[80]][_0x9aed[11]](_0x9aed[82]) != -1 || _0xf559x33[_0x9aed[80]][_0x9aed[11]](_0x9aed[83]) != -1) {
        return false
    };
    return true
}
function G_ADF_getFatherNodes(_0xf559x2f) {
    for (var _0xf559x40 in _0xf559x2f) {
        var _0xf559x41 = _0xf559x2f[_0xf559x40];
        for (var _0xf559x42 in _0xf559x2f) {
            if (_0xf559x40 == _0xf559x42) {
                continue
            };
            var _0xf559x43 = _0xf559x2f[_0xf559x42];
            if (_0xf559x43[_0x9aed[84]](_0xf559x41)) {
                delete _0xf559x2f[_0xf559x40]
            }
        }
    }
}
function G_ADF_runAdsFilter(_0xf559x2f, _0xf559x2d, _0xf559x2e, _0xf559x30, _0xf559x31) {
    var _0xf559x45 = _0x9aed[4];
    var _0xf559x46 = _0x9aed[4];
    for (var _0xf559x32 in _0xf559x2f) {
        var _0xf559x33 = _0xf559x2f[_0xf559x32];
        var _0xf559x47 = _0xf559x33[_0x9aed[56]](_0x9aed[55]);
        var _0xf559x3a = _0xf559x33[_0x9aed[72]];
        var _0xf559x48 = /\<script.*?\<\/script\>/gi;
        _0xf559x3a = _0xf559x3a[_0x9aed[27]](_0xf559x48, _0x9aed[4]);
        var _0xf559x49 = false;
        var _0xf559x4a = false;
        var _0xf559x4b = 0;
        var _0xf559x4c = 0;
        var _0xf559x37 = 0;
        var _0xf559x38 = 0;
        var _0xf559x4d = 0;
        var _0xf559x4e = 0;
        var _0xf559x4f = 0;
        var _0xf559x50 = 0;
        var _0xf559x51 = 0;
        var _0xf559x52 = _0x9aed[4];
        var _0xf559x53 = 0;
        var _0xf559x54 = 0;
        var _0xf559x55 = 0;
        var _0xf559x56 = 0;
        var _0xf559x57 = 0;
        var _0xf559x58 = false;
        var _0xf559x59 = _0xf559x2d[_0xf559x32][_0x9aed[64]];
        if (_0xf559x59 == _0x9aed[65]) {
            _0xf559x4d = 1;
            _0xf559x58 = true
        } else {
            if (_0xf559x59 == _0x9aed[85]) {
                _0xf559x4d = 0
            } else {
                if (_0xf559x59 == _0x9aed[86]) {
                    _0xf559x4d = 2
                } else {
                    if (_0xf559x59 == _0x9aed[87]) {
                        _0xf559x4d = 3
                    } else {
                        _0xf559x4d = 0
                    }
                }
            }
        };
        if (_0xf559x4d != 1) {
            if (G_ADF_isFixedFromChilds(_0xf559x33, _0xf559x30)) {
                _0xf559x4d = 1
            }
        };
        if (_0xf559x58) {
            if (_0xf559x2d[_0xf559x32][_0x9aed[88]] == _0x9aed[89]) {
                _0xf559x51 = 1
            };
            if (_0xf559x2d[_0xf559x32][_0x9aed[90]] == _0x9aed[89]) {
                _0xf559x51 = 2
            }
        } else {
            if ((_0xf559x2e[_0xf559x32][_0x9aed[88]] + document[_0x9aed[28]][_0x9aed[91]]) == 0) {
                _0xf559x51 = 1
            }
        };
        if (_0xf559x3a[_0x9aed[11]](_0x9aed[92]) != -1) {
            _0xf559x4a = true
        };
        if (_0xf559x51 == 1 && _0xf559x4a) {
            _0xf559x49 = true
        };
        var _0xf559x5a = 0;
        if (G_ADF_F0_Fiter_front_dakai || G_ADF_F0_Fiter_front_guanggao || G_ADF_F0_Fiter_front_xiazai) {
            _0xf559x5a = G_ADF_adFiterByFrontRule(_0xf559x33, _0xf559x32, _0xf559x47, _0xf559x2e);
            if ((_0xf559x5a == 1) && !_0xf559x49 && !_0xf559x4a && G_ADF_F0_Fiter_front_guanggao) {
                G_ADF_circleAdDoms(_0xf559x33, 2);
                continue
            };
            if (_0xf559x5a == 2 && !_0xf559x49 && !_0xf559x4a && G_ADF_F0_Fiter_front_xiazai) {
                G_ADF_circleAdDoms(_0xf559x33, 2);
                continue
            };
            if (_0xf559x5a == 3 && !_0xf559x49 && !_0xf559x4a && G_ADF_F0_Fiter_front_dakai) {
                G_ADF_circleAdDoms(_0xf559x33, 2);
                continue
            }
        };
        var _0xf559x5b = _0xf559x33[_0x9aed[93]];
        var _0xf559x5c = _0xf559x33[_0x9aed[95]](_0x9aed[94]);
        if (_0xf559x5c == null) {
            _0xf559x5c = _0x9aed[4]
        };
        if (_0xf559x2d[_0xf559x32][_0x9aed[68]] == _0x9aed[67] || _0xf559x2d[_0xf559x32][_0x9aed[69]] == _0x9aed[67]) {
            continue
        };
        _0xf559x37 = parseFloat(_0xf559x2d[_0xf559x32][_0x9aed[68]]) / G_ADF_WindowRatio;
        _0xf559x38 = parseFloat(_0xf559x2d[_0xf559x32][_0x9aed[69]]) / G_ADF_WindowRatio;
        if (_0xf559x38 == 0) {
            _0xf559x38 = _0xf559x2e[_0xf559x32][_0x9aed[69]] / G_ADF_WindowRatio
        };
        if (_0xf559x38 >= 0 && _0xf559x38 < 48) {
            _0xf559x38 = 0
        } else {
            if (_0xf559x38 >= 48 && _0xf559x38 < 61) {
                _0xf559x38 = 1
            } else {
                if (_0xf559x38 >= 61 && _0xf559x38 < 84) {
                    _0xf559x38 = 2
                } else {
                    if (_0xf559x38 >= 84 && _0xf559x38 < 85) {
                        _0xf559x38 = 3
                    } else {
                        if (_0xf559x38 >= 85 && _0xf559x38 < 90) {
                            _0xf559x38 = 4
                        } else {
                            if (_0xf559x38 >= 90 && _0xf559x38 < 91) {
                                _0xf559x38 = 5
                            } else {
                                if (_0xf559x38 >= 91 && _0xf559x38 < 99) {
                                    _0xf559x38 = 6
                                } else {
                                    if (_0xf559x38 >= 99 && _0xf559x38 < 101) {
                                        _0xf559x38 = 7
                                    } else {
                                        if (_0xf559x38 >= 101 && _0xf559x38 < 112) {
                                            _0xf559x38 = 8
                                        } else {
                                            if (_0xf559x38 >= 112 && _0xf559x38 < 113) {
                                                _0xf559x38 = 9
                                            } else {
                                                _0xf559x38 = 10
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        if (_0xf559x2d[_0xf559x32][_0x9aed[66]] != _0x9aed[67] && _0xf559x2d[_0xf559x32][_0x9aed[66]] != _0x9aed[33]) {
            _0xf559x4e = 1
        } else {
            if (_0xf559x4d == 1 || _0xf559x4d == 2) {
                if (G_ADF_isHaveZIndexFromChilds(_0xf559x33, _0xf559x31)) {
                    _0xf559x4e = 1
                }
            }
        };
        var _0xf559x5d = /href=\"(.+?)\"/g;
        var _0xf559x5e = _0xf559x5d[_0x9aed[96]](_0xf559x3a);
        while (_0xf559x5d[_0x9aed[99]] != 0) {
            if (_0xf559x5e && _0xf559x5e[_0x9aed[20]] >= 2) {
                var _0xf559x5f = _0xf559x5e[1];
                if ((_0xf559x5f[_0x9aed[11]](_0x9aed[97]) == 0 && _0xf559x5f[_0x9aed[11]](_0x9aed[97] + G_ADF_Domain) == -1) || (_0xf559x5f[_0x9aed[11]](_0x9aed[98]) == 0 && _0xf559x5f[_0x9aed[11]](_0x9aed[98] + G_ADF_Domain) == -1)) {
                    _0xf559x4f = 1;
                    break
                }
            };
            _0xf559x5e = _0xf559x5d[_0x9aed[96]](_0xf559x3a)
        };
        if (_0xf559x3a[_0x9aed[11]](_0x9aed[75]) != -1) {
            _0xf559x50 = 1
        };
        _0xf559x52 = _0xf559x33[_0x9aed[80]];
        _0xf559x52 = _0xf559x52[_0x9aed[27]](new RegExp(_0x9aed[100], _0x9aed[101]), _0x9aed[102]);
        _0xf559x52 = _0xf559x52[_0x9aed[27]](new RegExp(_0x9aed[103], _0x9aed[101]), _0x9aed[102]);
        _0xf559x52 = _0xf559x52[_0x9aed[27]](new RegExp(_0x9aed[18], _0x9aed[101]), _0x9aed[102]);
        _0xf559x52 = _0xf559x52[_0x9aed[27]](new RegExp(_0x9aed[104], _0x9aed[101]), _0x9aed[102]);
        _0xf559x52 = _0xf559x52[_0x9aed[27]](/\s+/g, _0x9aed[102]);
        _0xf559x53 = _0xf559x52[_0x9aed[20]];
        var _0xf559x60 = {};
        G_ADF_getNodeImgAreaAndNum(_0xf559x33, _0xf559x32, _0xf559x47, _0xf559x60, _0xf559x2e);
        _0xf559x54 = parseFloat(_0xf559x60[_0x9aed[105]]);
        _0xf559x55 = parseInt(_0xf559x60[_0x9aed[106]]);
        if (_0xf559x4d == 1 && _0xf559x51 != 0 && G_ADF_isNavByPosition(_0xf559x33)) {
            _0xf559x56 = 1
        };
        _0xf559x57 = G_ADF_isTextHaveX(_0xf559x33, _0xf559x47) ? 1 : 0;
        if (G_ADF_F_features[_0x9aed[20]] > 0) {
            var _0xf559x61 = {};
            _0xf559x61[_0x9aed[107]] = 0;
            _0xf559x61[_0x9aed[51]] = _0xf559x37;
            _0xf559x61[_0x9aed[40]] = _0xf559x38;
            _0xf559x61[_0x9aed[41]] = _0xf559x4d;
            _0xf559x61[_0x9aed[42]] = _0xf559x4e;
            _0xf559x61[_0x9aed[43]] = _0xf559x4f;
            _0xf559x61[_0x9aed[44]] = _0xf559x50;
            _0xf559x61[_0x9aed[45]] = _0xf559x51;
            _0xf559x61[_0x9aed[46]] = _0xf559x53;
            _0xf559x61[_0x9aed[47]] = _0xf559x57;
            _0xf559x61[_0x9aed[48]] = _0xf559x54;
            _0xf559x61[_0x9aed[49]] = _0xf559x55;
            _0xf559x61[_0x9aed[50]] = _0xf559x56;
            _0xf559x61[_0x9aed[52]] = _0xf559x52;
            if (G_ADF_checkDomFeatureRules(_0xf559x61)) {
                G_ADF_circleAdDoms(_0xf559x33, 3);
                continue
            }
        };
        if (G_ADF_F0_Fiter_xgboost) {
            var _0xf559x62 = _0x9aed[108];
            _0xf559x62 += (_0x9aed[109] + _0xf559x37);
            _0xf559x62 += (_0x9aed[110] + _0xf559x38);
            _0xf559x62 += (_0x9aed[111] + _0xf559x4d);
            _0xf559x62 += (_0x9aed[112] + _0xf559x4e);
            _0xf559x62 += (_0x9aed[113] + _0xf559x4f);
            _0xf559x62 += (_0x9aed[114] + _0xf559x50);
            _0xf559x62 += (_0x9aed[115] + _0xf559x51);
            _0xf559x62 += (_0x9aed[116] + _0xf559x53);
            _0xf559x62 += (_0x9aed[117] + _0xf559x57);
            _0xf559x62 += (_0x9aed[118] + _0xf559x54);
            _0xf559x62 += (_0x9aed[119] + _0xf559x55);
            _0xf559x62 += (_0x9aed[120] + _0xf559x56);
            G_ADF_Global_Dom_map[G_ADF_Global_Id] = _0xf559x33;
            G_ADF_Global_NavNode_map[G_ADF_Global_Id] = _0xf559x49;
            if (_0xf559x45 == _0x9aed[4]) {
                _0xf559x45 += (G_ADF_Global_Id + _0x9aed[121] + _0xf559x62);
                _0xf559x46 += (G_ADF_Global_Id + _0x9aed[121] + 0.5)
            } else {
                _0xf559x45 += (_0x9aed[21] + G_ADF_Global_Id + _0x9aed[121] + _0xf559x62);
                _0xf559x46 += (_0x9aed[21] + G_ADF_Global_Id + _0x9aed[121] + 0.5)
            };
            G_ADF_Global_Id++;
            continue
        };
        G_ADF_circleAdDoms(_0xf559x33, 0)
    };
    if (_0xf559x45 != _0x9aed[4]) {
        var _0xf559x63 = {};
        _0xf559x63[_0x9aed[5]] = _0xf559x45;
        _0xf559x63[_0x9aed[6]] = _0x9aed[122];
        _0xf559x63[_0x9aed[8]] = _0x9aed[123];
        window[_0x9aed[15]][_0x9aed[14]][_0x9aed[13]][_0x9aed[12]](_0xf559x63)
    };
    if (G_ADF_Global_report_num > 0) {
        G_ADF_reportData(window[_0x9aed[1]][_0x9aed[2]], _0x9aed[124], G_ADF_Global_report_num);
        G_ADF_Global_report_num = 0
    };
    _0xf559x2f = {};
    _0xf559x2d = {};
    _0xf559x2e = {};
    _0xf559x30 = {};
    _0xf559x31 = {};
    G_ADF_Global_report_num = 0
}
function G_ADF_adFiterByFrontRule(_0xf559x33, _0xf559x32, _0xf559x47, _0xf559x2e) {
    var _0xf559x3a = _0xf559x33[_0x9aed[72]];
    var _0xf559x65 = _0xf559x33[_0x9aed[80]];
    _0xf559x3a = _0xf559x3a[_0x9aed[27]](/<script[\s\S]*script>/gm, _0x9aed[4]);
    var _0xf559x5a = 0;
    if (_0xf559x3a[_0x9aed[125]](/>\s*广[^\u4e00-\u9fa5]*告\s*</) != -1 || _0xf559x3a[_0x9aed[125]](/>\s*打[^\u4e00-\u9fa5]*开\s*</) != -1 || _0xf559x3a[_0x9aed[125]](/>\s*下[^\u4e00-\u9fa5]*载\s*</) != -1 || _0xf559x3a[_0x9aed[11]](_0x9aed[126]) != -1 || _0xf559x3a[_0x9aed[11]](_0x9aed[127]) != -1) {
        var _0xf559x66 = _0xf559x47;
        var _0xf559x67 = {};
        var _0xf559x68 = _0xf559x2e[_0xf559x32][_0x9aed[70]];
        var _0xf559x69 = _0xf559x2e[_0xf559x32][_0x9aed[88]];
        var _0xf559x6a = _0xf559x2e[_0xf559x32][_0x9aed[68]];
        var _0xf559x6b = _0xf559x2e[_0xf559x32][_0x9aed[69]];
        for (var _0xf559x6c = 0; _0xf559x6c < _0xf559x66[_0x9aed[20]]; _0xf559x6c++) {
            if (_0xf559x66[_0xf559x6c] == undefined) {
                continue
            };
            var _0xf559x3d = _0xf559x66[_0xf559x6c];
            var _0xf559x6d = _0xf559x3d[_0x9aed[72]];
            if (_0xf559x6d[_0x9aed[125]](/广[^\u4e00-\u9fa5]*告/) != -1 || _0xf559x6d[_0x9aed[125]](/打[^\u4e00-\u9fa5]*开/) != -1 || _0xf559x6d[_0x9aed[125]](/下[^\u4e00-\u9fa5]*载/) != -1) {
                _0xf559x67[_0xf559x6c] = _0xf559x3d
            }
        };
        for (var _0xf559x1a in _0xf559x67) {
            var _0xf559x41 = _0xf559x67[_0xf559x1a];
            if (_0xf559x41 == undefined) {
                continue
            };
            for (var _0xf559x1e in _0xf559x67) {
                if (_0xf559x1a == _0xf559x1e || _0xf559x67[_0xf559x1e] == undefined) {
                    continue
                };
                var _0xf559x43 = _0xf559x67[_0xf559x1e];
                if (_0xf559x43[_0x9aed[84]](_0xf559x41)) {
                    delete _0xf559x67[_0xf559x1e]
                }
            }
        };
        for (var _0xf559x6e in _0xf559x67) {
            if (_0xf559x67[_0xf559x6e] != undefined) {
                var _0xf559x3d = _0xf559x67[_0xf559x6e];
                var _0xf559x6f = _0xf559x3d[_0x9aed[63]]()[_0x9aed[70]];
                var _0xf559x70 = _0xf559x3d[_0x9aed[63]]()[_0x9aed[88]];
                var _0xf559x71 = _0xf559x3d[_0x9aed[63]]()[_0x9aed[68]];
                var _0xf559x72 = _0xf559x3d[_0x9aed[63]]()[_0x9aed[69]];
                var _0xf559x73 = false;
                if (_0xf559x71 > 0 && _0xf559x72 > 0 && _0xf559x72 * _0xf559x71 <= 0.5 * _0xf559x6b * _0xf559x6a) {
                    if ((_0xf559x6f - _0xf559x68 > 0.3 * _0xf559x6a) && (_0xf559x6f - _0xf559x68 + _0xf559x71 < 0.7 * _0xf559x6a) && (_0xf559x70 - _0xf559x69 > 0.3 * _0xf559x6b) && (_0xf559x70 - _0xf559x69 + _0xf559x72 < 0.7 * _0xf559x6b)) {} else {
                        _0xf559x73 = true
                    }
                };
                var _0xf559x74 = _0x9aed[4];
                var _0xf559x75;
                var _0xf559x76;
                var _0xf559x77 = _0xf559x3d[_0x9aed[80]];
                var _0xf559x78 = _0xf559x3d[_0x9aed[72]];
                if (_0xf559x77[_0x9aed[11]](_0x9aed[126]) != -1) {
                    _0xf559x75 = _0xf559x78[_0x9aed[125]](/>[^>=]*打开[^<=]*</) + 1;
                    _0xf559x76 = _0xf559x78[_0x9aed[11]](_0x9aed[128], _0xf559x75);
                    _0xf559x74 = _0xf559x78[_0x9aed[129]](_0xf559x75, _0xf559x76 - _0xf559x75)
                };
                if (_0xf559x77[_0x9aed[11]](_0x9aed[127]) != -1) {
                    _0xf559x75 = _0xf559x78[_0x9aed[125]](/>[^>=]*下载[^<=]*</) + 1;
                    _0xf559x76 = _0xf559x78[_0x9aed[11]](_0x9aed[128], _0xf559x75);
                    _0xf559x74 = _0xf559x78[_0x9aed[129]](_0xf559x75, _0xf559x76 - _0xf559x75)
                };
                if (_0xf559x77[_0x9aed[11]](_0x9aed[126]) != -1 || _0xf559x77[_0x9aed[11]](_0x9aed[127]) != -1) {
                    if (_0xf559x74 != _0x9aed[4] && _0xf559x74[_0x9aed[20]] <= 8 && _0xf559x73) {
                        if (_0xf559x77[_0x9aed[11]](_0x9aed[127]) != -1) {
                            _0xf559x5a = 2
                        };
                        if (_0xf559x77[_0x9aed[11]](_0x9aed[126]) != -1) {
                            _0xf559x5a = 3
                        }
                    }
                }
            }
        }
    };
    if (_0xf559x3a[_0x9aed[125]](/>\s*广[^\u4e00-\u9fa5]*告\s*</) != -1 || _0xf559x3a[_0x9aed[125]](/>\s*打[^\u4e00-\u9fa5]*开\s*</) != -1 || _0xf559x3a[_0x9aed[125]](/>\s*下[^\u4e00-\u9fa5]*载\s*</) != -1) {
        if (_0xf559x3a[_0x9aed[125]](/>\s*广[^\u4e00-\u9fa5]*告\s*</) != -1) {
            _0xf559x5a = 1
        } else {
            if (_0xf559x3a[_0x9aed[125]](/>\s*下[^\u4e00-\u9fa5]*载\s*</) != -1) {
                _0xf559x5a = 2
            } else {
                _0xf559x5a = 3
            }
        }
    };
    return _0xf559x5a
}
function G_ADF_isFixedFromChilds(_0xf559x33, _0xf559x30) {
    for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x30[_0x9aed[20]]; _0xf559x1a++) {
        if (_0xf559x33[_0x9aed[84]](_0xf559x30[_0xf559x1a])) {
            return true
        }
    };
    return false
}
function G_ADF_isHaveZIndexFromChilds(_0xf559x33, _0xf559x31) {
    for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x31[_0x9aed[20]]; _0xf559x1a++) {
        if (_0xf559x33[_0x9aed[84]](_0xf559x31[_0xf559x1a])) {
            return true
        }
    };
    return false
}
function G_ADF_circleAdDoms(_0xf559x33, _0xf559x7c) {
    if (_0xf559x7c == 0) {} else {
        if (_0xf559x7c == 1) {
            if (_0xf559x33[_0x9aed[131]][_0x9aed[130]] != _0x9aed[78]) {
                G_ADF_Global_report_num++
            };
            _0xf559x33[_0x9aed[131]][_0x9aed[130]] = _0x9aed[78]
        } else {
            if (_0xf559x7c == 2) {
                if (_0xf559x33[_0x9aed[131]][_0x9aed[130]] != _0x9aed[78]) {
                    G_ADF_Global_report_num++
                };
                _0xf559x33[_0x9aed[131]][_0x9aed[130]] = _0x9aed[78]
            } else {
                if (_0xf559x7c == 3) {
                    if (_0xf559x33[_0x9aed[131]][_0x9aed[130]] != _0x9aed[78]) {
                        G_ADF_Global_report_num++
                    };
                    _0xf559x33[_0x9aed[131]][_0x9aed[130]] = _0x9aed[78]
                }
            }
        }
    }
}
function G_ADF_reportData(_0xf559x7e, _0xf559x7c, _0xf559x7f) {
    var _0xf559x80 = _0xf559x7e + _0x9aed[132] + _0xf559x7c + _0x9aed[132] + _0xf559x7f;
    var _0xf559x81 = new XMLHttpRequest();
    _0xf559x81[_0x9aed[135]](_0x9aed[133], _0x9aed[134], true);
    _0xf559x81[_0x9aed[138]](_0x9aed[136], _0x9aed[137]);
    _0xf559x81[_0x9aed[139]] = function() {
        var _0xf559x82 = _0xf559x81;
        if (_0xf559x82[_0x9aed[140]] == 4) {
            if (_0xf559x82[_0x9aed[141]] == 200) {}
        }
    };
    _0xf559x81[_0x9aed[142]](_0xf559x80)
}
function G_ADF_getNodeImgAreaAndNum(_0xf559x33, _0xf559x32, _0xf559x47, _0xf559x60, _0xf559x2e) {
    var _0xf559x37 = _0xf559x2e[_0xf559x32][_0x9aed[68]];
    var _0xf559x38 = _0xf559x2e[_0xf559x32][_0x9aed[69]];
    var _0xf559x84 = 0;
    var _0xf559x85 = 0;
    for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x47[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x3d = _0xf559x47[_0xf559x1a];
        var _0xf559x3e = document[_0x9aed[62]][_0x9aed[61]](_0xf559x3d)[_0x9aed[77]];
        if (_0xf559x3d[_0x9aed[72]][_0x9aed[11]](_0x9aed[143]) == 0 || (_0xf559x3e != _0x9aed[4] && _0xf559x3e != _0x9aed[78])) {
            var _0xf559x86 = _0xf559x3d[_0x9aed[63]]()[_0x9aed[68]];
            var _0xf559x87 = _0xf559x3d[_0x9aed[63]]()[_0x9aed[69]];
            _0xf559x84 += _0xf559x86 * _0xf559x87;
            _0xf559x85++
        }
    };
    var _0xf559x88 = _0xf559x84 / (_0xf559x37 * _0xf559x38);
    if (_0xf559x88 > 1) {
        _0xf559x60[_0x9aed[105]] = 1
    } else {
        _0xf559x60[_0x9aed[105]] = _0xf559x88
    };
    _0xf559x60[_0x9aed[106]] = _0xf559x85
}
function G_ADF_isNavByPosition(_0xf559x33) {
    var _0xf559x8a = _0xf559x33[_0x9aed[63]]()[_0x9aed[69]] * 0.8;
    var _0xf559x8b = _0xf559x33[_0x9aed[63]]()[_0x9aed[68]];
    var _0xf559x8c = _0xf559x33[_0x9aed[63]]()[_0x9aed[69]] * _0xf559x33[_0x9aed[63]]()[_0x9aed[68]];
    var _0xf559x3b = _0xf559x33[_0x9aed[144]];
    if (_0xf559x3b[_0x9aed[20]] == 0) {
        return false
    };
    if (_0xf559x3b[_0x9aed[20]] > 1) {
        var _0xf559x8d = 0;
        var _0xf559x8e = 0;
        var _0xf559x8f = _0xf559x8b * 0.8 / _0xf559x3b[_0x9aed[20]];
        var _0xf559x90 = _0xf559x8b * 1.1 / _0xf559x3b[_0x9aed[20]];
        var _0xf559x91 = true;
        for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x3b[_0x9aed[20]]; _0xf559x1a++) {
            var _0xf559x92 = _0xf559x3b[_0xf559x1a][_0x9aed[63]]()[_0x9aed[68]];
            var _0xf559x93 = _0xf559x3b[_0xf559x1a][_0x9aed[63]]()[_0x9aed[69]];
            var _0xf559x94 = _0xf559x92 * _0xf559x93;
            if (_0xf559x94 > _0xf559x8d) {
                _0xf559x8d = _0xf559x94;
                _0xf559x8e = _0xf559x1a
            };
            if (_0xf559x92 >= _0xf559x8f && _0xf559x92 <= _0xf559x90 && _0xf559x93 >= _0xf559x8a) {} else {
                _0xf559x91 = false
            }
        };
        if (_0xf559x91) {
            return true
        };
        if (_0xf559x8d < _0xf559x8c * 0.8) {
            return false
        };
        return G_ADF_isNavByPosition(_0xf559x3b[_0xf559x8e])
    } else {
        return G_ADF_isNavByPosition(_0xf559x3b[0])
    }
}
function G_ADF_isTextHaveX(_0xf559x33, _0xf559x47) {
    for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x47[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x96 = _0xf559x47[_0xf559x1a][_0x9aed[80]];
        _0xf559x96 = _0xf559x96[_0x9aed[27]](/\s+/g, _0x9aed[4]);
        if (_0xf559x96 == _0x9aed[145] || _0xf559x96 == _0x9aed[146] || _0xf559x96 == _0x9aed[147]) {
            return true
        }
    };
    return false
}
function G_ADF_checkDomFeatureRules(_0xf559x61) {
    var _0xf559x98 = false;
    for (var _0xf559x1a = 0; _0xf559x1a < G_ADF_F_features[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x99 = G_ADF_F_features[_0xf559x1a];
        var _0xf559x9a = true;
        for (featureKey in _0xf559x99) {
            featureValue = _0xf559x99[featureKey];
            if (featureKey == _0x9aed[52]) {
                if (_0xf559x61[featureKey][_0x9aed[11]](decodeURIComponent(featureValue)) == -1) {
                    _0xf559x9a = false;
                    break
                }
            } else {
                if (featureValue != _0xf559x61[featureKey]) {
                    _0xf559x9a = false;
                    break
                }
            }
        };
        if (_0xf559x9a) {
            _0xf559x98 = true;
            break
        }
    };
    return _0xf559x98
}
function G_ADF_Run_AfterCheckIfAds(_0xf559x9c) {
    var _0xf559x9d = _0xf559x9c[_0x9aed[19]](_0x9aed[21]);
    for (var _0xf559x1a = 0; _0xf559x1a < _0xf559x9d[_0x9aed[20]]; _0xf559x1a++) {
        var _0xf559x9e = _0xf559x9d[_0xf559x1a][_0x9aed[19]](_0x9aed[121]);
        if (_0xf559x9e[_0x9aed[20]] = 2) {
            var _0xf559x32 = parseInt(_0xf559x9e[0]);
            var _0xf559x9f = parseFloat(_0xf559x9e[1]);
            var _0xf559x33 = G_ADF_Global_Dom_map[_0xf559x32];
            var _0xf559x49 = G_ADF_Global_NavNode_map[_0xf559x32];
            if (_0xf559x9f >= 0.6 && !_0xf559x49) {
                G_ADF_circleAdDoms(_0xf559x33, 1)
            } else {
                G_ADF_circleAdDoms(_0xf559x33, 0)
            }
        }
    };
    G_ADF_Global_Dom_map = {};
    G_ADF_Global_NavNode_map = {}
}
function G_ADF_run_clearInterVal() {
    if (G_ADF_F0_Clear_interval) {
        for (var _0xf559x1a = 1; _0xf559x1a < 20; _0xf559x1a++) {
            clearInterval(_0xf559x1a);
            if (G_ADF_Global_Timeout_Ids[_0x9aed[11]](_0xf559x1a) == -1) {
                clearTimeout(_0xf559x1a)
            }
        }
    }
}

# 视频白名单
window.__qbVideoInlinePlayWhitelist = ["http:\/\/www.wmy-ad.com", "https:\/\/testweb.busi.inke.com", "http:\/\/testweb.busi.inke.com", "https:\/\/circletest.html5.qq.com", "https:\/\/circle.html5.qq.com", "https:\/\/circlegray.html5.qq.com", "http:\/\/circletest.html5.qq.com\/", "http:\/\/circlegray.html5.qq.com", "http:\/\/circle.html5.qq.com\/", "http:\/\/info.3g.qq.com", "http:\/\/info.3g.qq.com", "https:\/\/beta.www.ingkee.com", "http:\/\/beta.www.ingkee.com", "*.ingkee.com", "http:\/\/videotest.sparta.html5.qq.com", "https:\/\/videotest.sparta.html5.qq.com", "http:\/\/*.gyblog.cn\/", "http:\/\/*.360vcloud.net\/", "https:\/\/*.360.cn\/", "http:\/\/*.huajiao.com\/", "http:\/\/h.huajiao.com", "http:\/\/m.gouge.com", "http:\/\/www.gouge.com", "http:\/\/m.gogal.cn", "https:\/\/www.gogal.cn", "http:\/\/www.gogal.cn", "http:\/\/quan1.sparta.html5.qq.com\/node\/", "https:\/\/quan1.sparta.html5.qq.com\/node\/", "http:\/\/live.3g.qq.com", "https:\/\/live.3g.qq.com", "*.quan.qq.com", "quan.qq.com", "http:\/\/mlive6.inke.cn", "http:\/\/mlive5.inke.cn", "http:\/\/mlive4.inke.cn", "http:\/\/mlive3.inke.cn", "http:\/\/mlive2.inke.cn", "http:\/\/mlive1.inke.cn", "*.inke.cn", "http:\/\/fanxing.kugou.com\/", "http:\/\/m.yizhibo.com", "http:\/\/mlive5.inke.cn", "https:\/\/quan.qq.com", "http:\/\/quan.qq.com", "http:\/\/activity.renren.com\/", "http:\/\/m.v.6.cn\/", "http:\/\/test1.m.yizhibo.com", "http:\/\/live.sparta.html5.qq.com", "http:\/\/livetest.sparta.html5.qq.com", "http:\/\/live.html5.qq.com", "http:\/\/aibo.3g.qq.com", "https:\/\/now.qq.com", "http:\/\/testopen.inke.tv", "http:\/\/m.yizhibo.com", "http:\/\/test.m.yizhibo.com", "http:\/\/h5live.jumei.com", "http:\/\/open.busi.inke.com", "http:\/\/open.busi.inke.cn\/", "https:\/\/h5.m.jd.com", "http:\/\/h5.m.jd.com", "http:\/\/mlive10.inke.cn", "http:\/\/mlive9.inke.cn", "http:\/\/mlive8.inke.cn", "http:\/\/mlive7.inke.cn", "*.baidu.com", "open.mobile.qq.com", "h5.weishi.com", "h5.qzone.qq.com", "h5.baike.qq.com", "baike.sparta.html5.qq.com", "cartoonactivity.html5.qq.com", "cartoonactivity.sparta.html5.qq.com", "*.iqiyi.com", "pvp.qq.com", "m.xinhuanet.com", "*.sv.baidu.com", "*.bilibili.com", "uxsupport.weixin.qq.com", "*.3g.qq.com", "http:\/\/res.imtt.qq.com\/jimliang\/webAR\/", "3gimg.qq.com", "*.sohu.com", "m.bilibili.com", "yahoo.co.jp", "*.yahoo.co.jp", "*.bloomberg.com", "bloomberg.com", "tv.cztv.com", "m.mydrivers.com", "m.guancha.cn", "www.h5sites.com", "m.autohome.com.cn", "m5.baidu.com", "sports.qq.com", "*.res.imtt.qq.com", "mp.weixin.qq.com", "video.pae.baidu.com", "m.dilidili.wang", "www.gdtengnan.com", "qbact.sparta.html5.qq.com", "qbact.html5.qq.com", "http:\/\/live.bilibili.com", "apkstore.sparta.html5.qq.com", "ag.qq.com", "ag.imtt.qq.com", "quan3.sparta.html5.qq.com\/node\/", "ld.sogou.com", "zhinan.sogou.com", "baike.sogou.com", "wenwen.sogou.com", "vlive.qq.com", "migmkt.qq.com\/g\/qbrowser", "res.imtt.qq.com", "baike.sogo.com", "wenwen.sogo.com", "*.weibo.cn", "zhinan.sogo.com", "migmkt.qq.com", "ld.sogo.com", "v.m0.hk", "m.chevrolet.com.cn", "https:\/\/xw.qq.com\/", "http:\/\/xw.qq.com\/", "http:\/\/tagtest.cs0309.html5.qq.com", "https:\/\/tagtest.cs0309.html5.qq.com", "http:\/\/m.yizhibo.com", "https:\/\/res.imtt.qq.com\/QGloveIP\/", "http:\/\/res.imtt.qq.com\/QGloveIP\/", "http:\/\/ssl.gongyi.qq.com\/wxact\/", "betawww.inke.cn", "https:\/\/res.imtt.qq.com\/lenny\/", "http:\/\/m.2339.com", "http:\/\/res.imtt.qq.com\/wulicai\/html\/", "https:\/\/m.huya.com", "http:\/\/m.huya.com", "http:\/\/res.imtt.qq.com\/lenny\/", "http:\/\/res.imtt.qq.com\/act_lm_test\/act_cai\/html\/", "https:\/\/res.imtt.qq.com\/wulicai\/html\/", "https:\/\/res.imtt.qq.com\/act_lm_test\/act_cai\/html\/", "http:\/\/www.qiushibaike.com\/", "https:\/\/www.qiushibaike.com\/", "*.yy.com", "http:\/\/testshipei.qq.com\/", "https:\/\/testshipei12.qq.com\/", "*.kuqin.com", "www.kuqin.com", "http:\/\/h5live.jumei.com\/", "*.jsbin.com", "nextidea.qq.com", "https:\/\/dev.m.2339.com", "http:\/\/dev.m.2339.com", "*.mercedes-benz.com.cn", "*.seth5.com", "*.chaojizb.com"]; !
function() {
    if (null == window.QBVideoHook) {
        var e, t, i = !1,
        n = 0;
        void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"),
        void 0 === document.addEventListener || void 0 === e || (document.removeEventListener(t, o, !1), document.addEventListener(t, o, !1)),
        l(),
        function() {
            var n = HTMLMediaElement.prototype.play;
            HTMLMediaElement.prototype.play = function() {
                if ("video" == this.tagName.toLowerCase()) if (u(this)) {
                    if (0 == window.qbVideoAutoplayForbid || null == window.qbVideoAutoplayForbid) if (0 == p(this)) n.apply(this, arguments),
                    i = function(e) {
                        if (0 == w()) return ! 1;
                        if (null != e.attributes["x5-video-player-type"]) {
                            var t = e.attributes["x5-video-player-type"].value;
                            if ("h5" == t && null != e.attributes["x5-video-player-fullscreen"]) {
                                var n = e.attributes["x5-video-player-fullscreen"].value;
                                if ("true" == n) return ! 0
                            }
                        }
                        return ! 1
                    } (this),
                    (new c).playInlineVideo();
                    else {
                        var e = this;
                        s(e)
                    }
                } else {
                    var e = this;
                    s(e)
                } else "audio" == this.tagName.toLowerCase() && d() ? (m(t = this), window.QBVIDEO_sendAudioEvent = function() { !
                    function(e) {
                        if (void 0 !== window.qbAudioEvent && 0 <= window.qbAudioEvent.length) {
                            var t = document.createEvent("HTMLEvents");
                            t.initEvent(window.qbAudioEvent, !1, !1),
                            e.dispatchEvent(t)
                        }
                    } (t)
                },
                (new c).playAudioWithURL(t.src)) : n.apply(this, arguments);
                var t
            };
            var e = HTMLMediaElement.prototype.pause;
            HTMLMediaElement.prototype.pause = function() {
                "video" == this.tagName.toLowerCase() ? (e.apply(this, arguments), u(this) && 0 == p(this) || (new c).pauseVideo()) : "audio" == this.tagName.toLowerCase() && d() ? (e.apply(this, arguments), (new c).pauseAudio()) : e.apply(this, arguments)
            }
        } (),
        window.setTimeout(P, 1),
        window.QBVideo_startPlayLiveVideo = function() {
            window.qbVideoAutoplayForbid = !1,
            window.setTimeout(a, 100)
        },
        window.QBVIDEO_stopInlineVideo = function() { !
            function() {
                var e = document.getElementsByTagName("video");
                if (null != e) for (var t = e.length,
                n = 0; n < t; ++n) e[n].pause()
            } ()
        },
        window.QBVIDEO_postMessage = function() {},
        window.QBVideo_CheckAutoPlay = function() {
            for (var e = document.getElementsByTagName("video"), t = 0; t < e.length; t++) {
                var n = e[t];
                if (null != n.attributes.autoplay) {
                    n.removeAttribute("autoplay"),
                    n.autoplay = !0;
                    var i = v(n);
                    if (1 == n.autoplay && "h5" == i) {
                        n.play();
                        break
                    }
                }
            }
        },
        window.QBVideoHook = 0
    }
    function o() {
        document[e] && !document.fullscreenElement && window.QBVIDEO_stopInlineVideo()
    }
    function r(e) {
        var t = [];
        for (key in e) if (e.hasOwnProperty(key)) {
            var n = e[key];
            t.push(encodeURIComponent(key) + "=" + encodeURIComponent(n))
        }
        return t.join("&")
    }
    function a() {
        var e = document.getElementsByTagName("video");
        if (0 < e.length) {
            var t = e[0];
            t.play(),
            t.webkitExitFullscreen()
        }
    }
    function l() {
        for (var e = document.getElementsByTagName("video"), t = 0; t < e.length; t++) {
            var n = e[t];
            n.setAttribute("autoplay", !1),
            n.autoplay = !1
        }
    }
    function u(e) {
        if (null !== e.getAttribute("x5-playsinline")) return ! 0;
        if (self != top) {
            var t = window.__qbVideoInlinePlayWhitelist;
            null != t && null != t || (t = []),
            t = t.concat(["3g.qq.com", "video.pae.baidu.com", "mp.weixin.qq.com", "m.dilidili.wang"]);
            try {
                var n = document.referrer;
                if (null != n) for (var i = 0; i < t.length; i++) if (0 <= n.indexOf(t[i])) return ! 0
            } catch(e) {}
        }
        return !! window.qbVideoInlinePlay
    }
    function d() {
        return !! window.qbEnableAudioPlayer
    }
    function s(e) {
        var t, n = function() {
            var e = "";
            try {
                var t = document.getElementsByName("referrer");
                if (null != t && 0 < t.length) {
                    var n = t[0];
                    if (null != n.content && null != n.content) {
                        var i = n.content.toLowerCase();
                        "no-referrer" == i || "no-referrer-when-downgrade" == i || "never" == i || "default" == i ? e = "": "origin" == i || "origin-when-crossorigin" == i ? e = document.location.hostname: "unsafe-url" != i && "always" != i || (e = self != top ? document.location.href: document.referrer)
                    }
                }
            } catch(e) {}
            return e
        } (),
        i = {
            url: f(e),
            videoRect: function(e) {
                var t, n;
                n = 0 < e.offsetWidth ? e.getBoundingClientRect() : void 0 !== e.clientRect && null !== e.clientRect ? e.clientRect: g(e);
                try {
                    if (null != n && (t = {
                        left: n.left + window.pageXOffset - document.documentElement.clientLeft,
                        top: n.top + window.pageYOffset - document.documentElement.clientTop,
                        width: n.width,
                        height: n.height
                    }), "" != t) {
                        if (window.parent != window) {
                            for (var i = window.parent.document.getElementsByTagName("iframe"), o = 0; o < i.length; o++) if (0 < i[o].contentWindow.document.getElementsByTagName("video").length) for (var r = i[o]; null !== r;) t.left += r.offsetLeft,
                            t.top += r.offsetTop,
                            r = r.offsetParent;
                            return "{{" + t.left + "," + t.top + "},{" + t.width + "," + t.height + "}}"
                        }
                        return "{{" + t.left + "," + t.top + "},{" + t.width + "," + t.height + "}}"
                    }
                } catch(e) {
                    return ""
                }
            } (e),
            referrer: n,
            playType: v(e)
        };
        m(e),
        window.QBVIDEO_sendVideoEvent = function() { !
            function(e) {
                if (void 0 !== window.qbVideoEvent && 0 <= window.qbVideoEvent.length) {
                    "play" == window.qbVideoEvent ? (window.qbSendingPlayEvent = !0, window.setTimeout(y, 100)) : "playing" == window.qbVideoEvent && e.removeAttribute("poster");
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent(window.qbVideoEvent, !1, !1),
                    e.dispatchEvent(t)
                }
            } (e)
        },
        t = i,
        (new c).playVideoWithURL(t)
    }
    function c() {
        this.send = function(e) {
            var t, n, i, o, r = (t = window.location.href, n = window.location.host, i = t.indexOf(n) + n.length, (0 < (o = t.substring(0, i)).length ? o: 0) + "/qqbrowservideo/" + e),
            a = document.getElementById("qqvideobridge");
            if (void 0 === a || null == a) {
                var l = document.body; (a = document.createElement("iframe")).id = "qqvideobridge",
                a.style.cssText = "display:none;height:0px;width:0px;",
                a.setAttribute("frameloader", "0"),
                l.appendChild(a)
            }
            a.src = r
        },
        this.playAudioWithURL = function(e) {
            var t = "";
            null != e && (t = e);
            var n = {
                url: t
            };
            this.send("playaudio?" + r(n))
        },
        this.pauseAudio = function() {
            this.send("pauseaudio")
        },
        this.playVideoWithURL = function(e) {
            this.send("playvideo?" + r(e))
        },
        this.setCurrentTime = function(e) {
            this.send("setcurrenttime?time=" + e)
        },
        this.playInlineVideo = function() {
            this.send("playinlinevideo?needfullscreen=" + i)
        },
        this.pauseInlineVideo = function() {
            this.send("pauseinlinevideo")
        },
        this.pauseVideo = function() {
            this.send("pausevideo")
        }
    }
    function f(e) {
        if (null != e.attributes["x5-video-player-flvsrc"]) {
            var t = e.attributes["x5-video-player-flvsrc"].value;
            if (0 < t.length) return t
        }
        var n = null != e.src ? e.src: "";
        if (!n || n.length <= 0) for (var i = e.getElementsByTagName("source"), o = 0; o < i.length; ++o) {
            var r = i[o];
            if (null != r.src && 0 < r.src.length) {
                n = r.src;
                break
            }
        }
        return n
    }
    function v(e) {
        if (0 == w()) return "default";
        if (null != e.attributes["x5-video-player-type"]) {
            var t = e.attributes["x5-video-player-type"].value;
            if (0 < t.length) return "h5" != t || 0 != u(e) && !h(e.src) || (e.style.width = "1px", e.style.height = "1px", e.style.removeProperty("min-width"), e.style.removeProperty("min-height")),
            t
        }
        return "default"
    }
    function w() {
        for (var e = window.location.href,
        t = new Array("quan.qq.com", "equinox2017.act.qq.com", "sh.act.qq.com", "tytx.m.cn.miaozhen.com"), n = 0; n < t.length; n++) if (0 <= e.indexOf(t[n])) return ! 0;
        return ! 1
    }
    function p(e) {
        var t = v(e),
        n = f(e);
        return ! ("h5" != t || !h(n))
    }
    function h(e) {
        var t = e.lastIndexOf(".flv");
        return 0 < t && t + 4 == e.length
    }
    function y() {
        window.qbSendingPlayEvent = !1
    }
    function m(e) {
        try {
            Object.defineProperty(e, "currentTime", {
                get: function() {
                    return window.qbVideoCurrentTime
                },
                set: function(e) { (new c).setCurrentTime(e)
                }
            }),
            Object.defineProperty(e, "duration", {
                get: function() {
                    return window.qbVideoDuration
                }
            })
        } catch(e) {}
    }
    function g(e) {
        var t = e.parentNode,
        n = null;
        try {
            for (; null != t;) {
                var i = window.getComputedStyle(t, null);
                null != i && "none" == i.display ? (n = t, t = null) : t = t.parentNode
            }
        } catch(e) {}
        var o = null;
        if (null != n) {
            n.style.display = "block";
            var r = n.getBoundingClientRect();
            void 0 !== r && (o = {
                left: r.left,
                top: r.top,
                width: r.width,
                height: r.height
            }),
            n.style.display = ""
        }
        return o
    }
    function b(e) {
        void 0 === e.clientRect && (0 < e.offsetWidth ? e.clientRect = e.getBoundingClientRect() : e.clientRect = g(e));
        var t = e.cloneNode(!0);
        return L(t),
        e.parentNode.replaceChild(t, e),
        !0
    }
    function E(e) {
        var t = e.target;
        if (null == window.qbSendingPlayEvent || 1 != window.qbSendingPlayEvent) {
            if (1 == u(t) && 0 == p(t))(new c).playInlineVideo();
            else b(t) && s(t);
            1 == window.qbVideoAutoplayForbid && b(t)
        }
    }
    function q(e) {
        var t = e.target;
        1 == u(t) && 0 == p(t) && (new c).pauseInlineVideo()
    }
    function V(e, t, n, i) {
        e.removeEventListener(t, n, i),
        e.addEventListener(t, n, i)
    }
    function L(e) {
        if (V(e, "play", E, !1), V(e, "pause", q, !1), e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.removeAttribute("autoplay"), e.paused) u(e) && (0 != window.qbVideoAutoplayForbid && null != window.qbVideoAutoplayForbid || 0 == p(e) && (null != e.qbPlayBeforeEventListen && 0 != e.qbPlayBeforeEventListen || (e.qbPlayBeforeEventListen = !0)));
        else if (null == e.qbPlayBeforeEventListen || 0 == e.qbPlayBeforeEventListen) {
            e.qbPlayBeforeEventListen = !0;
            var t = document.createEvent("HTMLEvents");
            t.initEvent("play", !1, !1),
            e.dispatchEvent(t)
        }
    }
    function T(e) {
        if (e && e.target) {
            var t = e.target;
            "video" == t.nodeName.toLowerCase() && t.play()
        }
    }
    function B(e, t) { ! 0 !== e.qbListened && (e.qbListened = !0, e.onclick = T)
    }
    function A(e, t) {
        if (null == e) return 0;
        for (var n = e.getElementsByTagName("video"), i = 0; i < n.length; ++i) {
            var o = n[i];
            L(o),
            1 == u(o) && 0 == p(o) || B(o)
        }
        var r = 0;
        for (i = 0; i < n.length; ++i) {
            var a = n[i],
            l = f(a);
            if (l && 0 < l.length) {
                var d = e.defaultView.getComputedStyle(a);
                if (null != d && "none" == d.display) {
                    r || (r = a);
                    continue
                }
                return a
            }
        }
        return r
    }
    function x(e) {
        var t, n = e.target;
        "video" == n.nodeName.toLowerCase() ? t = n: 1 == n.nodeType && (t = n.querySelector("video")),
        t && (1 == u(t) && 0 == p(t) || B(t))
    }
    function C() {
        l(),
        function() {
            for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; ++t) {
                var n = e[t];
                n.qbLastCheckSrc != n.src && (n.qbAccessible = !(!n.contentWindow || !n.contentDocument), n.qbLastCheckSrc = n.src)
            }
        } (),
        function() {
            var e = A(window.document);
            if (e) return;
            for (var t = document.getElementsByTagName("iframe"), n = 0; n < t.length; ++n) {
                var i = t[n];
                if (1 == (o = i).qbAccessible && (o.contentWindow && o.contentDocument || (o.qbAccessible = !1)), 1 == o.qbAccessible && (e = A(i.contentWindow.document))) return
            }
            var o
        } ()
    }
    function N() {
        C(),
        window.setTimeout(N, 1e3)
    }
    function P() {
        window.setTimeout(C, 100),
        0 == n && (n = 1, window.setTimeout(N, 0), document.addEventListener("DOMNodeInserted", x, !1))
    }
} ();
