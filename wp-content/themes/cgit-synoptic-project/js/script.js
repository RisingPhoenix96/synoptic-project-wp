!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [], A = C.document, i = Object.getPrototypeOf, s = t.slice, g = t.concat, l = t.push, r = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, u = a.call(Object), m = {}, y = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }, b = function(e) {
        return null != e && e === e.window;
    }, f = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var i, r, o = (n = n || A).createElement("script");
        if (o.text = e, t) for (i in f) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var c = "3.4.1", E = function(e, t) {
        return new E.fn.init(e, t);
    }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    E.fn = E.prototype = {
        jquery: c,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return E.each(this, e);
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), 
        s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) i = e[t], 
        "__proto__" !== t && a !== i && (u && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], 
        o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {}, r = !1, a[t] = E.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a;
    }, E.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === u);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e, t) {
            x(e, {
                nonce: t && t.nonce
            });
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e)) {
                for (n = e.length; i < n; i++) if (!1 === t.call(e[i], i, e[i])) break;
            } else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [ e ] : e) : l.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (p(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r); else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return g.apply([], a);
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), 
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    var h = function(n) {
        var e, p, x, o, r, h, c, g, w, l, u, T, C, a, A, v, s, f, m, E = "sizzle" + 1 * new Date(), y = n.document, k = 0, i = 0, d = le(), b = le(), N = le(), S = le(), D = function(e, t) {
            return e === t && (u = !0), 0;
        }, I = {}.hasOwnProperty, t = [], L = t.pop, j = t.push, M = t.push, H = t.slice, O = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", R = "\\[" + $ + "*(" + P + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + $ + "*\\]", B = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", W = new RegExp($ + "+", "g"), F = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), z = new RegExp("^" + $ + "*," + $ + "*"), _ = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), X = new RegExp($ + "|>"), U = new RegExp(B), V = new RegExp("^" + P + "$"), G = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + q + ")$", "i"),
            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"), ne = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, oe = function() {
            T();
        }, ae = xe(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            M.apply(t = H.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (e) {
            M = {
                apply: t.length ? function(e, t) {
                    j.apply(e, H.call(t));
                } : function(e, t) {
                    var n = e.length, i = 0;
                    while (e[n++] = t[i++]) ;
                    e.length = n - 1;
                }
            };
        }
        function se(e, t, n, i) {
            var r, o, a, s, l, u, f, c = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, A)) {
                if (11 !== d && (l = Z.exec(e))) if (r = l[1]) {
                    if (9 === d) {
                        if (!(a = t.getElementById(r))) return n;
                        if (a.id === r) return n.push(a), n;
                    } else if (c && (a = c.getElementById(r)) && m(t, a) && a.id === r) return n.push(a), 
                    n;
                } else {
                    if (l[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (p.qsa && !S[e + " "] && (!v || !v.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (f = e, c = t, 1 === d && X.test(e)) {
                        (s = t.getAttribute("id")) ? s = s.replace(ie, re) : t.setAttribute("id", s = E), 
                        o = (u = h(e)).length;
                        while (o--) u[o] = "#" + s + " " + be(u[o]);
                        f = u.join(","), c = ee.test(e) && me(t.parentNode) || t;
                    }
                    try {
                        return M.apply(n, c.querySelectorAll(f)), n;
                    } catch (t) {
                        S(e, !0);
                    } finally {
                        s === E && t.removeAttribute("id");
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, i);
        }
        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function ue(e) {
            return e[E] = !0, e;
        }
        function fe(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function ce(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) x.attrHandle[n[i]] = t;
        }
        function de(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return ue(function(o) {
                return o = +o, ue(function(e, t) {
                    var n, i = a([], e.length, o), r = i.length;
                    while (r--) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function me(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in p = se.support = {}, r = se.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Q.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : y;
            return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, 
            A = !r(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), 
            p.attributes = fe(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), p.getElementsByTagName = fe(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), p.getElementsByClassName = J.test(C.getElementsByClassName), p.getById = fe(function(e) {
                return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length;
            }), p.getById ? (x.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (x.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && A) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        r = t.getElementsByName(e), i = 0;
                        while (o = r[i++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[r++]) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && A) return t.getElementsByClassName(e);
            }, s = [], v = [], (p.qsa = J.test(C.querySelectorAll)) && (fe(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + $ + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || v.push("\\[" + $ + "*(?:value|" + q + ")"), 
                e.querySelectorAll("[id~=" + E + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
                e.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]");
            }), fe(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + $ + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), v.push(",.*:");
            })), (p.matchesSelector = J.test(f = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && fe(function(e) {
                p.disconnectedMatch = f.call(e, "*"), f.call(e, "[s!='']:x"), s.push("!=", B);
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), 
            t = J.test(a.compareDocumentPosition), m = t || J.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, D = t ? function(e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && m(y, e) ? -1 : t === C || t.ownerDocument === y && m(y, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return u = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
                if (r === o) return de(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[i] === s[i]) i++;
                return i ? de(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e), p.matchesSelector && A && !S[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = f.call(e, t);
                if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                S(t, !0);
            }
            return 0 < se(t, C, null, [ e ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), m(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = x.attrHandle[t.toLowerCase()], i = n && I.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : p.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, se.escape = function(e) {
            return (e + "").replace(ie, re);
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(D), u) {
                while (t = e[r++]) t === e[r] && (i = n.push(r));
                while (i--) e.splice(n[i], 1);
            }
            return l = null, e;
        }, o = se.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else while (t = e[i++]) n += o(t);
            return n;
        }, (x = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && d(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(W, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(h, e, t, g, v) {
                    var m = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), b = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, o, a, s, l, u = m !== y ? "nextSibling" : "previousSibling", f = e.parentNode, c = b && e.nodeName.toLowerCase(), d = !n && !b, p = !1;
                        if (f) {
                            if (m) {
                                while (u) {
                                    a = e;
                                    while (a = a[u]) if (b ? a.nodeName.toLowerCase() === c : 1 === a.nodeType) return !1;
                                    l = u = "only" === h && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ y ? f.firstChild : f.lastChild ], y && d) {
                                p = (s = (i = (r = (o = (a = f)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && i[1]) && i[2], 
                                a = s && f.childNodes[s];
                                while (a = ++s && a && a[u] || (p = s = 0) || l.pop()) if (1 === a.nodeType && ++p && a === e) {
                                    r[h] = [ k, s, p ];
                                    break;
                                }
                            } else if (d && (p = s = (i = (r = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && i[1]), 
                            !1 === p) while (a = ++s && a && a[u] || (p = s = 0) || l.pop()) if ((b ? a.nodeName.toLowerCase() === c : 1 === a.nodeType) && ++p && (d && ((r = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ k, p ]), 
                            a === e)) break;
                            return (p -= v) === g || p % g == 0 && 0 <= p / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                        var n, i = a(e, o), r = i.length;
                        while (r--) e[n = O(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var i = [], r = [], s = c(e.replace(F, "$1"));
                    return s[E] ? ue(function(e, t, n, i) {
                        var r, o = s(e, null, i, []), a = e.length;
                        while (a--) (r = o[a]) && (e[a] = !(t[a] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: ue(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: ue(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                }),
                lang: ue(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !x.pseudos.empty(e);
                },
                header: function(e) {
                    return K.test(e.nodeName);
                },
                input: function(e) {
                    return Y.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function() {
                    return [ 0 ];
                }),
                last: ve(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ve(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[e] = pe(e);
        for (e in {
            submit: !0,
            reset: !0
        }) x.pseudos[e] = he(e);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function xe(s, e, t) {
            var l = e.dir, u = e.next, f = u || l, c = t && "parentNode" === f, d = i++;
            return e.first ? function(e, t, n) {
                while (e = e[l]) if (1 === e.nodeType || c) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var i, r, o, a = [ k, d ];
                if (n) {
                    while (e = e[l]) if ((1 === e.nodeType || c) && s(e, t, n)) return !0;
                } else while (e = e[l]) if (1 === e.nodeType || c) if (r = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                u && u === e.nodeName.toLowerCase()) e = e[l] || e; else {
                    if ((i = r[f]) && i[0] === k && i[1] === d) return a[2] = i[2];
                    if ((r[f] = a)[2] = s(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                var i = r.length;
                while (i--) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function Te(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), 
            u && t.push(s)));
            return a;
        }
        function Ce(p, h, g, v, m, e) {
            return v && !v[E] && (v = Ce(v)), m && !m[E] && (m = Ce(m, e)), ue(function(e, t, n, i) {
                var r, o, a, s = [], l = [], u = t.length, f = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), c = !p || !e && h ? f : Te(f, s, p, n, i), d = g ? m || (e ? p : u || v) ? [] : t : c;
                if (g && g(c, d, n, i), v) {
                    r = Te(d, l), v(r, [], n, i), o = r.length;
                    while (o--) (a = r[o]) && (d[l[o]] = !(c[l[o]] = a));
                }
                if (e) {
                    if (m || p) {
                        if (m) {
                            r = [], o = d.length;
                            while (o--) (a = d[o]) && r.push(c[o] = a);
                            m(null, d = [], r, i);
                        }
                        o = d.length;
                        while (o--) (a = d[o]) && -1 < (r = m ? O(e, a) : s[o]) && (e[r] = !(t[r] = a));
                    }
                } else d = Te(d === t ? d.splice(u, d.length) : d), m ? m(null, t, d, i) : M.apply(t, d);
            });
        }
        function Ae(e) {
            for (var r, t, n, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = xe(function(e) {
                return e === r;
            }, a, !0), u = xe(function(e) {
                return -1 < O(r, e);
            }, a, !0), f = [ function(e, t, n) {
                var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i;
            } ]; s < i; s++) if (t = x.relative[e[s].type]) f = [ xe(we(f), t) ]; else {
                if ((t = x.filter[e[s].type].apply(null, e[s].matches))[E]) {
                    for (n = ++s; n < i; n++) if (x.relative[e[n].type]) break;
                    return Ce(1 < s && we(f), 1 < s && be(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(F, "$1"), t, s < n && Ae(e.slice(s, n)), n < i && Ae(e = e.slice(n)), n < i && be(e));
                }
                f.push(t);
            }
            return we(f);
        }
        return ye.prototype = x.filters = x.pseudos, x.setFilters = new ye(), h = se.tokenize = function(e, t) {
            var n, i, r, o, a, s, l, u = b[e + " "];
            if (u) return t ? 0 : u.slice(0);
            a = e, s = [], l = x.preFilter;
            while (a) {
                for (o in n && !(i = z.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), 
                n = !1, (i = _.exec(a)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(F, " ")
                }), a = a.slice(n.length)), x.filter) !(i = G[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
        }, c = se.compile = function(e, t) {
            var n, v, m, y, b, i, r = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ae(t[n]))[E] ? r.push(a) : o.push(a);
                (a = N(e, (v = o, y = 0 < (m = r).length, b = 0 < v.length, i = function(e, t, n, i, r) {
                    var o, a, s, l = 0, u = "0", f = e && [], c = [], d = w, p = e || b && x.find.TAG("*", r), h = k += null == d ? 1 : Math.random() || .1, g = p.length;
                    for (r && (w = t === C || t || r); u !== g && null != (o = p[u]); u++) {
                        if (b && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !A);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                i.push(o);
                                break;
                            }
                            r && (k = h);
                        }
                        y && ((o = !s && o) && l--, e && f.push(o));
                    }
                    if (l += u, y && u !== l) {
                        a = 0;
                        while (s = m[a++]) s(f, c, t, n);
                        if (e) {
                            if (0 < l) while (u--) f[u] || c[u] || (c[u] = L.call(i));
                            c = Te(c);
                        }
                        M.apply(i, c), r && !e && 0 < c.length && 1 < l + m.length && se.uniqueSort(i);
                    }
                    return r && (k = h, w = d), f;
                }, y ? ue(i) : i))).selector = e;
            }
            return a;
        }, g = se.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e, f = !i && h(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (o = f[0] = f[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && A && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                r = G.needsContext.test(e) ? 0 : o.length;
                while (r--) {
                    if (a = o[r], x.relative[s = a.type]) break;
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(te, ne), ee.test(o[0].type) && me(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && be(o))) return M.apply(n, i), n;
                        break;
                    }
                }
            }
            return (u || c(e, f))(i, t, !A, n, !t || ee.test(e) && me(t.parentNode) || t), n;
        }, p.sortStable = E.split("").sort(D).join("") === E, p.detectDuplicates = !!u, 
        T(), p.sortDetached = fe(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), fe(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), p.attributes && fe(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), fe(function(e) {
            return null == e.getAttribute("disabled");
        }) || ce(q, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), se;
    }(C);
    E.find = h, E.expr = h.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = h.uniqueSort, 
    E.text = h.getText, E.isXMLDoc = h.isXML, E.contains = h.contains, E.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var i = [], r = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (r && E(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, k = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, N = E.expr.match.needsContext;
    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function I(e, n, i) {
        return y(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== i;
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < r.call(n, e) !== i;
        }) : E.filter(n, e, i);
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [ i ] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, E.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
            return 1 < i ? E.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0));
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length;
        }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : A, !0)), 
                D.test(i[1]) && E.isPlainObject(t)) for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = A.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
    }).prototype = E.fn, L = E(A);
    var M = /^(?:parents|prev(?:Until|All))/, H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && E(e);
            if (!N.test(e)) for (;i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(E(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return T(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n);
        },
        next: function(e) {
            return O(e, "nextSibling");
        },
        prev: function(e) {
            return O(e, "previousSibling");
        },
        nextAll: function(e) {
            return T(e, "nextSibling");
        },
        prevAll: function(e) {
            return T(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n);
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return k(e.firstChild);
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (S(e, "template") && (e = e.content || e), 
            E.merge([], e.childNodes));
        }
    }, function(i, r) {
        E.fn[i] = function(e, t) {
            var n = E.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 
            1 < this.length && (H[i] || E.uniqueSort(n), M.test(i) && n.reverse()), this.pushStack(n);
        };
    });
    var q = /[^\x20\t\r\n\f]+/g;
    function $(e) {
        return e;
    }
    function P(e) {
        throw e;
    }
    function R(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    E.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, E.each(e.match(q) || [], function(e, t) {
            n[t] = !0;
        }), n) : E.extend({}, i);
        var r, t, o, a, s = [], l = [], u = -1, f = function() {
            for (a = a || i.once, o = r = !0; l.length; u = -1) {
                t = l.shift();
                while (++u < s.length) !1 === s[u].apply(t[0], t[1]) && i.stopOnFalse && (u = s.length, 
                t = !1);
            }
            i.memory || (t = !1), r = !1, a && (s = t ? [] : "");
        }, c = {
            add: function() {
                return s && (t && !r && (u = s.length - 1, l.push(t)), function n(e) {
                    E.each(e, function(e, t) {
                        y(t) ? i.unique && c.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                    });
                }(arguments), t && !r && f()), this;
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= u && u--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = l = [], s = t = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = l = [], t || r || (s = t = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], l.push(t), r || f()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return c;
    }, E.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2 ], [ "resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", a = {
                state: function() {
                    return r;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var r = arguments;
                    return E.Deferred(function(i) {
                        E.each(o, function(e, t) {
                            var n = y(r[t[4]]) && r[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                then: function(t, n, i) {
                    var l = 0;
                    function u(r, o, a, s) {
                        return function() {
                            var n = this, i = arguments, e = function() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, u(l, o, $, s), u(l, o, P, s)) : (l++, 
                                    t.call(e, u(l, o, $, s), u(l, o, P, s), u(l, o, $, o.notifyWith))) : (a !== $ && (n = void 0, 
                                    i = [ e ]), (s || o.resolveWith)(n, i));
                                }
                            }, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (a !== P && (n = void 0, 
                                    i = [ e ]), o.rejectWith(n, i));
                                }
                            };
                            r ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(u(0, e, y(i) ? i : $, e.notifyWith)), o[1][3].add(u(0, e, y(t) ? t : $)), 
                        o[2][3].add(u(0, e, y(n) ? n : P));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a;
                }
            }, s = {};
            return E.each(o, function(e, t) {
                var n = t[2], i = t[5];
                a[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var n = arguments.length, t = n, i = Array(t), r = s.call(arguments), o = E.Deferred(), a = function(t) {
                return function(e) {
                    i[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(i, r);
                };
            };
            if (n <= 1 && (R(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
            while (t--) R(r[t], a(t), o.reject);
            return o.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && B.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, E.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    };
    var W = E.Deferred();
    function F() {
        A.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), 
        E.ready();
    }
    E.fn.ready = function(e) {
        return W.then(e)["catch"](function(e) {
            E.readyException(e);
        }), this;
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(A, [ E ]);
        }
    }), E.ready.then = W.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? C.setTimeout(E.ready) : (A.addEventListener("DOMContentLoaded", F), 
    C.addEventListener("load", F));
    var z = function(e, t, n, i, r, o, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === w(n)) for (s in r = !0, n) z(e, t, s, n[s], !0, o, a); else if (void 0 !== i && (r = !0, 
        y(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
            return u.call(E(e), n);
        })), t)) for (;s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, _ = /^-ms-/, X = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function V(e) {
        return e.replace(_, "ms-").replace(X, U);
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = E.expando + Q.uid++;
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[V(t)] = n; else for (i in t) r[V(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [ t ] : t.match(q) || []).length;
                    while (n--) delete i[t[n]];
                }
                (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t);
        }
    };
    var Y = new Q(), K = new Q(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;
    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r);
            } catch (e) {}
            K.set(e, t, n);
        } else n = void 0;
        return n;
    }
    E.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e);
        },
        data: function(e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function(e, t) {
            K.remove(e, t);
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function(e, t) {
            Y.remove(e, t);
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = V(i.slice(5)), 
                    ee(o, i, r[i]));
                    Y.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof n ? this.each(function() {
                K.set(this, n);
            }) : z(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = K.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    K.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e);
            });
        }
    }), E.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, E.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t), i = n.length, r = n.shift(), o = E._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, function() {
                E.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = E.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t);
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), ie = [ "Top", "Right", "Bottom", "Left" ], re = A.documentElement, oe = function(e) {
        return E.contains(e.ownerDocument, e);
    }, ae = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display");
    }, le = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
        return r;
    };
    function ue(e, t, n, i) {
        var r, o, a = 20, s = i ? function() {
            return i.cur();
        } : function() {
            return E.css(e, t, "");
        }, l = s(), u = n && n[3] || (E.cssNumber[t] ? "" : "px"), f = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && ne.exec(E.css(e, t));
        if (f && f[3] !== u) {
            l /= 2, u = u || f[3], f = +l || 1;
            while (a--) E.style(e, t, f + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), 
            f /= o;
            f *= 2, E.style(e, t, f + u), n = n || [];
        }
        return n && (f = +f || +l || 0, r = n[1] ? f + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = f, i.end = r)), r;
    }
    var fe = {};
    function ce(e, t) {
        for (var n, i, r, o, a, s, l, u = [], f = 0, c = e.length; f < c; f++) (i = e[f]).style && (n = i.style.display, 
        t ? ("none" === n && (u[f] = Y.get(i, "display") || null, u[f] || (i.style.display = "")), 
        "" === i.style.display && se(i) && (u[f] = (l = a = o = void 0, a = (r = i).ownerDocument, 
        s = r.nodeName, (l = fe[s]) || (o = a.body.appendChild(a.createElement(s)), l = E.css(o, "display"), 
        o.parentNode.removeChild(o), "none" === l && (l = "block"), fe[s] = l)))) : "none" !== n && (u[f] = "none", 
        Y.set(i, "display", n)));
        for (f = 0; f < c; f++) null != u[f] && (e[f].style.display = u[f]);
        return e;
    }
    E.fn.extend({
        show: function() {
            return ce(this, !0);
        },
        hide: function() {
            return ce(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? E(this).show() : E(this).hide();
            });
        }
    });
    var de = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && S(e, t) ? E.merge([ e ], n) : n;
    }
    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
    ge.th = ge.td;
    var ye, be, xe = /<|&#?\w+;/;
    function we(e, t, n, i, r) {
        for (var o, a, s, l, u, f, c = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === w(o)) E.merge(d, o.nodeType ? [ o ] : o); else if (xe.test(o)) {
            a = a || c.appendChild(t.createElement("div")), s = (pe.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = ge[s] || ge._default, a.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], f = l[0];
            while (f--) a = a.lastChild;
            E.merge(d, a.childNodes), (a = c.firstChild).textContent = "";
        } else d.push(t.createTextNode(o));
        c.textContent = "", p = 0;
        while (o = d[p++]) if (i && -1 < E.inArray(o, i)) r && r.push(o); else if (u = oe(o), 
        a = ve(c.appendChild(o), "script"), u && me(a), n) {
            f = 0;
            while (o = a[f++]) he.test(o.type || "") && n.push(o);
        }
        return c;
    }
    ye = A.createDocumentFragment().appendChild(A.createElement("div")), (be = A.createElement("input")).setAttribute("type", "radio"), 
    be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), 
    m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", 
    m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return A.activeElement;
            } catch (e) {}
        }() == ("focus" === t);
    }
    function Se(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, s, n, i, t[s], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ke; else if (!r) return e;
        return 1 === o && (a = r, (r = function(e) {
            return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, r, i, n);
        });
    }
    function De(e, r, o) {
        o ? (Y.set(e, r, !1), E.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = Y.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length) (E.event.special[r] || {}).delegateType && e.stopPropagation(); else if (i = s.call(arguments), 
                    Y.set(this, r, i), t = o(this, r), this[r](), i !== (n = Y.get(this, r)) || t ? Y.set(this, r, !1) : n = {}, 
                    i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else i.length && (Y.set(this, r, {
                    value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Y.get(e, r) && E.event.add(e, r, Ee);
    }
    E.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, u, f, c, d, p, h, g, v = Y.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(re, r), 
                n.guid || (n.guid = E.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
                }), u = (e = (e || "").match(q) || [ "" ]).length;
                while (u--) p = g = (s = Ae.exec(e[u]) || [])[1], h = (s[2] || "").split(".").sort(), 
                p && (c = E.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, 
                c = E.event.special[p] || {}, f = E.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && E.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(p, a)), 
                c.add && (c.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
                E.event.global[p] = !0);
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, f, c, d, p, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (l = v.events)) {
                u = (t = (t || "").match(q) || [ "" ]).length;
                while (u--) if (p = g = (s = Ae.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), 
                p) {
                    c = E.event.special[p] || {}, d = l[p = (i ? c.delegateType : c.bindType) || p] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
                    while (o--) f = d[o], !r && g !== f.origType || n && n.guid !== f.guid || s && !s.test(f.namespace) || i && i !== f.selector && ("**" !== i || !f.selector) || (d.splice(o, 1), 
                    f.selector && d.delegateCount--, c.remove && c.remove.call(e, f));
                    a && !d.length && (c.teardown && !1 !== c.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), 
                    delete l[p]);
                } else for (p in l) E.event.remove(e, p + t[u], n, i, !0);
                E.isEmptyObject(l) && Y.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = E.event.fix(e), l = new Array(arguments.length), u = (Y.get(this, "events") || {})[s.type] || [], f = E.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !f.preDispatch || !1 !== f.preDispatch.call(this, s)) {
                a = E.event.handlers.call(this, s, u), t = 0;
                while ((r = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = r.elem, n = 0;
                    while ((o = r.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                    s.data = o.data, void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), 
                    s.stopPropagation()));
                }
                return f.postDispatch && f.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < E(r, this).index(u) : E.find(r, this, null, [ u ]).length), 
                a[r] && o.push(i);
                o.length && s.push({
                    elem: u,
                    handlers: o
                });
            }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && De(t, "click", Ee), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && De(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1;
            },
            trigger: function() {
                return De(this, e), !0;
            },
            delegateType: t
        };
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        E.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = r), t;
            }
        };
    }), E.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), 
            this.each(function() {
                E.event.remove(this, e, n, t);
            });
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Le = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function He(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function $e(e, t) {
        var n, i, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), u = o.events)) for (r in delete a.handle, 
            a.events = {}, u) for (n = 0, i = u[r].length; n < i; n++) E.event.add(t, r, u[r][n]);
            K.hasData(e) && (s = K.access(e), l = E.extend({}, s), K.set(t, l));
        }
    }
    function Pe(n, i, r, o) {
        i = g.apply([], i);
        var e, t, a, s, l, u, f = 0, c = n.length, d = c - 1, p = i[0], h = y(p);
        if (h || 1 < c && "string" == typeof p && !m.checkClone && je.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (i[0] = p.call(this, e, t.html())), Pe(t, i, r, o);
        });
        if (c && (t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (s = (a = E.map(ve(e, "script"), Oe)).length; f < c; f++) l = e, f !== d && (l = E.clone(l, !0, !0), 
            s && E.merge(a, ve(l, "script"))), r.call(n[f], l, f);
            if (s) for (u = a[a.length - 1].ownerDocument, E.map(a, qe), f = 0; f < s; f++) l = a[f], 
            he.test(l.type || "") && !Y.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                nonce: l.nonce || l.getAttribute("nonce")
            }) : x(l.textContent.replace(Me, ""), l, u));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(ve(i)), 
        i.parentNode && (n && oe(i) && me(ve(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l, u, f = e.cloneNode(!0), c = oe(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ve(f), 
            i = 0, r = (o = ve(e)).length; i < r; i++) s = o[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(f), i = 0, r = o.length; i < r; i++) $e(o[i], a[i]); else $e(e, f);
            return 0 < (a = ve(f, "script")).length && me(a, !c && ve(e, "script")), f;
        },
        cleanData: function(e) {
            for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                    n[Y.expando] = void 0;
                }
                n[K.expando] && (n[K.expando] = void 0);
            }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Re(this, e, !0);
        },
        remove: function(e) {
            return Re(this, e);
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ve(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t);
            });
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !ge[(pe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ve(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ve(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], i = E(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), 
            E(i[o])[a](t), l.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var Be = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), We = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    }, Fe = new RegExp(ie.join("|"), "i");
    function ze(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = E.style(e, t)), 
        !m.pixelBoxStyles() && Be.test(a) && Fe.test(t) && (i = s.width, r = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, 
        s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e() {
            if (l) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                re.appendChild(s).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), 
                i = 36 === t(e.width), l.style.position = "absolute", r = 12 === t(l.offsetWidth / 3), 
                re.removeChild(s), l = null;
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, i, r, o, a, s = A.createElement("div"), l = A.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
            boxSizingReliable: function() {
                return e(), i;
            },
            pixelBoxStyles: function() {
                return e(), o;
            },
            pixelPosition: function() {
                return e(), n;
            },
            reliableMarginLeft: function() {
                return e(), a;
            },
            scrollboxSize: function() {
                return e(), r;
            }
        }));
    }();
    var Xe = [ "Webkit", "Moz", "ms" ], Ue = A.createElement("div").style, Ve = {};
    function Ge(e) {
        var t = E.cssProps[e] || Ve[e];
        return t || (e in Ue ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
            while (n--) if ((e = Xe[n] + t) in Ue) return e;
        }(e) || e);
    }
    var Qe = /^(none|table(?!-c[ea]).+)/, Ye = /^--/, Ke = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Je = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function et(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0, s = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (;a < 4; a += 2) "margin" === n && (l += E.css(e, n + ie[a], !0, r)), i ? ("content" === n && (l -= E.css(e, "padding" + ie[a], !0, r)), 
        "margin" !== n && (l -= E.css(e, "border" + ie[a] + "Width", !0, r))) : (l += E.css(e, "padding" + ie[a], !0, r), 
        "padding" !== n ? l += E.css(e, "border" + ie[a] + "Width", !0, r) : s += E.css(e, "border" + ie[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), 
        l;
    }
    function tt(e, t, n) {
        var i = We(e), r = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i), o = r, a = ze(e, t, i), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (!m.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i), 
        (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, a) + "px";
    }
    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r);
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = V(t), l = Ye.test(t), u = e.style;
                if (l || (t = Ge(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                "string" === (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), 
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[s] ? "" : "px")), 
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = V(t);
            return Ye.test(t) || (t = Ge(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), 
            void 0 === r && (r = ze(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), E.each([ "height", "width" ], function(e, l) {
        E.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !Qe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, l, n) : le(e, Ke, function() {
                    return tt(e, l, n);
                });
            },
            set: function(e, t, n) {
                var i, r = We(e), o = !m.scrollboxSize() && "absolute" === r.position, a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, r), s = n ? et(e, l, n, a, r) : 0;
                return a && o && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - et(e, l, "border", !1, r) - .5)), 
                s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = E.css(e, l)), 
                Ze(0, t, s);
            }
        };
    }), E.cssHooks.marginLeft = _e(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        E.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, "margin" !== r && (E.cssHooks[r + o].set = Ze);
    }), E.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = We(e), r = t.length; a < r; a++) o[t[a]] = E.css(e, t[a], !1, i);
                    return o;
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
            }, e, t, 1 < arguments.length);
        }
    }), ((E.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || E.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (E.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, E.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, E.fx = nt.prototype.init, E.fx.step = {};
    var it, rt, ot, at, st = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
    function ut() {
        rt && (!1 === A.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ut) : C.setTimeout(ut, E.fx.interval), 
        E.fx.tick());
    }
    function ft() {
        return C.setTimeout(function() {
            it = void 0;
        }), it = Date.now();
    }
    function ct(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function dt(e, t, n) {
        for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function pt(o, e, t) {
        var n, a, i = 0, r = pt.prefilters.length, s = E.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (a) return !1;
            for (var e = it || ft(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return s.notifyWith(o, [ u, n, t ]), n < 1 && r ? t : (r || s.notifyWith(o, [ u, 1, 0 ]), 
            s.resolveWith(o, [ u ]), !1);
        }, u = s.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: it || ft(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) u.tweens[t].run(1);
                return e ? (s.notifyWith(o, [ u, 1, 0 ]), s.resolveWith(o, [ u, e ])) : s.rejectWith(o, [ u, e ]), 
                this;
            }
        }), f = u.props;
        for (!function(e, t) {
            var n, i, r, o, a;
            for (n in e) if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), 
            n !== i && (e[i] = o, delete e[n]), (a = E.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), 
            delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r;
        }(f, u.opts.specialEasing); i < r; i++) if (n = pt.prefilters[i].call(u, o, f, u.opts)) return y(n.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), 
        n;
        return E.map(f, dt, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
        E.fx.timer(E.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u;
    }
    E.Animation = E.extend(pt, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ne.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            y(e) ? (t = e, e = [ "*" ]) : e = e.match(q);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], pt.tweeners[n] = pt.tweeners[n] || [], 
            pt.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, r, o, a, s, l, u, f, c = "width" in t || "height" in t, d = this, p = {}, h = e.style, g = e.nodeType && se(e), v = Y.get(e, "fxshow");
            for (i in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
            s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                });
            })), t) if (r = t[i], st.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0;
                }
                p[i] = v && v[i] || E.style(e, i);
            }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p)) for (i in c && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (u = v && v.display) && (u = Y.get(e, "display")), "none" === (f = E.css(e, "display")) && (u ? f = u : (ce([ e ], !0), 
            u = e.style.display || u, f = E.css(e, "display"), ce([ e ]))), ("inline" === f || "inline-block" === f && null != u) && "none" === E.css(e, "float") && (l || (d.done(function() {
                h.display = u;
            }), null == u && (f = h.display, u = "none" === f ? "" : f)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1, p) l || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                display: u
            }), o && (v.hidden = !g), g && ce([ e ], !0), d.done(function() {
                for (i in g || ce([ e ]), Y.remove(e, "fxshow"), p) E.style(e, i, p[i]);
            })), l = dt(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, 
            l.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
    }), E.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
        }, i;
    }, E.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            var r = E.isEmptyObject(t), o = E.speed(e, n, i), a = function() {
                var e = pt(this, E.extend({}, t), o);
                (r || Y.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(r, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = E.timers, i = Y.get(this);
                if (t) i[t] && i[t].stop && a(i[t]); else for (t in i) i[t] && i[t].stop && lt.test(t) && a(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, r);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = E.timers, o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), E.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = E.fn[i];
        E.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ct(i, !0), e, t, n);
        };
    }), E.each({
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        E.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), it = void 0;
    }, E.fx.timer = function(e) {
        E.timers.push(e), E.fx.start();
    }, E.fx.interval = 13, E.fx.start = function() {
        rt || (rt = !0, ut());
    }, E.fx.stop = function() {
        rt = null;
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(i, e) {
        return i = E.fx && E.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, ot = A.createElement("input"), at = A.createElement("select").appendChild(A.createElement("option")), 
    ot.type = "checkbox", m.checkOn = "" !== ot.value, m.optSelected = at.selected, 
    (ot = A.createElement("input")).value = "t", ot.type = "radio", m.radioValue = "t" === ot.value;
    var ht, gt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return z(this, E.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e);
            });
        }
    }), E.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ht : void 0)), 
            void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(q);
            if (r && 1 === e.nodeType) while (n = r[i++]) e.removeAttribute(n);
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || E.find.attr;
        gt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = gt[o], gt[o] = i, i = null != a(e, t, n) ? o : null, gt[o] = r), 
            i;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, mt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(q) || []).join(" ");
    }
    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [];
    }
    E.fn.extend({
        prop: function(e, t) {
            return z(this, E.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e];
            });
        }
    }), E.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, 
            r = E.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), E.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        E.propFix[this.toLowerCase()] = this;
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (y(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, bt(this)));
            });
            if ((e = xt(t)).length) while (n = this[l++]) if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                a = 0;
                while (o = e[a++]) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (s = yt(i)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (y(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, bt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xt(t)).length) while (n = this[l++]) if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                a = 0;
                while (o = e[a++]) while (-1 < i.indexOf(" " + o + " ")) i = i.replace(" " + o + " ", " ");
                r !== (s = yt(i)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var o = typeof r, a = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                E(this).toggleClass(r.call(this, e, bt(this), t), t);
            }) : this.each(function() {
                var e, t, n, i;
                if (a) {
                    t = 0, n = E(this), i = xt(r);
                    while (e = i[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== r && "boolean" !== o || ((e = bt(this)) && Y.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Y.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            t = " " + e + " ";
            while (n = this[i++]) if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var wt = /\r/g;
    E.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                        if (t = E(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, i, r = e.options, o = E.makeArray(t), a = r.length;
                    while (a--) ((i = r[a]).selected = -1 < E.inArray(E.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), E.each([ "radio", "checkbox" ], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t);
            }
        }, m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), m.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function(e) {
        e.stopPropagation();
    };
    E.extend(E.event, {
        trigger: function(e, t, n, i) {
            var r, o, a, s, l, u, f, c, d = [ n || A ], p = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = c = a = n = n || A, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), 
            h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : E.makeArray(t, [ e ]), 
            f = E.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                if (!i && !f.noBubble && !b(n)) {
                    for (s = f.delegateType || p, Tt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    a = o;
                    a === (n.ownerDocument || A) && d.push(a.defaultView || a.parentWindow || C);
                }
                r = 0;
                while ((o = d[r++]) && !e.isPropagationStopped()) c = o, e.type = 1 < r ? s : f.bindType || p, 
                (u = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && u.apply(o, t), 
                (u = l && o[l]) && u.apply && G(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), t) || !G(n) || l && y(n[p]) && !b(n) && ((a = n[l]) && (n[l] = null), 
                E.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Ct), n[p](), 
                e.isPropagationStopped() && c.removeEventListener(p, Ct), E.event.triggered = void 0, 
                a && (n[l] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var i = E.extend(new E.Event(), n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(i, null, t);
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0);
        }
    }), m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            E.event.simulate(i, e.target, E.event.fix(e));
        };
        E.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this, t = Y.access(e, i);
                t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i));
            }
        };
    });
    var At = C.location, Et = Date.now(), kt = /\?/;
    E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), 
        t;
    };
    var Nt = /\[\]$/, St = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
    function Lt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) {
            i || Nt.test(n) ? r(n, t) : Lt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== w(e)) r(n, e); else for (t in e) Lt(n + "[" + t + "]", e[t], i, r);
    }
    E.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) Lt(n, e[n], t, r);
        return i.join("&");
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && It.test(this.nodeName) && !Dt.test(e) && (this.checked || !de.test(e));
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                };
            }).get();
        }
    });
    var jt = /%20/g, Mt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, qt = /^(?:GET|HEAD)$/, $t = /^\/\//, Pt = {}, Rt = {}, Bt = "*/".concat("*"), Wt = A.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(q) || [];
            if (y(t)) while (n = r[i++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function zt(t, r, o, a) {
        var s = {}, l = t === Rt;
        function u(e) {
            var i;
            return s[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                u(n), !1);
            }), i;
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*");
    }
    function _t(e, t) {
        var n, i, r = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && E.extend(!0, e, i), e;
    }
    Wt.href = At.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _t(_t(e, E.ajaxSettings), t) : _t(E.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Pt),
        ajaxTransport: Ft(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var f, c, d, n, p, i, h, g, r, o, v = E.ajaxSetup({}, t), m = v.context || v, y = v.context && (m.nodeType || m.jquery) ? E(m) : E.event, b = E.Deferred(), x = E.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ot.exec(d)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        }
                        t = n[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? d : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    return f && f.abort(t), u(0, t), this;
                }
            };
            if (b.promise(T), v.url = ((e || v.url || At.href) + "").replace($t, At.protocol + "//"), 
            v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(q) || [ "" ], 
            null == v.crossDomain) {
                i = A.createElement("a");
                try {
                    i.href = v.url, i.href = i.href, v.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = E.param(v.data, v.traditional)), 
            zt(Pt, v, t, T), h) return T;
            for (r in (g = E.event && v.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), 
            v.type = v.type.toUpperCase(), v.hasContent = !qt.test(v.type), c = v.url.replace(Mt, ""), 
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(c.length), 
            v.data && (v.processData || "string" == typeof v.data) && (c += (kt.test(c) ? "&" : "?") + v.data, 
            delete v.data), !1 === v.cache && (c = c.replace(Ht, "$1"), o = (kt.test(c) ? "&" : "?") + "_=" + Et++ + o), 
            v.url = c + o), v.ifModified && (E.lastModified[c] && T.setRequestHeader("If-Modified-Since", E.lastModified[c]), 
            E.etag[c] && T.setRequestHeader("If-None-Match", E.etag[c])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), 
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : v.accepts["*"]), 
            v.headers) T.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h)) return T.abort();
            if (l = "abort", x.add(v.complete), T.done(v.success), T.fail(v.error), f = zt(Rt, v, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [ T, v ]), h) return T;
                v.async && 0 < v.timeout && (p = C.setTimeout(function() {
                    T.abort("timeout");
                }, v.timeout));
                try {
                    h = !1, f.send(a, u);
                } catch (e) {
                    if (h) throw e;
                    u(-1, e);
                }
            } else u(-1, "No Transport");
            function u(e, t, n, i) {
                var r, o, a, s, l, u = t;
                h || (h = !0, p && C.clearTimeout(p), f = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var i, r, o, a, s = e.contents, l = e.dataTypes;
                    while ("*" === l[0]) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in s) if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break;
                            }
                            a || (a = r);
                        }
                        o = o || a;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                }(v, T, n)), s = function(e, t, n, i) {
                    var r, o, a, s, l, u = {}, f = e.dataTypes.slice();
                    if (f[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    o = f.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    l = o, o = f.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o])) for (r in u) if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], f.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(v, s, T, r), r ? (v.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (E.lastModified[c] = l), 
                (l = T.getResponseHeader("etag")) && (E.etag[c] = l)), 204 === e || "HEAD" === v.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, 
                o = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || u) + "", r ? b.resolveWith(m, [ o, u, T ]) : b.rejectWith(m, [ T, u, a ]), 
                T.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, v, r ? o : a ]), 
                x.fireWith(m, [ T, u ]), g && (y.trigger("ajaxComplete", [ T, v ]), --E.active || E.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script");
        }
    }), E.each([ "get", "post" ], function(e, r) {
        E[r] = function(e, t, n, i) {
            return y(t) && (i = i || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, E.isPlainObject(e) && e));
        };
    }), E._evalUrl = function(e, t) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t);
            }
        });
    }, E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = E(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes);
            }), this;
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e);
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Xt = {
        0: 200,
        1223: 204
    }, Ut = E.ajaxSettings.xhr();
    m.cors = !!Ut && "withCredentials" in Ut, m.ajax = Ut = !!Ut, E.ajaxTransport(function(r) {
        var o, a;
        if (m.cors || Ut && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, 
                        "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Xt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()));
                    };
                }, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e;
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), E.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), A.head.appendChild(i[0]);
            },
            abort: function() {
                r && r();
            }
        };
    });
    var Vt, Gt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || E.expando + "_" + Et++;
            return this[e] = !0, e;
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return o || E.error(i + " was not called"), o[0];
        }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === r ? E(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, 
            Gt.push(i)), o && y(r) && r(o[0]), o = r = void 0;
        }), "script";
    }), m.createHTMLDocument = ((Vt = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === Vt.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, 
        t.head.appendChild(i)) : t = A), o = !n && [], (r = D.exec(e)) ? [ t.createElement(r[1]) ] : (r = we([ e ], t, o), 
        o && o.length && E(o).remove(), E.merge([], r.childNodes)));
        var i, r, o;
    }, E.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return -1 < s && (i = yt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 
        0 < a.length && E.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, E.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem;
        }).length;
    }, E.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u = E.css(e, "position"), f = E(e), c = {};
            "static" === u && (e.style.position = "relative"), s = f.offset(), o = E.css(e, "top"), 
            l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (i = f.position()).top, 
            r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, E.extend({}, s))), 
            null != t.top && (c.top = t.top - s.top + a), null != t.left && (c.left = t.left - s.left + r), 
            "using" in t ? t.using.call(e, c) : f.css(c);
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e);
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, 
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect(); else {
                    t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0), 
                    r.left += E.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - r.top - E.css(i, "marginTop", !0),
                    left: t.left - r.left - E.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re;
            });
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        E.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var i;
                if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), E.each([ "top", "left" ], function(e, n) {
        E.cssHooks[n] = _e(m.pixelPosition, function(e, t) {
            if (t) return t = ze(e, n), Be.test(t) ? E(e).position()[n] + "px" : t;
        });
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) {
                    var i;
                    return b(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? E.css(e, t, r) : E.style(e, t, n, r);
                }, s, n ? e : void 0, n);
            };
        });
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), E.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = s.call(arguments, 2), 
        (r = function() {
            return e.apply(t || this, i.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || E.guid++, r;
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0);
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = y, 
    E.isWindow = b, E.camelCase = V, E.type = w, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E;
    });
    var Yt = C.jQuery, Kt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Kt), e && C.jQuery === E && (C.jQuery = Yt), E;
    }, e || (C.jQuery = C.$ = E), E;
});

!function(l) {
    "use strict";
    function n(e, t) {
        this.element = e, this.settings = l.extend({}, r, t), this._defaults = r, this._name = i, 
        this.init();
    }
    var e, i = "align", t = i + "ResizeDone", r = {
        bottom: !1,
        selector: "> *"
    }, o = {
        update: "update",
        reset: "reset"
    };
    n.prototype.init = function() {
        var e = this;
        this.select(), l(window).on("load " + t, function() {
            e.align();
        }), e.align();
    }, n.prototype.select = function() {
        this.boxes = l(this.element).find(this.settings.selector), this.save();
    }, n.prototype.save = function() {
        this.boxes.each(function(e, t) {
            var n = l(t);
            n.attr("style") && !n.data("style") && n.data("style", n.attr("style"));
        });
    }, n.prototype.reset = function() {
        this.naturalize(), this.boxes.each(function(e, t) {
            var n = l(t);
            if (n.data("style")) return n.attr("style", n.data("style"));
            n.removeAttr("style");
        });
    }, n.prototype.naturalize = function() {
        this.boxes.each(function(e, t) {
            l(t).height("auto");
        });
    }, n.prototype.align = function() {
        var o = this, a = o.boxes, s = [];
        this.naturalize(), a.each(function(e, t) {
            var n = l(t), i = 0, r = n.add(a.not(n).filter(function() {
                var e = n.offset().top, t = l(this).offset().top;
                return o.settings.bottom && (e += n.height(), t += l(this).height()), e === t;
            }));
            1 !== r.length && -1 === l.inArray(t, s) && (r.each(function(e, t) {
                var n = l(t).outerHeight();
                i < n && (i = n), s.push(t);
            }), r.each(function(e, t) {
                return l(t).outerHeight(i);
            }));
        });
    }, n.prototype.update = function() {
        this.select(), this.align();
    }, l.fn[i] = function(t) {
        return this.each(function() {
            var e = l.data(this, i);
            if ("string" == typeof t) return void 0 !== e && void 0 !== o[t] && e[o[t]]();
            e || l.data(this, i, new n(this, t));
        });
    }, l(window).on("resize", function() {
        window.clearTimeout(e), e = window.setTimeout(function() {
            l(window).trigger(t);
        }, 50);
    });
}(jQuery);

!function(e, t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.lightbox = t(e.jQuery);
}(this, function(d) {
    function e(e) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = d.extend({}, this.constructor.defaults), 
        this.option(e);
    }
    return e.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, e.prototype.option = function(e) {
        d.extend(this.options, e);
    }, e.prototype.imageCountLabel = function(e, t) {
        return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t);
    }, e.prototype.init = function() {
        var e = this;
        d(document).ready(function() {
            e.enable(), e.build();
        });
    }, e.prototype.enable = function() {
        var t = this;
        d("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(e) {
            return t.start(d(e.currentTarget)), !1;
        });
    }, e.prototype.build = function() {
        if (!(d("#lightbox").length > 0)) {
            var t = this;
            d('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(d("body")), 
            this.$lightbox = d("#lightbox"), this.$overlay = d("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), 
            this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), 
            this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
                top: parseInt(this.$container.css("padding-top"), 10),
                right: parseInt(this.$container.css("padding-right"), 10),
                bottom: parseInt(this.$container.css("padding-bottom"), 10),
                left: parseInt(this.$container.css("padding-left"), 10)
            }, this.imageBorderWidth = {
                top: parseInt(this.$image.css("border-top-width"), 10),
                right: parseInt(this.$image.css("border-right-width"), 10),
                bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                left: parseInt(this.$image.css("border-left-width"), 10)
            }, this.$overlay.hide().on("click", function() {
                return t.end(), !1;
            }), this.$lightbox.hide().on("click", function(e) {
                "lightbox" === d(e.target).attr("id") && t.end();
            }), this.$outerContainer.on("click", function(e) {
                return "lightbox" === d(e.target).attr("id") && t.end(), !1;
            }), this.$lightbox.find(".lb-prev").on("click", function() {
                return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1), 
                !1;
            }), this.$lightbox.find(".lb-next").on("click", function() {
                return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1), 
                !1;
            }), this.$nav.on("mousedown", function(e) {
                3 === e.which && (t.$nav.css("pointer-events", "none"), t.$lightbox.one("contextmenu", function() {
                    setTimeout(function() {
                        this.$nav.css("pointer-events", "auto");
                    }.bind(t), 0);
                }));
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                return t.end(), !1;
            });
        }
    }, e.prototype.start = function(e) {
        function t(e) {
            n.album.push({
                alt: e.attr("data-alt"),
                link: e.attr("href"),
                title: e.attr("data-title") || e.attr("title")
            });
        }
        var n = this, i = d(window);
        i.on("resize", d.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
        var r, o = 0, a = e.attr("data-lightbox");
        if (a) {
            r = d(e.prop("tagName") + '[data-lightbox="' + a + '"]');
            for (var s = 0; s < r.length; s = ++s) t(d(r[s])), r[s] === e[0] && (o = s);
        } else if ("lightbox" === e.attr("rel")) t(e); else {
            r = d(e.prop("tagName") + '[rel="' + e.attr("rel") + '"]');
            for (var l = 0; l < r.length; l = ++l) t(d(r[l])), r[l] === e[0] && (o = l);
        }
        var u = i.scrollTop() + this.options.positionFromTop, f = i.scrollLeft();
        this.$lightbox.css({
            top: u + "px",
            left: f + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && d("body").addClass("lb-disable-scrolling"), 
        this.changeImage(o);
    }, e.prototype.changeImage = function(a) {
        var s = this, l = this.album[a].link, u = l.split(".").slice(-1)[0], f = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), d(".lb-loader").fadeIn("slow"), 
        this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), 
        this.$outerContainer.addClass("animating");
        var c = new Image();
        c.onload = function() {
            var e, t, n, i, r, o;
            f.attr({
                alt: s.album[a].alt,
                src: l
            }), d(c), f.width(c.width), f.height(c.height), o = d(window).width(), r = d(window).height(), 
            i = o - s.containerPadding.left - s.containerPadding.right - s.imageBorderWidth.left - s.imageBorderWidth.right - 20, 
            n = r - s.containerPadding.top - s.containerPadding.bottom - s.imageBorderWidth.top - s.imageBorderWidth.bottom - s.options.positionFromTop - 70, 
            "svg" === u && (0 !== c.width && 0 !== c.height || (f.width(i), f.height(n))), s.options.fitImagesInViewport ? (s.options.maxWidth && s.options.maxWidth < i && (i = s.options.maxWidth), 
            s.options.maxHeight && s.options.maxHeight < n && (n = s.options.maxHeight)) : (i = s.options.maxWidth || c.width || i, 
            n = s.options.maxHeight || c.height || n), (c.width > i || c.height > n) && (c.width / i > c.height / n ? (t = i, 
            e = parseInt(c.height / (c.width / t), 10), f.width(t), f.height(e)) : (e = n, t = parseInt(c.width / (c.height / e), 10), 
            f.width(t), f.height(e))), s.sizeContainer(f.width(), f.height());
        }, c.src = this.album[a].link, this.currentImageIndex = a;
    }, e.prototype.sizeOverlay = function() {
        var e = this;
        setTimeout(function() {
            e.$overlay.width(d(document).width()).height(d(document).height());
        }, 0);
    }, e.prototype.sizeContainer = function(e, t) {
        function n() {
            i.$lightbox.find(".lb-dataContainer").width(a), i.$lightbox.find(".lb-prevLink").height(s), 
            i.$lightbox.find(".lb-nextLink").height(s), i.$overlay.focus(), i.showImage();
        }
        var i = this, r = this.$outerContainer.outerWidth(), o = this.$outerContainer.outerHeight(), a = e + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right, s = t + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        r !== a || o !== s ? this.$outerContainer.animate({
            width: a,
            height: s
        }, this.options.resizeDuration, "swing", function() {
            n();
        }) : n();
    }, e.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), 
        this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
    }, e.prototype.updateNav = function() {
        var e = !1;
        try {
            document.createEvent("TouchEvent"), e = !!this.options.alwaysShowNavOnTouchDevices;
        } catch (e) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), 
        this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), 
        e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), 
        e && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }, e.prototype.updateDetails = function() {
        var e = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var t = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? t.text(this.album[this.currentImageIndex].title) : t.html(this.album[this.currentImageIndex].title), 
            t.fadeIn("fast");
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(n).fadeIn("fast");
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return e.sizeOverlay();
        });
    }, e.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            new Image().src = this.album[this.currentImageIndex + 1].link;
        }
        if (this.currentImageIndex > 0) {
            new Image().src = this.album[this.currentImageIndex - 1].link;
        }
    }, e.prototype.enableKeyboardNav = function() {
        this.$lightbox.on("keyup.keyboard", d.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", d.proxy(this.keyboardAction, this));
    }, e.prototype.disableKeyboardNav = function() {
        this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
    }, e.prototype.keyboardAction = function(e) {
        var t = e.keyCode;
        27 === t ? (e.stopPropagation(), this.end()) : 37 === t ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === t && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
    }, e.prototype.end = function() {
        this.disableKeyboardNav(), d(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), 
        this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && d("body").removeClass("lb-disable-scrolling");
    }, new e();
});

var tns = function() {
    if (!Object.keys) {
        Object.keys = function(e) {
            var t = [];
            for (var n in e) {
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    t.push(n);
                }
            }
            return t;
        };
    }
    if (!("remove" in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    var e = window;
    var Yi = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
        return setTimeout(e, 16);
    };
    var t = window;
    var Ki = t.cancelAnimationFrame || t.mozCancelAnimationFrame || function(e) {
        clearTimeout(e);
    };
    function Ji() {
        var e, t, n, i = arguments[0] || {}, r = 1, o = arguments.length;
        for (;r < o; r++) {
            if ((e = arguments[r]) !== null) {
                for (t in e) {
                    n = e[t];
                    if (i === n) {
                        continue;
                    } else if (n !== undefined) {
                        i[t] = n;
                    }
                }
            }
        }
        return i;
    }
    function Zi(e) {
        return [ "true", "false" ].indexOf(e) >= 0 ? JSON.parse(e) : e;
    }
    function er(e, t, n, i) {
        if (i) {
            try {
                e.setItem(t, n);
            } catch (e) {}
        }
        return n;
    }
    function tr() {
        var e = window.tnsId;
        window.tnsId = !e ? 1 : e + 1;
        return "tns" + window.tnsId;
    }
    function f() {
        var e = document, t = e.body;
        if (!t) {
            t = e.createElement("body");
            t.fake = true;
        }
        return t;
    }
    var n = document.documentElement;
    function c(e) {
        var t = "";
        if (e.fake) {
            t = n.style.overflow;
            e.style.background = "";
            e.style.overflow = n.style.overflow = "hidden";
            n.appendChild(e);
        }
        return t;
    }
    function d(e, t) {
        if (e.fake) {
            e.remove();
            n.style.overflow = t;
            n.offsetHeight;
        }
    }
    function nr() {
        var e = document, t = f(), n = c(t), i = e.createElement("div"), r = false;
        t.appendChild(i);
        try {
            var o = "(10px * 10)", a = [ "calc" + o, "-moz-calc" + o, "-webkit-calc" + o ], s;
            for (var l = 0; l < 3; l++) {
                s = a[l];
                i.style.width = s;
                if (i.offsetWidth === 100) {
                    r = s.replace(o, "");
                    break;
                }
            }
        } catch (e) {}
        t.fake ? d(t, n) : i.remove();
        return r;
    }
    function ir() {
        var e = document, t = f(), n = c(t), i = e.createElement("div"), r = e.createElement("div"), o = "", a = 70, s = 3, l = false;
        i.className = "tns-t-subp2";
        r.className = "tns-t-ct";
        for (var u = 0; u < a; u++) {
            o += "<div></div>";
        }
        r.innerHTML = o;
        i.appendChild(r);
        t.appendChild(i);
        l = Math.abs(i.getBoundingClientRect().left - r.children[a - s].getBoundingClientRect().left) < 2;
        t.fake ? d(t, n) : i.remove();
        return l;
    }
    function rr() {
        var e = document, t = f(), n = c(t), i = e.createElement("div"), r = e.createElement("style"), o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", a;
        r.type = "text/css";
        i.className = "tns-mq-test";
        t.appendChild(r);
        t.appendChild(i);
        if (r.styleSheet) {
            r.styleSheet.cssText = o;
        } else {
            r.appendChild(e.createTextNode(o));
        }
        a = window.getComputedStyle ? window.getComputedStyle(i).position : i.currentStyle["position"];
        t.fake ? d(t, n) : i.remove();
        return a === "absolute";
    }
    function or(e) {
        var t = document.createElement("style");
        if (e) {
            t.setAttribute("media", e);
        }
        document.querySelector("head").appendChild(t);
        return t.sheet ? t.sheet : t.styleSheet;
    }
    function ar(e, t, n, i) {
        "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : e.addRule(t, n, i);
    }
    function sr(e, t) {
        "deleteRule" in e ? e.deleteRule(t) : e.removeRule(t);
    }
    function lr(e) {
        var t = "insertRule" in e ? e.cssRules : e.rules;
        return t.length;
    }
    function ur(e, t) {
        return Math.atan2(e, t) * (180 / Math.PI);
    }
    function fr(e, t) {
        var n = false, i = Math.abs(90 - Math.abs(e));
        if (i >= 90 - t) {
            n = "horizontal";
        } else if (i <= t) {
            n = "vertical";
        }
        return n;
    }
    function cr(e, t, n) {
        for (var i = 0, r = e.length; i < r; i++) {
            t.call(n, e[i], i);
        }
    }
    var i = "classList" in document.createElement("_");
    var dr = i ? function(e, t) {
        return e.classList.contains(t);
    } : function(e, t) {
        return e.className.indexOf(t) >= 0;
    };
    var pr = i ? function(e, t) {
        if (!dr(e, t)) {
            e.classList.add(t);
        }
    } : function(e, t) {
        if (!dr(e, t)) {
            e.className += " " + t;
        }
    };
    var hr = i ? function(e, t) {
        if (dr(e, t)) {
            e.classList.remove(t);
        }
    } : function(e, t) {
        if (dr(e, t)) {
            e.className = e.className.replace(t, "");
        }
    };
    function gr(e, t) {
        return e.hasAttribute(t);
    }
    function vr(e, t) {
        return e.getAttribute(t);
    }
    function o(e) {
        return typeof e.item !== "undefined";
    }
    function mr(e, t) {
        e = o(e) || e instanceof Array ? e : [ e ];
        if (Object.prototype.toString.call(t) !== "[object Object]") {
            return;
        }
        for (var n = e.length; n--; ) {
            for (var i in t) {
                e[n].setAttribute(i, t[i]);
            }
        }
    }
    function yr(e, t) {
        e = o(e) || e instanceof Array ? e : [ e ];
        t = t instanceof Array ? t : [ t ];
        var n = t.length;
        for (var i = e.length; i--; ) {
            for (var r = n; r--; ) {
                e[i].removeAttribute(t[r]);
            }
        }
    }
    function br(e) {
        var t = [];
        for (var n = 0, i = e.length; n < i; n++) {
            t.push(e[n]);
        }
        return t;
    }
    function xr(e, t) {
        if (e.style.display !== "none") {
            e.style.display = "none";
        }
    }
    function wr(e, t) {
        if (e.style.display === "none") {
            e.style.display = "";
        }
    }
    function Tr(e) {
        return window.getComputedStyle(e).display !== "none";
    }
    function Cr(t) {
        if (typeof t === "string") {
            var n = [ t ], i = t.charAt(0).toUpperCase() + t.substr(1), e = [ "Webkit", "Moz", "ms", "O" ];
            e.forEach(function(e) {
                if (e !== "ms" || t === "transform") {
                    n.push(e + i);
                }
            });
            t = n;
        }
        var r = document.createElement("fakeelement"), o = t.length;
        for (var a = 0; a < t.length; a++) {
            var s = t[a];
            if (r.style[s] !== undefined) {
                return s;
            }
        }
        return false;
    }
    function Ar(e) {
        if (!e) {
            return false;
        }
        if (!window.getComputedStyle) {
            return false;
        }
        var t = document, n = f(), i = c(n), r = t.createElement("p"), o, a = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
        a += "transform";
        n.insertBefore(r, null);
        r.style[e] = "translate3d(1px,1px,1px)";
        o = window.getComputedStyle(r).getPropertyValue(a);
        n.fake ? d(n, i) : r.remove();
        return o !== undefined && o.length > 0 && o !== "none";
    }
    function Er(e, t) {
        var n = false;
        if (/^Webkit/.test(e)) {
            n = "webkit" + t + "End";
        } else if (/^O/.test(e)) {
            n = "o" + t + "End";
        } else if (e) {
            n = t.toLowerCase() + "end";
        }
        return n;
    }
    var r = false;
    try {
        var a = Object.defineProperty({}, "passive", {
            get: function() {
                r = true;
            }
        });
        window.addEventListener("test", null, a);
    } catch (e) {}
    var s = r ? {
        passive: true
    } : false;
    function kr(e, t, n) {
        for (var i in t) {
            var r = [ "touchstart", "touchmove" ].indexOf(i) >= 0 && !n ? s : false;
            e.addEventListener(i, t[i], r);
        }
    }
    function Nr(e, t) {
        for (var n in t) {
            var i = [ "touchstart", "touchmove" ].indexOf(n) >= 0 ? s : false;
            e.removeEventListener(n, t[n], i);
        }
    }
    function Sr() {
        return {
            topics: {},
            on: function(e, t) {
                this.topics[e] = this.topics[e] || [];
                this.topics[e].push(t);
            },
            off: function(e, t) {
                if (this.topics[e]) {
                    for (var n = 0; n < this.topics[e].length; n++) {
                        if (this.topics[e][n] === t) {
                            this.topics[e].splice(n, 1);
                            break;
                        }
                    }
                }
            },
            emit: function(t, n) {
                n.type = t;
                if (this.topics[t]) {
                    this.topics[t].forEach(function(e) {
                        e(n, t);
                    });
                }
            }
        };
    }
    function Dr(e, t, n, i, r, o, a) {
        var s = Math.min(o, 10), l = r.indexOf("%") >= 0 ? "%" : "px", r = r.replace(l, ""), u = Number(e.style[t].replace(n, "").replace(i, "").replace(l, "")), f = (r - u) / o * s, c;
        setTimeout(d, s);
        function d() {
            o -= s;
            u += f;
            e.style[t] = n + u + l + i;
            if (o > 0) {
                setTimeout(d, s);
            } else {
                a();
            }
        }
    }
    var Ir = function(D) {
        D = Ji({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: false,
            autoWidth: false,
            viewportMax: false,
            slideBy: 1,
            center: false,
            controls: true,
            controlsPosition: "top",
            controlsText: [ "prev", "next" ],
            controlsContainer: false,
            prevButton: false,
            nextButton: false,
            nav: true,
            navPosition: "top",
            navContainer: false,
            navAsThumbnails: false,
            arrowKeys: false,
            speed: 300,
            autoplay: false,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: [ "start", "stop" ],
            autoplayHoverPause: false,
            autoplayButton: false,
            autoplayButtonOutput: true,
            autoplayResetOnVisibility: true,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: false,
            loop: true,
            rewind: false,
            autoHeight: false,
            responsive: false,
            lazyload: false,
            lazyloadSelector: ".tns-lazy-img",
            touch: true,
            mouseDrag: false,
            swipeAngle: 15,
            nested: false,
            preventActionWhenRunning: false,
            preventScrollOnTouch: false,
            freezable: true,
            onInit: false,
            useLocalStorage: true
        }, D || {});
        var I = document, v = window, r = {
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            RIGHT: 39
        }, t = {}, n = D.useLocalStorage;
        if (n) {
            var e = navigator.userAgent;
            var i = new Date();
            try {
                t = v.localStorage;
                if (t) {
                    t.setItem(i, i);
                    n = t.getItem(i) == i;
                    t.removeItem(i);
                } else {
                    n = false;
                }
                if (!n) {
                    t = {};
                }
            } catch (e) {
                n = false;
            }
            if (n) {
                if (t["tnsApp"] && t["tnsApp"] !== e) {
                    [ "tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE" ].forEach(function(e) {
                        t.removeItem(e);
                    });
                }
                localStorage["tnsApp"] = e;
            }
        }
        var f = t["tC"] ? Zi(t["tC"]) : er(t, "tC", nr(), n), m = t["tPL"] ? Zi(t["tPL"]) : er(t, "tPL", ir(), n), L = t["tMQ"] ? Zi(t["tMQ"]) : er(t, "tMQ", rr(), n), o = t["tTf"] ? Zi(t["tTf"]) : er(t, "tTf", Cr("transform"), n), a = t["t3D"] ? Zi(t["t3D"]) : er(t, "t3D", Ar(o), n), y = t["tTDu"] ? Zi(t["tTDu"]) : er(t, "tTDu", Cr("transitionDuration"), n), s = t["tTDe"] ? Zi(t["tTDe"]) : er(t, "tTDe", Cr("transitionDelay"), n), b = t["tADu"] ? Zi(t["tADu"]) : er(t, "tADu", Cr("animationDuration"), n), l = t["tADe"] ? Zi(t["tADe"]) : er(t, "tADe", Cr("animationDelay"), n), u = t["tTE"] ? Zi(t["tTE"]) : er(t, "tTE", Er(y, "Transition"), n), c = t["tAE"] ? Zi(t["tAE"]) : er(t, "tAE", Er(b, "Animation"), n);
        var d = v.console && typeof v.console.warn === "function", p = [ "container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton" ], h = {};
        p.forEach(function(e) {
            if (typeof D[e] === "string") {
                var t = D[e], n = I.querySelector(t);
                h[e] = t;
                if (n && n.nodeName) {
                    D[e] = n;
                } else {
                    if (d) {
                        console.warn("Can't find", D[e]);
                    }
                    return;
                }
            }
        });
        if (D.container.children.length < 1) {
            if (d) {
                console.warn("No slides found in", D.container);
            }
            return;
        }
        var j = D.responsive, M = D.nested, H = D.mode === "carousel" ? true : false;
        if (j) {
            if (0 in j) {
                D = Ji(D, j[0]);
                delete j[0];
            }
            var g = {};
            for (var x in j) {
                var w = j[x];
                w = typeof w === "number" ? {
                    items: w
                } : w;
                g[x] = w;
            }
            j = g;
            g = null;
        }
        function T(e) {
            for (var t in e) {
                if (!H) {
                    if (t === "slideBy") {
                        e[t] = "page";
                    }
                    if (t === "edgePadding") {
                        e[t] = false;
                    }
                    if (t === "autoHeight") {
                        e[t] = false;
                    }
                }
                if (t === "responsive") {
                    T(e[t]);
                }
            }
        }
        if (!H) {
            T(D);
        }
        if (!H) {
            D.axis = "horizontal";
            D.slideBy = "page";
            D.edgePadding = false;
            var C = D.animateIn, A = D.animateOut, E = D.animateDelay, k = D.animateNormal;
        }
        var O = D.axis === "horizontal" ? true : false, N = I.createElement("div"), q = I.createElement("div"), S, $ = D.container, P = $.parentNode, R = $.outerHTML, B = $.children, W = B.length, F, z = nn(), _ = false;
        if (j) {
            Sn();
        }
        if (H) {
            $.className += " tns-vpfix";
        }
        var X = D.autoWidth, U = ln("fixedWidth"), V = ln("edgePadding"), G = ln("gutter"), Q = an(), Y = ln("center"), K = !X ? Math.floor(ln("items")) : 1, J = ln("slideBy"), Z = D.viewportMax || D.fixedWidthViewportWidth, ee = ln("arrowKeys"), te = ln("speed"), ne = D.rewind, ie = ne ? false : D.loop, re = ln("autoHeight"), oe = ln("controls"), ae = ln("controlsText"), se = ln("nav"), le = ln("touch"), ue = ln("mouseDrag"), fe = ln("autoplay"), ce = ln("autoplayTimeout"), de = ln("autoplayText"), pe = ln("autoplayHoverPause"), he = ln("autoplayResetOnVisibility"), ge = or(), ve = D.lazyload, me = D.lazyloadSelector, ye, be = [], xe = ie ? tn() : 0, we = !H ? W + xe : W + xe * 2, Te = (U || X) && !ie ? true : false, Ce = U ? fi() : null, Ae = !H || !ie ? true : false, Ee = O ? "left" : "top", ke = "", Ne = "", Se = function() {
            if (U) {
                return function() {
                    return Y && !ie ? W - 1 : Math.ceil(-Ce / (U + G));
                };
            } else if (X) {
                return function() {
                    for (var e = we; e--; ) {
                        if (ye[e] >= -Ce) {
                            return e;
                        }
                    }
                };
            } else {
                return function() {
                    if (Y && H && !ie) {
                        return W - 1;
                    } else {
                        return ie || H ? Math.max(0, we - Math.ceil(K)) : we - 1;
                    }
                };
            }
        }(), De = Kt(ln("startIndex")), Ie = De, Le = Yt(), je = 0, Me = !X ? Se() : null, He, Oe = D.preventActionWhenRunning, qe = D.swipeAngle, $e = qe ? "?" : true, Pe = false, Re = D.onInit, Be = new Sr(), We = " tns-slider tns-" + D.mode, Fe = $.id || tr(), ze = ln("disable"), _e = false, Xe = D.freezable, Ue = Xe && !X ? Nn() : false, Ve = false, Ge = {
            click: xi,
            keydown: Hi
        }, Qe = {
            click: wi,
            keydown: qi
        }, Ye = {
            mouseover: Li,
            mouseout: ji
        }, Ke = {
            visibilitychange: Ii
        }, Je = {
            keydown: Mi
        }, Ze = {
            touchstart: Fi,
            touchmove: zi,
            touchend: Xi,
            touchcancel: Xi
        }, et = {
            mousedown: Fi,
            mousemove: zi,
            mouseup: Xi,
            mouseleave: Xi
        }, tt = sn("controls"), nt = sn("nav"), it = X ? true : D.navAsThumbnails, rt = sn("autoplay"), ot = sn("touch"), at = sn("mouseDrag"), st = "tns-slide-active", lt = "tns-complete", ut = {
            load: Bn,
            error: Wn
        }, ft, ct, dt = D.preventScrollOnTouch === "force" ? true : false;
        if (tt) {
            var pt = D.controlsContainer, ht = D.controlsContainer ? D.controlsContainer.outerHTML : "", gt = D.prevButton, vt = D.nextButton, mt = D.prevButton ? D.prevButton.outerHTML : "", yt = D.nextButton ? D.nextButton.outerHTML : "", bt, xt;
        }
        if (nt) {
            var wt = D.navContainer, Tt = D.navContainer ? D.navContainer.outerHTML : "", Ct, At = X ? W : Vi(), Et = 0, kt = -1, Nt = Zt(), St = Nt, Dt = "tns-nav-active", It = "Carousel Page ", Lt = " (Current Slide)";
        }
        if (rt) {
            var jt = D.autoplayDirection === "forward" ? 1 : -1, Mt = D.autoplayButton, Ht = D.autoplayButton ? D.autoplayButton.outerHTML : "", Ot = [ "<span class='tns-visually-hidden'>", " animation</span>" ], qt, $t, Pt, Rt, Bt;
        }
        if (ot || at) {
            var Wt = {}, Ft = {}, zt, _t, Xt, Ut = false, Vt, Gt = O ? function(e, t) {
                return e.x - t.x;
            } : function(e, t) {
                return e.y - t.y;
            };
        }
        if (!X) {
            Qt(ze || Ue);
        }
        if (o) {
            Ee = o;
            ke = "translate";
            if (a) {
                ke += O ? "3d(" : "3d(0px, ";
                Ne = O ? ", 0px, 0px)" : ", 0px)";
            } else {
                ke += O ? "X(" : "Y(";
                Ne = ")";
            }
        }
        if (H) {
            $.className = $.className.replace("tns-vpfix", "");
        }
        mn();
        wn();
        yn();
        function Qt(e) {
            if (e) {
                oe = se = le = ue = ee = fe = pe = he = false;
            }
        }
        function Yt() {
            var e = H ? De - xe : De;
            while (e < 0) {
                e += W;
            }
            return e % W + 1;
        }
        function Kt(e) {
            e = e ? Math.max(0, Math.min(ie ? W - 1 : W - K, e)) : 0;
            return H ? e + xe : e;
        }
        function Jt(e) {
            if (e == null) {
                e = De;
            }
            if (H) {
                e -= xe;
            }
            while (e < 0) {
                e += W;
            }
            return Math.floor(e % W);
        }
        function Zt() {
            var e = Jt(), t;
            t = it ? e : U || X ? Math.ceil((e + 1) * At / W - 1) : Math.floor(e / K);
            if (!ie && H && De === Me) {
                t = At - 1;
            }
            return t;
        }
        function en() {
            if (X || U && !Z) {
                return W - 1;
            } else {
                var e = U ? "fixedWidth" : "items", t = [];
                if (U || D[e] < W) {
                    t.push(D[e]);
                }
                if (j) {
                    for (var n in j) {
                        var i = j[n][e];
                        if (i && (U || i < W)) {
                            t.push(i);
                        }
                    }
                }
                if (!t.length) {
                    t.push(0);
                }
                return Math.ceil(U ? Z / Math.min.apply(null, t) : Math.max.apply(null, t));
            }
        }
        function tn() {
            var e = en(), t = H ? Math.ceil((e * 5 - W) / 2) : e * 4 - W;
            t = Math.max(e, t);
            return sn("edgePadding") ? t + 1 : t;
        }
        function nn() {
            return v.innerWidth || I.documentElement.clientWidth || I.body.clientWidth;
        }
        function rn(e) {
            return e === "top" ? "afterbegin" : "beforeend";
        }
        function on(e) {
            var t = I.createElement("div"), n, i;
            e.appendChild(t);
            n = t.getBoundingClientRect();
            i = n.right - n.left;
            t.remove();
            return i || on(e.parentNode);
        }
        function an() {
            var e = V ? V * 2 - G : 0;
            return on(P) - e;
        }
        function sn(e) {
            if (D[e]) {
                return true;
            } else {
                if (j) {
                    for (var t in j) {
                        if (j[t][e]) {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        function ln(e, t) {
            if (t == null) {
                t = z;
            }
            if (e === "items" && U) {
                return Math.floor((Q + G) / (U + G)) || 1;
            } else {
                var n = D[e];
                if (j) {
                    for (var i in j) {
                        if (t >= parseInt(i)) {
                            if (e in j[i]) {
                                n = j[i][e];
                            }
                        }
                    }
                }
                if (e === "slideBy" && n === "page") {
                    n = ln("items");
                }
                if (!H && (e === "slideBy" || e === "items")) {
                    n = Math.floor(n);
                }
                return n;
            }
        }
        function un(e) {
            return f ? f + "(" + e * 100 + "% / " + we + ")" : e * 100 / we + "%";
        }
        function fn(e, t, n, i, r) {
            var o = "";
            if (e !== undefined) {
                var a = e;
                if (t) {
                    a -= t;
                }
                o = O ? "margin: 0 " + a + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + a + "px 0;";
            } else if (t && !n) {
                var s = "-" + t + "px", l = O ? s + " 0 0" : "0 " + s + " 0";
                o = "margin: 0 " + l + ";";
            }
            if (!H && r && y && i) {
                o += gn(i);
            }
            return o;
        }
        function cn(e, t, n) {
            if (e) {
                return (e + t) * we + "px";
            } else {
                return f ? f + "(" + we * 100 + "% / " + n + ")" : we * 100 / n + "%";
            }
        }
        function dn(e, t, n) {
            var i;
            if (e) {
                i = e + t + "px";
            } else {
                if (!H) {
                    n = Math.floor(n);
                }
                var r = H ? we : n;
                i = f ? f + "(100% / " + r + ")" : 100 / r + "%";
            }
            i = "width:" + i;
            return M !== "inner" ? i + ";" : i + " !important;";
        }
        function pn(e) {
            var t = "";
            if (e !== false) {
                var n = O ? "padding-" : "margin-", i = O ? "right" : "bottom";
                t = n + i + ": " + e + "px;";
            }
            return t;
        }
        function hn(e, t) {
            var n = e.substring(0, e.length - t).toLowerCase();
            if (n) {
                n = "-" + n + "-";
            }
            return n;
        }
        function gn(e) {
            return hn(y, 18) + "transition-duration:" + e / 1e3 + "s;";
        }
        function vn(e) {
            return hn(b, 17) + "animation-duration:" + e / 1e3 + "s;";
        }
        function mn() {
            var e = "tns-outer", t = "tns-inner", n = sn("gutter");
            N.className = e;
            q.className = t;
            N.id = Fe + "-ow";
            q.id = Fe + "-iw";
            if ($.id === "") {
                $.id = Fe;
            }
            We += m || X ? " tns-subpixel" : " tns-no-subpixel";
            We += f ? " tns-calc" : " tns-no-calc";
            if (X) {
                We += " tns-autowidth";
            }
            We += " tns-" + D.axis;
            $.className += We;
            if (H) {
                S = I.createElement("div");
                S.id = Fe + "-mw";
                S.className = "tns-ovh";
                N.appendChild(S);
                S.appendChild(q);
            } else {
                N.appendChild(q);
            }
            if (re) {
                var i = S ? S : q;
                i.className += " tns-ah";
            }
            P.insertBefore(N, $);
            q.appendChild($);
            cr(B, function(e, t) {
                pr(e, "tns-item");
                if (!e.id) {
                    e.id = Fe + "-item" + t;
                }
                if (!H && k) {
                    pr(e, k);
                }
                mr(e, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                });
            });
            if (xe) {
                var r = I.createDocumentFragment(), o = I.createDocumentFragment();
                for (var a = xe; a--; ) {
                    var s = a % W, l = B[s].cloneNode(true);
                    yr(l, "id");
                    o.insertBefore(l, o.firstChild);
                    if (H) {
                        var u = B[W - 1 - s].cloneNode(true);
                        yr(u, "id");
                        r.appendChild(u);
                    }
                }
                $.insertBefore(r, $.firstChild);
                $.appendChild(o);
                B = $.children;
            }
        }
        function yn() {
            if (sn("autoHeight") || X || !O) {
                var e = $.querySelectorAll("img");
                cr(e, function(e) {
                    var t = e.src;
                    if (t && t.indexOf("data:image") < 0) {
                        kr(e, ut);
                        e.src = "";
                        e.src = t;
                        pr(e, "loading");
                    } else if (!ve) {
                        Fn(e);
                    }
                });
                Yi(function() {
                    Vn(br(e), function() {
                        ft = true;
                    });
                });
                if (!X && O) {
                    e = Xn(De, Math.min(De + K - 1, we - 1));
                }
                ve ? bn() : Yi(function() {
                    Vn(br(e), bn);
                });
            } else {
                if (H) {
                    di();
                }
                Tn();
                Cn();
            }
        }
        function bn() {
            if (X) {
                var t = ie ? De : W - 1;
                (function e() {
                    B[t - 1].getBoundingClientRect().right.toFixed(2) === B[t].getBoundingClientRect().left.toFixed(2) ? xn() : setTimeout(function() {
                        e();
                    }, 16);
                })();
            } else {
                xn();
            }
        }
        function xn() {
            if (!O || X) {
                Jn();
                if (X) {
                    Ce = fi();
                    if (Xe) {
                        Ue = Nn();
                    }
                    Me = Se();
                    Qt(ze || Ue);
                } else {
                    Ui();
                }
            }
            if (H) {
                di();
            }
            Tn();
            Cn();
        }
        function wn() {
            if (!H) {
                for (var e = De, t = De + Math.min(W, K); e < t; e++) {
                    var n = B[e];
                    n.style.left = (e - De) * 100 / K + "%";
                    pr(n, C);
                    hr(n, k);
                }
            }
            if (O) {
                if (m || X) {
                    ar(ge, "#" + Fe + " > .tns-item", "font-size:" + v.getComputedStyle(B[0]).fontSize + ";", lr(ge));
                    ar(ge, "#" + Fe, "font-size:0;", lr(ge));
                } else if (H) {
                    cr(B, function(e, t) {
                        e.style.marginLeft = un(t);
                    });
                }
            }
            if (L) {
                if (y) {
                    var i = S && D.autoHeight ? gn(D.speed) : "";
                    ar(ge, "#" + Fe + "-mw", i, lr(ge));
                }
                i = fn(D.edgePadding, D.gutter, D.fixedWidth, D.speed, D.autoHeight);
                ar(ge, "#" + Fe + "-iw", i, lr(ge));
                if (H) {
                    i = O && !X ? "width:" + cn(D.fixedWidth, D.gutter, D.items) + ";" : "";
                    if (y) {
                        i += gn(te);
                    }
                    ar(ge, "#" + Fe, i, lr(ge));
                }
                i = O && !X ? dn(D.fixedWidth, D.gutter, D.items) : "";
                if (D.gutter) {
                    i += pn(D.gutter);
                }
                if (!H) {
                    if (y) {
                        i += gn(te);
                    }
                    if (b) {
                        i += vn(te);
                    }
                }
                if (i) {
                    ar(ge, "#" + Fe + " > .tns-item", i, lr(ge));
                }
            } else {
                Qn();
                q.style.cssText = fn(V, G, U, re);
                if (H && O && !X) {
                    $.style.width = cn(U, G, K);
                }
                var i = O && !X ? dn(U, G, K) : "";
                if (G) {
                    i += pn(G);
                }
                if (i) {
                    ar(ge, "#" + Fe + " > .tns-item", i, lr(ge));
                }
            }
            if (j && L) {
                for (var r in j) {
                    r = parseInt(r);
                    var o = j[r], i = "", a = "", s = "", l = "", u = "", f = !X ? ln("items", r) : null, c = ln("fixedWidth", r), d = ln("speed", r), p = ln("edgePadding", r), h = ln("autoHeight", r), g = ln("gutter", r);
                    if (y && S && ln("autoHeight", r) && "speed" in o) {
                        a = "#" + Fe + "-mw{" + gn(d) + "}";
                    }
                    if ("edgePadding" in o || "gutter" in o) {
                        s = "#" + Fe + "-iw{" + fn(p, g, c, d, h) + "}";
                    }
                    if (H && O && !X && ("fixedWidth" in o || "items" in o || U && "gutter" in o)) {
                        l = "width:" + cn(c, g, f) + ";";
                    }
                    if (y && "speed" in o) {
                        l += gn(d);
                    }
                    if (l) {
                        l = "#" + Fe + "{" + l + "}";
                    }
                    if ("fixedWidth" in o || U && "gutter" in o || !H && "items" in o) {
                        u += dn(c, g, f);
                    }
                    if ("gutter" in o) {
                        u += pn(g);
                    }
                    if (!H && "speed" in o) {
                        if (y) {
                            u += gn(d);
                        }
                        if (b) {
                            u += vn(d);
                        }
                    }
                    if (u) {
                        u = "#" + Fe + " > .tns-item{" + u + "}";
                    }
                    i = a + s + l + u;
                    if (i) {
                        ge.insertRule("@media (min-width: " + r / 16 + "em) {" + i + "}", ge.cssRules.length);
                    }
                }
            }
        }
        function Tn() {
            Zn();
            N.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + $n() + "</span>  of " + W + "</div>");
            ct = N.querySelector(".tns-liveregion .current");
            if (rt) {
                var e = fe ? "stop" : "start";
                if (Mt) {
                    mr(Mt, {
                        "data-action": e
                    });
                } else if (D.autoplayButtonOutput) {
                    N.insertAdjacentHTML(rn(D.autoplayPosition), '<button data-action="' + e + '">' + Ot[0] + e + Ot[1] + de[0] + "</button>");
                    Mt = N.querySelector("[data-action]");
                }
                if (Mt) {
                    kr(Mt, {
                        click: Di
                    });
                }
                if (fe) {
                    Ei();
                    if (pe) {
                        kr($, Ye);
                    }
                    if (he) {
                        kr($, Ke);
                    }
                }
            }
            if (nt) {
                var t = !H ? 0 : xe;
                if (wt) {
                    mr(wt, {
                        "aria-label": "Carousel Pagination"
                    });
                    Ct = wt.children;
                    cr(Ct, function(e, t) {
                        mr(e, {
                            "data-nav": t,
                            tabindex: "-1",
                            "aria-label": It + (t + 1),
                            "aria-controls": Fe
                        });
                    });
                } else {
                    var n = "", i = it ? "" : 'style="display:none"';
                    for (var r = 0; r < W; r++) {
                        n += '<button data-nav="' + r + '" tabindex="-1" aria-controls="' + Fe + '" ' + i + ' aria-label="' + It + (r + 1) + '"></button>';
                    }
                    n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>";
                    N.insertAdjacentHTML(rn(D.navPosition), n);
                    wt = N.querySelector(".tns-nav");
                    Ct = wt.children;
                }
                Gi();
                if (y) {
                    var o = y.substring(0, y.length - 18).toLowerCase(), a = "transition: all " + te / 1e3 + "s";
                    if (o) {
                        a = "-" + o + "-" + a;
                    }
                    ar(ge, "[aria-controls^=" + Fe + "-item]", a, lr(ge));
                }
                mr(Ct[Nt], {
                    "aria-label": It + (Nt + 1) + Lt
                });
                yr(Ct[Nt], "tabindex");
                pr(Ct[Nt], Dt);
                kr(wt, Qe);
            }
            if (tt) {
                if (!pt && (!gt || !vt)) {
                    N.insertAdjacentHTML(rn(D.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Fe + '">' + ae[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Fe + '">' + ae[1] + "</button></div>");
                    pt = N.querySelector(".tns-controls");
                }
                if (!gt || !vt) {
                    gt = pt.children[0];
                    vt = pt.children[1];
                }
                if (D.controlsContainer) {
                    mr(pt, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    });
                }
                if (D.controlsContainer || D.prevButton && D.nextButton) {
                    mr([ gt, vt ], {
                        "aria-controls": Fe,
                        tabindex: "-1"
                    });
                }
                if (D.controlsContainer || D.prevButton && D.nextButton) {
                    mr(gt, {
                        "data-controls": "prev"
                    });
                    mr(vt, {
                        "data-controls": "next"
                    });
                }
                bt = ii(gt);
                xt = ii(vt);
                ai();
                if (pt) {
                    kr(pt, Ge);
                } else {
                    kr(gt, Ge);
                    kr(vt, Ge);
                }
            }
            In();
        }
        function Cn() {
            if (H && u) {
                var e = {};
                e[u] = yi;
                kr($, e);
            }
            if (le) {
                kr($, Ze, D.preventScrollOnTouch);
            }
            if (ue) {
                kr($, et);
            }
            if (ee) {
                kr(I, Je);
            }
            if (M === "inner") {
                Be.on("outerResized", function() {
                    kn();
                    Be.emit("innerLoaded", Qi());
                });
            } else if (j || U || X || re || !O) {
                kr(v, {
                    resize: En
                });
            }
            if (re) {
                if (M === "outer") {
                    Be.on("innerLoaded", Un);
                } else if (!ze) {
                    Un();
                }
            }
            Rn();
            if (ze) {
                Hn();
            } else if (Ue) {
                jn();
            }
            Be.on("indexChanged", Gn);
            if (M === "inner") {
                Be.emit("innerLoaded", Qi());
            }
            if (typeof Re === "function") {
                Re(Qi());
            }
            _ = true;
        }
        function An() {
            ge.disabled = true;
            if (ge.ownerNode) {
                ge.ownerNode.remove();
            }
            Nr(v, {
                resize: En
            });
            if (ee) {
                Nr(I, Je);
            }
            if (pt) {
                Nr(pt, Ge);
            }
            if (wt) {
                Nr(wt, Qe);
            }
            Nr($, Ye);
            Nr($, Ke);
            if (Mt) {
                Nr(Mt, {
                    click: Di
                });
            }
            if (fe) {
                clearInterval(qt);
            }
            if (H && u) {
                var e = {};
                e[u] = yi;
                Nr($, e);
            }
            if (le) {
                Nr($, Ze);
            }
            if (ue) {
                Nr($, et);
            }
            var o = [ R, ht, mt, yt, Tt, Ht ];
            p.forEach(function(e, t) {
                var n = e === "container" ? N : D[e];
                if (typeof n === "object") {
                    var i = n.previousElementSibling ? n.previousElementSibling : false, r = n.parentNode;
                    n.outerHTML = o[t];
                    D[e] = i ? i.nextElementSibling : r.firstElementChild;
                }
            });
            p = C = A = E = k = O = N = q = $ = P = R = B = W = F = z = X = U = V = G = Q = K = J = Z = ee = te = ne = ie = re = ge = ve = ye = be = xe = we = Te = Ce = Ae = Ee = ke = Ne = Se = De = Ie = je = Me = He = qe = $e = Pe = Re = Be = We = Fe = ze = _e = Xe = Ue = Ve = Ge = Qe = Ye = Ke = Je = Ze = et = tt = nt = it = rt = ot = at = st = lt = ut = ft = oe = ae = pt = ht = gt = vt = bt = xt = se = wt = Tt = Ct = At = Et = kt = Nt = St = Dt = It = Lt = fe = ce = jt = de = pe = Mt = Ht = he = Ot = qt = $t = Pt = Rt = Bt = Wt = Ft = zt = _t = Xt = Ut = Vt = Gt = le = ue = null;
            for (var t in this) {
                if (t !== "rebuild") {
                    this[t] = null;
                }
            }
            _ = false;
        }
        function En(e) {
            Yi(function() {
                kn($i(e));
            });
        }
        function kn(e) {
            if (!_) {
                return;
            }
            if (M === "outer") {
                Be.emit("outerResized", Qi(e));
            }
            z = nn();
            var t, n = F, i = false;
            if (j) {
                Sn();
                t = n !== F;
                if (t) {
                    Be.emit("newBreakpointStart", Qi(e));
                }
            }
            var r, o, a = K, s = ze, l = Ue, u = ee, f = oe, c = se, d = le, p = ue, h = fe, g = pe, v = he, m = De;
            if (t) {
                var y = U, b = re, x = ae, w = Y, T = de;
                if (!L) {
                    var C = G, A = V;
                }
            }
            ee = ln("arrowKeys");
            oe = ln("controls");
            se = ln("nav");
            le = ln("touch");
            Y = ln("center");
            ue = ln("mouseDrag");
            fe = ln("autoplay");
            pe = ln("autoplayHoverPause");
            he = ln("autoplayResetOnVisibility");
            if (t) {
                ze = ln("disable");
                U = ln("fixedWidth");
                te = ln("speed");
                re = ln("autoHeight");
                ae = ln("controlsText");
                de = ln("autoplayText");
                ce = ln("autoplayTimeout");
                if (!L) {
                    V = ln("edgePadding");
                    G = ln("gutter");
                }
            }
            Qt(ze);
            Q = an();
            if ((!O || X) && !ze) {
                Jn();
                if (!O) {
                    Ui();
                    i = true;
                }
            }
            if (U || X) {
                Ce = fi();
                Me = Se();
            }
            if (t || U) {
                K = ln("items");
                J = ln("slideBy");
                o = K !== a;
                if (o) {
                    if (!U && !X) {
                        Me = Se();
                    }
                    Dn();
                }
            }
            if (t) {
                if (ze !== s) {
                    if (ze) {
                        Hn();
                    } else {
                        On();
                    }
                }
            }
            if (Xe && (t || U || X)) {
                Ue = Nn();
                if (Ue !== l) {
                    if (Ue) {
                        pi(ci(Kt(0)));
                        jn();
                    } else {
                        Mn();
                        i = true;
                    }
                }
            }
            Qt(ze || Ue);
            if (!fe) {
                pe = he = false;
            }
            if (ee !== u) {
                ee ? kr(I, Je) : Nr(I, Je);
            }
            if (oe !== f) {
                if (oe) {
                    if (pt) {
                        wr(pt);
                    } else {
                        if (gt) {
                            wr(gt);
                        }
                        if (vt) {
                            wr(vt);
                        }
                    }
                } else {
                    if (pt) {
                        xr(pt);
                    } else {
                        if (gt) {
                            xr(gt);
                        }
                        if (vt) {
                            xr(vt);
                        }
                    }
                }
            }
            if (se !== c) {
                se ? wr(wt) : xr(wt);
            }
            if (le !== d) {
                le ? kr($, Ze, D.preventScrollOnTouch) : Nr($, Ze);
            }
            if (ue !== p) {
                ue ? kr($, et) : Nr($, et);
            }
            if (fe !== h) {
                if (fe) {
                    if (Mt) {
                        wr(Mt);
                    }
                    if (!$t && !Rt) {
                        Ei();
                    }
                } else {
                    if (Mt) {
                        xr(Mt);
                    }
                    if ($t) {
                        ki();
                    }
                }
            }
            if (pe !== g) {
                pe ? kr($, Ye) : Nr($, Ye);
            }
            if (he !== v) {
                he ? kr(I, Ke) : Nr(I, Ke);
            }
            if (t) {
                if (U !== y || Y !== w) {
                    i = true;
                }
                if (re !== b) {
                    if (!re) {
                        q.style.height = "";
                    }
                }
                if (oe && ae !== x) {
                    gt.innerHTML = ae[0];
                    vt.innerHTML = ae[1];
                }
                if (Mt && de !== T) {
                    var E = fe ? 1 : 0, k = Mt.innerHTML, N = k.length - T[E].length;
                    if (k.substring(N) === T[E]) {
                        Mt.innerHTML = k.substring(0, N) + de[E];
                    }
                }
            } else {
                if (Y && (U || X)) {
                    i = true;
                }
            }
            if (o || U && !X) {
                At = Vi();
                Gi();
            }
            r = De !== m;
            if (r) {
                Be.emit("indexChanged", Qi());
                i = true;
            } else if (o) {
                if (!r) {
                    Gn();
                }
            } else if (U || X) {
                Rn();
                Zn();
                qn();
            }
            if (o && !H) {
                ei();
            }
            if (!ze && !Ue) {
                if (t && !L) {
                    if (re !== autoheightTem || te !== speedTem) {
                        Qn();
                    }
                    if (V !== A || G !== C) {
                        q.style.cssText = fn(V, G, U, te, re);
                    }
                    if (O) {
                        if (H) {
                            $.style.width = cn(U, G, K);
                        }
                        var S = dn(U, G, K) + pn(G);
                        sr(ge, lr(ge) - 1);
                        ar(ge, "#" + Fe + " > .tns-item", S, lr(ge));
                    }
                }
                if (re) {
                    Un();
                }
                if (i) {
                    di();
                    Ie = De;
                }
            }
            if (t) {
                Be.emit("newBreakpointEnd", Qi(e));
            }
        }
        function Nn() {
            if (!U && !X) {
                var e = Y ? K - (K - 1) / 2 : K;
                return W <= e;
            }
            var t = U ? (U + G) * W : ye[W], n = V ? Q + V * 2 : Q + G;
            if (Y) {
                n -= U ? (Q - U) / 2 : (Q - (ye[De + 1] - ye[De] - G)) / 2;
            }
            return t <= n;
        }
        function Sn() {
            F = 0;
            for (var e in j) {
                e = parseInt(e);
                if (z >= e) {
                    F = e;
                }
            }
        }
        var Dn = function() {
            return ie ? H ? function() {
                var e = je, t = Me;
                e += J;
                t -= J;
                if (V) {
                    e += 1;
                    t -= 1;
                } else if (U) {
                    if ((Q + G) % (U + G)) {
                        t -= 1;
                    }
                }
                if (xe) {
                    if (De > t) {
                        De -= W;
                    } else if (De < e) {
                        De += W;
                    }
                }
            } : function() {
                if (De > Me) {
                    while (De >= je + W) {
                        De -= W;
                    }
                } else if (De < je) {
                    while (De <= Me - W) {
                        De += W;
                    }
                }
            } : function() {
                De = Math.max(je, Math.min(Me, De));
            };
        }();
        function In() {
            if (!fe && Mt) {
                xr(Mt);
            }
            if (!se && wt) {
                xr(wt);
            }
            if (!oe) {
                if (pt) {
                    xr(pt);
                } else {
                    if (gt) {
                        xr(gt);
                    }
                    if (vt) {
                        xr(vt);
                    }
                }
            }
        }
        function Ln() {
            if (fe && Mt) {
                wr(Mt);
            }
            if (se && wt) {
                wr(wt);
            }
            if (oe) {
                if (pt) {
                    wr(pt);
                } else {
                    if (gt) {
                        wr(gt);
                    }
                    if (vt) {
                        wr(vt);
                    }
                }
            }
        }
        function jn() {
            if (Ve) {
                return;
            }
            if (V) {
                q.style.margin = "0px";
            }
            if (xe) {
                var e = "tns-transparent";
                for (var t = xe; t--; ) {
                    if (H) {
                        pr(B[t], e);
                    }
                    pr(B[we - t - 1], e);
                }
            }
            In();
            Ve = true;
        }
        function Mn() {
            if (!Ve) {
                return;
            }
            if (V && L) {
                q.style.margin = "";
            }
            if (xe) {
                var e = "tns-transparent";
                for (var t = xe; t--; ) {
                    if (H) {
                        hr(B[t], e);
                    }
                    hr(B[we - t - 1], e);
                }
            }
            Ln();
            Ve = false;
        }
        function Hn() {
            if (_e) {
                return;
            }
            ge.disabled = true;
            $.className = $.className.replace(We.substring(1), "");
            yr($, [ "style" ]);
            if (ie) {
                for (var e = xe; e--; ) {
                    if (H) {
                        xr(B[e]);
                    }
                    xr(B[we - e - 1]);
                }
            }
            if (!O || !H) {
                yr(q, [ "style" ]);
            }
            if (!H) {
                for (var t = De, n = De + W; t < n; t++) {
                    var i = B[t];
                    yr(i, [ "style" ]);
                    hr(i, C);
                    hr(i, k);
                }
            }
            In();
            _e = true;
        }
        function On() {
            if (!_e) {
                return;
            }
            ge.disabled = false;
            $.className += We;
            di();
            if (ie) {
                for (var e = xe; e--; ) {
                    if (H) {
                        wr(B[e]);
                    }
                    wr(B[we - e - 1]);
                }
            }
            if (!H) {
                for (var t = De, n = De + W; t < n; t++) {
                    var i = B[t], r = t < De + K ? C : k;
                    i.style.left = (t - De) * 100 / K + "%";
                    pr(i, r);
                }
            }
            Ln();
            _e = false;
        }
        function qn() {
            var e = $n();
            if (ct.innerHTML !== e) {
                ct.innerHTML = e;
            }
        }
        function $n() {
            var e = Pn(), t = e[0] + 1, n = e[1] + 1;
            return t === n ? t + "" : t + " to " + n;
        }
        function Pn(e) {
            if (e == null) {
                e = ci();
            }
            var n = De, i, r, o;
            if (Y || V) {
                if (X || U) {
                    r = -(parseFloat(e) + V);
                    o = r + Q + V * 2;
                }
            } else {
                if (X) {
                    r = ye[De];
                    o = r + Q;
                }
            }
            if (X) {
                ye.forEach(function(e, t) {
                    if (t < we) {
                        if ((Y || V) && e <= r + .5) {
                            n = t;
                        }
                        if (o - e >= .5) {
                            i = t;
                        }
                    }
                });
            } else {
                if (U) {
                    var t = U + G;
                    if (Y || V) {
                        n = Math.floor(r / t);
                        i = Math.ceil(o / t - 1);
                    } else {
                        i = n + Math.ceil(Q / t) - 1;
                    }
                } else {
                    if (Y || V) {
                        var a = K - 1;
                        if (Y) {
                            n -= a / 2;
                            i = De + a / 2;
                        } else {
                            i = De + a;
                        }
                        if (V) {
                            var s = V * K / Q;
                            n -= s;
                            i += s;
                        }
                        n = Math.floor(n);
                        i = Math.ceil(i);
                    } else {
                        i = n + K - 1;
                    }
                }
                n = Math.max(n, 0);
                i = Math.min(i, we - 1);
            }
            return [ n, i ];
        }
        function Rn() {
            if (ve && !ze) {
                Xn.apply(null, Pn()).forEach(function(e) {
                    if (!dr(e, lt)) {
                        var t = {};
                        t[u] = function(e) {
                            e.stopPropagation();
                        };
                        kr(e, t);
                        kr(e, ut);
                        e.src = vr(e, "data-src");
                        var n = vr(e, "data-srcset");
                        if (n) {
                            e.srcset = n;
                        }
                        pr(e, "loading");
                    }
                });
            }
        }
        function Bn(e) {
            Fn(Pi(e));
        }
        function Wn(e) {
            zn(Pi(e));
        }
        function Fn(e) {
            pr(e, "loaded");
            _n(e);
        }
        function zn(e) {
            pr(e, "failed");
            _n(e);
        }
        function _n(e) {
            pr(e, "tns-complete");
            hr(e, "loading");
            Nr(e, ut);
        }
        function Xn(e, t) {
            var n = [];
            while (e <= t) {
                cr(B[e].querySelectorAll("img"), function(e) {
                    n.push(e);
                });
                e++;
            }
            return n;
        }
        function Un() {
            var e = Xn.apply(null, Pn());
            Yi(function() {
                Vn(e, Kn);
            });
        }
        function Vn(n, e) {
            if (ft) {
                return e();
            }
            n.forEach(function(e, t) {
                if (dr(e, lt)) {
                    n.splice(t, 1);
                }
            });
            if (!n.length) {
                return e();
            }
            Yi(function() {
                Vn(n, e);
            });
        }
        function Gn() {
            Rn();
            Zn();
            qn();
            ai();
            ti();
        }
        function Qn() {
            if (H && re) {
                S.style[y] = te / 1e3 + "s";
            }
        }
        function Yn(e, t) {
            var n = [];
            for (var i = e, r = Math.min(e + t, we); i < r; i++) {
                n.push(B[i].offsetHeight);
            }
            return Math.max.apply(null, n);
        }
        function Kn() {
            var e = re ? Yn(De, K) : Yn(xe, W), t = S ? S : q;
            if (t.style.height !== e) {
                t.style.height = e + "px";
            }
        }
        function Jn() {
            ye = [ 0 ];
            var n = O ? "left" : "top", i = O ? "right" : "bottom", r = B[0].getBoundingClientRect()[n];
            cr(B, function(e, t) {
                if (t) {
                    ye.push(e.getBoundingClientRect()[n] - r);
                }
                if (t === we - 1) {
                    ye.push(e.getBoundingClientRect()[i] - r);
                }
            });
        }
        function Zn() {
            var e = Pn(), n = e[0], i = e[1];
            cr(B, function(e, t) {
                if (t >= n && t <= i) {
                    if (gr(e, "aria-hidden")) {
                        yr(e, [ "aria-hidden", "tabindex" ]);
                        pr(e, st);
                    }
                } else {
                    if (!gr(e, "aria-hidden")) {
                        mr(e, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        });
                        hr(e, st);
                    }
                }
            });
        }
        function ei() {
            var e = De + Math.min(W, K);
            for (var t = we; t--; ) {
                var n = B[t];
                if (t >= De && t < e) {
                    pr(n, "tns-moving");
                    n.style.left = (t - De) * 100 / K + "%";
                    pr(n, C);
                    hr(n, k);
                } else if (n.style.left) {
                    n.style.left = "";
                    pr(n, k);
                    hr(n, C);
                }
                hr(n, A);
            }
            setTimeout(function() {
                cr(B, function(e) {
                    hr(e, "tns-moving");
                });
            }, 300);
        }
        function ti() {
            if (se) {
                Nt = kt >= 0 ? kt : Zt();
                kt = -1;
                if (Nt !== St) {
                    var e = Ct[St], t = Ct[Nt];
                    mr(e, {
                        tabindex: "-1",
                        "aria-label": It + (St + 1)
                    });
                    hr(e, Dt);
                    mr(t, {
                        "aria-label": It + (Nt + 1) + Lt
                    });
                    yr(t, "tabindex");
                    pr(t, Dt);
                    St = Nt;
                }
            }
        }
        function ni(e) {
            return e.nodeName.toLowerCase();
        }
        function ii(e) {
            return ni(e) === "button";
        }
        function ri(e) {
            return e.getAttribute("aria-disabled") === "true";
        }
        function oi(e, t, n) {
            if (e) {
                t.disabled = n;
            } else {
                t.setAttribute("aria-disabled", n.toString());
            }
        }
        function ai() {
            if (!oe || ne || ie) {
                return;
            }
            var e = bt ? gt.disabled : ri(gt), t = xt ? vt.disabled : ri(vt), n = De <= je ? true : false, i = !ne && De >= Me ? true : false;
            if (n && !e) {
                oi(bt, gt, true);
            }
            if (!n && e) {
                oi(bt, gt, false);
            }
            if (i && !t) {
                oi(xt, vt, true);
            }
            if (!i && t) {
                oi(xt, vt, false);
            }
        }
        function si(e, t) {
            if (y) {
                e.style[y] = t;
            }
        }
        function li() {
            return U ? (U + G) * we : ye[we];
        }
        function ui(e) {
            if (e == null) {
                e = De;
            }
            var t = V ? G : 0;
            return X ? (Q - t - (ye[e + 1] - ye[e] - G)) / 2 : U ? (Q - U) / 2 : (K - 1) / 2;
        }
        function fi() {
            var e = V ? G : 0, t = Q + e - li();
            if (Y && !ie) {
                t = U ? -(U + G) * (we - 1) - ui() : ui(we - 1) - ye[we - 1];
            }
            if (t > 0) {
                t = 0;
            }
            return t;
        }
        function ci(e) {
            if (e == null) {
                e = De;
            }
            var t;
            if (O && !X) {
                if (U) {
                    t = -(U + G) * e;
                    if (Y) {
                        t += ui();
                    }
                } else {
                    var n = o ? we : K;
                    if (Y) {
                        e -= ui();
                    }
                    t = -e * 100 / n;
                }
            } else {
                t = -ye[e];
                if (Y && X) {
                    t += ui();
                }
            }
            if (Te) {
                t = Math.max(t, Ce);
            }
            t += O && !X && !U ? "%" : "px";
            return t;
        }
        function di(e) {
            si($, "0s");
            pi(e);
        }
        function pi(e) {
            if (e == null) {
                e = ci();
            }
            $.style[Ee] = ke + e + Ne;
        }
        function hi(e, t, n, i) {
            var r = e + K;
            if (!ie) {
                r = Math.min(r, we);
            }
            for (var o = e; o < r; o++) {
                var a = B[o];
                if (!i) {
                    a.style.left = (o - De) * 100 / K + "%";
                }
                if (E && s) {
                    a.style[s] = a.style[l] = E * (o - e) / 1e3 + "s";
                }
                hr(a, t);
                pr(a, n);
                if (i) {
                    be.push(a);
                }
            }
        }
        var gi = function() {
            return H ? function() {
                si($, "");
                if (y || !te) {
                    pi();
                    if (!te || !Tr($)) {
                        yi();
                    }
                } else {
                    Dr($, Ee, ke, Ne, ci(), te, yi);
                }
                if (!O) {
                    Ui();
                }
            } : function() {
                be = [];
                var e = {};
                e[u] = e[c] = yi;
                Nr(B[Ie], e);
                kr(B[De], e);
                hi(Ie, C, A, true);
                hi(De, k, C);
                if (!u || !c || !te || !Tr($)) {
                    yi();
                }
            };
        }();
        function vi(e, t) {
            if (Ae) {
                Dn();
            }
            if (De !== Ie || t) {
                Be.emit("indexChanged", Qi());
                Be.emit("transitionStart", Qi());
                if (re) {
                    Un();
                }
                if ($t && e && [ "click", "keydown" ].indexOf(e.type) >= 0) {
                    ki();
                }
                Pe = true;
                gi();
            }
        }
        function mi(e) {
            return e.toLowerCase().replace(/-/g, "");
        }
        function yi(e) {
            if (H || Pe) {
                Be.emit("transitionEnd", Qi(e));
                if (!H && be.length > 0) {
                    for (var t = 0; t < be.length; t++) {
                        var n = be[t];
                        n.style.left = "";
                        if (l && s) {
                            n.style[l] = "";
                            n.style[s] = "";
                        }
                        hr(n, A);
                        pr(n, k);
                    }
                }
                if (!e || !H && e.target.parentNode === $ || e.target === $ && mi(e.propertyName) === mi(Ee)) {
                    if (!Ae) {
                        var i = De;
                        Dn();
                        if (De !== i) {
                            Be.emit("indexChanged", Qi());
                            di();
                        }
                    }
                    if (M === "inner") {
                        Be.emit("innerLoaded", Qi());
                    }
                    Pe = false;
                    Ie = De;
                }
            }
        }
        function bi(e, t) {
            if (Ue) {
                return;
            }
            if (e === "prev") {
                xi(t, -1);
            } else if (e === "next") {
                xi(t, 1);
            } else {
                if (Pe) {
                    if (Oe) {
                        return;
                    } else {
                        yi();
                    }
                }
                var n = Jt(), i = 0;
                if (e === "first") {
                    i = -n;
                } else if (e === "last") {
                    i = H ? W - K - n : W - 1 - n;
                } else {
                    if (typeof e !== "number") {
                        e = parseInt(e);
                    }
                    if (!isNaN(e)) {
                        if (!t) {
                            e = Math.max(0, Math.min(W - 1, e));
                        }
                        i = e - n;
                    }
                }
                if (!H && i && Math.abs(i) < K) {
                    var r = i > 0 ? 1 : -1;
                    i += De + i - W >= je ? W * r : W * 2 * r * -1;
                }
                De += i;
                if (H && ie) {
                    if (De < je) {
                        De += W;
                    }
                    if (De > Me) {
                        De -= W;
                    }
                }
                if (Jt(De) !== Jt(Ie)) {
                    vi(t);
                }
            }
        }
        function xi(e, t) {
            if (Pe) {
                if (Oe) {
                    return;
                } else {
                    yi();
                }
            }
            var n;
            if (!t) {
                e = $i(e);
                var i = Pi(e);
                while (i !== pt && [ gt, vt ].indexOf(i) < 0) {
                    i = i.parentNode;
                }
                var r = [ gt, vt ].indexOf(i);
                if (r >= 0) {
                    n = true;
                    t = r === 0 ? -1 : 1;
                }
            }
            if (ne) {
                if (De === je && t === -1) {
                    bi("last", e);
                    return;
                } else if (De === Me && t === 1) {
                    bi("first", e);
                    return;
                }
            }
            if (t) {
                De += J * t;
                if (X) {
                    De = Math.floor(De);
                }
                vi(n || e && e.type === "keydown" ? e : null);
            }
        }
        function wi(e) {
            if (Pe) {
                if (Oe) {
                    return;
                } else {
                    yi();
                }
            }
            e = $i(e);
            var t = Pi(e), n;
            while (t !== wt && !gr(t, "data-nav")) {
                t = t.parentNode;
            }
            if (gr(t, "data-nav")) {
                var n = kt = Number(vr(t, "data-nav")), i = U || X ? n * W / At : n * K, r = it ? n : Math.min(Math.ceil(i), W - 1);
                bi(r, e);
                if (Nt === n) {
                    if ($t) {
                        ki();
                    }
                    kt = -1;
                }
            }
        }
        function Ti() {
            qt = setInterval(function() {
                xi(null, jt);
            }, ce);
            $t = true;
        }
        function Ci() {
            clearInterval(qt);
            $t = false;
        }
        function Ai(e, t) {
            mr(Mt, {
                "data-action": e
            });
            Mt.innerHTML = Ot[0] + e + Ot[1] + t;
        }
        function Ei() {
            Ti();
            if (Mt) {
                Ai("stop", de[1]);
            }
        }
        function ki() {
            Ci();
            if (Mt) {
                Ai("start", de[0]);
            }
        }
        function Ni() {
            if (fe && !$t) {
                Ei();
                Rt = false;
            }
        }
        function Si() {
            if ($t) {
                ki();
                Rt = true;
            }
        }
        function Di() {
            if ($t) {
                ki();
                Rt = true;
            } else {
                Ei();
                Rt = false;
            }
        }
        function Ii() {
            if (I.hidden) {
                if ($t) {
                    Ci();
                    Bt = true;
                }
            } else if (Bt) {
                Ti();
                Bt = false;
            }
        }
        function Li() {
            if ($t) {
                Ci();
                Pt = true;
            }
        }
        function ji() {
            if (Pt) {
                Ti();
                Pt = false;
            }
        }
        function Mi(e) {
            e = $i(e);
            var t = [ r.LEFT, r.RIGHT ].indexOf(e.keyCode);
            if (t >= 0) {
                xi(e, t === 0 ? -1 : 1);
            }
        }
        function Hi(e) {
            e = $i(e);
            var t = [ r.LEFT, r.RIGHT ].indexOf(e.keyCode);
            if (t >= 0) {
                if (t === 0) {
                    if (!gt.disabled) {
                        xi(e, -1);
                    }
                } else if (!vt.disabled) {
                    xi(e, 1);
                }
            }
        }
        function Oi(e) {
            e.focus();
        }
        function qi(e) {
            e = $i(e);
            var t = I.activeElement;
            if (!gr(t, "data-nav")) {
                return;
            }
            var n = [ r.LEFT, r.RIGHT, r.ENTER, r.SPACE ].indexOf(e.keyCode), i = Number(vr(t, "data-nav"));
            if (n >= 0) {
                if (n === 0) {
                    if (i > 0) {
                        Oi(Ct[i - 1]);
                    }
                } else if (n === 1) {
                    if (i < At - 1) {
                        Oi(Ct[i + 1]);
                    }
                } else {
                    kt = i;
                    bi(i, e);
                }
            }
        }
        function $i(e) {
            e = e || v.event;
            return Ri(e) ? e.changedTouches[0] : e;
        }
        function Pi(e) {
            return e.target || v.event.srcElement;
        }
        function Ri(e) {
            return e.type.indexOf("touch") >= 0;
        }
        function Bi(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
        function Wi() {
            return fr(ur(Ft.y - Wt.y, Ft.x - Wt.x), qe) === D.axis;
        }
        function Fi(e) {
            if (Pe) {
                if (Oe) {
                    return;
                } else {
                    yi();
                }
            }
            if (fe && $t) {
                Ci();
            }
            Ut = true;
            if (Vt) {
                Ki(Vt);
                Vt = null;
            }
            var t = $i(e);
            Be.emit(Ri(e) ? "touchStart" : "dragStart", Qi(e));
            if (!Ri(e) && [ "img", "a" ].indexOf(ni(Pi(e))) >= 0) {
                Bi(e);
            }
            Ft.x = Wt.x = t.clientX;
            Ft.y = Wt.y = t.clientY;
            if (H) {
                zt = parseFloat($.style[Ee].replace(ke, ""));
                si($, "0s");
            }
        }
        function zi(e) {
            if (Ut) {
                var t = $i(e);
                Ft.x = t.clientX;
                Ft.y = t.clientY;
                if (H) {
                    if (!Vt) {
                        Vt = Yi(function() {
                            _i(e);
                        });
                    }
                } else {
                    if ($e === "?") {
                        $e = Wi();
                    }
                    if ($e) {
                        dt = true;
                    }
                }
                if (dt) {
                    e.preventDefault();
                }
            }
        }
        function _i(e) {
            if (!$e) {
                Ut = false;
                return;
            }
            Ki(Vt);
            if (Ut) {
                Vt = Yi(function() {
                    _i(e);
                });
            }
            if ($e === "?") {
                $e = Wi();
            }
            if ($e) {
                if (!dt && Ri(e)) {
                    dt = true;
                }
                try {
                    if (e.type) {
                        Be.emit(Ri(e) ? "touchMove" : "dragMove", Qi(e));
                    }
                } catch (e) {}
                var t = zt, n = Gt(Ft, Wt);
                if (!O || U || X) {
                    t += n;
                    t += "px";
                } else {
                    var i = o ? n * K * 100 / ((Q + G) * we) : n * 100 / (Q + G);
                    t += i;
                    t += "%";
                }
                $.style[Ee] = ke + t + Ne;
            }
        }
        function Xi(i) {
            if (Ut) {
                if (Vt) {
                    Ki(Vt);
                    Vt = null;
                }
                if (H) {
                    si($, "");
                }
                Ut = false;
                var e = $i(i);
                Ft.x = e.clientX;
                Ft.y = e.clientY;
                var r = Gt(Ft, Wt);
                if (Math.abs(r)) {
                    if (!Ri(i)) {
                        var n = Pi(i);
                        kr(n, {
                            click: function e(t) {
                                Bi(t);
                                Nr(n, {
                                    click: e
                                });
                            }
                        });
                    }
                    if (H) {
                        Vt = Yi(function() {
                            if (O && !X) {
                                var e = -r * K / (Q + G);
                                e = r > 0 ? Math.floor(e) : Math.ceil(e);
                                De += e;
                            } else {
                                var t = -(zt + r);
                                if (t <= 0) {
                                    De = je;
                                } else if (t >= ye[we - 1]) {
                                    De = Me;
                                } else {
                                    var n = 0;
                                    while (n < we && t >= ye[n]) {
                                        De = n;
                                        if (t > ye[n] && r < 0) {
                                            De += 1;
                                        }
                                        n++;
                                    }
                                }
                            }
                            vi(i, r);
                            Be.emit(Ri(i) ? "touchEnd" : "dragEnd", Qi(i));
                        });
                    } else {
                        if ($e) {
                            xi(i, r > 0 ? -1 : 1);
                        }
                    }
                }
            }
            if (D.preventScrollOnTouch === "auto") {
                dt = false;
            }
            if (qe) {
                $e = "?";
            }
            if (fe && !$t) {
                Ti();
            }
        }
        function Ui() {
            var e = S ? S : q;
            e.style.height = ye[De + K] - ye[De] + "px";
        }
        function Vi() {
            var e = U ? (U + G) * W / Q : W / K;
            return Math.min(Math.ceil(e), W);
        }
        function Gi() {
            if (!se || it) {
                return;
            }
            if (At !== Et) {
                var e = Et, t = At, n = wr;
                if (Et > At) {
                    e = At;
                    t = Et;
                    n = xr;
                }
                while (e < t) {
                    n(Ct[e]);
                    e++;
                }
                Et = At;
            }
        }
        function Qi(e) {
            return {
                container: $,
                slideItems: B,
                navContainer: wt,
                navItems: Ct,
                controlsContainer: pt,
                hasControls: tt,
                prevButton: gt,
                nextButton: vt,
                items: K,
                slideBy: J,
                cloneCount: xe,
                slideCount: W,
                slideCountNew: we,
                index: De,
                indexCached: Ie,
                displayIndex: Yt(),
                navCurrentIndex: Nt,
                navCurrentIndexCached: St,
                pages: At,
                pagesCached: Et,
                sheet: ge,
                isOn: _,
                event: e || {}
            };
        }
        return {
            version: "2.9.2",
            getInfo: Qi,
            events: Be,
            goTo: bi,
            play: Ni,
            pause: Si,
            isOn: _,
            updateSliderHeight: Kn,
            refresh: yn,
            destroy: An,
            rebuild: function() {
                return Ir(Ji(D, h));
            }
        };
    };
    return Ir;
}();

GOOGLE_MAPS_API_KEY = "#";

$(function() {
    $(".posts-wrap").align({
        selector: "> .post *"
    });
});

$(function() {
    $(".home-image-gallery").removeClass("--hidden");
    var e = tns({
        container: ".home-image-gallery",
        mode: "gallery",
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 7e3,
        speed: 2500,
        loop: true,
        nav: false,
        mouseDrag: false,
        arrowKeys: false,
        touch: false,
        controls: false
    });
});

$(function() {
    var e = $(".site-header");
    var t = $(".main-nav");
    var n = $(".submenu-toggle");
    var i = $(".header-mobile-cta");
    var r = $(".nav-toggle");
    var o = "--hidden";
    var a = "--no-js";
    e.removeClass(a);
    t.addClass(o);
    i.removeClass(o);
    $(".sub-menu").addClass(o);
    $(".menu-item-has-children").append("<button class='submenu-toggle'></button>");
    r.on("click", function() {
        t.toggleClass(o);
    });
    $(".submenu-toggle").each(function() {
        $(this).on("click", function() {
            var e = $(this).prev(".sub-menu");
            e.toggleClass(o);
        });
    });
});

$(function() {
    lightbox.option({
        disableScrolling: true,
        resizeDuration: 500,
        alwaysShowNavOnTouchDevices: true,
        wrapAround: true
    });
});
//# sourceMappingURL=script.js.map
