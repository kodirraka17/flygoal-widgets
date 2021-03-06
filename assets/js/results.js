! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e) throw Error("API method required");
        if (e = e.toLowerCase(), -1 === s.indexOf(e)) throw Error("Method ".concat(e, " is not supported"));
        switch (e) {
            case "params":
                Object(o.a)(t);
                break;
            default:
                console.warn("No handler defined for ".concat(e))
        }
    }

    function i(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (n(1), n(2)),
        s = ["params"];
    ! function(e) {
        var t = {
                showOdds: !1
            },
            n = e[e.flygoalfx_FixturesEmbed],
            o = n.q;
        if (o)
            for (var s = 0; s < o.length; s++) "init" == o[s][0].toLowerCase() ? t = i(t, o[s][1]) : r(o[s][0], o[s][1]);
        n = r, n.configurations = t
    }(window)
}, function(e, t, n) {
    "use strict"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = "",
            n = !0;
        void 0 !== e.showLinks && (e.showLinks || (t = "&showLinks=false", n = !1)), void 0 !== e.tz && (e.tz || (e.tz = "Europe/London"));
        var r = "&tz=" + e.tz,
            o = "https://widget.flygoal.com/e/Result?id=" + e.teamID + t,
            u = document.createElement("div");
        u.innerHTML = s.a, document.getElementById("flygoalfx-fixtures").insertAdjacentElement("afterbegin", u);
        var c = document.getElementById("flygoalfx-results-here"),
            f = document.getElementById("flygoalfx-fixtures-here"),
            l = document.getElementById("flygoalfx-replaceBadge"),
            a = document.getElementById("flygoalfx-replaceTitle"),
            p = document.getElementById("flygoalfx-show-fixtures"),
            d = document.getElementById("flygoalfx-show-results");
        fetch(o, {
            method: "GET",
            mode: "cors"
        }).then(function(e) {
            return e.json()
        }).then(function(e) {
            var path = location.pathname.split('/');
            if(location.host == 'localhost') {
                var ImageURL = location.protocol + '//' + location.host + '/' + path[1] + '/';
            } else {
                var ImageURL = location.protocol + '//' + location.host + '/';
            }
            if (e.image && l.setAttribute("src", ImageURL + e.image), e.name ? a.innerHTML = e.name : a.innerHTML = "Not Found", e.flag_url && n) {
                var t = document.createElement("img");
                t.classList.add("flygoalfx-country-flag"), t.setAttribute("src", ImageURL + e.flag_url), a.insertAdjacentElement("afterbegin", t)
            }
            if (e.fixtures) {
                var i = e.fixtures;
                f.insertAdjacentHTML("beforeend", i)
            }
            if (e.results) {
                var o = e.results;
                c.insertAdjacentHTML("beforeend", o)
            }
            f.setAttribute("style", "display:none !important")
        }), d.addEventListener("click", function() {
            i("flygoalfx-results-here", this)
        }), p.addEventListener("click", function() {
            i("flygoalfx-fixtures-here", this)
        })
    }

    function i(e, t) {
        var n = document.querySelectorAll(".flygoalfx-fixture-list"),
            r = document.querySelectorAll(".flygoalfx-list-toggle");
        n.forEach(function(t) {
            t.id == e ? t.setAttribute("style", "display:block !important") : t.setAttribute("style", "display:none !important")
        }), r.forEach(function(e) {
            e == t ? e.classList.add("active") : e.classList.remove("active")
        })
    }
    t.a = r;
    var o = n(3),
        s = n.n(o),
        u = n(4);
    n.n(u)
}, function(e, t) {
    e.exports = '<div class="flygoalfx-embed-wrapper fixtures">' +
        '<div class="flygoalfx-embed-header">' + 
            '<div class="flygoalfx-header-badge">' + 
                '<img id="flygoalfx-replaceBadge" alt="">' + 
            '</div>' + 
            '<div class="flygoalfx-header-title">' + 
                '<div class="flygoalfx-strong-title">Previous and Results Match</div>' + 
                '<div class="flygoalfx-medium-title" id=\'flygoalfx-replaceTitle\'></div>' +
            '</div>' + 
            '</div>' +
            '<div class="flygoalfx-embed-body">' + 
                '<div class="flygoalfx-list-toggles">' + 
                    '<a id=\'flygoalfx-show-results\' class=\'flygoalfx-list-toggle active\'>Previous</a>' + 
                    '<a id=\'flygoalfx-show-fixtures\' class="flygoalfx-list-toggle">Upcoming</a>' + 
                '</div>' +
                '<ul class=\'flygoalfx-fixture-list\' id="flygoalfx-fixtures-here"></ul>' + 
                '<ul class=\'flygoalfx-fixture-list\' id="flygoalfx-results-here"></ul>' + 
            '</div>' + 
        '</div>' +
    '</div>'
}, function(e, t, n) {
    (function(e) {
        function r(e, n) {
            var r = {
                seen: [],
                stylize: o
            };
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), y(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = i), u(r, e, r.depth)
        }

        function i(e, t) {
            var n = r.styles[t];
            return n ? "[" + r.colors[n][0] + "m" + e + "[" + r.colors[n][1] + "m" : e
        }

        function o(e, t) {
            return e
        }

        function s(e) {
            var t = {};
            return e.forEach(function(e, n) {
                t[e] = !0
            }), t
        }

        function u(e, n, r) {
            if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var i = n.inspect(r, e);
                return v(i) || (i = u(e, i, r)), i
            }
            var o = c(e, n);
            if (o) return o;
            var y = Object.keys(n),
                g = s(y);
            if (e.showHidden && (y = Object.getOwnPropertyNames(n)), E(n) && (y.indexOf("message") >= 0 || y.indexOf("description") >= 0)) return f(n);
            if (0 === y.length) {
                if (T(n)) {
                    var h = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + h + "]", "special")
                }
                if (O(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (j(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (E(n)) return f(n)
            }
            var m = "",
                b = !1,
                w = ["{", "}"];
            if (d(n) && (b = !0, w = ["[", "]"]), T(n)) {
                m = " [Function" + (n.name ? ": " + n.name : "") + "]"
            }
            if (O(n) && (m = " " + RegExp.prototype.toString.call(n)), j(n) && (m = " " + Date.prototype.toUTCString.call(n)), E(n) && (m = " " + f(n)), 0 === y.length && (!b || 0 == n.length)) return w[0] + m + w[1];
            if (r < 0) return O(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(n);
            var x;
            return x = b ? l(e, n, r, g, y) : y.map(function(t) {
                return a(e, n, r, g, t, b)
            }), e.seen.pop(), p(x, m, w)
        }

        function c(e, t) {
            if (w(t)) return e.stylize("undefined", "undefined");
            if (v(t)) {
                var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(n, "string")
            }
            return m(t) ? e.stylize("" + t, "number") : y(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
        }

        function f(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function l(e, t, n, r, i) {
            for (var o = [], s = 0, u = t.length; s < u; ++s) P(t, String(s)) ? o.push(a(e, t, n, r, String(s), !0)) : o.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(a(e, t, n, r, i, !0))
            }), o
        }

        function a(e, t, n, r, i, o) {
            var s, c, f;
            if (f = Object.getOwnPropertyDescriptor(t, i) || {
                    value: t[i]
                }, f.get ? c = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (c = e.stylize("[Setter]", "special")), P(r, i) || (s = "[" + i + "]"), c || (e.seen.indexOf(f.value) < 0 ? (c = g(n) ? u(e, f.value, null) : u(e, f.value, n - 1), c.indexOf("\n") > -1 && (c = o ? c.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + c.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n"))) : c = e.stylize("[Circular]", "special")), w(s)) {
                if (o && i.match(/^\d+$/)) return c;
                s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
            }
            return s + ": " + c
        }

        function p(e, t, n) {
            var r = 0;
            return e.reduce(function(e, t) {
                return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
        }

        function d(e) {
            return Array.isArray(e)
        }

        function y(e) {
            return "boolean" == typeof e
        }

        function g(e) {
            return null === e
        }

        function h(e) {
            return null == e
        }

        function m(e) {
            return "number" == typeof e
        }

        function v(e) {
            return "string" == typeof e
        }

        function b(e) {
            return "symbol" == typeof e
        }

        function w(e) {
            return void 0 === e
        }

        function O(e) {
            return x(e) && "[object RegExp]" === z(e)
        }

        function x(e) {
            return "object" == typeof e && null !== e
        }

        function j(e) {
            return x(e) && "[object Date]" === z(e)
        }

        function E(e) {
            return x(e) && ("[object Error]" === z(e) || e instanceof Error)
        }

        function T(e) {
            return "function" == typeof e
        }

        function S(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }

        function z(e) {
            return Object.prototype.toString.call(e)
        }

        function A(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }

        function L() {
            var e = new Date,
                t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":");
            return [e.getDate(), M[e.getMonth()], t].join(" ")
        }

        function P(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function k(e, t) {
            if (!e) {
                var n = new Error("Promise was rejected with a falsy value");
                n.reason = e, e = n
            }
            return t(e)
        }

        function D(t) {
            function n() {
                for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
                var i = n.pop();
                if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
                var o = this,
                    s = function() {
                        return i.apply(o, arguments)
                    };
                t.apply(this, n).then(function(t) {
                    e.nextTick(s, null, t)
                }, function(t) {
                    e.nextTick(k, t, s)
                })
            }
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, I(t)), n
        }
        var I = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
                return n
            },
            _ = /%[sdj%]/g;
        t.format = function(e) {
            if (!v(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(r(arguments[n]));
                return t.join(" ")
            }
            for (var n = 1, i = arguments, o = i.length, s = String(e).replace(_, function(e) {
                    if ("%%" === e) return "%";
                    if (n >= o) return e;
                    switch (e) {
                        case "%s":
                            return String(i[n++]);
                        case "%d":
                            return Number(i[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(i[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                            default:
                                return e
                    }
                }), u = i[n]; n < o; u = i[++n]) g(u) || !x(u) ? s += " " + u : s += " " + r(u);
            return s
        }, t.deprecate = function(n, r) {
            function i() {
                if (!o) {
                    if (e.throwDeprecation) throw new Error(r);
                    e.traceDeprecation ? console.trace(r) : console.error(r), o = !0
                }
                return n.apply(this, arguments)
            }
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, r).apply(this, arguments)
            };
            var o = !1;
            return i
        };
        var B, F = {};
        t.debuglog = function(n) {
            if (w(B) && (B = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !F[n])
                if (new RegExp("\\b" + n + "\\b", "i").test(B)) {
                    var r = e.pid;
                    F[n] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", n, r, e)
                    }
                } else F[n] = function() {};
            return F[n]
        }, t.inspect = r, r.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, r.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = d, t.isBoolean = y, t.isNull = g, t.isNullOrUndefined = h, t.isNumber = m, t.isString = v, t.isSymbol = b, t.isUndefined = w, t.isRegExp = O, t.isObject = x, t.isDate = j, t.isError = E, t.isFunction = T, t.isPrimitive = S, t.isBuffer = n(6);
        var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function() {
            console.log("%s - %s", L(), t.format.apply(t, arguments))
        }, t.inherits = n(7), t._extend = function(e, t) {
            if (!t || !x(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var N = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        t.promisify = function(e) {
            function t() {
                for (var t, n, r = new Promise(function(e, r) {
                        t = e, n = r
                    }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
                i.push(function(e, r) {
                    e ? n(e) : t(r)
                });
                try {
                    e.apply(this, i)
                } catch (e) {
                    n(e)
                }
                return r
            }
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (N && e[N]) {
                var t = e[N];
                if ("function" != typeof t) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, N, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), N && Object.defineProperty(t, N, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, I(e))
        }, t.promisify.custom = N, t.callbackify = D
    }).call(t, n(5))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (a === clearTimeout) return clearTimeout(e);
        if ((a === r || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
        try {
            return a(e)
        } catch (t) {
            try {
                return a.call(null, e)
            } catch (t) {
                return a.call(this, e)
            }
        }
    }

    function s() {
        g && d && (g = !1, d.length ? y = d.concat(y) : h = -1, y.length && u())
    }

    function u() {
        if (!g) {
            var e = i(s);
            g = !0;
            for (var t = y.length; t;) {
                for (d = y, y = []; ++h < t;) d && d[h].run();
                h = -1, t = y.length
            }
            d = null, g = !1, o(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function f() {}
    var l, a, p = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            a = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            a = r
        }
    }();
    var d, y = [],
        g = !1,
        h = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        y.push(new c(e, t)), 1 !== y.length || g || i(u)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = f, p.addListener = f, p.once = f, p.off = f, p.removeListener = f, p.removeAllListeners = f, p.emit = f, p.prependListener = f, p.prependOnceListener = f, p.listeners = function(e) {
        return []
    }, p.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}]);