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
        if (e = e.toLowerCase(), -1 === a.indexOf(e)) throw Error("Method ".concat(e, " is not supported"));
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
        a = ["params"];
    ! function(e) {
        var t = {
                showOdds: !1
            },
            n = e[e.flygoalsp_StandingsEmbedBundesliga],
            o = n.q;
        if (o)
            for (var a = 0; a < 1; a++) "init" == o[a][0].toLowerCase() ? t = i(t, o[a][1]) : r(o[a][0], o[a][1]);
        n = r, n.configurations = t
    }(window)
}, function(e, t, n) {
    "use strict"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = "",
            n = !0;
        void 0 !== e.showLinks && (e.showLinks || (t = "&showLinks=false", n = !1));
        var r = "https://widget.flygoal.com/e/Standings?id=188",
            s = document.createElement("div");
        s.innerHTML = c.a, document.getElementById('flygoalsp-standings-bundesliga').insertAdjacentElement("afterbegin", s);
        var u = document.getElementById("flygoalsp-InsertRowsHere-bundesliga"),
            f = document.getElementById("flygoalsp-replaceBadge-bundesliga"),
            p = document.getElementById("flygoalsp-replaceTitle-bundesliga");
        l.table = document.getElementById("flygoalsp-EmbedTable-bundesliga"), 
        l.next = document.getElementById("flygoalsp-table-navigation-next"), 
        l.previous = document.getElementById("flygoalsp-table-navigation-previous"), 
        fetch(r, {
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
            if (e.image && f.setAttribute("src", ImageURL + e.image), e.league_url && (p.setAttribute("href", e.league_url), p.setAttribute("target", "_blank"), p.setAttribute("rel", "nofollow")), e.title ? p.innerHTML = e.title : p.innerHTML = "Not Found", e.flag_url) {
                var t = document.createElement("img");
                t.classList.add("flygoalsp-country-flag"), t.setAttribute("src", ImageURL + e.flag_url), p.insertAdjacentElement("afterbegin", t)
            }
            for (var r in e)
                if (void 0 !== e[r].html) {
                    var i = document.createElement("tr");
                    i.classList.add("flygoalsp-table-row"), n || i.classList.add("no-links"), i.innerHTML = e[r].html, u.insertAdjacentElement("beforeend", i), o()
                }
        }), o(), i()
    }

    function i() {
        l.tableItems.forEach(function(e) {
            e.dataset.page > l.max && (l.max = e.dataset.page)
        })
    }

    function o() {
        l.tableItems = l.table.querySelectorAll("th,td")
    }

    /* function a(e) {
        0 == e ? l.previous.classList.add("flygoalsp-nav-disabled") : l.previous.classList.remove("flygoalsp-nav-disabled"), e == l.max ? l.next.classList.add("flygoalsp-nav-disabled") : l.next.classList.remove("flygoalsp-nav-disabled"), l.tableItems.forEach(function(t) {
            if (void 0 !== t.dataset.page) {
                var n = t.dataset.page;
                t.style.display = e == n ? "table-cell" : "none"
            }
        })
    } */
    t.a = r;
    var s = n(3),
        c = n.n(s),
        u = n(4),
        l = (n.n(u), {
            page: 0,
            max: 0
        })
}, function(e, t) {
    e.exports = '<div class="flygoalsp-embed-wrapper">' +
        '<div class="flygoalsp-embed-header">' + 
            '<div class="flygoalsp-header-badge">' + 
                '<img id="flygoalsp-replaceBadge-bundesliga" alt="">' + 
            '</div>' + 
            '<div class="flygoalsp-header-title">' + 
                '<div class="flygoalsp-strong-title">LEAGUE STANDINGS TABLE</div>' + 
                '<a class="flygoalsp-medium-title" id=\'flygoalsp-replaceTitle-bundesliga\'></a>' +
            '</div>' +
        '</div>' +
        '<div class="flygoalsp-embed-body">' + 
            '<table class="flygoalsp-embed-table" id="flygoalsp-EmbedTable-bundesliga">' + 
                '<thead>' + 
                    '<tr class="flygoalsp-embed-table-header">' + 
                        '<th class="flygoalsp-table-item rank">Pos</th>' + 
                        '<th class="flygoalsp-table-item team">Teams Name</th>' + 
                        '<th class="flygoalsp-table-item flygoalsp-align-center" data-page="0">P</th>' + 
                        '<th class="flygoalsp-table-item flygoalsp-align-center" data-page="0">W</th>' +
                        '<th class="flygoalsp-table-item flygoalsp-align-center" data-page="0">D</th>' +
                        '<th class="flygoalsp-table-item flygoalsp-align-center" data-page="0">L</th>' +
                        '<th class="flygoalsp-table-item flygoalsp-align-center" data-page="0">Pts</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody id=\'flygoalsp-InsertRowsHere-bundesliga\'></tbody>' +
            '</table>' +
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
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = i), s(r, e, r.depth)
        }

        function i(e, t) {
            var n = r.styles[t];
            return n ? "[" + r.colors[n][0] + "m" + e + "[" + r.colors[n][1] + "m" : e
        }

        function o(e, t) {
            return e
        }

        function a(e) {
            var t = {};
            return e.forEach(function(e, n) {
                t[e] = !0
            }), t
        }

        function s(e, n, r) {
            if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var i = n.inspect(r, e);
                return b(i) || (i = s(e, i, r)), i
            }
            var o = c(e, n);
            if (o) return o;
            var g = Object.keys(n),
                y = a(g);
            if (e.showHidden && (g = Object.getOwnPropertyNames(n)), x(n) && (g.indexOf("message") >= 0 || g.indexOf("description") >= 0)) return u(n);
            if (0 === g.length) {
                if (T(n)) {
                    var m = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + m + "]", "special")
                }
                if (O(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (j(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (x(n)) return u(n)
            }
            var h = "",
                v = !1,
                w = ["{", "}"];
            if (d(n) && (v = !0, w = ["[", "]"]), T(n)) {
                h = " [Function" + (n.name ? ": " + n.name : "") + "]"
            }
            if (O(n) && (h = " " + RegExp.prototype.toString.call(n)), j(n) && (h = " " + Date.prototype.toUTCString.call(n)), x(n) && (h = " " + u(n)), 0 === g.length && (!v || 0 == n.length)) return w[0] + h + w[1];
            if (r < 0) return O(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(n);
            var E;
            return E = v ? l(e, n, r, y, g) : g.map(function(t) {
                return f(e, n, r, y, t, v)
            }), e.seen.pop(), p(E, h, w)
        }

        function c(e, t) {
            if (w(t)) return e.stylize("undefined", "undefined");
            if (b(t)) {
                var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(n, "string")
            }
            return h(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : y(t) ? e.stylize("null", "null") : void 0
        }

        function u(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function l(e, t, n, r, i) {
            for (var o = [], a = 0, s = t.length; a < s; ++a) A(t, String(a)) ? o.push(f(e, t, n, r, String(a), !0)) : o.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(f(e, t, n, r, i, !0))
            }), o
        }

        function f(e, t, n, r, i, o) {
            var a, c, u;
            if (u = Object.getOwnPropertyDescriptor(t, i) || {
                    value: t[i]
                }, u.get ? c = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (c = e.stylize("[Setter]", "special")), A(r, i) || (a = "[" + i + "]"), c || (e.seen.indexOf(u.value) < 0 ? (c = y(n) ? s(e, u.value, null) : s(e, u.value, n - 1), c.indexOf("\n") > -1 && (c = o ? c.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + c.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n"))) : c = e.stylize("[Circular]", "special")), w(a)) {
                if (o && i.match(/^\d+$/)) return c;
                a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
            }
            return a + ": " + c
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

        function g(e) {
            return "boolean" == typeof e
        }

        function y(e) {
            return null === e
        }

        function m(e) {
            return null == e
        }

        function h(e) {
            return "number" == typeof e
        }

        function b(e) {
            return "string" == typeof e
        }

        function v(e) {
            return "symbol" == typeof e
        }

        function w(e) {
            return void 0 === e
        }

        function O(e) {
            return E(e) && "[object RegExp]" === P(e)
        }

        function E(e) {
            return "object" == typeof e && null !== e
        }

        function j(e) {
            return E(e) && "[object Date]" === P(e)
        }

        function x(e) {
            return E(e) && ("[object Error]" === P(e) || e instanceof Error)
        }

        function T(e) {
            return "function" == typeof e
        }

        function S(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }

        function P(e) {
            return Object.prototype.toString.call(e)
        }

        function L(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }

        function z() {
            var e = new Date,
                t = [L(e.getHours()), L(e.getMinutes()), L(e.getSeconds())].join(":");
            return [e.getDate(), N[e.getMonth()], t].join(" ")
        }

        function A(e, t) {
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
                    a = function() {
                        return i.apply(o, arguments)
                    };
                t.apply(this, n).then(function(t) {
                    e.nextTick(a, null, t)
                }, function(t) {
                    e.nextTick(k, t, a)
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
            if (!b(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(r(arguments[n]));
                return t.join(" ")
            }
            for (var n = 1, i = arguments, o = i.length, a = String(e).replace(_, function(e) {
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
                }), s = i[n]; n < o; s = i[++n]) y(s) || !E(s) ? a += " " + s : a += " " + r(s);
            return a
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
        var B, M = {};
        t.debuglog = function(n) {
            if (w(B) && (B = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !M[n])
                if (new RegExp("\\b" + n + "\\b", "i").test(B)) {
                    var r = e.pid;
                    M[n] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", n, r, e)
                    }
                } else M[n] = function() {};
            return M[n]
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
        }, t.isArray = d, t.isBoolean = g, t.isNull = y, t.isNullOrUndefined = m, t.isNumber = h, t.isString = b, t.isSymbol = v, t.isUndefined = w, t.isRegExp = O, t.isObject = E, t.isDate = j, t.isError = x, t.isFunction = T, t.isPrimitive = S, t.isBuffer = n(6);
        var N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function() {
            console.log("%s - %s", z(), t.format.apply(t, arguments))
        }, t.inherits = n(7), t._extend = function(e, t) {
            if (!t || !E(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var H = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
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
            if (H && e[H]) {
                var t = e[H];
                if ("function" != typeof t) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, H, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), H && Object.defineProperty(t, H, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, I(e))
        }, t.promisify.custom = H, t.callbackify = D
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
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        y && d && (y = !1, d.length ? g = d.concat(g) : m = -1, g.length && s())
    }

    function s() {
        if (!y) {
            var e = i(a);
            y = !0;
            for (var t = g.length; t;) {
                for (d = g, g = []; ++m < t;) d && d[m].run();
                m = -1, t = g.length
            }
            d = null, y = !1, o(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var l, f, p = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            f = r
        }
    }();
    var d, g = [],
        y = !1,
        m = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        g.push(new c(e, t)), 1 !== g.length || y || i(s)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function(e) {
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