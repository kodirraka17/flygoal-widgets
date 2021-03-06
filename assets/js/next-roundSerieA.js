! function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var r = {};
    e.m = t, e.c = r, e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
}([function(t, e, r) {
    "use strict";

    function n(t, e) {
        if (!t) throw Error("API method required");
        if (t = t.toLowerCase(), -1 === a.indexOf(t)) throw Error("Method ".concat(t, " is not supported"));
        switch (t) {
            case "params":
                Object(o.a)(e);
                break;
            default:
                console.warn("No handler defined for ".concat(t))
        }
    }

    function i(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = (r(1), r(2)),
        a = ["params"];
    ! function(t) {
        var e = {
                showOdds: !1
            },
            r = t[t.flygoalnr_UpcomingRoundSerieA],
            o = r.q;
        if (o)
            for (var a = 0; a < 1; a++) "init" == o[a][0].toLowerCase() ? e = i(e, o[a][1]) : n(o[a][0], o[a][1]);
        r = n, r.configurations = e
    }(window)
}, function(t, e, r) {
    "use strict"
}, function(t, e, r) {
    "use strict";

    function n(t) {
        var e = "",
            r = !0;
        void 0 !== t.showLinks && (t.showLinks || (e = "&showLinks=false", r = !1)), void 0 !== t.tz && (t.tz || (t.tz = "Asia/Jakarta"));
        var n = "&tz=" + t.tz,
            i = "https://widget.flygoal.com/e/nextRound?id=1437" + e + n,
            a = document.createElement("div");
        a.innerHTML = o.a, document.getElementById("flygoalnr-upcoming-round-seriea").insertAdjacentElement("afterbegin", a);
        var s = document.getElementById("flygoalnr-next-round-here-seriea"),
            f = document.getElementById("flygoalnr-replaceBadge-seriea"),
            p = document.getElementById("flygoalnr-replaceTitle-seriea");
        fetch(i, {
            method: "GET",
            mode: "cors"
        }).then(function(t) {
            return t.json()
        }).then(function(t) {
            var path = location.pathname.split('/');
            if(location.host == 'localhost') {
                var ImageURL = location.protocol + '//' + location.host + '/' + path[1] + '/';
            } else {
                var ImageURL = location.protocol + '//' + location.host + '/';
            }
            if (t.logo && f.setAttribute("src", ImageURL + t.logo), t.name ? p.innerHTML = t.name : p.innerHTML = "Not Found", t.url && r) {
                var e = t.url;
            }
            t.html && s.insertAdjacentHTML("beforeend", t.html)
        })
    }
    e.a = n;
    var i = r(3),
        o = r.n(i),
        a = r(4),
        s = (r.n(a), r(9));
    r.n(s)
}, function(t, e) {
    t.exports = '<div class="flygoalnr-embed-wrapper fixtures">' + 
        '<div class="flygoalnr-embed-header">' + 
            '<div class="flygoalnr-header-badge">' + 
                '<img id="flygoalnr-replaceBadge-seriea" alt="">' + 
            '</div>' + 
            '<div class="flygoalnr-header-title">' + 
                '<div class="flygoalnr-strong-title">NEXT SCHEDULE</div>' + 
                '<div class="flygoalnr-medium-title" id=\'flygoalnr-replaceTitle-seriea\'></div>' + 
            '</div>' +
            '</div>' +
            '<div class="flygoalnr-embed-body">' + 
                '<ul class="flygoalnr-next-round-list" id="flygoalnr-next-round-here-seriea"></ul>' + 
            '</div>' +
        '</div>' + 
    '</div>'
}, function(t, e, r) {
    var n = r(5);
    "string" == typeof n && (n = [
        [t.i, n, ""]
    ]);
    var i = {
        hmr: !0
    };
    i.transform = void 0;
    r(7)(n, i);
    n.locals && (t.exports = n.locals)
}, function(t, e, r) {
    e = t.exports = r(6)(!1), e.push([t.i, ".flygoalnr-embed-wrapper.fixtures{width:100%!important;font-family:sans-serif!important;background:#fff!important;border:1px solid #d4d9df!important;box-shadow:0 1px 8px 0 rgba(0,0,0,.06)!important;border-radius:10px!important;margin:10px 0!important;font-size:16px!important}.flygoalnr-embed-wrapper.fixtures *{line-height:normal!important;font-family:inherit!important;float:none!important;box-sizing:border-box!important}.flygoalnr-embed-wrapper.fixtures a{cursor:pointer!important;text-decoration:none!important;color:#2d5cc5!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list{list-style:none!important;margin:0!important;padding:0!important;font-size:14px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list * a{text-decoration:none!important;box-shadow:none!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-date{text-align:center!important;background:#b2dd46!important;height:32px!important;border:0!important;line-height:32px!important;color:#183053!important;padding:0 15px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item{display:flex!important;height:38px!important;padding:0 15px!important;align-items:center!important;justify-content:space-between!important;border:0!important;margin:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item .flygoalnr-fixture-item-status{width:10%!important;flex-shrink:0!important;background:#b2dd46!important;border-radius: 25px !important;height:28px!important;text-align:center!important;line-height:28px!important;font-weight:500!important;margin:0 15px!important;display:flex!important;align-items:center!important;justify-content:center!important;min-width:50px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item .flygoalnr-fixture-item-team{width:calc(40% - 15px)!important;overflow:hidden!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item .flygoalnr-fixture-item-team.home{text-align:right;margin-left:auto}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item .flygoalnr-fixture-item-team.away{margin-right:auto}.flygoalnr-embed-wrapper.fixtures .flygoalnr-next-round-list .flygoalnr-fixture-item .flygoalnr-fixture-item-team .flygoalnr-team-name{display:inline-block!important;overflow:hidden!important;max-width:99%!important;text-overflow:ellipsis!important;white-space:nowrap!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list{padding:10px 0!important;margin:0!important;display:block!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li{display:flex!important;align-items:center!important;width:100%!important;margin:0!important;padding:10px!important;border-bottom:1px solid #eaeaea!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li:first-child{padding:0 10px 10px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li:last-child{border-bottom:0!important;padding:10px 10px 0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-info{max-width:75%!important;overflow:hidden!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-info .flygoalnr-fixture-link,.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-info a{display:block!important;font-size:14px!important;margin-bottom:5px!important;text-decoration:none!important;color:#2d5dc5!important;font-weight:700!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-info .flygoalnr-fixture-meta{font-size:12px!important;color:#47576e!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-result{margin:0 0 0 auto!important;flex-shrink:0!important;text-align:center!important;background:#eff5fb!important;border-radius:.2rem!important;height:24px!important;width:34px!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:14px!important;padding:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-result.fg_green{background:#45b549!important;color:#fff!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-result.fg_red{background:#ca2f1e!important;color:#fff!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-result.fg_orange{background:#ffe3b7!important;color:#804404!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-fixture-list li .flygoalnr-fixture-result.fg_h2h{color:#2d5cc5!important;font-weight:700!important;padding:0!important;text-decoration:none!important;width:46px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header{background:#2d2d2d!important;position:relative!important;border-radius:10px 10px 0 0!important;box-shadow:0 1px 4px 0 rgba(19,40,71,.07),inset 0 -1px 0 0 rgba(58,94,141,.16)!important;height:60px!important;display:flex!important;flex-wrap:no-wrap!important;align-items:center!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-badge{flex-shrink:0!important;width:60px!important;height:60px!important;display:flex!important;align-items:center!important;justify-content:center!important;border-right:1px solid #e0e6ed!important;margin-right:15px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-badge img{width:40px!important;display:block!important;margin:auto!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title{flex:1!important;max-width:calc(70% - 60px)!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title,.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title *{display:inline-block!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title .flygoalnr-country-flag{display:inline!important;width:14px!important;margin-right:6px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title .flygoalnr-strong-title{display:block!important;width:100%!important;font-weight:700!important;color:#b2dd46!important;margin-bottom:5px!important;text-decoration:none!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-header-title .flygoalnr-medium-title{display:inline-block!important;max-width:100%!important;color:#a7a7a7!important;font-size:12px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-fixture-header{margin:0 15px 0 auto!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-header .flygoalnr-fixture-header a{font-size:14px!important;color:#2d5dc5!important;font-weight:700!important;text-decoration:none!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-body{padding:0!important;display:block!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-list-toggles{display:flex!important;margin:0!important;border-bottom:1px solid #eaeaea!important;position:sticky!important;position:-webkit-sticky!important;top:0!important;z-index:10!important;background:#fff!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-list-toggles .flygoalnr-list-toggle{display:inline-block!important;padding:0!important;border:0!important;flex:1!important;height:34px!important;line-height:34px!important;margin:0!important;text-align:center!important;font-size:14px!important;cursor:pointer!important;text-decoration:none!important;color:#2d5dc5!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-list-toggles .flygoalnr-list-toggle.active{background:#ebeff5!important;color:#000!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table{border-collapse:collapse!important;width:100%!important;margin:0!important;table-layout:fixed!important;border:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table td,.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table th{padding:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table thead{border:0!important;font-size:11px!important;color:#08366b!important;font-weight:700!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table thead th{padding-bottom:10px!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table thead th.rank{padding:0 10px 10px 0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table td{border:0!important;font-size:12px!important;padding:5px 0!important;vertical-align:middle!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table tbody,.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table tbody tr{border:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-embed-table tbody tr:last-child{border-bottom:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-row{border-bottom:1px solid #f0f0f0!important;vertical-align:baseline!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-item{min-width:20px!important;text-align:left!important;border:0!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-item.link{color:#1565dc!important;font-weight:700!important;text-decoration:none!important;display:inline-block!important;max-width:90%!important;overflow:hidden!important;white-space:nowrap!important;text-overflow:ellipsis!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-item.rank{color:#497591!important;min-width:auto!important;font-size:12px!important;text-align:center!important;padding:0 10px 0 0!important;width:5%!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-item.team{font-size:12px!important;width:50%!important}.flygoalnr-embed-wrapper.fixtures .flygoalnr-table-item.flygoalnr-align-center{text-align:center!important}", ""])
}, function(t, e) {
    function r(t, e) {
        var r = t[1] || "",
            i = t[3];
        if (!i) return r;
        if (e && "function" == typeof btoa) {
            var o = n(i);
            return [r].concat(i.sources.map(function(t) {
                return "/*# sourceURL=" + i.sourceRoot + t + " */"
            })).concat([o]).join("\n")
        }
        return [r].join("\n")
    }

    function n(t) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = r(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function(t, r) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var n = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (n[o] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                "number" == typeof a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), e.push(a))
            }
        }, e
    }
}, function(t, e, r) {
    function n(t, e) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r],
                i = m[n.id];
            if (i) {
                i.refg++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) i.parts.push(u(n.parts[o], e))
            } else {
                for (var a = [], o = 0; o < n.parts.length; o++) a.push(u(n.parts[o], e));
                m[n.id] = {
                    id: n.id,
                    refg: 1,
                    parts: a
                }
            }
        }
    }

    function i(t, e) {
        for (var r = [], n = {}, i = 0; i < t.length; i++) {
            var o = t[i],
                a = e.base ? o[0] + e.base : o[0],
                s = o[1],
                f = o[2],
                p = o[3],
                u = {
                    css: s,
                    media: f,
                    sourceMap: p
                };
            n[a] ? n[a].parts.push(u) : r.push(n[a] = {
                id: a,
                parts: [u]
            })
        }
        return r
    }

    function o(t, e) {
        var r = h(t.insertInto);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = y[y.length - 1];
        if ("top" === t.insertAt) n ? n.nextSibling ? r.insertBefore(e, n.nextSibling) : r.appendChild(e) : r.insertBefore(e, r.firstChild), y.push(e);
        else if ("bottom" === t.insertAt) r.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = h(t.insertInto + " " + t.insertAt.before);
            r.insertBefore(e, i)
        }
    }

    function a(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = y.indexOf(t);
        e >= 0 && y.splice(e, 1)
    }

    function s(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", p(e, t.attrs), o(t, e), e
    }

    function f(t) {
        var e = document.createElement("link");
        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", p(e, t.attrs), o(t, e), e
    }

    function p(t, e) {
        Object.keys(e).forEach(function(r) {
            t.setAttribute(r, e[r])
        })
    }

    function u(t, e) {
        var r, n, i, o;
        if (e.transform && t.css) {
            if (!(o = e.transform(t.css))) return function() {};
            t.css = o
        }
        if (e.singleton) {
            var p = g++;
            r = x || (x = s(e)), n = l.bind(null, r, p, !1), i = l.bind(null, r, p, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = f(e), n = d.bind(null, r, e), i = function() {
            a(r), r.href && URL.revokeObjectURL(r.href)
        }) : (r = s(e), n = c.bind(null, r), i = function() {
            a(r)
        });
        return n(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else i()
            }
    }

    function l(t, e, r, n) {
        var i = r ? "" : n.css;
        if (t.styleSheet) t.styleSheet.cssText = v(e, i);
        else {
            var o = document.createTextNode(i),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
        }
    }

    function c(t, e) {
        var r = e.css,
            n = e.media;
        if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = r;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r))
        }
    }

    function d(t, e, r) {
        var n = r.css,
            i = r.sourceMap,
            o = void 0 === e.convertToAbsoluteUrls && i;
        (e.convertToAbsoluteUrls || o) && (n = w(n)), i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([n], {
                type: "text/css"
            }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
    }
    var m = {},
        b = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        h = function(t) {
            var e = {};
            return function(r) {
                if (void 0 === e[r]) {
                    var n = t.call(this, r);
                    if (n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    e[r] = n
                }
                return e[r]
            }
        }(function(t) {
            return document.querySelector(t)
        }),
        x = null,
        g = 0,
        y = [],
        w = r(8);
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var r = i(t, e);
        return n(r, e),
            function(t) {
                for (var o = [], a = 0; a < r.length; a++) {
                    var s = r[a],
                        f = m[s.id];
                    f.refg--, o.push(f)
                }
                if (t) {
                    n(i(t, e), e)
                }
                for (var a = 0; a < o.length; a++) {
                    var f = o[a];
                    if (0 === f.refg) {
                        for (var p = 0; p < f.parts.length; p++) f.parts[p]();
                        delete m[f.id]
                    }
                }
            }
    };
    var v = function() {
        var t = [];
        return function(e, r) {
            return t[e] = r, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var r = e.protocol + "//" + e.host,
            n = r + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return t;
            var o;
            return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? r + i : n + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
        })
    }
}, function(t, e, r) {
    (function(t) {
        function n(t, r) {
            var n = {
                seen: [],
                stylize: o
            };
            return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), m(r) ? n.showHidden = r : r && e._extend(n, r), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = i), s(n, t, n.depth)
        }

        function i(t, e) {
            var r = n.styles[e];
            return r ? "[" + n.colors[r][0] + "m" + t + "[" + n.colors[r][1] + "m" : t
        }

        function o(t, e) {
            return t
        }

        function a(t) {
            var e = {};
            return t.forEach(function(t, r) {
                e[t] = !0
            }), e
        }

        function s(t, r, n) {
            if (t.customInspect && r && E(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var i = r.inspect(n, t);
                return g(i) || (i = s(t, i, n)), i
            }
            var o = f(t, r);
            if (o) return o;
            var m = Object.keys(r),
                b = a(m);
            if (t.showHidden && (m = Object.getOwnPropertyNames(r)), k(r) && (m.indexOf("message") >= 0 || m.indexOf("description") >= 0)) return p(r);
            if (0 === m.length) {
                if (E(r)) {
                    var h = r.name ? ": " + r.name : "";
                    return t.stylize("[Function" + h + "]", "special")
                }
                if (v(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (O(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                if (k(r)) return p(r)
            }
            var x = "",
                y = !1,
                w = ["{", "}"];
            if (d(r) && (y = !0, w = ["[", "]"]), E(r)) {
                x = " [Function" + (r.name ? ": " + r.name : "") + "]"
            }
            if (v(r) && (x = " " + RegExp.prototype.toString.call(r)), O(r) && (x = " " + Date.prototype.toUTCString.call(r)), k(r) && (x = " " + p(r)), 0 === m.length && (!y || 0 == r.length)) return w[0] + x + w[1];
            if (n < 0) return v(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special");
            t.seen.push(r);
            var j;
            return j = y ? u(t, r, n, b, m) : m.map(function(e) {
                return l(t, r, n, b, e, y)
            }), t.seen.pop(), c(j, x, w)
        }

        function f(t, e) {
            if (w(e)) return t.stylize("undefined", "undefined");
            if (g(e)) {
                var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return t.stylize(r, "string")
            }
            return x(e) ? t.stylize("" + e, "number") : m(e) ? t.stylize("" + e, "boolean") : b(e) ? t.stylize("null", "null") : void 0
        }

        function p(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }

        function u(t, e, r, n, i) {
            for (var o = [], a = 0, s = e.length; a < s; ++a) A(e, String(a)) ? o.push(l(t, e, r, n, String(a), !0)) : o.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(l(t, e, r, n, i, !0))
            }), o
        }

        function l(t, e, r, n, i, o) {
            var a, f, p;
            if (p = Object.getOwnPropertyDescriptor(e, i) || {
                    value: e[i]
                }, p.get ? f = p.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : p.set && (f = t.stylize("[Setter]", "special")), A(n, i) || (a = "[" + i + "]"), f || (t.seen.indexOf(p.value) < 0 ? (f = b(r) ? s(t, p.value, null) : s(t, p.value, r - 1), f.indexOf("\n") > -1 && (f = o ? f.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + f.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n"))) : f = t.stylize("[Circular]", "special")), w(a)) {
                if (o && i.match(/^\d+$/)) return f;
                a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"))
            }
            return a + ": " + f
        }

        function c(t, e, r) {
            var n = 0;
            return t.reduce(function(t, e) {
                return n++, e.indexOf("\n") >= 0 && n++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0) > 60 ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1]
        }

        function d(t) {
            return Array.isArray(t)
        }

        function m(t) {
            return "boolean" == typeof t
        }

        function b(t) {
            return null === t
        }

        function h(t) {
            return null == t
        }

        function x(t) {
            return "number" == typeof t
        }

        function g(t) {
            return "string" == typeof t
        }

        function y(t) {
            return "symbol" == typeof t
        }

        function w(t) {
            return void 0 === t
        }

        function v(t) {
            return j(t) && "[object RegExp]" === z(t)
        }

        function j(t) {
            return "object" == typeof t && null !== t
        }

        function O(t) {
            return j(t) && "[object Date]" === z(t)
        }

        function k(t) {
            return j(t) && ("[object Error]" === z(t) || t instanceof Error)
        }

        function E(t) {
            return "function" == typeof t
        }

        function T(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }

        function z(t) {
            return Object.prototype.toString.call(t)
        }

        function S(t) {
            return t < 10 ? "0" + t.toString(10) : t.toString(10)
        }

        function L() {
            var t = new Date,
                e = [S(t.getHours()), S(t.getMinutes()), S(t.getSeconds())].join(":");
            return [t.getDate(), B[t.getMonth()], e].join(" ")
        }

        function A(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function U(t, e) {
            if (!t) {
                var r = new Error("Promise was rejected with a falsy value");
                r.reason = t, t = r
            }
            return e(t)
        }

        function R(e) {
            function r() {
                for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
                var i = r.pop();
                if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
                var o = this,
                    a = function() {
                        return i.apply(o, arguments)
                    };
                e.apply(this, r).then(function(e) {
                    t.nextTick(a, null, e)
                }, function(e) {
                    t.nextTick(U, e, a)
                })
            }
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(r, N(e)), r
        }
        var N = Object.getOwnPropertyDescriptors || function(t) {
                for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
                return r
            },
            P = /%[sdj%]/g;
        e.format = function(t) {
            if (!g(t)) {
                for (var e = [], r = 0; r < arguments.length; r++) e.push(n(arguments[r]));
                return e.join(" ")
            }
            for (var r = 1, i = arguments, o = i.length, a = String(t).replace(P, function(t) {
                    if ("%%" === t) return "%";
                    if (r >= o) return t;
                    switch (t) {
                        case "%s":
                            return String(i[r++]);
                        case "%d":
                            return Number(i[r++]);
                        case "%j":
                            try {
                                return JSON.stringify(i[r++])
                            } catch (t) {
                                return "[Circular]"
                            }
                            default:
                                return t
                    }
                }), s = i[r]; r < o; s = i[++r]) b(s) || !j(s) ? a += " " + s : a += " " + n(s);
            return a
        }, e.deprecate = function(r, n) {
            function i() {
                if (!o) {
                    if (t.throwDeprecation) throw new Error(n);
                    t.traceDeprecation ? console.trace(n) : console.error(n), o = !0
                }
                return r.apply(this, arguments)
            }
            if (void 0 !== t && !0 === t.noDeprecation) return r;
            if (void 0 === t) return function() {
                return e.deprecate(r, n).apply(this, arguments)
            };
            var o = !1;
            return i
        };
        var I, M = {};
        e.debuglog = function(r) {
            if (w(I) && (I = t.env.NODE_DEBUG || ""), r = r.toUpperCase(), !M[r])
                if (new RegExp("\\b" + r + "\\b", "i").test(I)) {
                    var n = t.pid;
                    M[r] = function() {
                        var t = e.format.apply(e, arguments);
                        console.error("%s %d: %s", r, n, t)
                    }
                } else M[r] = function() {};
            return M[r]
        }, e.inspect = n, n.colors = {
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
        }, n.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, e.isArray = d, e.isBoolean = m, e.isNull = b, e.isNullOrUndefined = h, e.isNumber = x, e.isString = g, e.isSymbol = y, e.isUndefined = w, e.isRegExp = v, e.isObject = j, e.isDate = O, e.isError = k, e.isFunction = E, e.isPrimitive = T, e.isBuffer = r(11);
        var B = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        e.log = function() {
            console.log("%s - %s", L(), e.format.apply(e, arguments))
        }, e.inherits = r(12), e._extend = function(t, e) {
            if (!e || !j(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
            return t
        };
        var C = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        e.promisify = function(t) {
            function e() {
                for (var e, r, n = new Promise(function(t, n) {
                        e = t, r = n
                    }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
                i.push(function(t, n) {
                    t ? r(t) : e(n)
                });
                try {
                    t.apply(this, i)
                } catch (t) {
                    r(t)
                }
                return n
            }
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
            if (C && t[C]) {
                var e = t[C];
                if ("function" != typeof e) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(e, C, {
                    value: e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), e
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), C && Object.defineProperty(e, C, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(e, N(t))
        }, e.promisify.custom = C, e.callbackify = R
    }).call(e, r(10))
}, function(t, e) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === r || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t)
        } catch (e) {
            try {
                return l.call(null, t)
            } catch (e) {
                return l.call(this, t)
            }
        }
    }

    function a() {
        b && d && (b = !1, d.length ? m = d.concat(m) : h = -1, m.length && s())
    }

    function s() {
        if (!b) {
            var t = i(a);
            b = !0;
            for (var e = m.length; e;) {
                for (d = m, m = []; ++h < e;) d && d[h].run();
                h = -1, e = m.length
            }
            d = null, b = !1, o(t)
        }
    }

    function f(t, e) {
        this.fun = t, this.array = e
    }

    function p() {}
    var u, l, c = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            u = r
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            l = n
        }
    }();
    var d, m = [],
        b = !1,
        h = -1;
    c.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        m.push(new f(t, e)), 1 !== m.length || b || i(s)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = p, c.addListener = p, c.once = p, c.off = p, c.removeListener = p, c.removeAllListeners = p, c.emit = p, c.prependListener = p, c.prependOnceListener = p, c.listeners = function(t) {
        return []
    }, c.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, c.cwd = function() {
        return "/"
    }, c.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, c.umask = function() {
        return 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
    }
}, function(t, e) {
    "function" == typeof Object.create ? t.exports = function(t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : t.exports = function(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }
}]);