! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
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
        if (e = e.toLowerCase(), -1 === c.indexOf(e)) throw Error("Method ".concat(e, " is not supported"));
        switch (e) {
            case "params":
                Object(i.a)(t);
                break;
            default:
                console.warn("No handler defined for ".concat(e))
        }
    }

    function o(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(1), n(2)),
        c = ["params"];
    ! function(e) {
        var t = {
                showOdds: !1
            },
            n = e[e.flygoalsp_UpcomingEmbed],
            i = n.q;
        if (i)
            for (var c = 0; c < i.length; c++) "init" == i[c][0].toLowerCase() ? t = o(t, i[c][1]) : r(i[c][0], i[c][1]);
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
            o = "https://widget.flygoal.com/e/Upcoming?id=" + e.teamID + t + r,
            c = document.createElement("div");
        c.innerHTML = i.a, document.getElementById("flygoalsp-upcoming").insertAdjacentElement("afterbegin", c), fetch(o, {
            method: "GET",
            mode: "cors"
        }).then(function(e) {
            return e.json()
        }).then(function(e) {
            var imgurl = location.origin + '/';
            if (e.date && (document.getElementById("fgspUpcomingDate").innerHTML = e.date), e.time && (document.getElementById("fgspUpcomingTime").innerHTML = e.time), e.competition && (document.getElementById("flygoalsp-upcoming-league").innerHTML = e.competition), n) {
                if (e.url) {
                    var t = "https://flygoal.com" + e.url;
                    document.getElementById("flygoalsp-upcoming-match-name").innerHTML = e.match_name, document.getElementById("flygoalsp-upcoming-match-name").setAttribute("href", t)
                }
            } else document.getElementById("showLinks").innerHTML = "<div id='flygoalsp-upcoming-league'>".concat(e.competition, "</div><div class='match-url'>").concat(e.match_name, "</div>");
            document.getElementById("fgspHomeImage").setAttribute("src", imgurl + e.home_image), document.getElementById("fgspAwayImage").setAttribute("src", imgurl + e.away_image)
        })
    }
    t.a = r;
    var o = n(3),
        i = n.n(o),
        c = n(4);
    n.n(c)
}, function(e, t) {
    e.exports = '<div class="flygoalsp-upcoming-wrapper">' + 
        '<div class="flygoalsp-upcoming-header">' + 
            '<div class="flygoalsp-upcoming-details">' + 
                '<h2>Next Fixtures</h2>' + 
                '<ul>' + 
                    '<li>' +
                        '<img src="' + location.origin + '/wp-content/plugins/flygoal-widgets/assets/img/calendar.jpg" id=\'\' alt="" class="flygoalsp-embed-icon">' +
                        '<span id=\'fgspUpcomingDate\'>Retrieving Data...</span>' +
                    '</li>' + 
                    '<li>' + 
                        '<img src="' + location.origin + '/wp-content/plugins/flygoal-widgets/assets/img/clock.jpg" alt="" class="flygoalsp-embed-icon">' + 
                        '<span id="fgspUpcomingTime">Retrieving Data...</span>' + 
                    '</li>' + 
                '</ul>' + 
            '</div>' + 
            '<div class="flygoalsp-upcoming-badges">' +
                '<div class=\'flygoalsp-badge first\'>' + 
                    '<img id="fgspHomeImage">' + 
                '</div>' + 
                '<div class=\'flygoalsp-badge\'>' + 
                    '<img id=\'fgspAwayImage\'>' + 
                '</div>' +
            '</div>' +
        '</div>' + 
        '<div class="flygoalsp-upcoming-link" id=\'showLinks\'>' + 
            '<div id="flygoalsp-upcoming-league">Retrieving Data...</div>' + 
                '<a target="_blank" id="flygoalsp-upcoming-match-name">Retrieving Data...</a>' + 
            '</div>' + 
        '</div>'
}, function(e, t, n) {
    (function(e) {
        function r(e, n) {
            var r = {
                seen: [],
                stylize: i
            };
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), m(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), u(r, e, r.depth)
        }

        function o(e, t) {
            var n = r.styles[t];
            return n ? "[" + r.colors[n][0] + "m" + e + "[" + r.colors[n][1] + "m" : e
        }

        function i(e, t) {
            return e
        }

        function c(e) {
            var t = {};
            return e.forEach(function(e, n) {
                t[e] = !0
            }), t
        }

        function u(e, n, r) {
            if (e.customInspect && n && x(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var o = n.inspect(r, e);
                return v(o) || (o = u(e, o, r)), o
            }
            var i = s(e, n);
            if (i) return i;
            var m = Object.keys(n),
                g = c(m);
            if (e.showHidden && (m = Object.getOwnPropertyNames(n)), T(n) && (m.indexOf("message") >= 0 || m.indexOf("description") >= 0)) return a(n);
            if (0 === m.length) {
                if (x(n)) {
                    var y = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + y + "]", "special")
                }
                if (O(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (E(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (T(n)) return a(n)
            }
            var h = "",
                b = !1,
                w = ["{", "}"];
            if (d(n) && (b = !0, w = ["[", "]"]), x(n)) {
                h = " [Function" + (n.name ? ": " + n.name : "") + "]"
            }
            if (O(n) && (h = " " + RegExp.prototype.toString.call(n)), E(n) && (h = " " + Date.prototype.toUTCString.call(n)), T(n) && (h = " " + a(n)), 0 === m.length && (!b || 0 == n.length)) return w[0] + h + w[1];
            if (r < 0) return O(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(n);
            var j;
            return j = b ? f(e, n, r, g, m) : m.map(function(t) {
                return l(e, n, r, g, t, b)
            }), e.seen.pop(), p(j, h, w)
        }

        function s(e, t) {
            if (w(t)) return e.stylize("undefined", "undefined");
            if (v(t)) {
                var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(n, "string")
            }
            return h(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
        }

        function a(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function f(e, t, n, r, o) {
            for (var i = [], c = 0, u = t.length; c < u; ++c) L(t, String(c)) ? i.push(l(e, t, n, r, String(c), !0)) : i.push("");
            return o.forEach(function(o) {
                o.match(/^\d+$/) || i.push(l(e, t, n, r, o, !0))
            }), i
        }

        function l(e, t, n, r, o, i) {
            var c, s, a;
            if (a = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                }, a.get ? s = a.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : a.set && (s = e.stylize("[Setter]", "special")), L(r, o) || (c = "[" + o + "]"), s || (e.seen.indexOf(a.value) < 0 ? (s = g(n) ? u(e, a.value, null) : u(e, a.value, n - 1), s.indexOf("\n") > -1 && (s = i ? s.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n"))) : s = e.stylize("[Circular]", "special")), w(c)) {
                if (i && o.match(/^\d+$/)) return s;
                c = JSON.stringify("" + o), c.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (c = c.substr(1, c.length - 2), c = e.stylize(c, "name")) : (c = c.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), c = e.stylize(c, "string"))
            }
            return c + ": " + s
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

        function m(e) {
            return "boolean" == typeof e
        }

        function g(e) {
            return null === e
        }

        function y(e) {
            return null == e
        }

        function h(e) {
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
            return j(e) && "[object RegExp]" === S(e)
        }

        function j(e) {
            return "object" == typeof e && null !== e
        }

        function E(e) {
            return j(e) && "[object Date]" === S(e)
        }

        function T(e) {
            return j(e) && ("[object Error]" === S(e) || e instanceof Error)
        }

        function x(e) {
            return "function" == typeof e
        }

        function z(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }

        function S(e) {
            return Object.prototype.toString.call(e)
        }

        function P(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }

        function I() {
            var e = new Date,
                t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":");
            return [e.getDate(), B[e.getMonth()], t].join(" ")
        }

        function L(e, t) {
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
                var o = n.pop();
                if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
                var i = this,
                    c = function() {
                        return o.apply(i, arguments)
                    };
                t.apply(this, n).then(function(t) {
                    e.nextTick(c, null, t)
                }, function(t) {
                    e.nextTick(k, t, c)
                })
            }
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, A(t)), n
        }
        var A = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
                return n
            },
            _ = /%[sdj%]/g;
        t.format = function(e) {
            if (!v(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(r(arguments[n]));
                return t.join(" ")
            }
            for (var n = 1, o = arguments, i = o.length, c = String(e).replace(_, function(e) {
                    if ("%%" === e) return "%";
                    if (n >= i) return e;
                    switch (e) {
                        case "%s":
                            return String(o[n++]);
                        case "%d":
                            return Number(o[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(o[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                            default:
                                return e
                    }
                }), u = o[n]; n < i; u = o[++n]) g(u) || !j(u) ? c += " " + u : c += " " + r(u);
            return c
        }, t.deprecate = function(n, r) {
            function o() {
                if (!i) {
                    if (e.throwDeprecation) throw new Error(r);
                    e.traceDeprecation ? console.trace(r) : console.error(r), i = !0
                }
                return n.apply(this, arguments)
            }
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, r).apply(this, arguments)
            };
            var i = !1;
            return o
        };
        var M, H = {};
        t.debuglog = function(n) {
            if (w(M) && (M = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !H[n])
                if (new RegExp("\\b" + n + "\\b", "i").test(M)) {
                    var r = e.pid;
                    H[n] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", n, r, e)
                    }
                } else H[n] = function() {};
            return H[n]
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
        }, t.isArray = d, t.isBoolean = m, t.isNull = g, t.isNullOrUndefined = y, t.isNumber = h, t.isString = v, t.isSymbol = b, t.isUndefined = w, t.isRegExp = O, t.isObject = j, t.isDate = E, t.isError = T, t.isFunction = x, t.isPrimitive = z, t.isBuffer = n(6);
        var B = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function() {
            console.log("%s - %s", I(), t.format.apply(t, arguments))
        }, t.inherits = n(7), t._extend = function(e, t) {
            if (!t || !j(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var F = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        t.promisify = function(e) {
            function t() {
                for (var t, n, r = new Promise(function(e, r) {
                        t = e, n = r
                    }), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
                o.push(function(e, r) {
                    e ? n(e) : t(r)
                });
                try {
                    e.apply(this, o)
                } catch (e) {
                    n(e)
                }
                return r
            }
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (F && e[F]) {
                var t = e[F];
                if ("function" != typeof t) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, F, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), F && Object.defineProperty(t, F, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, A(e))
        }, t.promisify.custom = F, t.callbackify = D
    }).call(t, n(5))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (f === setTimeout) return setTimeout(e, 0);
        if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
        try {
            return f(e, 0)
        } catch (t) {
            try {
                return f.call(null, e, 0)
            } catch (t) {
                return f.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (l === clearTimeout) return clearTimeout(e);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
        try {
            return l(e)
        } catch (t) {
            try {
                return l.call(null, e)
            } catch (t) {
                return l.call(this, e)
            }
        }
    }

    function c() {
        g && d && (g = !1, d.length ? m = d.concat(m) : y = -1, m.length && u())
    }

    function u() {
        if (!g) {
            var e = o(c);
            g = !0;
            for (var t = m.length; t;) {
                for (d = m, m = []; ++y < t;) d && d[y].run();
                y = -1, t = m.length
            }
            d = null, g = !1, i(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function a() {}
    var f, l, p = e.exports = {};
    ! function() {
        try {
            f = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            f = n
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            l = r
        }
    }();
    var d, m = [],
        g = !1,
        y = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        m.push(new s(e, t)), 1 !== m.length || g || o(u)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = a, p.addListener = a, p.once = a, p.off = a, p.removeListener = a, p.removeAllListeners = a, p.emit = a, p.prependListener = a, p.prependOnceListener = a, p.listeners = function(e) {
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