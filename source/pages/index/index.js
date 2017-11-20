
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.green.css';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!owl.carousel';
import 'imports-loader?jQuery=jquery!webpack-jquery-ui';
// import 'imports-loader?jQuery=jquery!jquery-animate-scroll';

import 'normalize.css';
import './index.scss';



/*! sly 1.2.3 - 9th Feb 2014 | https://github.com/darsain/sly */
(function (k, B, Ca) {
    function la(f, h, Va) {
        var z, R, qa, s, ra, B, sa, ma;

        function ba() {
            var b = 0,
                l = w.length;
            e.old = k.extend({}, e);
            y = H ? 0 : E[c.horizontal ? "width" : "height"]();
            S = K[c.horizontal ? "width" : "height"]();
            t = H ? f : u[c.horizontal ? "outerWidth" : "outerHeight"]();
            w.length = 0;
            e.start = 0;
            e.end = Math.max(t - y, 0);
            if (C) {
                b = n.length;
                F = u.children(c.itemSelector);
                n.length = 0;
                var a = na(u, c.horizontal ? "paddingLeft" : "paddingTop"),
                    ta = na(u, c.horizontal ? "paddingRight" : "paddingBottom"),
                    h = "border-box" === k(F).css("boxSizing"),
                    m = "none" !== F.css("float"),
                    s = 0,
                    q = F.length - 1,
                    z;
                t = 0;
                F.each(function (b, l) {
                    var d = k(l),
                        e = d[c.horizontal ? "outerWidth" : "outerHeight"](),
                        f = na(d, c.horizontal ? "marginLeft" : "marginTop"),
                        d = na(d, c.horizontal ? "marginRight" : "marginBottom"),
                        g = e + f + d,
                        p = !f || !d,
                        h = {};
                    h.el = l;
                    h.size = p ? e : g;
                    h.half = h.size / 2;
                    h.start = t + (p ? f : 0);
                    h.center = h.start - Math.round(y / 2 - h.size / 2);
                    h.end = h.start - y + h.size;
                    b || (t += a);
                    t += g;
                    c.horizontal || m || d && (f && 0 < b) && (t -= Math.min(f, d));
                    b === q && (h.end += ta, t += ta, s = p ? d : 0);
                    n.push(h);
                    z = h
                });
                u[0].style[c.horizontal ? "width" : "height"] = (h ? t : t - a - ta) + "px";
                t -= s;
                n.length ? (e.start = n[0][T ? "center" : "start"], e.end = T ? z.center : y < t ? z.end : e.start) : e.start = e.end = 0
            }
            e.center = Math.round(e.end / 2 + e.start / 2);
            k.extend(g, ua(void 0));
            D.length && 0 < S && (c.dynamicHandle ? (N = e.start === e.end ? S : Math.round(S * y / t), N = v(N, c.minHandleSize, S), D[0].style[c.horizontal ? "width" : "height"] = N + "px") : N = D[c.horizontal ? "outerWidth" : "outerHeight"](), r.end = S - N, U || Da());
            if (!H && 0 < y) {
                var p = e.start,
                    h = "";
                if (C) k.each(n, function (b, l) {
                    T ? w.push(l.center) : l.start + l.size > p && p <= e.end && (p = l.start,
                    w.push(p), p += y, p > e.end && p < e.end + y && w.push(e.end))
                });
                else for (; p - y < e.end;) w.push(p), p += y;
                if (V[0] && l !== w.length) {
                    for (l = 0; l < w.length; l++) h += c.pageBuilder.call(d, l);
                    ga = V.html(h).children();
                    ga.eq(g.activePage).addClass(c.activeClass)
                }
            }
            g.slideeSize = t;
            g.frameSize = y;
            g.sbSize = S;
            g.handleSize = N;
            C ? (d.initialized ? (g.activeItem >= n.length || 0 === b && 0 < n.length) && oa(g.activeItem >= n.length ? n.length - 1 : 0, !b) : (oa(c.startAt), d[L ? "toCenter" : "toStart"](c.startAt)), I(L && n.length ? n[g.activeItem].center : v(e.dest, e.start, e.end))) : d.initialized ? I(v(e.dest, e.start, e.end)) : I(c.startAt, 1);
            A("load")
        }

        function I(b, l, fa) {
            if (C && a.released && !fa) {
                fa = ua(b);
                var f = b > e.start && b < e.end;
                L ? (f && (b = n[fa.centerItem].center), T && c.activateMiddle && oa(fa.centerItem)) : f && (b = n[fa.firstItem].start)
            }
            a.init && a.slidee && c.elasticBounds ? b > e.end ? b = e.end + (b - e.end) / 6 : b < e.start && (b = e.start + (b - e.start) / 6) : b = v(b, e.start, e.end);
            z = +new Date;
            R = 0;
            qa = e.cur;
            s = b;
            ra = b - e.cur;
            B = a.tweese || a.init && !a.slidee;
            sa = !B && (l || a.init && a.slidee || !c.speed);
            a.tweese = 0;
            b !== e.dest && (e.dest = b, A("change"), U || va());
            a.released && !d.isPaused && d.resume();
            k.extend(g, ua(void 0));
            Ea();
            ga[0] && q.page !== g.activePage && (q.page = g.activePage, ga.removeClass(c.activeClass).eq(g.activePage).addClass(c.activeClass), A("activePage", q.page))
        }

        function va() {
            U ? (sa ? e.cur = s : B ? (ma = s - e.cur, 0.1 > Math.abs(ma) ? e.cur = s : e.cur += ma * (a.released ? c.swingSpeed : c.syncSpeed)) : (R = Math.min(+new Date - z, c.speed), e.cur = qa + ra * jQuery.easing[c.easing](R / c.speed, R, 0, 1, c.speed)), s === e.cur ? (e.cur = s, a.tweese = U = 0) : U = ha(va), A("move"), H || (J ? u[0].style[J] = ia + (c.horizontal ? "translateX" : "translateY") + "(" + -e.cur + "px)" : u[0].style[c.horizontal ? "left" : "top"] = -Math.round(e.cur) + "px"), !U && a.released && A("moveEnd"), Da()) : (U = ha(va), a.released && A("moveStart"))
        }

        function Da() {
            D.length && (r.cur = e.start === e.end ? 0 : ((a.init && !a.slidee ? e.dest : e.cur) - e.start) / (e.end - e.start) * r.end, r.cur = v(Math.round(r.cur), r.start, r.end), q.hPos !== r.cur && (q.hPos = r.cur, J ? D[0].style[J] = ia + (c.horizontal ? "translateX" : "translateY") + "(" + r.cur + "px)" : D[0].style[c.horizontal ? "left" :
                "top"] = r.cur + "px"))
        }

        function Fa() {
            p.speed && e.cur !== (0 < p.speed ? e.end : e.start) || d.stop();
            Ga = a.init ? ha(Fa) : 0;
            p.now = +new Date;
            p.pos = e.cur + (p.now - p.lastTime) / 1E3 * p.speed;
            I(a.init ? p.pos : Math.round(p.pos));
            a.init || e.cur !== e.dest || A("moveEnd");
            p.lastTime = p.now
        }

        function wa(b, l, a) {
            "boolean" === ja(l) && (a = l, l = Ca);
            l === Ca ? I(e[b], a) : L && "center" !== b || (l = d.getPos(l)) && I(l[b], a, !L)
        }

        function pa(b) {
            return null != b ? O(b) ? 0 <= b && b < n.length ? b : -1 : F.index(b) : -1
        }

        function xa(b) {
            return pa(O(b) && 0 > b ? b + n.length : b)
        }

        function oa(b, l) {
            var a = pa(b);
            if (!C || 0 > a) return !1;
            if (q.active !== a || l) F.eq(g.activeItem).removeClass(c.activeClass), F.eq(a).addClass(c.activeClass), q.active = g.activeItem = a, Ea(), A("active", a);
            return a
        }

        function ua(b) {
            b = v(O(b) ? b : e.dest, e.start, e.end);
            var a = {}, c = T ? 0 : y / 2;
            if (!H) for (var d = 0, f = w.length; d < f; d++) {
                if (b >= e.end || d === w.length - 1) {
                    a.activePage = w.length - 1;
                    break
                }
                if (b <= w[d] + c) {
                    a.activePage = d;
                    break
                }
            }
            if (C) {
                for (var f = d = c = !1, g = 0, h = n.length; g < h; g++) if (!1 === c && b <= n[g].start + n[g].half && (c = g), !1 === f && b <= n[g].center + n[g].half && (f = g),
                g === h - 1 || b <= n[g].end + n[g].half) {
                    d = g;
                    break
                }
                a.firstItem = O(c) ? c : 0;
                a.centerItem = O(f) ? f : a.firstItem;
                a.lastItem = O(d) ? d : a.centerItem
            }
            return a
        }

        function Ea() {
            var b = e.dest <= e.start,
                l = e.dest >= e.end,
                d = b ? 1 : l ? 2 : 3;
            q.slideePosState !== d && (q.slideePosState = d, W.is("button,input") && W.prop("disabled", b), X.is("button,input") && X.prop("disabled", l), W.add(ca)[b ? "addClass" : "removeClass"](c.disabledClass), X.add(Y)[l ? "addClass" : "removeClass"](c.disabledClass));
            q.fwdbwdState !== d && a.released && (q.fwdbwdState = d, ca.is("button,input") && ca.prop("disabled", b), Y.is("button,input") && Y.prop("disabled", l));
            C && (b = 0 === g.activeItem, l = g.activeItem >= n.length - 1, d = b ? 1 : l ? 2 : 3, q.itemsButtonState !== d && (q.itemsButtonState = d, Z.is("button,input") && Z.prop("disabled", b), $.is("button,input") && $.prop("disabled", l), Z[b ? "addClass" : "removeClass"](c.disabledClass), $[l ? "addClass" : "removeClass"](c.disabledClass)))
        }

        function Ha(b, a, d) {
            b = xa(b);
            a = xa(a);
            if (-1 < b && -1 < a && b !== a && !(d && a === b - 1 || !d && a === b + 1)) {
                F.eq(b)[d ? "insertAfter" : "insertBefore"](n[a].el);
                var c = b < a ? b : d ? a : a - 1,
                    e = b > a ? b : d ? a + 1 : a,
                    f = b > a;
                b === g.activeItem ? q.active = g.activeItem = d ? f ? a + 1 : a : f ? a : a - 1 : g.activeItem > c && g.activeItem < e && (q.active = g.activeItem += f ? 1 : -1);
                ba()
            }
        }

        function Ia(b, a) {
            for (var d = 0, c = G[b].length; d < c; d++) if (G[b][d] === a) return d;
            return -1
        }

        function Ja(b) {
            return Math.round(v(b, r.start, r.end) / r.end * (e.end - e.start)) + e.start
        }

        function Wa() {
            a.history[0] = a.history[1];
            a.history[1] = a.history[2];
            a.history[2] = a.history[3];
            a.history[3] = a.delta
        }

        function Ka(b) {
            a.released = 0;
            a.source = b;
            a.slidee = "slidee" === b
        }

        function La(b) {
            if (!(a.init || ~k.inArray(b.target.nodeName, Ma) || k(b.target).is(c.interactive))) {
                var l = "touchstart" === b.type,
                    f = b.data.source,
                    g = "slidee" === f;
                if ("handle" !== f || c.dragHandle && r.start !== r.end) if (!g || (l ? c.touchDragging : c.mouseDragging && 2 > b.which)) l || M(b, 1), Ka(f), a.init = 1, a.$source = k(b.target), a.touch = l, a.pointer = l ? b.originalEvent.touches[0] : b, a.initX = a.pointer.pageX, a.initY = a.pointer.pageY, a.initPos = g ? e.cur : r.cur, a.start = +new Date, a.time = 0, a.path = 0, a.delta = 0, a.locked = 0, a.history = [0, 0, 0, 0], a.pathToLock = g ? l ? 30 : 10 : 0, a.initLoc = a[c.horizontal ? "initX" : "initY"], a.deltaMin = g ? -a.initLoc : -r.cur, a.deltaMax = g ? document[c.horizontal ? "width" : "height"] - a.initLoc : r.end - r.cur, da.on(l ? Na : Oa, Pa), d.pause(1), (g ? u : D).addClass(c.draggedClass), A("moveStart"), g && (Qa = setInterval(Wa, 10))
            }
        }

        function Pa(b) {
            a.released = "mouseup" === b.type || "touchend" === b.type;
            a.pointer = a.touch ? b.originalEvent[a.released ? "changedTouches" : "touches"][0] : b;
            a.pathX = a.pointer.pageX - a.initX;
            a.pathY = a.pointer.pageY - a.initY;
            a.path = Math.sqrt(Math.pow(a.pathX, 2) + Math.pow(a.pathY,
            2));
            a.delta = v(c.horizontal ? a.pathX : a.pathY, a.deltaMin, a.deltaMax);
            if (!a.locked && a.path > a.pathToLock) if (a.locked = 1, c.horizontal ? Math.abs(a.pathX) < Math.abs(a.pathY) : Math.abs(a.pathX) > Math.abs(a.pathY)) a.released = 1;
            else if (a.slidee) a.$source.on(aa, ya);
            a.released ? (a.touch || M(b), Xa(), c.releaseSwing && a.slidee && (a.swing = 300 * ((a.delta - a.history[0]) / 40), a.delta += a.swing, a.tweese = 10 < Math.abs(a.swing))) : !a.locked && a.touch || M(b);
            I(a.slidee ? Math.round(a.initPos - a.delta) : Ja(a.initPos + a.delta))
        }

        function Xa() {
            clearInterval(Qa);
            da.off(a.touch ? Na : Oa, Pa);
            (a.slidee ? u : D).removeClass(c.draggedClass);
            setTimeout(function () {
                a.$source.off(aa, ya)
            });
            d.resume(1);
            e.cur === e.dest && a.init && A("moveEnd");
            a.init = 0
        }

        function Ra() {
            d.stop();
            da.off("mouseup", Ra)
        }

        function ea(b) {
            M(b);
            switch (this) {
                case Y[0]:
                case ca[0]:
                    d.moveBy(Y.is(this) ? c.moveBy : -c.moveBy);
                    da.on("mouseup", Ra);
                    break;
                case Z[0]:
                    d.prev();
                    break;
                case $[0]:
                    d.next();
                    break;
                case W[0]:
                    d.prevPage();
                    break;
                case X[0]:
                    d.nextPage()
            }
        }

        function Ya(b) {
            x.curDelta = b.wheelDelta ? -b.wheelDelta / 120 : (b.detail || b.deltaY) / 3;
            if (!C) return x.curDelta;
            za = +new Date;
            x.last < za - x.resetTime && (x.delta = 0);
            x.last = za;
            x.delta += x.curDelta;
            1 > Math.abs(x.delta) ? x.finalDelta = 0 : (x.finalDelta = Math.round(x.delta / 1), x.delta %= 1);
            return x.finalDelta
        }

        function Za(b) {
            c.scrollBy && e.start !== e.end && (M(b, 1), d.slideBy(c.scrollBy * Ya(b.originalEvent)))
        }

        function $a(b) {
            c.clickBar && b.target === K[0] && (M(b), I(Ja((c.horizontal ? b.pageX - K.offset().left : b.pageY - K.offset().top) - N / 2)))
        }

        function ab(b) {
            if (c.keyboardNavBy) switch (b.which) {
                case c.horizontal ? 37:
                    38 : M(b);
                    d["pages" === c.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case c.horizontal ? 39:
                    40 : M(b), d["pages" === c.keyboardNavBy ? "nextPage" : "next"]()
            }
        }

        function bb(b) {~k.inArray(this.nodeName, Ma) || k(this).is(c.interactive) ? b.stopPropagation() : this.parentNode === u[0] && d.activate(this)
        }

        function cb() {
            this.parentNode === V[0] && d.activatePage(ga.index(this))
        }

        function db(b) {
            if (c.pauseOnHover) d["mouseenter" === b.type ? "pause" : "resume"](2)
        }

        function A(b, a) {
            if (G[b]) {
                Aa = G[b].length;
                for (P = Ba.length = 0; P < Aa; P++) Ba.push(G[b][P]);
                for (P = 0; P < Aa; P++) Ba[P].call(d, b, a)
            }
        }
        var c = k.extend({}, la.defaults, h),
            d = this,
            H = O(f),
            E = k(f),
            u = E.children().eq(0),
            y = 0,
            t = 0,
            e = {
                start: 0,
                center: 0,
                end: 0,
                cur: 0,
                dest: 0
            }, K = k(c.scrollBar).eq(0),
            D = K.children().eq(0),
            S = 0,
            N = 0,
            r = {
                start: 0,
                end: 0,
                cur: 0
            }, V = k(c.pagesBar),
            ga = 0,
            w = [],
            F = 0,
            n = [],
            g = {
                firstItem: 0,
                lastItem: 0,
                centerItem: 0,
                activeItem: -1,
                activePage: 0
            };
        h = "basic" === c.itemNav;
        var T = "forceCentered" === c.itemNav,
            L = "centered" === c.itemNav || T,
            C = !H && (h || L || T),
            Sa = c.scrollSource ? k(c.scrollSource) : E,
            eb = c.dragSource ? k(c.dragSource) : E,
            Y = k(c.forward),
            ca = k(c.backward),
            Z = k(c.prev),
            $ = k(c.next),
            W = k(c.prevPage),
            X = k(c.nextPage),
            G = {}, q = {};
        ma = sa = B = ra = s = qa = R = z = void 0;
        var p = {}, a = {
            released: 1
        }, x = {
            last: 0,
            delta: 0,
            resetTime: 200
        }, U = 0,
            Qa = 0,
            Q = 0,
            Ga = 0,
            P, Aa;
        H || (f = E[0]);
        d.initialized = 0;
        d.frame = f;
        d.slidee = u[0];
        d.pos = e;
        d.rel = g;
        d.items = n;
        d.pages = w;
        d.isPaused = 0;
        d.options = c;
        d.dragging = a;
        d.reload = ba;
        d.getPos = function (b) {
            if (C) return b = pa(b), -1 !== b ? n[b] : !1;
            var a = u.find(b).eq(0);
            return a[0] ? (b = c.horizontal ? a.offset().left - u.offset().left : a.offset().top - u.offset().top,
            a = a[c.horizontal ? "outerWidth" : "outerHeight"](), {
                start: b,
                center: b - y / 2 + a / 2,
                end: b - y + a,
                size: a
            }) : !1
        };
        d.moveBy = function (b) {
            p.speed = b;
            !a.init && (p.speed && e.cur !== (0 < p.speed ? e.end : e.start)) && (p.lastTime = +new Date, p.startPos = e.cur, Ka("button"), a.init = 1, A("moveStart"), ka(Ga), Fa())
        };
        d.stop = function () {
            "button" === a.source && (a.init = 0, a.released = 1)
        };
        d.prev = function () {
            d.activate(g.activeItem - 1)
        };
        d.next = function () {
            d.activate(g.activeItem + 1)
        };
        d.prevPage = function () {
            d.activatePage(g.activePage - 1)
        };
        d.nextPage = function () {
            d.activatePage(g.activePage + 1)
        };
        d.slideBy = function (b, a) {
            if (b) if (C) d[L ? "toCenter" : "toStart"](v((L ? g.centerItem : g.firstItem) + c.scrollBy * b, 0, n.length));
            else I(e.dest + b, a)
        };
        d.slideTo = function (b, a) {
            I(b, a)
        };
        d.toStart = function (b, a) {
            wa("start", b, a)
        };
        d.toEnd = function (b, a) {
            wa("end", b, a)
        };
        d.toCenter = function (b, a) {
            wa("center", b, a)
        };
        d.getIndex = pa;
        d.activate = function (b, e) {
            var f = oa(b);
            c.smart && !1 !== f && (L ? d.toCenter(f, e) : f >= g.lastItem ? d.toStart(f, e) : f <= g.firstItem ? d.toEnd(f, e) : a.released && !d.isPaused && d.resume())
        };
        d.activatePage = function (b,
        a) {
            O(b) && I(w[v(b, 0, w.length - 1)], a)
        };
        d.resume = function (b) {
            !c.cycleBy || (!c.cycleInterval || "items" === c.cycleBy && !n[0] || b < d.isPaused) || (d.isPaused = 0, Q ? Q = clearTimeout(Q) : A("resume"), Q = setTimeout(function () {
                A("cycle");
                switch (c.cycleBy) {
                    case "items":
                        d.activate(g.activeItem >= n.length - 1 ? 0 : g.activeItem + 1);
                        break;
                    case "pages":
                        d.activatePage(g.activePage >= w.length - 1 ? 0 : g.activePage + 1)
                }
            }, c.cycleInterval))
        };
        d.pause = function (b) {
            b < d.isPaused || (d.isPaused = b || 100, Q && (Q = clearTimeout(Q), A("pause")))
        };
        d.toggle = function () {
            d[Q ?
                "pause" : "resume"]()
        };
        d.set = function (b, a) {
            k.isPlainObject(b) ? k.extend(c, b) : c.hasOwnProperty(b) && (c[b] = a)
        };
        d.add = function (b, a) {
            var d = k(b);
            C ? (null != a && n[0] ? n.length && d.insertBefore(n[a].el) : d.appendTo(u), a <= g.activeItem && (q.active = g.activeItem += d.length)) : u.append(d);
            ba()
        };
        d.remove = function (b) {
            if (C) {
                if (b = xa(b), -1 < b) {
                    F.eq(b).remove();
                    var a = b === g.activeItem;
                    b < g.activeItem && (q.active = --g.activeItem);
                    ba();
                    a && (q.active = null, d.activate(g.activeItem))
                }
            } else k(b).remove(), ba()
        };
        d.moveAfter = function (b, a) {
            Ha(b,
            a, 1)
        };
        d.moveBefore = function (b, a) {
            Ha(b, a)
        };
        d.on = function (b, a) {
            if ("object" === ja(b)) for (var c in b) {
                if (b.hasOwnProperty(c)) d.on(c, b[c])
            } else if ("function" === ja(a)) {
                c = b.split(" ");
                for (var e = 0, f = c.length; e < f; e++) G[c[e]] = G[c[e]] || [], -1 === Ia(c[e], a) && G[c[e]].push(a)
            } else if ("array" === ja(a)) for (c = 0, e = a.length; c < e; c++) d.on(b, a[c])
        };
        d.one = function (b, a) {
            function c() {
                a.apply(d, arguments);
                d.off(b, c)
            }
            d.on(b, c)
        };
        d.off = function (a, c) {
            if (c instanceof Array) for (var e = 0, f = c.length; e < f; e++) d.off(a, c[e]);
            else for (var e = a.split(" "), f = 0, g = e.length; f < g; f++) if (G[e[f]] = G[e[f]] || [], null == c) G[e[f]].length = 0;
            else {
                var h = Ia(e[f], c); - 1 !== h && G[e[f]].splice(h, 1)
            }
        };
        d.destroy = function () {
            da.add(Sa).add(D).add(K).add(V).add(Y).add(ca).add(Z).add($).add(W).add(X).unbind("." + m);
            Z.add($).add(W).add(X).removeClass(c.disabledClass);
            F && F.eq(g.activeItem).removeClass(c.activeClass);
            V.empty();
            H || (E.unbind("." + m), u.add(D).css(J || (c.horizontal ? "left" : "top"), J ? "none" : 0), k.removeData(f, m));
            n.length = w.length = 0;
            q = {};
            d.initialized = 0;
            return d
        };
        d.init = function () {
            if (!d.initialized) {
                d.on(Va);
                var a = D;
                H || (a = a.add(u), E.css("overflow", "hidden"), J || "static" !== E.css("position") || E.css("position", "relative"));
                J ? ia && a.css(J, ia) : ("static" === K.css("position") && K.css("position", "relative"), a.css({
                    position: "absolute"
                }));
                if (c.forward) Y.on(Ta, ea);
                if (c.backward) ca.on(Ta, ea);
                if (c.prev) Z.on(aa, ea);
                if (c.next) $.on(aa, ea);
                if (c.prevPage) W.on(aa, ea);
                if (c.nextPage) X.on(aa, ea);
                Sa.on("DOMMouseScroll." + m + " mousewheel." + m, Za);
                if (K[0]) K.on(aa, $a);
                if (C && c.activateOn) E.on(c.activateOn +
                    "." + m, "*", bb);
                if (V[0] && c.activatePageOn) V.on(c.activatePageOn + "." + m, "*", cb);
                eb.on(Ua, {
                    source: "slidee"
                }, La);
                if (D) D.on(Ua, {
                    source: "handle"
                }, La);
                da.bind("keydown." + m, ab);
                H || (E.on("mouseenter." + m + " mouseleave." + m, db), E.on("scroll." + m, fb));
                ba();
                if (c.cycleBy && !H) d[c.startPaused ? "pause" : "resume"]();
                d.initialized = 1;
                return d
            }
        }
    }

    function ja(f) {
        return null == f ? String(f) : "object" === typeof f || "function" === typeof f ? Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof f
    }

    function M(f,
    h) {
        f.preventDefault();
        h && f.stopPropagation()
    }

    function ya(f) {
        M(f, 1);
        k(this).off(f.type, ya)
    }

    function fb() {
        this.scrollTop = this.scrollLeft = 0
    }

    function O(f) {
        return !isNaN(parseFloat(f)) && isFinite(f)
    }

    function na(f, h) {
        return 0 | Math.round(String(f.css(h)).replace(/[^\-0-9.]/g, ""))
    }

    function v(f, h, k) {
        return f < h ? h : f > k ? k : f
    }
    var m = "sly",
        ka = B.cancelAnimationFrame || B.cancelRequestAnimationFrame,
        ha = B.requestAnimationFrame,
        J, ia, da = k(document),
        Ua = "touchstart." + m + " mousedown." + m,
        Oa = "mousemove." + m + " mouseup." + m,
        Na = "touchmove." + m + " touchend." + m,
        aa = "click." + m,
        Ta = "mousedown." + m,
        Ma = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"],
        Ba = [],
        za;
    (function (f) {
        for (var h = ["moz", "webkit", "o"], k = 0, m = 0, R = h.length; m < R && !ka; ++m) ha = (ka = f[h[m] + "CancelAnimationFrame"] || f[h[m] + "CancelRequestAnimationFrame"]) && f[h[m] + "RequestAnimationFrame"];
        ka || (ha = function (h) {
            var m = +new Date,
                z = Math.max(0, 16 - (m - k));
            k = m + z;
            return f.setTimeout(function () {
                h(m + z)
            }, z)
        }, ka = function (f) {
            clearTimeout(f)
        })
    })(window);
    (function () {
        function f(f) {
            for (var m = 0, v = h.length; m < v; m++) {
                var s = h[m] ? h[m] + f.charAt(0).toUpperCase() + f.slice(1) : f;
                if (null != k.style[s]) return s
            }
        }
        var h = ["", "webkit", "moz", "ms", "o"],
            k = document.createElement("div");
        J = f("transform");
        ia = f("perspective") ? "translateZ(0) " : ""
    })();
    B.Sly = la;
    k.fn.sly = function (f, h) {
        var v, z;
        if (!k.isPlainObject(f)) {
            if ("string" === ja(f) || !1 === f) v = !1 === f ? "destroy" : f, z = Array.prototype.slice.call(arguments, 1);
            f = {}
        }
        return this.each(function (J, B) {
            var s = k.data(B, m);
            s || v ? s && v && s[v] && s[v].apply(s, z) : k.data(B, m, (new la(B, f, h)).init())
        })
    };
    la.defaults = {
        horizontal: 0,
        itemNav: null,
        itemSelector: null,
        smart: 0,
        activateOn: null,
        activateMiddle: 0,
        scrollSource: null,
        scrollBy: 0,
        dragSource: null,
        mouseDragging: 0,
        touchDragging: 0,
        releaseSwing: 0,
        swingSpeed: 0.2,
        elasticBounds: 0,
        interactive: null,
        scrollBar: null,
        dragHandle: 0,
        // dynamicHandle: 0,
        dynamicHandle: false,
        minHandleSize: 50,
        clickBar: 0,
        syncSpeed: 0.5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function (f) {
            return "<li>" + (f + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5E3,
        pauseOnHover: 0,
        startPaused: 0,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: 0,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
})(jQuery, window);

jQuery(function ($) {
    (function () {
        var title = 'BO 0018/S / D28JJ'; //$('#po13342').find(":selected").text();
        var startIndex = $("a[title='"+title+"']").parent().index();
        var $frame = $('#main-slider');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateOn: 'click',
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            scrollBar: $wrap.find('.content__item-list .scrollbar'),
            startAt: 0,
            scrollBy: 1,
            speed: 2500,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: false,
            minHandleSize: 8,
            clickBar: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });
    }());
});




if ($(window).width() < 1001) {
  if (window.matchMedia("(max-width: 1000px)").matches) {

    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        center: true,
        loop: true,
        items: 2,
        autoWidth:true,
        dots:false,
        margin:0,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          960: {
            items: 5
          },
          1200: {
            items: 6
          }
        }
      });
      owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
          owl.trigger('next.owl');
        } else {
          owl.trigger('prev.owl');
        }
        e.preventDefault();
      });
    })

  } //- EOF matchMedia
}







/* burger */

(function($) {

  var toggled = 0;

  $('.sort__link').on("click", function(event) {
    event.stopPropagation(); /* important */
    var index = $(this).parent().index();
    $('.sort__link').parent().removeClass('active');
    $(this).parent().addClass('active');
    var translateY = ((index - 1) * 61) + 5;
    $('.sort__arr').css('transform', 'translateY('+ translateY +'px)');
  });

})(jQuery);



/* eof burger */



$(function($) {
    var num_cols = 3,
    container = $('.split-list'),
    listItem = 'li',
    listClass = 'sub-list';
    container.each(function() {
        var items_per_col = new Array(),
        items = $(this).find(listItem),
        min_items_per_col = Math.floor(items.length / num_cols),
        difference = items.length - (min_items_per_col * num_cols);
        for (var i = 0; i < num_cols; i++) {
            if (i < difference) {
                items_per_col[i] = min_items_per_col + 1;
            } else {
                items_per_col[i] = min_items_per_col;
            }
        }
        for (var i = 0; i < num_cols; i++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            for (var j = 0; j < items_per_col[i]; j++) {
                var pointer = 0;
                for (var k = 0; k < i; k++) {
                    pointer += items_per_col[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
    });
});
