window._agl = window._agl || [];
window._agl.push(["ext", {
    xAngeliaLogid: "30358000243035800230",
    bclid: ""
}]);
! function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    t.exports = n(18)
}, , function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        u = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = n(3),
        l = r(s),
        c = n(6),
        f = r(c),
        d = n(16),
        h = r(d),
        p = n(17),
        g = r(p),
        v = n(5),
        y = r(v),
        m = function () {
            function t() {
                var e = this;
                i(this, t);
                var n = {},
                    r = null,
                    u = null,
                    s = null,
                    c = function (t) {
                        if (y.default.isUndefined(t.uid) || (l.default.uid = t.uid), y.default.isUndefined(t.optid) ||
                            (l.default.optid = t.optid), y.default.isUndefined(t.cert) || (l.default.cert = t.cert),
                            y.default.isUndefined(t.getInfoFunc) || (l.default.getInfoFunc = t.getInfoFunc), y.default
                            .isUndefined(t.ext) || (l.default.ext = t.ext, e.ext = l.default.ext), y.default.isUndefined(
                                t.stopEvents) || (l.default.stopEvents = t.stopEvents), y.default.isUndefined(t
                                .stopAttrs) || (l.default.stopAttrs = t.stopAttrs), y.default.isUndefined(t.heartBeatTime) ||
                            (l.default.heartBeatTime = t.heartBeatTime), y.default.isUndefined(t.logCompressMode) ||
                            (l.default.logCompressMode = t.logCompressMode), y.default.isUndefined(t.logUrl) ||
                            (l.default.logUrl = t.logUrl), y.default.isUndefined(t.production) || (l.default.production =
                                t.production, m()), !y.default.isUndefined(t.track)) {
                            l.default.tracks = t.track;
                            var n = _;
                            l.default.tracks.forEach(function (t) {
                                n.apply(e, t)
                            })
                        }
                    },
                    d = function () {
                        r = new f.default, u = new h.default(l.default.postTarget, l.default.postTargetOrigin),
                            s = new g.default
                    },
                    p = function () {
                        r && r.disarm(), u && u.disarm()
                    },
                    v = function () {
                        u.addListener(h.default.EVENT.MSG_RECEIVED, function (t) {
                            switch (t.data.type) {
                                case "TRACK_ON":
                                    r.preventDefaultEvents(), s.start(), s.addCovers(t.data.data.list),
                                        s.panelSize = t.data.data.panelSize;
                                    break;
                                case "TRACK_OFF":
                                    r.allowDefaultEvents(), s.stop(), s.clearCovers();
                                    break;
                                case "HIGHLIGHT":
                                    s.highlight(t.data.data.list, t.data.data.needReposition);
                                    break;
                                case "REFRESH_COVERS":
                                    s.clearCovers(), s.addCovers(t.data.data);
                                    break;
                                case "CLEAR_HIGHLIGHT":
                                    s.clearHighlight();
                                    break;
                                case "FOCUS_COVERS":
                                    s.focusCovers(t.data.data)
                            }
                        }), r.addListener(f.default.EVENT.TRACK_LOG, function (t) {
                            var e = t.data,
                                n = e.logData,
                                r = e.evt;
                            s.isOn && !/agl-cover-/.test(r.target.className) && n.type === f.default.E_TYPE
                                .CLICK && r.isTrusted && u.tweet("CREATE", n)
                        }), r.addListener(f.default.EVENT.URL_CHANGE, function (t) {
                            u.tweet("URL_CHANGE", t.data)
                        }), s.addListener(g.default.EVENT.COVER_CLICK, function (t) {
                            u.tweet("CLICK_COVER", t.data)
                        }), s.addListener(g.default.EVENT.COVER_MOUSEENTER, function (t) {
                            u.tweet("ENTER_COVER", t.data)
                        }), s.addListener(g.default.EVENT.COVER_MOUSELEAVE, function (t) {
                            u.tweet("LEAVE_COVER", t.data)
                        }), s.addListener(g.default.EVENT.HIGHLIGHT_POSITION, function (t) {
                            u.tweet("REPOSITION", t.data)
                        }), u.tweet("READY", l.default.dump())
                    },
                    m = function () {
                        r || (d(), window.top !== window && v())
                    },
                    _ = function (t, e) {
                        y.default.assert(y.default.isString(t), "custom event type must be string."), y.default
                            .assert(!f.default.E_TYPE[t.toUpperCase()], 'custom event type can not be "' + t +
                                '".'), y.default.assert(y.default.isElement(e) || y.default.isObject(e),
                                "custom event data type must be object or dom element."), r.track(t, e)
                    },
                    E = function (t) {
                        return t = t || {}, Object.keys(t).map(function (e) {
                            var n = t[e];
                            return "track" === e ? [e, n] : "ext" === e ? [e, y.default.extend.apply(y.default,
                                [{}].concat(o(n)))] : [e, n[n.length - 1]]
                        })
                    };
                this.push = function () {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var o = y.default.fromPairs(E(y.default.groupBy(e, function (t) {
                        return t[0]
                    }, function (t) {
                        return t[1]
                    })));
                    c(a({}, n, o))
                }, this.stop = function () {
                    p()
                }
            }
            return u(t, [{
                key: "isAngelia",
                get: function () {
                    return !0
                }
            }]), t
        }();
    e.default = m
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(4),
        u = r(a),
        s = n(5),
        l = r(s),
        c = function () {
            function t(e) {
                o(this, t), this._uid = "", this._optid = "", this._sessionid = l.default.uuid(), this._production =
                    "", this._cert = "", this._getInfoFunc = function (t, e) {
                        return {}
                    }, this._tracks = [], this._ext = {}, this._stopEvents = [], this._stopAttrs = [], this._postTarget =
                    window.top, this._postTargetOrigin = ".baidu.com", this._logCompressMode = "euc", this._logUrl = {
                        scheme: "https:" === document.location.protocol ? "https" : "http",
                        host: "fclog.baidu.com",
                        port: "https:" === document.location.protocol ? 443 : 80,
                        path: "/log/insight",
                        query: {
                            type: "behavior",
                            emd: "euc"
                        }
                    }, this._heartBeatTime = 12e3
            }
            return i(t, [{
                key: "dump",
                value: function () {
                    return {
                        production: this._production,
                        ext: this._ext,
                        href: window.location.href
                    }
                }
            }, {
                key: "stopAttrs",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "stopAttrs must be string."), this._stopAttrs =
                        t ? t.split("|") : []
                },
                get: function () {
                    return this._stopAttrs
                }
            }, {
                key: "stopEvents",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "stopAttrs must be string."), this._stopEvents =
                        t ? t.split("|") : []
                },
                get: function () {
                    return this._stopEvents
                }
            }, {
                key: "ext",
                set: function (t) {
                    l.default.assert(l.default.isObject(t), "ext must be object."), this._ext =
                        l.default.extend({}, this._ext, t)
                },
                get: function () {
                    return this._ext
                }
            }, {
                key: "uid",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "uid must be string."), this._uid =
                        t
                },
                get: function () {
                    u.default.getItem("AGL_USER_ID") || u.default.setItem("AGL_USER_ID", l.default
                        .uuid(), 1 / 0, "/", document.location.hostname);
                    var t = u.default.getItem("AGL_USER_ID");
                    return this._uid || !t ? this._uid : t
                }
            }, {
                key: "optid",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "optid must be string."), this._optid =
                        t
                },
                get: function () {
                    return this._optid
                }
            }, {
                key: "production",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "production must be string."), this
                        ._production = t
                },
                get: function () {
                    return this._production
                }
            }, {
                key: "cert",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "cert must be string."), this._cert =
                        t
                },
                get: function () {
                    return this._cert
                }
            }, {
                key: "getInfoFunc",
                set: function (t) {
                    l.default.assert(l.default.isFunction(t), "getInfoFunc must be function."),
                        this._getInfoFunc = t
                },
                get: function () {
                    return this._getInfoFunc
                }
            }, {
                key: "tracks",
                set: function (t) {
                    this._tracks = t
                },
                get: function () {
                    return this._tracks
                }
            }, {
                key: "sessionid",
                get: function () {
                    return this._sessionid
                }
            }, {
                key: "postTarget",
                get: function () {
                    return this._postTarget
                }
            }, {
                key: "postTargetOrigin",
                get: function () {
                    return this._postTargetOrigin
                }
            }, {
                key: "logUrl",
                set: function (t) {
                    l.default.assert(l.default.isObject(t), "logUrl must be object."), l.default
                        .extend(!0, this._logUrl, t)
                },
                get: function () {
                    var t = this._logUrl.port,
                        e = this._logUrl.scheme,
                        n = 80 === t && "http" === e || 443 === t && "https" === e;
                    return [e + "://", this._logUrl.host, n ? "" : ":" + t, this._logUrl.path,
                        "?" + l.default.encodeUrlQuery(this._logUrl.query)].join("")
                }
            }, {
                key: "rawLogUrl",
                get: function () {
                    return this._logUrl
                }
            }, {
                key: "logCompressMode",
                set: function (t) {
                    l.default.assert(l.default.isString(t), "logCompressMode must be string."),
                        this._logCompressMode = t
                },
                get: function () {
                    return this._logCompressMode
                }
            }, {
                key: "heartBeatTime",
                set: function (t) {
                    l.default.assert(l.default.isNumber(t), "heartBeatTime must be number."),
                        this._heartBeatTime = t
                },
                get: function () {
                    return this._heartBeatTime
                }
            }]), t
        }();
    e.default = new c
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = function () {
            function t() {
                n(this, t)
            }
            return r(t, null, [{
                key: "getItem",
                value: function (t) {
                    return t ? decodeURIComponent(document.cookie.replace(new RegExp(
                            "(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(
                                /[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
                        "$1")) || null : null
                }
            }, {
                key: "setItem",
                value: function (t, e, n, r, o, i) {
                    if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
                    var a = "";
                    if (n) switch (n.constructor) {
                        case Number:
                            a = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" :
                                "; max-age=" + n;
                            break;
                        case String:
                            a = "; expires=" + n;
                            break;
                        case Date:
                            a = "; expires=" + n.toUTCString()
                    }
                    return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) +
                        a + (o ? "; domain=" + o : "") + (r ? "; path=" + r : "") + (i ?
                            "; secure" : ""), !0
                }
            }]), t
        }();
    e.default = o
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e ||
                            n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
                "symbol" : typeof t
        },
        i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = function () {
            function t() {
                n(this, t)
            }
            return i(t, null, [{
                key: "trim",
                value: function (t) {
                    return String.prototype.trim ? t.trim() : t.replace(
                        /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }, {
                key: "assert",
                value: function (t, e) {
                    if (!t) throw new Error(e) || "Assertion failed"
                }
            }, {
                key: "isElement",
                value: function (t) {
                    return !(!t || 1 !== t.nodeType)
                }
            }, {
                key: "isObject",
                value: function (t) {
                    return "object" === ("undefined" == typeof t ? "undefined" : o(t)) && !
                        Array.isArray(t) && !!t
                }
            }, {
                key: "isUndefined",
                value: function (t) {
                    return void 0 === t
                }
            }, {
                key: "isString",
                value: function (t) {
                    return "[object String]" === Object.prototype.toString.call(t)
                }
            }, {
                key: "isNumber",
                value: function (t) {
                    return "[object Number]" === Object.prototype.toString.call(t)
                }
            }, {
                key: "isFunction",
                value: function (t) {
                    return "function" == typeof t || !1
                }
            }, {
                key: "pick",
                value: function (e, n) {
                    var r = {};
                    return null == e ? r : (n.forEach(function (n) {
                        t.isUndefined(e[n]) || (r[n] = e[n])
                    }), r)
                }
            }, {
                key: "fromPairs",
                value: function (t) {
                    return t = t || [], t.reduce(function (t, e) {
                        var n = r(e, 2),
                            o = n[0],
                            i = n[1];
                        return t[o] = i, t
                    }, {})
                }
            }, {
                key: "identity",
                value: function (t) {
                    return t
                }
            }, {
                key: "groupBy",
                value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.identity,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.identity;
                    e = e || [];
                    var o = {};
                    return e.forEach(function (t) {
                        var e = n(t),
                            i = r(t);
                        o[e] = o[e] || [], o[e].push(i)
                    }), o
                }
            }, {
                key: "uuid",
                value: function () {
                    var t = Date.now();
                    return window.performance && "function" == typeof window.performance.now &&
                        (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                            /[xy]/g,
                            function (e) {
                                var n = (t + 16 * Math.random()) % 16 | 0;
                                return t = Math.floor(t / 16), ("x" === e ? n : 3 & n | 8).toString(
                                    16)
                            })
                }
            }, {
                key: "bind",
                value: function (e, n) {
                    for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
                        o[i - 2] = arguments[i];
                    t.assert("function" == typeof e,
                        "what is trying to be bound is not callable.");
                    var a = e;
                    return function () {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] =
                            arguments[r];
                        return a.apply(n, o.concat(e))
                    }
                }
            }, {
                key: "extend",
                value: function () {
                    var e = !1,
                        n = arguments.length,
                        r = 1,
                        o = (arguments.length <= 0 ? void 0 : arguments[0]) || {};
                    for ("boolean" == typeof o && (e = o, o = (arguments.length <= r ? void 0 :
                            arguments[r]) || {}, r++), t.isObject(o) || t.isFunction(o) || (o = {}); r <
                        n; r++) {
                        var i = arguments.length <= r ? void 0 : arguments[r];
                        if (null != i)
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var u = o[a],
                                        s = i[a];
                                    if (o !== s)
                                        if (e && s && (t.isObject(s) || Array.isArray(s))) {
                                            var l = void 0;
                                            l = Array.isArray(s) ? u && Array.isArray(u) ? u : [] :
                                                u && t.isObject(u) ? u : {}, o[a] = t.extend(e,
                                                    l, s)
                                        } else void 0 !== s && (o[a] = s)
                                }
                    }
                    return o
                }
            }, {
                key: "encodeUrlQuery",
                value: function (t) {
                    t = t || {};
                    var e = Object.keys(t).map(function (e) {
                        return e + "=" + t[e]
                    });
                    return e.join("&")
                }
            }]), t
        }();
    e.default = a
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function u(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError(
            "Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        c = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        f = n(7),
        d = r(f),
        h = n(8),
        p = r(h),
        g = n(9),
        v = r(g),
        y = n(13),
        m = n(5),
        _ = r(m),
        E = n(3),
        b = r(E),
        T = n(11),
        w = r(T),
        O = function (t) {
            function e() {
                a(this, e);
                var t = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.rootNode = document.getElementsByTagName("html")[0], t.preventDefault = !1, t.consciousActionTs =
                    t.getCurrTime().ts, t.getInfoFuncs = [t.getNodeBasicInfo, t.getNodeIndex, t.getNodeProps, t
                        .getNodeAttrs, t.getNodeText, t.getNodeOffset], t.eventHandler = _.default.bind(t.eventHandler,
                        t), t.sendStorageData(v.default), t.equip(), t
            }
            return s(e, t), c(e, null, [{
                key: "EVENT",
                get: function () {
                    return {
                        TRACK_LOG: "TRACK_LOG",
                        URL_CHANGE: "URL_CHANGE"
                    }
                }
            }, {
                key: "LOCATION_KEYS",
                get: function () {
                    return ["protocol", "hostname", "port", "pathname", "search", "hash"]
                }
            }, {
                key: "CUSTOM_KEY",
                get: function () {
                    return {
                        TAG: "_tag",
                        TEXT: "_text",
                        INDEX: "_i",
                        SAME_INDEX: "_si",
                        VALUE: "_value",
                        CHECKED: "_checked",
                        S_TOP: "_st",
                        S_LEFT: "_sl"
                    }
                }
            }, {
                key: "E_TYPE",
                get: function () {
                    return {
                        CLICK: "click",
                        INPUT: "input",
                        FOCUS: "focus",
                        BLUR: "blur",
                        MOUSEMOVE: "mousemove",
                        SCROLL: "scroll",
                        LOAD: "load",
                        DISARM: "disarm",
                        BEFOREUNLOAD: "beforeunload",
                        VISIBILITYCHANGE: "visibilitychange",
                        HASHCHANGE: "hashchange",
                        HEARTBEAT: "heartbeat"
                    }
                }
            }, {
                key: "REG",
                get: function () {
                    var t = "(current|show|hidden|active|hover|enabled|disabled|ifx-)";
                    return {
                        DROP_CLASSNAME: new RegExp("(^" + t + "|" + t + "$)")
                    }
                }
            }, {
                key: "PROPS",
                get: function () {
                    return ["checked", "value"]
                }
            }, {
                key: "ATTRS",
                get: function () {
                    return ["href", "target", "title", "download", "type", "value", "name",
                        "readonly", "disabled", "checked", "placeholder", "accept", "src",
                        "alt", "usermap", "ismap", "action", "method", "coords", "shape",
                        "for", "label", "selected", "multiple"]
                }
            }, {
                key: "ATTR_DICT",
                get: function () {
                    return {
                        a: [0, 1, 2, 3],
                        input: [2, 4, 5, 6, 7, 8, 9, 10, 11],
                        img: [2, 12, 13, 14, 15],
                        form: [5, 6, 16, 17],
                        area: [0, 1, 3, 13, 18, 19],
                        button: [4, 5, 6, 8],
                        iframe: [6, 12],
                        label: [20],
                        map: [6],
                        option: [5, 8, 21, 22],
                        select: [6, 23]
                    }
                }
            }, {
                key: "CONSCIOUS_ACTION_INTERVAL",
                get: function () {
                    return 18e4
                }
            }]), c(e, [{
                key: "sendStorageData",
                value: function (t) {
                    w.default.sendStorageData(t)
                }
            }, {
                key: "equip",
                value: function () {
                    var t = this;
                    this.addEvent(document, e.E_TYPE.CLICK), this.addEvent(document, e.E_TYPE.MOUSEMOVE),
                        this.addEvent(document, e.E_TYPE.SCROLL), this.addEvent(document, e.E_TYPE
                            .VISIBILITYCHANGE), this.addEvent(window, e.E_TYPE.BEFOREUNLOAD),
                        this.addEvent(window, e.E_TYPE.HASHCHANGE), this.eventHandler({
                            type: e.E_TYPE.LOAD,
                            target: window
                        }), this.heartbeatInterval = setInterval(function () {
                            t.eventHandler({
                                type: e.E_TYPE.HEARTBEAT,
                                target: window
                            })
                        }, b.default.heartBeatTime)
                }
            }, {
                key: "disarm",
                value: function () {
                    this.delEvent(document, e.E_TYPE.CLICK), this.delEvent(document, e.E_TYPE.MOUSEMOVE),
                        this.delEvent(document, e.E_TYPE.SCROLL), this.delEvent(document, e.E_TYPE
                            .VISIBILITYCHANGE), this.delEvent(window, e.E_TYPE.BEFOREUNLOAD),
                        this.delEvent(window, e.E_TYPE.HASHCHANGE), this.eventHandler({
                            type: e.E_TYPE.DISARM,
                            target: window
                        }), this.heartbeatInterval = clearInterval(this.heartbeatInterval)
                }
            }, {
                key: "track",
                value: function (t, e) {
                    var n = window,
                        r = e;
                    _.default.isElement(e) && (n = e, r = void 0), this.eventHandler({
                        type: t,
                        target: n,
                        extData: r
                    })
                }
            }, {
                key: "eventHandler",
                value: function (t) {
                    try {
                        if (this.preventDefault && !/agl-cover/.test(t.target.className) && (t.stopPropagation(),
                                t.preventDefault()), this.noNeedToLog(t)) return;
                        var n = this.getCurrTime(),
                            r = n.ts,
                            o = n.tz,
                            i = {
                                ts: r,
                                tz: o,
                                logid: _.default.uuid(),
                                production: b.default.production,
                                cert: b.default.cert,
                                sessionid: b.default.sessionid,
                                uid: b.default.uid,
                                optid: b.default.optid,
                                referrer: document.referrer,
                                location: _.default.pick(location, e.LOCATION_KEYS),
                                type: t.type,
                                a: this.getAttrPath(t),
                                position: this.getPosition(t),
                                ext: b.default.ext
                            };
                        window === window.top && v.default.log(i), this.dispatch(new d.default(
                            e.EVENT.TRACK_LOG, {
                                logData: i,
                                evt: t
                            }))
                    } catch (t) {}
                }
            }, {
                key: "addEvent",
                value: function (t, e) {
                    t.addEventListener(e, this.eventHandler, !0)
                }
            }, {
                key: "delEvent",
                value: function (t, e) {
                    t.removeEventListener(e, this.eventHandler, !0)
                }
            }, {
                key: "noNeedToLog",
                value: function (t) {
                    var n = this;
                    if (~b.default.stopEvents.indexOf(t.type)) return !0;
                    if (t.type === e.E_TYPE.HEARTBEAT && document.hidden) return !0;
                    if (t.type === e.E_TYPE.LOAD) return setTimeout(function () {
                        n.dispatch(new d.default(e.EVENT.URL_CHANGE, {
                            url: t.target.location.href
                        }))
                    }, 50), !1;
                    if (t.type === e.E_TYPE.MOUSEMOVE || t.type === e.E_TYPE.SCROLL) {
                        if (this.getCurrTime().ts - this.consciousActionTs < e.CONSCIOUS_ACTION_INTERVAL)
                            return !0;
                        this.consciousActionTs = this.getCurrTime().ts
                    }
                    return (t.type === e.E_TYPE.FOCUS || t.type === e.E_TYPE.BLUR) && "INPUT" !==
                        t.target.tagName && "text" !== t.target.type || t.type === e.E_TYPE.HASHCHANGE &&
                        (this.dispatch(new d.default(e.EVENT.URL_CHANGE, {
                            url: t.newURL
                        })), !0)
                }
            }, {
                key: "getPath",
                value: function (t, e) {
                    var n = [];
                    if (!t.parentNode || t === e) return n;
                    var r = t;
                    do n.unshift(r), r = r.parentNode; while (r !== e);
                    return n
                }
            }, {
                key: "getAttrPath",
                value: function (t) {
                    var n = this;
                    if (t.type === e.E_TYPE.VISIBILITYCHANGE) {
                        var r;
                        return [(r = {}, i(r, e.CUSTOM_KEY.TAG, "document"), i(r, "hidden",
                            document ? document.hidden : null), r)]
                    }
                    return t.type === e.E_TYPE.LOAD || t.type === e.E_TYPE.BEFOREUNLOAD || t.type ===
                        e.E_TYPE.HEARTBEAT ? [i({}, e.CUSTOM_KEY.TAG, "window")] : !e.E_TYPE[t.type
                            .toUpperCase()] && t.extData ? [l(i({}, e.CUSTOM_KEY.TAG, "window"),
                            t.extData)] : this.getPath(t.target, this.rootNode).map(function (t,
                            e, r) {
                            var i = {
                                index: e,
                                nodeList: r
                            };
                            return n.getInfo(t, [].concat(o(n.getInfoFuncs), [b.default.getInfoFunc]),
                                i)
                        })
                }
            }, {
                key: "getInfo",
                value: function (t, e, n) {
                    var r = e.reduce(function (e, r) {
                        return l({}, e, r(t, n))
                    }, {});
                    return b.default.stopAttrs.forEach(function (t) {
                        delete r[t]
                    }), r
                }
            }, {
                key: "getNodeBasicInfo",
                value: function (t) {
                    var n, r = t.className.split(" ").filter(function (t) {
                        return "" !== t && !e.REG.DROP_CLASSNAME.test(t)
                    }).join(" ");
                    return n = {}, i(n, e.CUSTOM_KEY.TAG, t.tagName.toLowerCase()), i(n, "id",
                        t.id ? t.id : void 0), i(n, "class", r ? r : void 0), n
                }
            }, {
                key: "getNodeProps",
                value: function (t) {
                    return e.PROPS.reduce(function (e, n) {
                        return l({}, e, i({}, "_" + n, t[n]))
                    }, {})
                }
            }, {
                key: "getNodeText",
                value: function (t) {
                    return i({}, e.CUSTOM_KEY.TEXT, (0, y.$)(t).childText() || void 0)
                }
            }, {
                key: "getNodeIndex",
                value: function (t) {
                    var n, r = (0, y.$)(t).index();
                    return n = {}, i(n, e.CUSTOM_KEY.INDEX, r >> y.Dom.DUO.MAX_BIT_NUM), i(n, e
                        .CUSTOM_KEY.SAME_INDEX, r & y.Dom.DUO.SPLIT_BIT_VAL), n
                }
            }, {
                key: "getNodeAttrs",
                value: function (t) {
                    var n = e.ATTR_DICT[t.tagName.toLowerCase()];
                    return n ? n.reduce(function (n, r) {
                        var o = e.ATTRS[r],
                            a = t.getAttribute(o),
                            u = null === a ? {} : i({}, o, a);
                        return l({}, n, u)
                    }, {}) : {}
                }
            }, {
                key: "getNodeOffset",
                value: function (t) {
                    var n;
                    return n = {}, i(n, e.CUSTOM_KEY.S_TOP, t.scrollTop ? t.scrollTop : void 0),
                        i(n, e.CUSTOM_KEY.S_LEFT, t.scrollLeft ? t.scrollLeft : void 0), n
                }
            }, {
                key: "getPosition",
                value: function (t) {
                    return {
                        x: _.default.isUndefined(t.clientX) ? 0 : t.clientX,
                        y: _.default.isUndefined(t.clientY) ? 0 : t.clientY
                    }
                }
            }, {
                key: "getCurrTime",
                value: function () {
                    var t = new Date;
                    return {
                        ts: t.getTime(),
                        tz: -Math.round(t.getTimezoneOffset() / 60)
                    }
                }
            }, {
                key: "allowDefaultEvents",
                value: function () {
                    this.preventDefault = !1
                }
            }, {
                key: "preventDefaultEvents",
                value: function () {
                    this.preventDefault = !0
                }
            }]), e
        }(p.default);
    e.default = O
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = function () {
            function t(e, r) {
                n(this, t), this.type = e, this.data = r
            }
            return r(t, [{
                key: "target",
                set: function (t) {
                    this._target = t
                },
                get: function () {
                    return this._target
                }
            }, {
                key: "type",
                set: function (t) {
                    this._type = t
                },
                get: function () {
                    return this._type
                }
            }, {
                key: "data",
                set: function (t) {
                    this._data = t
                },
                get: function () {
                    return this._data
                }
            }]), t
        }();
    e.default = o
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = function () {
            function t() {
                n(this, t), this._handlerMap = {}
            }
            return r(t, [{
                key: "dispatch",
                value: function (t) {
                    var e = this._handlerMap[t.type];
                    e && (t.target = this.constructor.name, e(t))
                }
            }, {
                key: "addListener",
                value: function (t, e) {
                    this._handlerMap[t] = e
                }
            }, {
                key: "removeListener",
                value: function (t) {
                    delete this._handlerMap[t]
                }
            }]), t
        }();
    e.default = o
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(3),
        u = r(a),
        s = n(10),
        l = r(s),
        c = n(12),
        f = r(c),
        d = n(11),
        h = r(d),
        p = function () {
            function t() {
                o(this, t), this._encryptMode = "euc"
            }
            return i(t, [{
                key: "log",
                value: function (t) {
                    var e = JSON.stringify(t),
                        n = "u8a" === u.default.logCompressMode ? f.default.compressToUint8Array(
                            e).buffer : f.default.compressToEncodedURIComponent(e);
                    h.default.setStorageLogData(n), this.retry(n), "beforeunload" === t.type &&
                        this.validate(t)
                }
            }, {
                key: "retry",
                value: function (t) {
                    l.default.xhrPing(u.default.logUrl, t)
                }
            }, {
                key: "validate",
                value: function (t) {
                    t.ext.isBeacon = 1;
                    var e = u.default.logUrl.replace(u.default.rawLogUrl.query.type,
                            "validation"),
                        n = l.default.beaconPing(e, f.default.compressToEncodedURIComponent(
                            JSON.stringify(t)));
                    n || (t.ext.isBeacon = 0, l.default.xhrPing(e, f.default.compressToEncodedURIComponent(
                        JSON.stringify(t))))
                }
            }]), t
        }();
    e.default = new p
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !
                            0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = n(11),
            u = r(a),
            s = function () {
                function e() {
                    o(this, e), this._reqfields = ["responseType", "withCredentials", "timeout",
                        "onprogress"]
                }
                return i(e, [{
                    key: "_hasSendBeacon",
                    value: function () {
                        return window.navigator && window.navigator.sendBeacon
                    }
                }, {
                    key: "_setDefault",
                    value: function (t, e, n) {
                        t[e] = t[e] || n
                    }
                }, {
                    key: "_getRequest",
                    value: function (e) {
                        return e && t.XDomainRequest && !/MSIE 1/.test(navigator.userAgent) ?
                            new XDomainRequest : t.XMLHttpRequest ? new XMLHttpRequest :
                            void 0
                    }
                }, {
                    key: "ajax",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[
                                1] : function () {},
                            n = t.headers || {},
                            r = t.body,
                            o = t.method || (r ? "POST" : "GET"),
                            i = !1,
                            a = this._getRequest(t.cors),
                            u = function (t, n) {
                                return function () {
                                    i || (e(void 0 === a.status ? t : a.status, 0 ===
                                        a.status ? "Error" : a.response || a.responseText ||
                                        n, a), i = !0)
                                }
                            };
                        a.open(o, t.url, !0);
                        var s = a.onload = u(200);
                        return a.onreadystatechange = function () {
                            4 === a.readyState && s()
                        }, a.onerror = u(null, "Error"), a.ontimeout = u(null,
                            "Timeout"), a.onabort = u(null, "Abort"), this._reqfields.forEach(
                            function (e) {
                                void 0 !== t[e] && (a[e] = t[e])
                            }), Object.keys(n).forEach(function (t) {
                            a.setRequestHeader(t, n[t])
                        }), a.send(r), a
                    }
                }, {
                    key: "xhrPing",
                    value: function (t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[
                                2] : 0;
                        this.ajax({
                            url: t,
                            method: "POST",
                            headers: {
                                "Content-Type": "text/plain; charset=utf-8"
                            },
                            cors: !0,
                            withCredentials: !0,
                            body: e
                        }, function (o, i) {
                            200 === o ? u.default.removeStorageLogData(e) : r <= 2 &&
                                n.xhrPing(t, e, ++r)
                        })
                    }
                }, {
                    key: "beaconPing",
                    value: function (t, e) {
                        return !!this._hasSendBeacon() && window.navigator.sendBeacon(t, e)
                    }
                }, {
                    key: "smartPing",
                    value: function (t, e) {
                        this.beaconPing(t, e) || this.xhrPing(t, e)
                    }
                }]), e
            }();
        e.default = new s
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = function () {
            function t() {
                n(this, t), this._prefix = "fclog_", this._logReg = /fclog_/, this._storageTestFlag = this.storageTest(
                    window.localStorage)
            }
            return r(t, [{
                key: "storageTest",
                value: function (t) {
                    if (t) try {
                        return t.setItem("exp_fx_local_test_key", "value"), t.removeItem(
                            "exp_fx_local_test_key"), !0
                    } catch (t) {
                        return !1
                    }
                }
            }, {
                key: "sendStorageData",
                value: function (t) {
                    if (this._storageTestFlag)
                        for (var e in window.localStorage) e.match(this._logReg) && t.retry(e.split(
                            this._prefix)[1])
                }
            }, {
                key: "removeStorageLogData",
                value: function (t) {
                    this._storageTestFlag && window.localStorage.removeItem(this._prefix + t)
                }
            }, {
                key: "setStorageLogData",
                value: function (t) {
                    this._storageTestFlag && window.localStorage.setItem(this._prefix + t, this
                        ._prefix)
                }
            }]), t
        }();
    e.default = new o
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = String.fromCharCode,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        a = function () {
            function t() {
                n(this, t)
            }
            return r(t, [{
                key: "compressToUint8Array",
                value: function (t) {
                    for (var e = this.compress(t), n = new Uint8Array(2 * e.length), r = 0, o =
                            e.length; r < o; r++) {
                        var i = e.charCodeAt(r);
                        n[2 * r] = i >>> 8, n[2 * r + 1] = i % 256
                    }
                    return n
                }
            }, {
                key: "compressToEncodedURIComponent",
                value: function (t) {
                    return null === t ? "" : this._compress(t, 6, function (t) {
                        return i.charAt(t)
                    })
                }
            }, {
                key: "compress",
                value: function (t) {
                    return this._compress(t, 16, function (t) {
                        return o(t)
                    })
                }
            }, {
                key: "_compress",
                value: function (t, e, n) {
                    if (null === t) return "";
                    var r = void 0,
                        o = void 0,
                        i = {},
                        a = {},
                        u = "",
                        s = "",
                        l = "",
                        c = 2,
                        f = 3,
                        d = 2,
                        h = [],
                        p = 0,
                        g = 0,
                        v = void 0;
                    for (v = 0; v < t.length; v += 1)
                        if (u = t.charAt(v), Object.prototype.hasOwnProperty.call(i, u) || (i[u] =
                                f++, a[u] = !0), s = l + u, Object.prototype.hasOwnProperty.call(
                                i, s)) l = s;
                        else {
                            if (Object.prototype.hasOwnProperty.call(a, l)) {
                                if (l.charCodeAt(0) < 256) {
                                    for (r = 0; r < d; r++) p <<= 1, g === e - 1 ? (g = 0, h.push(
                                        n(p)), p = 0) : g++;
                                    for (o = l.charCodeAt(0), r = 0; r < 8; r++) p = p << 1 | 1 &
                                        o, g === e - 1 ? (g = 0, h.push(n(p)), p = 0) : g++, o >>=
                                        1
                                } else {
                                    for (o = 1, r = 0; r < d; r++) p = p << 1 | o, g === e - 1 ?
                                        (g = 0, h.push(n(p)), p = 0) : g++, o = 0;
                                    for (o = l.charCodeAt(0), r = 0; r < 16; r++) p = p << 1 |
                                        1 & o, g === e - 1 ? (g = 0, h.push(n(p)), p = 0) : g++,
                                        o >>= 1
                                }
                                c--, 0 === c && (c = Math.pow(2, d), d++), delete a[l]
                            } else
                                for (o = i[l], r = 0; r < d; r++) p = p << 1 | 1 & o, g === e -
                                    1 ? (g = 0, h.push(n(p)), p = 0) : g++, o >>= 1;
                            c--, 0 === c && (c = Math.pow(2, d), d++), i[s] = f++, l = String(u)
                        } if ("" !== l) {
                        if (Object.prototype.hasOwnProperty.call(a, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (r = 0; r < d; r++) p <<= 1, g === e - 1 ? (g = 0, h.push(n(
                                    p)), p = 0) : g++;
                                for (o = l.charCodeAt(0), r = 0; r < 8; r++) p = p << 1 | 1 & o,
                                    g === e - 1 ? (g = 0, h.push(n(p)), p = 0) : g++, o >>= 1
                            } else {
                                for (o = 1, r = 0; r < d; r++) p = p << 1 | o, g === e - 1 ? (g =
                                    0, h.push(n(p)), p = 0) : g++, o = 0;
                                for (o = l.charCodeAt(0), r = 0; r < 16; r++) p = p << 1 | 1 &
                                    o, g === e - 1 ? (g = 0, h.push(n(p)), p = 0) : g++, o >>=
                                    1
                            }
                            c--, 0 === c && (c = Math.pow(2, d), d++), delete a[l]
                        } else
                            for (o = i[l], r = 0; r < d; r++) p = p << 1 | 1 & o, g === e - 1 ?
                                (g = 0, h.push(n(p)), p = 0) : g++, o >>= 1;
                        c--, 0 === c && (c = Math.pow(2, d), d++)
                    }
                    for (o = 2, r = 0; r < d; r++) p = p << 1 | 1 & o, g === e - 1 ? (g = 0, h.push(
                        n(p)), p = 0) : g++, o >>= 1;
                    for (;;) {
                        if (p <<= 1, g === e - 1) {
                            h.push(n(p));
                            break
                        }
                        g++
                    }
                    return h.join("")
                }
            }]), t
        }();
    e.default = new a
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.$ = e.Dom = void 0;
    var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(14),
        u = r(a),
        s = n(15),
        l = r(s),
        c = e.Dom = function () {
            function t() {
                o(this, t), this._prepareDomUtil()
            }
            return i(t, null, [{
                key: "NODE_TYPE",
                get: function () {
                    return {
                        ELEMENT: 1,
                        TEXT: 3
                    }
                }
            }, {
                key: "DUO",
                get: function () {
                    return {
                        MAX_BIT_NUM: 16,
                        SPLIT_BIT_VAL: Math.pow(2, 16) - 1
                    }
                }
            }]), i(t, [{
                key: "_prepareDomUtil",
                value: function () {
                    u.default.aug({
                        childText: this._childText,
                        index: this._index,
                        create: this._create,
                        offsetParent: this._offsetParent
                    })
                }
            }, {
                key: "_offsetParent",
                value: function () {
                    var t = document.getElementsByTagName("html")[0];
                    if (!this.length) return (0, u.default)(t);
                    for (var e = this[0], n = e.offsetParent || t; n && "HTML" !== n.tagName &&
                        "static" === (0, u.default)(n).css("position");) n = n.offsetParent;
                    return (0, u.default)(n || t)
                }
            }, {
                key: "_childText",
                value: function () {
                    if (!this.length && !this[0].childNodes) return "";
                    var e = this[0];
                    return [].reduce.call(e.childNodes, function (e, n) {
                        var r = n.nodeType === t.NODE_TYPE.TEXT ? n.textContent : "";
                        return e + r
                    }, "").replace(/(\n|\s)/g, "")
                }
            }, {
                key: "_index",
                value: function () {
                    if (!this.length) return 0;
                    for (var e = this[0], n = e.tagName, r = 0, o = 0; e = e.previousSibling;) e
                        .nodeType === t.NODE_TYPE.ELEMENT && (r++, e.tagName === n && o++);
                    return r << t.DUO.MAX_BIT_NUM | o
                }
            }, {
                key: "_create",
                value: function (t) {
                    return (0, u.default)(u.default.create(t))
                }
            }, {
                key: "$",
                value: function (t) {
                    return "[object String]" === Object.prototype.toString.call(t) ? (0, u.default)
                        (l.default.selectAll(t)) : (0, u.default)(t)
                }
            }]), t
        }();
    e.$ = (new c).$
}, function (t, e, n) {
    var r, o;
    ! function (i, a, u) {
        "undefined" != typeof t && t.exports ? t.exports = u() : (r = u, o = "function" == typeof r ? r.call(e,
            n, e, t) : r, !(void 0 !== o && (t.exports = o)))
    }("bonzo", this, function () {
        function t(t, e) {
            var n = null,
                r = k.defaultView.getComputedStyle(t, "");
            return r && (n = r[e]), t.style[e] || n
        }

        function e(t) {
            return t && t.nodeName && (1 == t.nodeType || 11 == t.nodeType)
        }

        function n(t, n, r) {
            var o, i, a;
            if ("string" == typeof t) return T.create(t);
            if (e(t) && (t = [t]), r) {
                for (a = [], o = 0, i = t.length; o < i; o++) a[o] = m(n, t[o]);
                return a
            }
            return t
        }

        function r(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function o(t, e, n, r) {
            for (var o, i = 0, a = t.length; i < a; i++) o = r ? t.length - i - 1 : i,
                e.call(n || t[o], t[o], o, t);
            return t
        }

        function i(t, n, r) {
            for (var o = 0, a = t.length; o < a; o++) e(t[o]) && (i(t[o].childNodes, n, r), n.call(r || t[o],
                t[o], o, t));
            return t
        }

        function a(t) {
            return t.replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }

        function u(t) {
            return t ? t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : t
        }

        function s(t) {
            t[G]("data-node-uid") || t[F]("data-node-uid", ++Y);
            var e = t[G]("data-node-uid");
            return D[e] || (D[e] = {})
        }

        function l(t) {
            var e = t[G]("data-node-uid");
            e && delete D[e]
        }

        function c(t) {
            var e;
            try {
                return null === t || void 0 === t ? void 0 : "true" === t || "false" !== t && ("null" ===
                    t ? null : (e = parseFloat(t)) == t ? e : t)
            } catch (t) {}
        }

        function f(t, e, n) {
            for (var r = 0, o = t.length; r < o; ++r)
                if (e.call(n || null, t[r], r, t)) return !0;
            return !1
        }

        function d(t) {
            return "transform" == t && (t = K.transform) || /^transform-?[Oo]rigin$/.test(t) && (t = K.transform +
                "Origin"), t ? a(t) : null
        }

        function h(t, e, r, i) {
            var a = 0,
                u = e || this,
                s = [],
                l = W && "string" == typeof t && "<" != t.charAt(0) ? W(t) : t;
            return o(n(l), function (t, e) {
                o(u, function (n) {
                    r(t, s[a++] = e > 0 ? m(u, n) : n)
                }, null, i)
            }, this, i), u.length = a, o(s, function (t) {
                u[--a] = t
            }, null, !i), u
        }

        function p(t, e, n) {
            var r = T(t),
                o = r.css("position"),
                i = r.offset(),
                a = "relative",
                u = o == a,
                s = [parseInt(r.css("left"), 10), parseInt(r.css("top"), 10)];
            "static" == o && (r.css("position", a), o = a), isNaN(s[0]) && (s[0] = u ? 0 : t.offsetLeft),
                isNaN(s[1]) && (s[1] = u ? 0 : t.offsetTop), null != e && (t.style.left = e - i.left + s[0] +
                    $), null != n && (t.style.top = n - i.top + s[1] + $)
        }

        function g(t, e) {
            return "function" == typeof e ? e.call(t, t) : e
        }

        function v(t, e, n) {
            var r = this[0];
            return r ? null == t && null == e ? (_(r) ? E() : {
                x: r.scrollLeft,
                y: r.scrollTop
            })[n] : (_(r) ? x.scrollTo(t, e) : (null != t && (r.scrollLeft = t), null != e && (r.scrollTop =
                e)), this) : this
        }

        function y(t) {
            if (this.length = 0, t) {
                t = "string" == typeof t || t.nodeType || "undefined" == typeof t.length ? [t] : t, this.length =
                    t.length;
                for (var e = 0; e < t.length; e++) this[e] = t[e]
            }
        }

        function m(t, e) {
            var n, r, o, i = e.cloneNode(!0);
            if (t.$ && "function" == typeof t.cloneEvents)
                for (t.$(i).cloneEvents(e), n = t.$(i).find("*"), r = t.$(e).find("*"), o = 0; o < r.length; o++)
                    t.$(n[o]).cloneEvents(r[o]);
            return i
        }

        function _(t) {
            return t === x || /^(?:body|html)$/i.test(t.tagName)
        }

        function E() {
            return {
                x: x.pageXOffset || A.scrollLeft,
                y: x.pageYOffset || A.scrollTop
            }
        }

        function b(t) {
            var e = document.createElement("script"),
                n = t.match(N);
            return e.src = n[1], e
        }

        function T(t) {
            return new y(t)
        }
        var w, O, C, x = window,
            k = x.document,
            A = k.documentElement,
            S = "parentNode",
            P = /^(checked|value|selected|disabled)$/i,
            L = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,
            N = /\s*<script +src=['"]([^'"]+)['"]>/,
            I = ["<table>", "</table>", 1],
            U = ["<table><tbody><tr>", "</tr></tbody></table>", 3],
            H = ["<select>", "</select>", 1],
            M = ["_", "", 0, 1],
            R = {
                thead: I,
                tbody: I,
                tfoot: I,
                colgroup: I,
                caption: I,
                tr: ["<table><tbody>", "</tbody></table>", 2],
                th: U,
                td: U,
                col: ["<table><colgroup>", "</colgroup></table>", 2],
                fieldset: ["<form>", "</form>", 1],
                legend: ["<form><fieldset>", "</fieldset></form>", 2],
                option: H,
                optgroup: H,
                script: M,
                style: M,
                link: M,
                param: M,
                base: M
            },
            j = /^(checked|selected|disabled)$/,
            D = {},
            Y = 0,
            B = /^-?[\d\.]+$/,
            V = /^data-(.+)$/,
            $ = "px",
            F = "setAttribute",
            G = "getAttribute",
            K = function () {
                var t = k.createElement("p");
                return {
                    transform: function () {
                        var e, n = ["transform", "webkitTransform", "MozTransform", "OTransform",
                            "msTransform"];
                        for (e = 0; e < n.length; e++)
                            if (n[e] in t.style) return n[e]
                    }(),
                    classList: "classList" in t
                }
            }(),
            q = /\s+/,
            z = String.prototype.toString,
            X = {
                lineHeight: 1,
                zoom: 1,
                zIndex: 1,
                opacity: 1,
                boxFlex: 1,
                WebkitBoxFlex: 1,
                MozBoxFlex: 1
            },
            W = k.querySelectorAll && function (t) {
                return k.querySelectorAll(t)
            };
        return K.classList ? (w = function (t, e) {
            return t.classList.contains(e)
        }, O = function (t, e) {
            t.classList.add(e)
        }, C = function (t, e) {
            t.classList.remove(e)
        }) : (w = function (t, e) {
            return r(e).test(t.className)
        }, O = function (t, e) {
            t.className = (t.className + " " + e).trim()
        }, C = function (t, e) {
            t.className = t.className.replace(r(e), " ").trim()
        }), y.prototype = {
            get: function (t) {
                return this[t] || null
            },
            each: function (t, e) {
                return o(this, t, e)
            },
            deepEach: function (t, e) {
                return i(this, t, e)
            },
            map: function (t, e) {
                var n, r, o = [];
                for (r = 0; r < this.length; r++) n = t.call(this, this[r], r), e ? e(n) && o.push(
                    n) : o.push(n);
                return o
            },
            html: function (t, e) {
                var r = e ? "textContent" : "innerHTML",
                    i = this,
                    a = function (e, r) {
                        o(n(t, i, r), function (t) {
                            e.appendChild(t)
                        })
                    },
                    u = function (n, o) {
                        try {
                            if (e || "string" == typeof t && !L.test(n.tagName)) return n[r] = t
                        } catch (t) {}
                        a(n, o)
                    };
                return "undefined" != typeof t ? this.empty().each(u) : this[0] ? this[0][r] : ""
            },
            text: function (t) {
                return this.html(t, !0)
            },
            append: function (t) {
                var e = this;
                return this.each(function (r, i) {
                    o(n(t, e, i), function (t) {
                        r.appendChild(t)
                    })
                })
            },
            prepend: function (t) {
                var e = this;
                return this.each(function (r, i) {
                    var a = r.firstChild;
                    o(n(t, e, i), function (t) {
                        r.insertBefore(t, a)
                    })
                })
            },
            appendTo: function (t, e) {
                return h.call(this, t, e, function (t, e) {
                    t.appendChild(e)
                })
            },
            prependTo: function (t, e) {
                return h.call(this, t, e, function (t, e) {
                    t.insertBefore(e, t.firstChild)
                }, 1)
            },
            before: function (t) {
                var e = this;
                return this.each(function (r, i) {
                    o(n(t, e, i), function (t) {
                        r[S].insertBefore(t, r)
                    })
                })
            },
            after: function (t) {
                var e = this;
                return this.each(function (r, i) {
                    o(n(t, e, i), function (t) {
                        r[S].insertBefore(t, r.nextSibling)
                    }, null, 1)
                })
            },
            insertBefore: function (t, e) {
                return h.call(this, t, e, function (t, e) {
                    t[S].insertBefore(e, t)
                })
            },
            insertAfter: function (t, e) {
                return h.call(this, t, e, function (t, e) {
                    var n = t.nextSibling;
                    n ? t[S].insertBefore(e, n) : t[S].appendChild(e)
                }, 1)
            },
            replaceWith: function (t) {
                var e = this;
                return this.each(function (r, i) {
                    o(n(t, e, i), function (t) {
                        r[S] && r[S].replaceChild(t, r)
                    })
                })
            },
            clone: function (t) {
                var e, n, r = [];
                for (n = 0, e = this.length; n < e; n++) r[n] = m(t || this, this[n]);
                return T(r)
            },
            addClass: function (t) {
                return t = z.call(t).split(q), this.each(function (e) {
                    o(t, function (t) {
                        t && !w(e, g(e, t)) && O(e, g(e, t))
                    })
                })
            },
            removeClass: function (t) {
                return t = z.call(t).split(q), this.each(function (e) {
                    o(t, function (t) {
                        t && w(e, g(e, t)) && C(e, g(e, t))
                    })
                })
            },
            hasClass: function (t) {
                return t = z.call(t).split(q), f(this, function (e) {
                    return f(t, function (t) {
                        return t && w(e, t)
                    })
                })
            },
            toggleClass: function (t, e) {
                return t = z.call(t).split(q), this.each(function (n) {
                    o(t, function (t) {
                        t && ("undefined" != typeof e ? e ? !w(n, t) && O(n, t) : C(
                            n, t) : w(n, t) ? C(n, t) : O(n, t))
                    })
                })
            },
            show: function (t) {
                return t = "string" == typeof t ? t : "", this.each(function (e) {
                    e.style.display = t
                })
            },
            hide: function () {
                return this.each(function (t) {
                    t.style.display = "none"
                })
            },
            toggle: function (t, e) {
                return e = "string" == typeof e ? e : "", "function" != typeof t && (t = null),
                    this.each(function (n) {
                        n.style.display = n.offsetWidth || n.offsetHeight ? "none" : e, t && t.call(
                            n)
                    })
            },
            first: function () {
                return T(this.length ? this[0] : [])
            },
            last: function () {
                return T(this.length ? this[this.length - 1] : [])
            },
            next: function () {
                return this.related("nextSibling")
            },
            previous: function () {
                return this.related("previousSibling")
            },
            parent: function () {
                return this.related(S)
            },
            related: function (t) {
                return T(this.map(function (e) {
                    for (e = e[t]; e && 1 !== e.nodeType;) e = e[t];
                    return e || 0
                }, function (t) {
                    return t
                }))
            },
            focus: function () {
                return this.length && this[0].focus(), this
            },
            blur: function () {
                return this.length && this[0].blur(), this
            },
            css: function (e, n) {
                function r(t, e, n) {
                    for (var r in i)
                        if (i.hasOwnProperty(r)) {
                            n = i[r], (e = d(r)) && B.test(n) && !(e in X) && (n += $);
                            try {
                                t.style[e] = g(t, n)
                            } catch (t) {}
                        }
                }
                var o, i = e;
                return void 0 === n && "string" == typeof e ? (n = this[0], n ? n === k || n === x ?
                    (o = n === k ? T.doc() : T.viewport(), "width" == e ? o.width : "height" ==
                        e ? o.height : "") : (e = d(e)) ? t(n, e) : null : null) : ("string" ==
                    typeof e && (i = {}, i[e] = n), this.each(r))
            },
            offset: function (t, e) {
                if (t && "object" == typeof t && ("number" == typeof t.top || "number" == typeof t.left))
                    return this.each(function (e) {
                        p(e, t.left, t.top)
                    });
                if ("number" == typeof t || "number" == typeof e) return this.each(function (n) {
                    p(n, t, e)
                });
                if (!this[0]) return {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                var n = this[0],
                    r = n.ownerDocument.documentElement,
                    o = n.getBoundingClientRect(),
                    i = E(),
                    a = n.offsetWidth,
                    u = n.offsetHeight,
                    s = o.top + i.y - Math.max(0, r && r.clientTop, k.body.clientTop),
                    l = o.left + i.x - Math.max(0, r && r.clientLeft, k.body.clientLeft);
                return {
                    top: s,
                    left: l,
                    height: u,
                    width: a
                }
            },
            dim: function () {
                if (!this.length) return {
                    height: 0,
                    width: 0
                };
                var t = this[0],
                    e = 9 == t.nodeType && t.documentElement,
                    n = e || !t.style || t.offsetWidth || t.offsetHeight ? null : function (e) {
                        var n = {
                            position: t.style.position || "",
                            visibility: t.style.visibility || "",
                            display: t.style.display || ""
                        };
                        return e.first().css({
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        }), n
                    }(this),
                    r = e ? Math.max(t.body.scrollWidth, t.body.offsetWidth, e.scrollWidth, e.offsetWidth,
                        e.clientWidth) : t.offsetWidth,
                    o = e ? Math.max(t.body.scrollHeight, t.body.offsetHeight, e.scrollHeight, e.offsetHeight,
                        e.clientHeight) : t.offsetHeight;
                return n && this.first().css(n), {
                    height: o,
                    width: r
                }
            },
            attr: function (t, e) {
                var n, r = this[0];
                if ("string" != typeof t && !(t instanceof String)) {
                    for (n in t) t.hasOwnProperty(n) && this.attr(n, t[n]);
                    return this
                }
                return "undefined" == typeof e ? r ? P.test(t) ? !(!j.test(t) || "string" != typeof r[
                    t]) || r[t] : r[G](t) : null : this.each(function (n) {
                    P.test(t) ? n[t] = g(n, e) : n[F](t, g(n, e))
                })
            },
            removeAttr: function (t) {
                return this.each(function (e) {
                    j.test(t) ? e[t] = !1 : e.removeAttribute(t)
                })
            },
            val: function (t) {
                return "string" == typeof t || "number" == typeof t ? this.attr("value", t) : this.length ?
                    this[0].value : null
            },
            data: function (t, e) {
                var n, r, i = this[0];
                return "undefined" == typeof e ? i ? (n = s(i), "undefined" == typeof t ? (o(i.attributes,
                    function (t) {
                        (r = ("" + t.name).match(V)) && (n[a(r[1])] = c(t.value))
                    }), n) : ("undefined" == typeof n[t] && (n[t] = c(this.attr("data-" + u(
                    t)))), n[t])) : null : this.each(function (n) {
                    s(n)[t] = e
                })
            },
            remove: function () {
                return this.deepEach(l), this.detach()
            },
            empty: function () {
                return this.each(function (t) {
                    for (i(t.childNodes, l); t.firstChild;) t.removeChild(t.firstChild)
                })
            },
            detach: function () {
                return this.each(function (t) {
                    t[S] && t[S].removeChild(t)
                })
            },
            scrollTop: function (t) {
                return v.call(this, null, t, "y")
            },
            scrollLeft: function (t) {
                return v.call(this, t, null, "x")
            }
        }, T.setQueryEngine = function (t) {
            W = t, delete T.setQueryEngine
        }, T.aug = function (t, e) {
            for (var n in t) t.hasOwnProperty(n) && ((e || y.prototype)[n] = t[n])
        }, T.create = function (t) {
            return "string" == typeof t && "" !== t ? function () {
                if (N.test(t)) return [b(t)];
                var e = t.match(/^\s*<([^\s>]+)/),
                    n = k.createElement("div"),
                    r = [],
                    i = e ? R[e[1].toLowerCase()] : null,
                    a = i ? i[2] + 1 : 1,
                    u = i && i[3],
                    s = S;
                for (n.innerHTML = i ? i[0] + t + i[1] : t; a--;) n = n.firstChild;
                u && n && 1 !== n.nodeType && (n = n.nextSibling);
                do e && 1 != n.nodeType || r.push(n); while (n = n.nextSibling);
                return o(r, function (t) {
                    t[s] && t[s].removeChild(t)
                }), r
            }() : e(t) ? [t.cloneNode(!0)] : []
        }, T.doc = function () {
            var t = T.viewport();
            return {
                width: Math.max(k.body.scrollWidth, A.scrollWidth, t.width),
                height: Math.max(k.body.scrollHeight, A.scrollHeight, t.height)
            }
        }, T.firstChild = function (t) {
            for (var e, n = t.childNodes, r = 0, o = n && n.length || 0; r < o; r++) 1 === n[r].nodeType &&
                (e = n[o = r]);
            return e
        }, T.viewport = function () {
            return {
                width: x.innerWidth,
                height: x.innerHeight
            }
        }, T.isAncestor = "compareDocumentPosition" in A ? function (t, e) {
            return 16 == (16 & t.compareDocumentPosition(e))
        } : function (t, e) {
            return t !== e && t.contains(e)
        }, T
    })
}, function (t, e, n) {
    "use strict";

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function () {
            function t(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e ||
                            n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(13),
        s = function () {
            function t() {
                o(this, t), this._characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", this._whitespace =
                    "[\\x20\\t\\r\\n\\f]", this._identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", this._attributes =
                    "\\[" + this._whitespace + "*(" + this._characterEncoding + ")(?:" + this._whitespace +
                    "*([*^$|!~]?=)" + this._whitespace + (
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + this._identifier + "))|)") +
                    this._whitespace + "*\\]", this._pseudos = "\\[:(" + this._characterEncoding +
                    ")(?:\\((((?:\\\\.|[^\\\\()[\\]]|" + this._attributes + ")*)|.*)\\)|)\\]", this._matchExpr = {
                        PSEUDO: new RegExp(this._pseudos, "g")
                    }, this._pseudoFuncs = {
                        regex: this._regex
                    };
                try {
                    this._xpe = new XPathEvaluator
                } catch (t) {}
            }
            return a(t, null, [{
                key: "xpathSplitChars",
                get: function () {
                    return "\0/"
                }
            }]), a(t, [{
                key: "_regex",
                value: function () {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] =
                        arguments[n];
                    var r = e[0],
                        o = e[1],
                        i = new RegExp(unescape(o).replace(/^\s+|\s+$/g, ""), "ig");
                    return "_text" === r ? i.test((0, u.$)(this).childText()) : "_checked" ===
                        r ? i.test(this.checked) : i.test((0, u.$)(this).attr(r))
                }
            }, {
                key: "_parseQuery",
                value: function (t) {
                    for (var e = [], n = void 0; n = this._matchExpr.PSEUDO.exec(t);) {
                        var r = n,
                            o = i(r, 3),
                            a = o[1],
                            u = o[2];
                        if (e.push([a, u.split(",")]), !this._pseudoFuncs[a]) throw "Unrecognize pseudo name: " +
                            a
                    }
                    return [t.replace(this._matchExpr.PSEUDO, ""), e]
                }
            }, {
                key: "_evaluateXPath",
                value: function (t, e) {
                    if (!e) return [];
                    for (var n = this._xpe.createNSResolver(null == t.ownerDocument ? t.documentElement :
                            t.ownerDocument.documentElement), r = this._xpe.evaluate(e, t,
                            n, 0, null), o = [], i = void 0; i = r.iterateNext();) o.push(i);
                    return o
                }
            }, {
                key: "_findChildren",
                value: function (t, e, n) {
                    var o = this;
                    return t.reduce(function (t, a) {
                        return [].concat(r(t), r(Array.prototype.filter.call(o._evaluateXPath(
                            a, e), function (t) {
                            return n.every(function (e) {
                                var n = i(e, 2),
                                    r = n[0],
                                    a = n[1];
                                return o._pseudoFuncs[r].apply(
                                    t, a)
                            })
                        })))
                    }, [])
                }
            }, {
                key: "selectAll",
                value: function (e) {
                    var n = this;
                    if (!e) return [];
                    var r = [document],
                        o = [],
                        a = ("//" + e).split(t.xpathSplitChars),
                        u = a.length - 1;
                    return a.forEach(function (t, e, a) {
                        var s = n._parseQuery(t),
                            l = i(s, 2),
                            c = l[0],
                            f = l[1],
                            d = o.join("/");
                        f.length ? (d && (r = n._findChildren(r, o.join("/"), [])), r =
                            n._findChildren(r, c, f), o.length = 0) : (o.push(c), e ===
                            u && (r = n._findChildren(r, o.join("/"), [])))
                    }), r
                }
            }]), t
        }();
    e.default = new s
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError(
            "Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = n(7),
        l = r(s),
        c = n(8),
        f = r(c),
        d = n(5),
        h = r(d),
        p = function (t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return r.target = t, r.targetOrigin = n, r.messageHandler = h.default.bind(r.messageHandler, r),
                    r.equip(), r
            }
            return a(e, t), u(e, null, [{
                key: "EVENT",
                get: function () {
                    return {
                        MSG_RECEIVED: "MSG_RECEIVED"
                    }
                }
            }]), u(e, [{
                key: "equip",
                value: function () {
                    window.addEventListener("message", this.messageHandler, !0)
                }
            }, {
                key: "disarm",
                value: function () {
                    window.removeEventListener("message", this.messageHandler, !0)
                }
            }, {
                key: "messageHandler",
                value: function (t) {
                    var n = t.origin || t.originalEvent.origin;
                    n.indexOf(this.targetOrigin) < 0 || this.dispatch(new l.default(e.EVENT.MSG_RECEIVED,
                        t.data))
                }
            }, {
                key: "tweet",
                value: function (t, e) {
                    this.target && this.target.postMessage && this.target !== window && this.target
                        .postMessage({
                            type: t,
                            data: e
                        }, "*")
                }
            }]), e
        }(f.default);
    e.default = p
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function u(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError(
            "Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        l = n(7),
        c = r(l),
        f = n(8),
        d = r(f),
        h = n(13),
        p = n(5),
        g = r(p),
        v = function (t) {
            function e() {
                i(this, e);
                var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._isOn = !1, t._enterHandler = g.default.bind(t._enterHandler, t), t._leaveHandler = g.default
                    .bind(t._leaveHandler, t), t._coverHandler = g.default.bind(t._coverHandler, t), t._panelSize = {
                        W: 200,
                        H: 300
                    }, t._insertCSS(), t
            }
            return u(e, t), s(e, null, [{
                key: "css",
                get: function () {
                    var t = "rgba(244,67,54,0.99)",
                        e = "rgba(244,67,54,0.2)",
                        n = "rgba(255,87,34,0.99)",
                        r = "rgba(255,87,34,0.4)",
                        o = "rgba(33,33,33,0.99)",
                        i = "rgba(33,33,33,0.6)",
                        a = "!important",
                        u = "\n                position: absolute " + a +
                        ";\n                top: 0;\n                left: 0;\n                z-index: 9 " +
                        a + ";\n        ";
                    return "\n            .agl-hover {\n                outline: 2px solid " +
                        t + " " + a + ";\n                background-color: " + e + " " + a +
                        ";\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8) " + a +
                        ";\n            }\n            .agl-highlight-current {\n                outline: 2px solid " +
                        n + " " + a + ";\n                background-color: " + r + " " + a +
                        ";\n            }\n            .agl-highlight-similar {\n                outline: 2px dashed " +
                        n + " " + a + ";\n                background-color: " + r + " " + a +
                        ";\n            }\n            .agl-highlight-group {\n                outline: 4px double " +
                        n + " " + a + ";\n                background-color: " + r + " " + a +
                        ";\n            }\n            .agl-cover-current {\n                " +
                        u + "\n                outline: 2px solid " + o + " " + a +
                        ";\n                background-color: " + i + " " + a +
                        ";\n            }\n            .agl-cover-similar {\n                " +
                        u + "\n                outline: 2px dashed " + o + " " + a +
                        ";\n                background-color: " + i + " " + a +
                        ";\n            }\n            .agl-cover-group {\n                " +
                        u + "\n                outline: 4px double " + o + " " + a +
                        ";\n                background-color: " + i + " " + a +
                        ";\n            }\n            .agl-cover-focus {\n                outline: 3px solid rgba(255,165,0,0.99) " +
                        a + ";\n                background-color: rgba(255,165,0,0.4) " + a +
                        ";\n            }\n        "
                }
            }, {
                key: "EVENT",
                get: function () {
                    return {
                        COVER_CLICK: "COVER_CLICKE",
                        COVER_MOUSEENTER: "COVER_MOUSEENTER",
                        COVER_MOUSELEAVE: "COVER_MOUSELEAVE",
                        HIGHLIGHT_POSITION: "HIGHLIGHT_POSITION"
                    }
                }
            }, {
                key: "TYPE_2_CLASS",
                get: function () {
                    return {
                        "-1": "group",
                        0: "current",
                        1: "similar",
                        2: "current"
                    }
                }
            }]), s(e, [{
                key: "_insertCSS",
                value: function () {
                    try {
                        var t = document.createElement("style");
                        t.type = "text/css", t.innerHTML = e.css;
                        var n = document.getElementsByTagName("script")[0];
                        n.parentNode.insertBefore(t, n)
                    } catch (t) {}
                }
            }, {
                key: "_getPosition",
                value: function (t) {
                    var e = (0, h.$)(t);
                    if (!e.length) return {
                        x: 0,
                        y: 0
                    };
                    var n = e.offset(),
                        r = document.documentElement.clientWidth,
                        o = document.documentElement.clientHeight,
                        i = n.left + n.width - document.body.scrollLeft + 5,
                        a = n.top + n.height - document.body.scrollTop;
                    return i + this._panelSize.W > r && (i = r - this._panelSize.W), a + this._panelSize
                        .H > o && (a = o - this._panelSize.H), i < 0 && (i = 0), a < 0 && (a =
                            0), {
                            x: i,
                            y: a
                        }
                }
            }, {
                key: "_enterHandler",
                value: function (t) {
                    (0, h.$)('*[contains(@class,"agl-hover")]').removeClass("agl-hover"), t.target ===
                        document || /agl-cover-/.test(t.target.className) || (0, h.$)(t.target)
                        .addClass("agl-hover")
                }
            }, {
                key: "_leaveHandler",
                value: function (t) {
                    t.target !== document && (0, h.$)(t.target).removeClass("agl-hover")
                }
            }, {
                key: "start",
                value: function () {
                    this._isOn = !0, document.addEventListener("mouseenter", this._enterHandler,
                        !0), document.addEventListener("mouseleave", this._leaveHandler, !0)
                }
            }, {
                key: "stop",
                value: function () {
                    this._isOn = !1, document.removeEventListener("mouseenter", this._enterHandler,
                        !0), document.removeEventListener("mouseleave", this._leaveHandler,
                        !0)
                }
            }, {
                key: "highlight",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.clearHighlight(), t.forEach(function (t) {
                            (0, h.$)(t.query).addClass("agl-highlight-" + e.TYPE_2_CLASS[t.type])
                        }), n && t.length > 0) {
                        var r = (0, h.$)(t[0].query);
                        if (r.length > 0) {
                            var o = r.offset(),
                                i = document.documentElement.clientWidth,
                                a = document.documentElement.clientHeight;
                            (0, h.$)("body").scrollTop(o.top - .5 * a), (0, h.$)("body").scrollLeft(
                                o.left - .5 * i), this.dispatch(new c.default(e.EVENT.HIGHLIGHT_POSITION,
                                this._getPosition(r[0])))
                        }
                    }
                }
            }, {
                key: "clearHighlight",
                value: function () {
                    (0, h.$)('*[contains(@class,"agl-hover")]').removeClass("agl-hover");
                    var t = "agl-highlight-current agl-highlight-similar agl-highlight-group";
                    (0, h.$)('*[contains(@class,"agl-highlight-")]').removeClass(t)
                }
            }, {
                key: "focusCovers",
                value: function (t) {
                    (0, h.$)('*[contains(@class,"agl-cover-")]').removeClass("agl-cover-focus"),
                        t.forEach(function (t) {
                            (0, h.$)('*[contains(@class,"agl-cover-")][@data-id=' + t + "]")
                            .each(function (t) {
                                (0, h.$)(t).addClass("agl-cover-focus")
                            })
                        })
                }
            }, {
                key: "addCovers",
                value: function (t) {
                    var n = this;
                    this.highlight([]), t && t.forEach(function (t) {
                        var r = t.querys.map(function (t) {
                            return (0, h.$)(t)
                        }).reduce(function (t, e) {
                            return [].concat(o(t), o(e))
                        }, []);
                        r.forEach(function (r) {
                            var o = (0, h.$)(r),
                                i = o.parent();
                            if (o.length && i.length) {
                                var a = o.offset(),
                                    u = o.offsetParent().offset(),
                                    s = (0, h.$)().create('<div data-id="' + t.id +
                                        '" class="agl-cover-' + e.TYPE_2_CLASS[
                                            t.type] + '"></div>');
                                s.css({
                                    width: a.width + "px",
                                    height: a.height + "px",
                                    top: a.top - u.top + "px",
                                    left: a.left - u.left + "px"
                                });
                                var l = s[0];
                                l.dataId = t.id, l.dataType = t.type, l.addEventListener(
                                        "click", n._coverHandler), l.addEventListener(
                                        "mouseenter", n._coverHandler), l.addEventListener(
                                        "mouseleave", n._coverHandler), (0, h.$)
                                    (i).append(s)
                            }
                        })
                    })
                }
            }, {
                key: "_coverHandler",
                value: function (t) {
                    t.stopPropagation(), t.preventDefault();
                    var n = e.EVENT["COVER_" + t.type.toUpperCase()],
                        r = t.target;
                    this.dispatch(new c.default(n, {
                        id: r.dataId,
                        type: r.dataType
                    }))
                }
            }, {
                key: "clearCovers",
                value: function () {
                    (0, h.$)('*[contains(@class,"agl-cover-")]').remove()
                }
            }, {
                key: "isOn",
                get: function () {
                    return this._isOn
                }
            }, {
                key: "panelSize",
                set: function (t) {
                    this._panelSize = t
                }
            }]), e
        }(d.default);
    e.default = v
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a() {
        for (var t = "", e = 1, n = document.getElementsByTagName("input"), r = 0, o = n.length; r < o; r++) {
            var i = n[r].type.toLowerCase();
            if (p.indexOf(i) === -1) try {
                var a = n[r].value.trim(),
                    u = isNaN(a) ? "c" : "n";
                t += e + "_" + u + "_" + a.length + "_" + i + ";", e++
            } catch (t) {
                continue
            }
        }
        return encodeURIComponent(t.substr(0, t.length - 1))
    }

    function u(t) {
        try {
            if (t && h.default.isFunction(t.getAttribute)) {
                var e = t.getAttribute(g) || t[g];
                if (null != e) return i({}, g, e)
            }
        } catch (t) {}
        return {}
    }
    var s = n(19),
        l = r(s),
        c = n(2),
        f = r(c),
        d = n(5),
        h = r(d),
        p = ["file", "radio", "checkbox", "hidden", "button", "image", "reset", "submit"],
        g = "data-agl-cvt",
        v = function () {
            if (!window._agl || !window._agl.isAngelia) {
                if (window._bdFcHmtAngelia && window._bdFcHmtAngelia.isAngelia) return void(window._agl =
                    window._bdFcHmtAngelia);
                var t = new f.default;
                t.push.apply(t, o(window._agl || []).concat([["stopEvents",
                    "input|focus|blur|mousemove|scroll|disarm|hashchange|heartbeat"], [
                    "stopAttrs", "_value|value|placeholder"], ["getInfoFunc", function (t, e) {
                    var n, r = {};
                    if (h.default.extend(r, u(t)), !t || e.index !== e.nodeList.length - 1)
                        return r;
                    var o = "_hs",
                        s = t.outerHTML,
                        c = s ? encodeURIComponent(s) : void 0,
                        f = "_uis",
                        d = a();
                    return h.default.extend(r, (n = {}, i(n, o, c ? (0, l.default)(c) :
                        void 0), i(n, f, d ? d : void 0), n))
                }]])), window._agl = t
            }
        };
    v()
}, function (t, e, n) {
    var r;
    ! function (o) {
        "use strict";

        function i(t, e) {
            var n = (65535 & t) + (65535 & e),
                r = (t >> 16) + (e >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function a(t, e) {
            return t << e | t >>> 32 - e
        }

        function u(t, e, n, r, o, u) {
            return i(a(i(i(e, t), i(r, u)), o), n)
        }

        function s(t, e, n, r, o, i, a) {
            return u(e & n | ~e & r, t, e, o, i, a)
        }

        function l(t, e, n, r, o, i, a) {
            return u(e & r | n & ~r, t, e, o, i, a)
        }

        function c(t, e, n, r, o, i, a) {
            return u(e ^ n ^ r, t, e, o, i, a)
        }

        function f(t, e, n, r, o, i, a) {
            return u(n ^ (e | ~r), t, e, o, i, a)
        }

        function d(t, e) {
            t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
            var n, r, o, a, u, d = 1732584193,
                h = -271733879,
                p = -1732584194,
                g = 271733878;
            for (n = 0; n < t.length; n += 16) r = d, o = h, a = p, u = g, d = s(d, h, p, g, t[n], 7, -
                680876936), g = s(g, d, h, p, t[n + 1], 12, -389564586), p = s(p, g, d, h, t[n + 2], 17,
                606105819), h = s(h, p, g, d, t[n + 3], 22, -1044525330), d = s(d, h, p, g, t[n + 4], 7, -
                176418897), g = s(g, d, h, p, t[n + 5], 12, 1200080426), p = s(p, g, d, h, t[n + 6], 17, -
                1473231341), h = s(h, p, g, d, t[n + 7], 22, -45705983), d = s(d, h, p, g, t[n + 8], 7,
                1770035416), g = s(g, d, h, p, t[n + 9], 12, -1958414417), p = s(p, g, d, h, t[n + 10], 17,
                -42063), h = s(h, p, g, d, t[n + 11], 22, -1990404162), d = s(d, h, p, g, t[n + 12], 7,
                1804603682), g = s(g, d, h, p, t[n + 13], 12, -40341101), p = s(p, g, d, h, t[n + 14], 17,
                -1502002290), h = s(h, p, g, d, t[n + 15], 22, 1236535329), d = l(d, h, p, g, t[n + 1], 5,
                -165796510), g = l(g, d, h, p, t[n + 6], 9, -1069501632), p = l(p, g, d, h, t[n + 11], 14,
                643717713), h = l(h, p, g, d, t[n], 20, -373897302), d = l(d, h, p, g, t[n + 5], 5, -
                701558691), g = l(g, d, h, p, t[n + 10], 9, 38016083), p = l(p, g, d, h, t[n + 15], 14, -
                660478335), h = l(h, p, g, d, t[n + 4], 20, -405537848), d = l(d, h, p, g, t[n + 9], 5,
                568446438), g = l(g, d, h, p, t[n + 14], 9, -1019803690), p = l(p, g, d, h, t[n + 3], 14, -
                187363961), h = l(h, p, g, d, t[n + 8], 20, 1163531501), d = l(d, h, p, g, t[n + 13], 5, -
                1444681467), g = l(g, d, h, p, t[n + 2], 9, -51403784), p = l(p, g, d, h, t[n + 7], 14,
                1735328473), h = l(h, p, g, d, t[n + 12], 20, -1926607734), d = c(d, h, p, g, t[n + 5], 4,
                -378558), g = c(g, d, h, p, t[n + 8], 11, -2022574463), p = c(p, g, d, h, t[n + 11], 16,
                1839030562), h = c(h, p, g, d, t[n + 14], 23, -35309556), d = c(d, h, p, g, t[n + 1], 4, -
                1530992060), g = c(g, d, h, p, t[n + 4], 11, 1272893353), p = c(p, g, d, h, t[n + 7], 16, -
                155497632), h = c(h, p, g, d, t[n + 10], 23, -1094730640), d = c(d, h, p, g, t[n + 13], 4,
                681279174), g = c(g, d, h, p, t[n], 11, -358537222), p = c(p, g, d, h, t[n + 3], 16, -
                722521979), h = c(h, p, g, d, t[n + 6], 23, 76029189), d = c(d, h, p, g, t[n + 9], 4, -
                640364487), g = c(g, d, h, p, t[n + 12], 11, -421815835), p = c(p, g, d, h, t[n + 15], 16,
                530742520), h = c(h, p, g, d, t[n + 2], 23, -995338651), d = f(d, h, p, g, t[n], 6, -
                198630844), g = f(g, d, h, p, t[n + 7], 10, 1126891415), p = f(p, g, d, h, t[n + 14], 15, -
                1416354905), h = f(h, p, g, d, t[n + 5], 21, -57434055), d = f(d, h, p, g, t[n + 12], 6,
                1700485571), g = f(g, d, h, p, t[n + 3], 10, -1894986606), p = f(p, g, d, h, t[n + 10], 15,
                -1051523), h = f(h, p, g, d, t[n + 1], 21, -2054922799), d = f(d, h, p, g, t[n + 8], 6,
                1873313359), g = f(g, d, h, p, t[n + 15], 10, -30611744), p = f(p, g, d, h, t[n + 6], 15, -
                1560198380), h = f(h, p, g, d, t[n + 13], 21, 1309151649), d = f(d, h, p, g, t[n + 4], 6, -
                145523070), g = f(g, d, h, p, t[n + 11], 10, -1120210379), p = f(p, g, d, h, t[n + 2], 15,
                718787259), h = f(h, p, g, d, t[n + 9], 21, -343485551), d = i(d, r), h = i(h, o), p = i(p,
                a), g = i(g, u);
            return [d, h, p, g]
        }

        function h(t) {
            var e, n = "",
                r = 32 * t.length;
            for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return n
        }

        function p(t) {
            var e, n = [];
            for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
            var r = 8 * t.length;
            for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return n
        }

        function g(t) {
            return h(d(p(t), 8 * t.length))
        }

        function v(t, e) {
            var n, r, o = p(t),
                i = [],
                a = [];
            for (i[15] = a[15] = void 0, o.length > 16 && (o = d(o, 8 * t.length)), n = 0; n < 16; n += 1) i[n] =
                909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
            return r = d(i.concat(p(e)), 512 + 8 * e.length), h(d(a.concat(r), 640))
        }

        function y(t) {
            var e, n, r = "0123456789abcdef",
                o = "";
            for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), o += r.charAt(e >>> 4 & 15) + r.charAt(15 &
                e);
            return o
        }

        function m(t) {
            return unescape(encodeURIComponent(t))
        }

        function _(t) {
            return g(m(t))
        }

        function E(t) {
            return y(_(t))
        }

        function b(t, e) {
            return v(m(t), m(e))
        }

        function T(t, e) {
            return y(b(t, e))
        }

        function w(t, e, n) {
            return e ? n ? b(e, t) : T(e, t) : n ? _(t) : E(t)
        }
        r = function () {
            return w
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
    }(this)
}]);
