(this.webpackJsonpvisualizer = this.webpackJsonpvisualizer || []).push([
  [0],
  {
    114: function (t, e, a) {},
    115: function (t, e, a) {},
    116: function (t, e, a) {},
    117: function (t, e, a) {},
    118: function (t, e, a) {},
    133: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(0),
        i = a.n(n),
        s = a(54),
        r = a.n(s),
        l = (a(63), a(6)),
        o = a(7),
        c = a(8),
        u = a(10),
        h = a(9),
        d = a(58),
        m = a(16),
        g =
          (a(64),
          (function (t) {
            Object(u.a)(a, t);
            var e = Object(h.a)(a);
            function a() {
              return Object(l.a)(this, a), e.apply(this, arguments);
            }
            return (
              Object(o.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.row,
                      a = t.col,
                      n = t.isFinish,
                      s = t.isStart,
                      r = t.onMouseDown,
                      l = t.onMouseEnter,
                      o = t.onMouseUp,
                      c = t.isWall,
                      u = n
                        ? "node-finish"
                        : s
                        ? "node-start"
                        : c
                        ? "node-wall"
                        : "";
                    return i.a.createElement("div", {
                      id: "node-".concat(e, "-").concat(a),
                      className: "node ".concat(u),
                      onMouseDown: function () {
                        return r(e, a);
                      },
                      onMouseEnter: function () {
                        return l(e, a);
                      },
                      onMouseUp: function () {
                        return o();
                      },
                    });
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        p = a(13);
      function f(t, e, a) {
        var n = [];
        e.distance = 0;
        for (var i = x(t); i.length; ) {
          i.sort(function (t, e) {
            return t.distance - e.distance;
          });
          var s = i.shift();
          if (s === a) return n;
          if (!s.isWall) {
            if (s.distance === 1 / 0) return n;
            (s.isVisited = !0), n.push(s), S(s, t);
          }
        }
        return n;
      }
      function v(t, e, a) {
        var n = [],
          i = [];
        for (i.push(e); i.length; ) {
          var s = i.pop();
          if (s === a) return n;
          s.isWall || ((s.isVisited = !0), n.push(s), (i = i.concat(y(s, t))));
        }
        return n;
      }
      function b(t, e, a) {
        var n = [],
          i = [];
        for (i.push(e); i.length; ) {
          var s = i.shift();
          if (s === a) return n;
          s.isWall || ((s.isVisited = !0), n.push(s), (i = i.concat(y(s, t))));
        }
        return n;
      }
      function y(t, e) {
        var a = [],
          n = [],
          i = t.row,
          s = t.col;
        i > 0 && a.push(e[i - 1][s]),
          i < e.length - 1 && a.push(e[i + 1][s]),
          s < e[0].length - 1 && a.push(e[i][s + 1]),
          s > 0 && a.push(e[i][s - 1]);
        for (var r = 0; r < a.length; r++) {
          var l = a[r];
          l.isVisited || ((l.previousNode = t), (l.isVisited = !0), n.push(l));
        }
        return n;
      }
      function E(t, e, a) {
        var n = [];
        (e.distance = 0), (e.heuristic = 0);
        for (var i = x(t); i.length; ) {
          i.sort(function (t, e) {
            return t.distance + t.heuristic - (e.distance + e.heuristic);
          });
          var s = i.shift();
          if (s === a) return n;
          if (!s.isWall) {
            if (s.distance + s.heuristic === 1 / 0) return n;
            (s.isVisited = !0), n.push(s), w(s, t, a);
          }
        }
        return n;
      }
      function w(t, e, a) {
        var n = [],
          i = t.row,
          s = t.col;
        i > 0 && n.push(e[i - 1][s]),
          i < e.length - 1 && n.push(e[i + 1][s]),
          s > 0 && n.push(e[i][s - 1]),
          s < e[0].length - 1 && n.push(e[i][s + 1]);
        for (var r = 0, l = n; r < l.length; r++) {
          var o = l[r];
          o.isVisited ||
            ((o.distance = t.distance + 1),
            (o.heuristic = k(o, a)),
            (o.previousNode = t));
        }
      }
      function k(t, e) {
        var a = t.row,
          n = t.col,
          i = e.row,
          s = e.col;
        return Math.abs(a - i) + Math.abs(n - s);
      }
      function x(t) {
        var e,
          a = [],
          n = Object(p.a)(t);
        try {
          for (n.s(); !(e = n.n()).done; ) {
            var i,
              s = e.value,
              r = Object(p.a)(s);
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var l = i.value;
                a.push(l);
              }
            } catch (o) {
              r.e(o);
            } finally {
              r.f();
            }
          }
        } catch (o) {
          n.e(o);
        } finally {
          n.f();
        }
        return a;
      }
      function S(t, e) {
        var a = [],
          n = t.row,
          i = t.col;
        n > 0 && a.push(e[n - 1][i]),
          n < e.length - 1 && a.push(e[n + 1][i]),
          i > 0 && a.push(e[n][i - 1]),
          i < e[0].length - 1 && a.push(e[n][i + 1]);
        for (var s = 0, r = a; s < r.length; s++) {
          var l = r[s];
          l.isVisited || ((l.distance = t.distance + 1), (l.previousNode = t));
        }
      }
      function A(t) {
        return (
          (e = 0),
          (a = t.length - 1),
          Math.floor(Math.random() * (a - e + 1) + e)
        );
        var e, a;
      }
      function C(t, e, a) {
        var n = a.row,
          i = a.col,
          s = [
            { row: n + 2, col: i },
            { row: n - 2, col: i },
            { row: n, col: i + 2 },
            { row: n, col: i - 2 },
          ];
        s = (function (t, e) {
          for (
            var a = t.length, n = t[0].length, i = [], s = 0;
            s < e.length;
            s++
          ) {
            var r = e[s],
              l = r.row,
              o = r.col;
            0 <= l && l < a && 0 <= o && o < n && i.push(e[s]);
          }
          return i;
        })(t, s.slice());
        var r = [],
          l = [];
        return (
          s.forEach(function (t) {
            !(function (t, e) {
              for (var a = e.row, n = e.col, i = 0; i < t.length; i++) {
                var s = t[i],
                  r = s.row,
                  l = s.col;
                if (a === r && n === l) return !0;
              }
              return !1;
            })(e, t)
              ? l.push(t)
              : r.push(t);
          }),
          { c: r, u: l }
        );
      }
      function F(t, e, a) {
        var n = e.row,
          i = e.col;
        z(t, (n + a.row) / 2, (i + a.col) / 2, !1);
      }
      function z(t, e, a, n) {
        var i = t[e][a],
          s = Object(m.a)(Object(m.a)({}, i), {}, { isWall: n });
        t[e][a] = s;
      }
      a(65);
      var P = (function (t) {
          Object(u.a)(a, t);
          var e = Object(h.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).state = {
                grid: [],
                FR: 7,
                FC: 31,
                mouseIsPressed: !1,
                changingStart: !1,
                changingFinish: !1,
                visualized: !1,
                rendering: !1,
                numRow: 17,
                numCol: 37,
                SR: 7,
                SC: 5,
                speed: "median",
                delays: { slow: 17, median: 7, fast: 3 },
                currentAlgorithm: -1,
                algorithms: ["BFS", "Dijkstra", "A Star", "DFS"],
                pathfindingAlgorithms: [b, f, E, v],
              }),
              (n.visualizePathfinding = n.visualizePathfinding.bind(
                Object(c.a)(n)
              )),
              (n.clearVisualizer = n.clearVisualizer.bind(Object(c.a)(n))),
              (n.setAlgorithm = n.setAlgorithm.bind(Object(c.a)(n))),
              n.props.getFunctions(
                n.visualizePathfinding,
                n.clearVisualizer,
                n.setAlgorithm,
                n.state.algorithms
              ),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "setAlgorithm",
                value: function (t) {
                  this.setState({ currentAlgorithm: t });
                },
              },
              {
                key: "isRendering",
                value: function () {
                  return this.state.rendering;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var t = this.initializeGrid(!1);
                  this.setState({ grid: t, currentAlgorithm: -1 }),
                    (this.state.grid = t);
                },
              },
              {
                key: "initializeGrid",
                value: function (t) {
                  for (var e = [], a = 0; a < this.state.numRow; a++) {
                    for (var n = [], i = 0; i < this.state.numCol; i++) {
                      var s = !1,
                        r = document.getElementById(
                          "node-".concat(a, "-").concat(i)
                        );
                      !r ||
                        ("node node-path" !== r.className &&
                          "node node-visited" !== r.className) ||
                        (r.className = "node"),
                        !t && r && "node node-wall" === r.className && (s = !0),
                        n.push(this.createNode(a, i, s));
                    }
                    e.push(n);
                  }
                  return e;
                },
              },
              {
                key: "createNode",
                value: function (t, e, a) {
                  return {
                    col: e,
                    row: t,
                    isStart: t === this.state.SR && e === this.state.SC,
                    isFinish: t === this.state.FR && e === this.state.FC,
                    distance: 1 / 0,
                    heuristic: 1 / 0,
                    isVisited: !1,
                    isWall: a,
                    previousNode: null,
                  };
                },
              },
              {
                key: "handleMouseDown",
                value: function (t, e) {
                  t === this.state.SR && e === this.state.SC
                    ? this.setState({ changingStart: !0 })
                    : t === this.state.FR && e === this.state.FC
                    ? this.setState({ changingFinish: !0 })
                    : this.state.rendering ||
                      (this.updateGridWithWall(this.state.grid, t, e),
                      this.setState({ mouseIsPressed: !0 }),
                      this.clearVisitedAndPath());
                },
              },
              {
                key: "handleMouseEnter",
                value: function (t, e) {
                  if (this.state.mouseIsPressed)
                    this.updateGridWithWall(this.state.grid, t, e),
                      this.setState({ mouseIsPressed: !0 });
                  else if (
                    !this.state.changingStart ||
                    (t === this.state.FR && e === this.state.FC)
                  ) {
                    if (
                      this.state.changingFinish &&
                      (t !== this.state.SR || e !== this.state.SC)
                    ) {
                      var a = document.getElementById(
                        "node-".concat(this.state.FR, "-").concat(this.state.FC)
                      );
                      a &&
                        ((a.className = "node"),
                        (a.isFinish = !1),
                        (this.state.grid[this.state.FR][
                          this.state.FC
                        ].isFinish = !1));
                      var n = document.getElementById(
                        "node-".concat(t, "-").concat(e)
                      );
                      n &&
                        ((n.isFinish = !0),
                        (n.className = "node node-finish"),
                        (this.state.grid[t][e].isFinish = !0)),
                        this.setState({ FR: t, FC: e }),
                        this.clearVisitedAndPath();
                    }
                  } else {
                    var i = document.getElementById(
                      "node-".concat(this.state.SR, "-").concat(this.state.SC)
                    );
                    i &&
                      ((i.className = "node"),
                      (i.isStart = !1),
                      (this.state.grid[this.state.SR][this.state.SC].isStart =
                        !1));
                    var s = document.getElementById(
                      "node-".concat(t, "-").concat(e)
                    );
                    s &&
                      ((s.isStart = !0),
                      (s.className = "node node-start"),
                      (this.state.grid[t][e].isStart = !0)),
                      this.setState({ SR: t, SC: e }),
                      this.clearVisitedAndPath();
                  }
                },
              },
              {
                key: "handleMouseUp",
                value: function () {
                  this.setState({
                    changingStart: !1,
                    changingFinish: !1,
                    mouseIsPressed: !1,
                  });
                },
              },
              {
                key: "updateGridWithWall",
                value: function (t, e, a) {
                  var n = t[e][a],
                    i = Object(m.a)(
                      Object(m.a)({}, n),
                      {},
                      { isWall: !n.isWall }
                    );
                  t[e][a] = i;
                },
              },
              {
                key: "visualizePathfinding",
                value: function () {
                  var t = this;
                  if (
                    -1 !== this.state.currentAlgorithm &&
                    !this.state.rendering
                  ) {
                    this.setState({ visualized: !0, rendering: !0 }),
                      this.props.setVisualizerRendering(!0);
                    var e = this.initializeGrid(!1);
                    this.setState({ grid: e }), (this.state.grid = e);
                    for (
                      var a = this.state.grid,
                        n = a[this.state.SR][this.state.SC],
                        i = a[this.state.FR][this.state.FC],
                        s = this.state.pathfindingAlgorithms[
                          this.state.currentAlgorithm
                        ](a, n, i),
                        r = (function (t) {
                          for (var e = [], a = t; null !== a; )
                            e.unshift(a), (a = a.previousNode);
                          return e;
                        })(i),
                        l = function (e) {
                          setTimeout(function () {
                            var t = s[e];
                            t.isStart ||
                              t.isFinish ||
                              (document.getElementById(
                                "node-".concat(t.row, "-").concat(t.col)
                              ).className = "node node-visited");
                          }, t.state.delays[t.state.speed] * e);
                        },
                        o = 0;
                      o < s.length;
                      o++
                    )
                      l(o);
                    for (
                      var c = function (e) {
                          setTimeout(function () {
                            var t = r[e];
                            t.isStart ||
                              t.isFinish ||
                              (document.getElementById(
                                "node-".concat(t.row, "-").concat(t.col)
                              ).className = "node node-path");
                          }, t.state.delays[t.state.speed] * s.length + 50 * e);
                        },
                        u = 0;
                      u < r.length;
                      u++
                    )
                      c(u);
                    setTimeout(function () {
                      t.setState({ rendering: !1 }),
                        t.props.setVisualizerRendering(!1);
                    }, this.state.delays[this.state.speed] * s.length +
                      50 * r.length);
                  }
                },
              },
              {
                key: "clearVisualizer",
                value: function () {
                  this.state.rendering ||
                    this.setState({
                      grid: this.initializeGrid(!0),
                      visualized: !1,
                    });
                },
              },
              {
                key: "clearVisitedAndPath",
                value: function () {
                  for (var t = 0; t < this.state.numRow; t++)
                    for (var e = 0; e < this.state.numCol; e++) {
                      var a = document.getElementById(
                        "node-".concat(t, "-").concat(e)
                      );
                      console.log(a),
                        !a ||
                          ("node node-visited" !== a.className &&
                            "node node-path" !== a.className) ||
                          (a.className = "node");
                    }
                },
              },
              {
                key: "setSpeed",
                value: function (t) {
                  this.setState({ speed: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.state.grid;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: "grid" },
                      e.map(function (e, a) {
                        return i.a.createElement(
                          "div",
                          { key: a },
                          e.map(function (e, a) {
                            var n = e.row,
                              s = e.col,
                              r = e.isFinish,
                              l = e.isStart,
                              o = e.isWall;
                            return i.a.createElement(g, {
                              key: a,
                              row: n,
                              col: s,
                              isStart: l,
                              isFinish: r,
                              isWall: o,
                              mouseIsPressed: t.state.mouseIsPressed,
                              onMouseDown: function (e, a) {
                                return t.handleMouseDown(e, a);
                              },
                              onMouseEnter: function (e, a) {
                                return t.handleMouseEnter(e, a);
                              },
                              onMouseUp: function () {
                                return t.handleMouseUp();
                              },
                            });
                          })
                        );
                      })
                    ),
                    i.a.createElement(
                      "div",
                      { class: "dropdown", style: { marginTop: "10px" } },
                      i.a.createElement(
                        "button",
                        {
                          class: "btn btn-outline-dark dropdown-toggle",
                          type: "button",
                          disabled: this.state.rendering,
                          id: "dropdownMenuButton",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          style: {
                            marginRight: "5px",
                            height: "30px",
                            width: "150px",
                          },
                        },
                        i.a.createElement(
                          "p",
                          { style: { "margin-top": "-5px" } },
                          "Speed: ".concat(this.state.speed)
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          class: "dropdown-menu",
                          "aria-labelledby": "dropdownMenuButton",
                        },
                        i.a.createElement(
                          "li",
                          null,
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("slow");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "slow"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("median");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "median"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("fast");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "fast"
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            !(function (t) {
                              for (
                                var e = t.length, a = t[0].length, n = 0;
                                n < e;
                                n++
                              )
                                for (var i = 0; i < a; i++) z(t, n, i, !1);
                              for (var s = 0; s < e; s++)
                                for (
                                  var r = (s % 2) + 1;
                                  r < a;
                                  r += (s % 2) + 1
                                )
                                  z(t, s, r, !0);
                              for (var l = 0; l < e; l++) z(t, l, 0, !0);
                              for (
                                var o = [], c = [{ row: 7, col: 17 }];
                                c.length > 0;

                              ) {
                                var u = A(c),
                                  h = c[u];
                                c.splice(u, 1);
                                var d = C(t, (o = o.concat([h])), h),
                                  m = d.c,
                                  g = d.u;
                                if (m.length > 0) {
                                  var p = A(m);
                                  F(t, h, m[p]), m.splice(p);
                                }
                                c = c.concat(g);
                              }
                            })(t.state.grid),
                              t.setState({ finish: !1 }),
                              t.clearVisitedAndPath();
                          },
                          type: "button",
                          class: "btn btn-outline-dark",
                          style: { marginLeft: "5px", height: "30px" },
                          disabled: this.state.rendering,
                        },
                        i.a.createElement(
                          "p",
                          { style: { "margin-top": "-6px" } },
                          "generate maze"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        M =
          (a(66),
          a(67),
          (function (t) {
            Object(u.a)(a, t);
            var e = Object(h.a)(a);
            function a() {
              return Object(l.a)(this, a), e.apply(this, arguments);
            }
            return (
              Object(o.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.val,
                      a = t.isChanging,
                      n = (t.isPivot, t.finished),
                      s = (t.index, t.size),
                      r = t.colorSetIndex,
                      l = t.changingColors,
                      o =
                        void 0 === l
                          ? [
                              "rgb(228, 230, 120)",
                              "rgb(155, 147, 229)",
                              "rgb(248, 250, 140)",
                            ]
                          : l,
                      c = t.offSet,
                      u = void 0 === c ? { small: 20, median: 0, large: 0 } : c,
                      h = t.normalColors,
                      d =
                        void 0 === h
                          ? [
                              "rgb(200,".concat(
                                255 * (1 - e / 45) + 50 + u[s],
                                ", 255)"
                              ),
                              "rgb(250,200, ".concat(
                                255 * (1 - e / 80) + u[s],
                                ")"
                              ),
                              "rgb( ".concat(
                                255 * (1 - e / 80) + u[s],
                                ",200,250)"
                              ),
                            ]
                          : h,
                      m = "";
                    a && (m = "-changing"), n && (m = "-finished");
                    var g = "-changing" === m ? o[r] : d[r];
                    !this.props.finished &&
                      this.props.isPivot &&
                      (g = "rgb(240, 190, 149)");
                    var p = -20 * this.props.index,
                      f = { small: 420, median: 620, large: 820 };
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        "div",
                        {
                          className: "pile" + m,
                          style: {
                            height: "".concat(
                              e *
                                { small: 14, median: 10, large: 8 }[
                                  this.props.size
                                ],
                              "px"
                            ),
                            background: g,
                          },
                        },
                        i.a.createElement("p", { className: "value" }, e),
                        !this.props.finished &&
                          this.props.isPivot &&
                          i.a.createElement(
                            "svg",
                            {
                              height: "100",
                              width: f[s] + 100,
                              style: {
                                position: "absolute",
                                display: "flex",
                                marginTop: "-31px",
                                marginLeft: "".concat(p, "px"),
                              },
                            },
                            i.a.createElement("line", {
                              x1: "0",
                              y1: "0",
                              x2: f[s],
                              y2: "0",
                              style: { stroke: "grey", strokeWidth: "3px" },
                            })
                          )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component));
      function O(t, e, a) {
        var n = t[e];
        (t[e] = t[a]), (t[a] = n);
      }
      function j(t) {
        for (var e = [], a = 0; a < t.length - 1; a++) {
          for (var n = a, i = a + 1; i < t.length; i++) {
            t[i] < t[n] && (n = i);
            var s = { piles: t.slice(), changing: [i] };
            e.push(s);
          }
          O(t, n, a);
          var r = { piles: t.slice(), changing: [n, a] };
          e.push(r);
        }
        return e;
      }
      function I(t) {
        for (var e = [], a = t.length; a > 1; ) {
          for (var n = 0, i = 1; i < a; i++)
            if (t[i - 1] > t[i]) {
              O(t, i - 1, i), (n = i);
              var s = { piles: t.slice(), changing: [i] };
              e.push(s);
            }
          a = n;
        }
        return e;
      }
      function T(t) {
        for (var e = [], a = 1; a < t.length; a++)
          for (var n = a; n > 0 && t[n - 1] > t[n]; n--) {
            O(t, n, n - 1);
            var i = { piles: t.slice(), changing: [n - 1] };
            e.push(i);
          }
        return console.log(e), e;
      }
      function N(t) {
        var e = [];
        return (
          (function t(e, a, n, i) {
            if (a === n) return;
            var s = Math.floor((a + n) / 2);
            t(e, a, s, i),
              t(e, s + 1, n, i),
              (function (t, e, a, n, i) {
                var s = e,
                  r = e,
                  l = a + 1,
                  o = t.slice();
                for (; r <= a && l <= n; ) {
                  o[r] <= o[l] ? (t[s++] = o[r++]) : (t[s++] = o[l++]);
                  var c = { piles: t.slice(), changing: [r, l, s] };
                  i.push(c);
                }
                for (; r <= a; ) {
                  t[s++] = o[r++];
                  var u = { piles: t.slice(), changing: [r, s] };
                  i.push(u);
                }
                for (; l <= n; ) {
                  t[s++] = o[l++];
                  var h = { piles: t.slice(), changing: [l, s] };
                  i.push(h);
                }
              })(e, a, s, n, i);
          })(t, 0, t.length - 1, e),
          e
        );
      }
      function R(t) {
        var e = [];
        return (
          (function t(e, a, n, i) {
            if (a < n) {
              var s = (function (t, e, a, n) {
                for (var i = t[a], s = e - 1, r = e; r <= a - 1; r++)
                  if (t[r] < i) {
                    s++, O(t, s, r);
                    var l = { piles: t.slice(), changing: [s, r], pivot: i };
                    i !== t.length + 4 && n.push(l);
                  }
                O(t, s + 1, a);
                var o = { piles: t.slice(), changing: [s + 1, a], pivot: i };
                i !== t.length + 4 && n.push(o);
                return s + 1;
              })(e, a, n, i);
              t(e, a, s - 1, i), t(e, s + 1, n, i);
            }
          })(t, 0, t.length - 1, e),
          e
        );
      }
      var V = (function (t) {
        Object(u.a)(a, t);
        var e = Object(h.a)(a);
        function a(t) {
          var n;
          return (
            Object(l.a)(this, a),
            ((n = e.call(this, t)).state = {
              piles: [],
              numPiles: 30,
              finished: !1,
              maxPile: 80,
              changingPiles: [],
              pileDelayTimes: [30, 40, 40, 80, 80],
              DelayTimesSizeBased: {
                fast: [15, 20, 20, 40, 40],
                median: [30, 40, 40, 80, 80],
                slow: [60, 80, 80, 160, 160],
              },
              colorSetIndex: B(0, 3),
              currentAlgorithm: -1,
              descriptions: [
                "Selection Sort: repeatedly find the minimum element from the unsorted part and append it to the sorted part.",
                "Bubble Sort: repeatedly swap the adjacent elements if they are in wrong order.",
                "Insertion Sort: repeatedly place value from the unsorted part at the correct position in the sorted part(by finding the closest left-side element that is smaller than it).",
                "Merge Sort: divide the array into two halves, sort them recursively using merge sort, and then merge the two halves.",
                "Quick Sort: choose an element as pivot, arrange the array such that the elements smaller than pivot are on its left and others are on its right, sort the two halves recursively.",
              ],
              unsortedPiles: [],
              speed: "median",
              size: "median",
              algorithms: [
                "Selection Sort",
                "Bubble Sort",
                "Insertion Sort",
                "Merge Sort",
                "Quick Sort",
              ],
              sortingAlgorithms: [j, I, T, N, R],
            }),
            (n.randomizePiles = n.randomizePiles.bind(Object(c.a)(n))),
            (n.visualizeSorting = n.visualizeSorting.bind(Object(c.a)(n))),
            (n.setAlgorithm = n.setAlgorithm.bind(Object(c.a)(n))),
            n.props.getFunctions(
              n.visualizeSorting,
              n.randomizePiles,
              n.setAlgorithm,
              n.state.algorithms
            ),
            n
          );
        }
        return (
          Object(o.a)(a, [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.initializePiles();
                this.setState({ piles: t }),
                  this.setState({ piles: t, unsortedPiles: t.slice() });
              },
            },
            {
              key: "setAlgorithm",
              value: function (t) {
                this.state.unsortedPiles !== [] &&
                  this.setState({
                    finished: !1,
                    changingPiles: [],
                    piles: this.state.unsortedPiles,
                    pivot: -1,
                  }),
                  this.setState({ currentAlgorithm: t });
              },
            },
            {
              key: "initializePiles",
              value: function () {
                for (var t = [], e = 0; e < this.state.numPiles; e++)
                  t.push(e + 5);
                for (var a = 0; a < this.state.numPiles; a++) {
                  var n = B(0, a),
                    i = t[a];
                  (t[a] = t[n]), (t[n] = i);
                }
                return t.push(this.state.numPiles + 5), t;
              },
            },
            {
              key: "visualizeSorting",
              value: function () {
                var t = this;
                if (
                  -1 !== this.state.currentAlgorithm &&
                  !this.state.rendering
                ) {
                  this.state.finished &&
                    ((this.state.finished = !1),
                    (this.state.changingPiles = []),
                    (this.state.piles = this.state.unsortedPiles)),
                    this.setState({ rendering: !0 }),
                    this.props.setVisualizerRendering(!0);
                  for (
                    var e = this.state.piles.slice(),
                      a =
                        this.state.sortingAlgorithms[
                          this.state.currentAlgorithm
                        ](e),
                      n = function (e) {
                        var n = a[e],
                          i = n.piles,
                          s = n.changing,
                          r = n.pivot;
                        setTimeout(function () {
                          t.setState({ piles: i, changingPiles: s, pivot: r });
                        }, t.state.pileDelayTimes[t.state.currentAlgorithm] *
                          e);
                      },
                      i = 0;
                    i < a.length;
                    i++
                  )
                    n(i);
                  setTimeout(function () {
                    t.setState({ rendering: !1, finished: !0 }),
                      t.props.setVisualizerRendering(!1);
                  }, this.state.pileDelayTimes[this.state.currentAlgorithm] *
                    a.length);
                }
              },
            },
            {
              key: "randomizePiles",
              value: function () {
                if (!this.state.rendering) {
                  this.setState({
                    finished: !1,
                    changingPiles: [],
                    colorSetIndex: B(0, 3),
                  });
                  var t = this.initializePiles();
                  this.setState({ piles: t, unsortedPiles: t.slice() });
                }
              },
            },
            {
              key: "setSpeed",
              value: function (t) {
                this.setState({
                  speed: t,
                  pileDelayTimes: this.state.DelayTimesSizeBased[t],
                });
              },
            },
            {
              key: "setSize",
              value: function (t) {
                if (this.state.size !== t) {
                  var e = { small: 20, median: 30, large: 40 };
                  this.setState({ size: t, numPiles: e[t] }),
                    (this.state.numPiles = e[t]);
                  var a = this.initializePiles();
                  this.setState({
                    finished: !1,
                    changingPiles: [],
                    piles: a,
                    unsortedPiles: a.slice(),
                  });
                }
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.state.piles,
                  a = i.a.createElement(
                    "p",
                    null,
                    "Time Complexity: \u03b8(n\xb2)"
                  ),
                  n = i.a.createElement(
                    "p",
                    null,
                    "Time Complexity: \u03b8(n\xb7log(n))"
                  );
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "div",
                    { className: "piles", class: "container" },
                    e.map(function (e, a) {
                      return i.a.createElement(M, {
                        dummy: a === t.state.numPiles,
                        finished: t.state.finished,
                        className: "pile",
                        key: a,
                        index: a,
                        val: e,
                        size: t.state.size,
                        isChanging: -1 !== t.state.changingPiles.indexOf(a),
                        isPivot: t.state.pivot === e,
                        colorSetIndex: t.state.colorSetIndex,
                      });
                    })
                  ),
                  i.a.createElement(
                    "div",
                    {
                      class: "d-flex",
                      style: { marginLeft: "37%", marginTop: "10px" },
                    },
                    i.a.createElement(
                      "div",
                      { class: "dropdown 1" },
                      i.a.createElement(
                        "button",
                        {
                          class: "btn btn-outline-dark dropdown-toggle",
                          type: "button",
                          disabled: this.state.rendering,
                          id: "dropdownMenuSpeed",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          style: {
                            marginRight: "5px",
                            height: "30px",
                            width: "150px",
                          },
                        },
                        i.a.createElement(
                          "p",
                          { style: { "margin-top": "-5px" } },
                          "Speed: ".concat(this.state.speed)
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          class: "dropdown-menu",
                          "aria-labelledby": "dropdownMenuSpeed",
                        },
                        i.a.createElement(
                          "li",
                          null,
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("slow");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "slow"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("median");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "median"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSpeed("fast");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "fast"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { class: "dropdown 1" },
                      i.a.createElement(
                        "button",
                        {
                          class: "btn btn-outline-dark dropdown-toggle",
                          type: "button",
                          disabled: this.state.rendering,
                          id: "dropdownMenuSize",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          style: {
                            marginLeft: "5px",
                            height: "30px",
                            width: "150px",
                          },
                        },
                        i.a.createElement(
                          "p",
                          { style: { "margin-top": "-5px" } },
                          "Size: ".concat(this.state.size)
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          class: "dropdown-menu",
                          "aria-labelledby": "dropdownMenuSize",
                        },
                        i.a.createElement(
                          "li",
                          null,
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSize("small");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "small"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSize("median");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "median"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setSize("large");
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "large"
                            )
                          )
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    "h6",
                    { class: "algoDescription" },
                    -1 === this.state.currentAlgorithm
                      ? "Welcome to Sorting. Select an algorithm first."
                      : this.state.descriptions[this.state.currentAlgorithm]
                  ),
                  i.a.createElement(
                    "h5",
                    {
                      class: "algoComplexity",
                      style: { marginTop: "-4.5%", color: "rgb(90,90,90)" },
                    },
                    -1 === this.state.currentAlgorithm
                      ? ""
                      : this.state.currentAlgorithm < 3
                      ? a
                      : n
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function B(t, e) {
        return Math.floor(Math.random() * e) + t;
      }
      a(68);
      var D = a(2),
        L = (function () {
          function t(e, a) {
            Object(l.a)(this, t), (this.weights = new Array(e));
            for (var n = 0; n < this.weights.length; n++)
              this.weights[n] = _(-1, 1);
            this.alpha = a;
          }
          return (
            Object(o.a)(t, [
              {
                key: "train",
                value: function (t, e) {
                  for (
                    var a = e - this.feedforward(t), n = 0;
                    n < this.weights.length;
                    n++
                  )
                    this.weights[n] += this.alpha * a * t[n];
                },
              },
              {
                key: "feedforward",
                value: function (t) {
                  for (var e = 0, a = 0; a < this.weights.length; a++)
                    e += t[a] * this.weights[a];
                  return this.activate(e);
                },
              },
              {
                key: "activate",
                value: function (t) {
                  return t > 0 ? 1 : -1;
                },
              },
              {
                key: "getWeights",
                value: function () {
                  return this.weights;
                },
              },
            ]),
            t
          );
        })();
      function _(t, e) {
        return Math.random() * (e - t) + t;
      }
      a(114);
      var W = (function (t) {
        Object(u.a)(a, t);
        var e = Object(h.a)(a);
        function a(t) {
          var n;
          return (
            Object(l.a)(this, a),
            ((n = e.call(this, t)).state = {
              training: new Array(1002),
              rendering: !1,
              min: -1,
              max: 1,
              width: 500,
              height: 500,
              count: 0,
              ptron: null,
              xOff: 50,
              yOff: 100,
              M: 0.4,
              B: 0.3,
            }),
            (n.resetVisualizer = n.resetVisualizer.bind(Object(c.a)(n))),
            (n.startVisualizer = n.startVisualizer.bind(Object(c.a)(n))),
            n.props.getFunctions(n.startVisualizer, n.resetVisualizer),
            n
          );
        }
        return (
          Object(o.a)(a, [
            {
              key: "f",
              value: function (t) {
                return this.state.M * t + this.state.B;
              },
            },
            {
              key: "map",
              value: function (t, e, a, n, i) {
                return ((t - e) / (a - e)) * (i - n) + n;
              },
            },
            {
              key: "initialize",
              value: function () {
                this.state.ptron = new L(3, 0.006);
                for (var t = 0; t < this.state.training.length; t++) {
                  var e = _(this.state.min, this.state.max),
                    a = _(this.state.min, this.state.max),
                    n = 1;
                  a < this.f(e) && (n = -1),
                    (this.state.training[t] = { input: [e, a, 1], output: n });
                }
              },
            },
            {
              key: "resetVisualizer",
              value: function () {
                this.state.rendering ||
                  (this.setState({ count: 0 }), (this.state.count = 0));
              },
            },
            {
              key: "startVisualizer",
              value: function () {
                var t = this;
                this.setState({ rendering: !0 });
                for (
                  var e = function (e) {
                      setTimeout(function () {
                        t.setState({ count: e }), (t.state.count = e);
                      }, 25 * e);
                    },
                    a = 0;
                  a < this.state.training.length - 1;
                  a++
                )
                  e(a);
                setTimeout(function () {
                  t.setState({ rendering: !1 });
                }, 25 * this.state.training.length);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this;
                0 === this.state.count && this.initialize();
                var e = this.state.min,
                  a = this.state.max,
                  n = this.state.ptron,
                  s = this.map(e, e, a, 0, this.state.width),
                  r = this.map(this.f(e), e, a, this.state.height, 0),
                  l = this.map(a, e, a, 0, this.state.width),
                  o = this.map(this.f(a), e, a, this.state.height, 0),
                  c = n.getWeights(),
                  u = e,
                  h = (-c[2] - c[0] * u) / c[1],
                  d = a,
                  m = (-c[2] - c[0] * d) / c[1];
                (u = this.map(u, e, a, 0, this.state.width)),
                  (h = this.map(h, e, a, this.state.height, 0)),
                  (d = this.map(d, e, a, 0, this.state.width)),
                  (m = this.map(m, e, a, this.state.height, 0)),
                  n.train(
                    this.state.training[this.state.count].input,
                    this.state.training[this.state.count].output
                  );
                for (var g = [], p = 0; p < this.state.count; p++) {
                  var f = n.feedforward(this.state.training[p].input),
                    v = this.map(
                      this.state.training[p].input[0],
                      e,
                      a,
                      0,
                      this.state.width
                    ),
                    b = this.map(
                      this.state.training[p].input[1],
                      e,
                      a,
                      this.state.height,
                      0
                    );
                  p % 4 > 0 && g.push({ x: v, y: b, fill: f < 0 });
                }
                var y,
                  E = -c[0] / c[1],
                  w = -c[2] / c[1],
                  k = E - this.state.M,
                  x = w - this.state.B;
                y =
                  0 !== this.state.count
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 50,
                          text: "Function Form: Y = M * X + B",
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 80,
                          text: "Original Function: M = "
                            .concat(this.state.M, " B = ")
                            .concat(this.state.B),
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 135,
                          text: "Approximation:\nM = "
                            .concat(E, "\nB = ")
                            .concat(w),
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 240,
                          text: "Error:\nM: ".concat(k, "\nB:").concat(x),
                          fontFamily: "Calibri",
                          fill: "red",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 340,
                          text: "Count: ".concat(this.state.count),
                          fontFamily: "Calibri",
                          fill: "grey",
                          fontSize: 25,
                        })
                      )
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 50,
                          text: "",
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 80,
                          text: "Original Function: M = "
                            .concat(this.state.M, " B = ")
                            .concat(this.state.B),
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 135,
                          text: "Approximation:\nM = "
                            .concat(E, "\nB = ")
                            .concat(w),
                          fontFamily: "Calibri",
                          fill: "black",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 240,
                          text: "Error:\nM: ".concat(k, "\nB:").concat(x),
                          fontFamily: "Calibri",
                          fill: "red",
                          fontSize: 25,
                        }),
                        i.a.createElement(D.Text, {
                          x: 550,
                          y: 340,
                          text: "Count: ".concat(this.state.count),
                          fontFamily: "Calibri",
                          fill: "grey",
                          fontSize: 25,
                        })
                      );
                var S = g.map(function (t, e) {
                  return i.a.createElement(D.Circle, {
                    key: e,
                    x: t.x + 0,
                    y: t.y + 0,
                    stroke: "black",
                    radius: 3,
                    opacity: 0.7,
                    fill: t.fill ? "black" : "white",
                  });
                });
                return (
                  (this.state.all = i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      D.Stage,
                      {
                        width: 1e3,
                        height: 501,
                        className: "ptron-stage",
                        id: "stage",
                      },
                      i.a.createElement(
                        D.Layer,
                        {
                          name: "layer",
                          ref: function (e) {
                            return (t.state.layer = e);
                          },
                        },
                        i.a.createElement(D.Line, {
                          points: [0, 0, 500, 0],
                          stroke: "black",
                        }),
                        i.a.createElement(D.Line, {
                          points: [0, 0, 0, 500],
                          stroke: "black",
                        }),
                        i.a.createElement(D.Line, {
                          points: [0, 500, 500, 500],
                          stroke: "black",
                        }),
                        i.a.createElement(D.Line, {
                          points: [500, 0, 500, 500],
                          stroke: "black",
                          strokeWidth: 1,
                        }),
                        i.a.createElement(D.Line, {
                          points: [s + 0, 0 + r, l + 0, 0 + o],
                          stroke: "red",
                          strokeWidth: 1,
                        }),
                        i.a.createElement(D.Line, {
                          points: [u + 0, 0 + h, d + 0, 0 + m],
                          stroke: "blue",
                          strokeWidth: this.state.count > 0 ? 1 : 0,
                        }),
                        S,
                        y
                      )
                    )
                  )),
                  this.state.all
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function G(t, e) {
        var a = t.x,
          n = t.y,
          i = e.x,
          s = e.y;
        return Math.sqrt((a - i) * (a - i) + (n - s) * (n - s));
      }
      function q(t) {
        return (
          (e = 0),
          (a = t.length - 1),
          Math.floor(Math.random() * (a - e + 1) + e)
        );
        var e, a;
      }
      var U = (function () {
          function t(e, a, n, i) {
            Object(l.a)(this, t),
              (this.weights = {
                min_dis_to_dot: 0,
                dis_to_panel: 0,
                num_dots: 0,
              }),
              (this.discount = a),
              (this.epsilon = n),
              (this.alpha = i),
              (this.speed = e),
              (this.featureList = [
                "min_dis_to_dot",
                "dis_to_panel",
                "num_dots",
              ]);
          }
          return (
            Object(o.a)(t, [
              {
                key: "getMove",
                value: function (t) {
                  return t * this.speed;
                },
              },
              {
                key: "minDisToDot",
                value: function (t, e, a) {
                  var n,
                    i = 1 / 0,
                    s = Object(p.a)(a);
                  try {
                    for (s.s(); !(n = s.n()).done; ) {
                      var r = G({ x: t, y: e }, n.value);
                      r < i && (i = r);
                    }
                  } catch (l) {
                    s.e(l);
                  } finally {
                    s.f();
                  }
                  return i;
                },
              },
              {
                key: "getFeatures",
                value: function (t, e) {
                  var a = t.dots,
                    n = t.x,
                    i = t.y,
                    s = t.px;
                  t.vx, t.vy, t.terminal;
                  s = s + this.getMove(e) + 50;
                  var r = { min_dis_to_dot: 0, dis_to_panel: 0, num_dots: 0 };
                  return (
                    (r.min_dis_to_dot =
                      this.minDisToDot(n, i, a) / Math.sqrt(662500)),
                    (r.dis_to_panel = Math.abs(n - s) / 600),
                    (r.num_dots = a.length / 5),
                    r
                  );
                },
              },
              {
                key: "getQ",
                value: function (t, e) {
                  if (!t) return 0;
                  var a,
                    n = 0,
                    i = this.getFeatures(t, e),
                    s = Object(p.a)(this.featureList);
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      var r = a.value;
                      n += this.weights[r] * i[r];
                    }
                  } catch (l) {
                    s.e(l);
                  } finally {
                    s.f();
                  }
                  return n;
                },
              },
              {
                key: "update",
                value: function (t, e, a, n) {
                  if (e) {
                    var i,
                      s = this.getFeatures(t, e),
                      r =
                        n + this.discount * this.getValue(a) - this.getQ(t, e),
                      l = Object(p.a)(this.featureList);
                    try {
                      for (l.s(); !(i = l.n()).done; ) {
                        var o = i.value;
                        this.weights[o] += this.alpha * r * s[o];
                      }
                    } catch (c) {
                      l.e(c);
                    } finally {
                      l.f();
                    }
                  }
                },
              },
              {
                key: "setWeights",
                value: function (t) {
                  this.weights = t;
                },
              },
              {
                key: "actions",
                value: function () {
                  return [-1, 0, 1];
                },
              },
              {
                key: "getAction",
                value: function (t) {
                  if (!0 === t.terminal) return null;
                  var e,
                    a = this.actions();
                  return (
                    (e = this.epsilon),
                    Math.random() < e ? a[q(a)] : this.getPolicy(t)
                  );
                },
              },
              {
                key: "getPolicy",
                value: function (t) {
                  var e,
                    a = this.actions(),
                    n = null,
                    i = -1 / 0,
                    s = Object(p.a)(a);
                  try {
                    for (s.s(); !(e = s.n()).done; ) {
                      var r = e.value;
                      this.getQ(t, r) > i
                        ? ((i = this.getQ(t, r)), (n = r))
                        : this.getQ(t, r) === i && (n = q([r, n]));
                    }
                  } catch (l) {
                    s.e(l);
                  } finally {
                    s.f();
                  }
                  return n;
                },
              },
              {
                key: "getValue",
                value: function (t) {
                  return this.getQ(t, this.getPolicy(t));
                },
              },
            ]),
            t
          );
        })(),
        J =
          (a(115),
          (function (t) {
            Object(u.a)(a, t);
            var e = Object(h.a)(a);
            function a(t) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = e.call(this, t)).state = {
                  dots: [],
                  rendering: !0,
                  width: 600,
                  height: 500,
                  x: null,
                  y: null,
                  r: 15,
                  vx: 0,
                  vy: 0,
                  ballSpeed: 3,
                  panelx: 0,
                  panely: 480,
                  panelSpeed: 3,
                  ballInitialized: !1,
                  framecount: 0,
                  score: 0,
                  pressedLeft: !1,
                  pressedRight: !1,
                  finished: !1,
                  gameCount: -1,
                  agent: new U(3, 0.9, 0.2, 0.2),
                  notStarted: !0,
                }),
                (n.resetVisualizer = n.resetVisualizer.bind(Object(c.a)(n))),
                (n.startVisualizer = n.startVisualizer.bind(Object(c.a)(n))),
                n.props.getFunctions(n.startVisualizer, n.resetVisualizer),
                n
              );
            }
            return (
              Object(o.a)(a, [
                {
                  key: "startVisualizer",
                  value: function () {
                    this.setState({ notStarted: !1 }),
                      this.setState({
                        rendering: !1,
                        ballInitialized: !1,
                        framecount: 0,
                        score: 0,
                        finished: !1,
                        gameCount: 0,
                        agent: new U(3, 0.9, 0.2, 0.2),
                      }),
                      this.componentDidMount();
                  },
                },
                {
                  key: "resetVisualizer",
                  value: function () {
                    this.setState({
                      rendering: !1,
                      ballInitialized: !1,
                      framecount: 0,
                      score: 0,
                      finished: !1,
                      gameCount: 0,
                      notStarted: !0,
                      agent: new U(3, 0.9, 0.2, 0.2),
                    }),
                      this.componentDidMount();
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    this.initialize();
                  },
                },
                {
                  key: "initialize",
                  value: function () {
                    var t = this.state.ballSpeed,
                      e = Q(200, 480),
                      a = [t, -t, 1.2 * t, -1.2 * t, 0.8 * t, -0.8 * t][
                        Q(0, 5)
                      ],
                      n = t;
                    this.setState({
                      x: e,
                      y: 200,
                      vx: a,
                      vy: n,
                      score: 0,
                      panelx: 0,
                      storedWeights: {},
                      dots: [
                        { x: 100, y: 100 },
                        { x: 200, y: 100 },
                        { x: 300, y: 100 },
                        { x: 400, y: 100 },
                        { x: 500, y: 100 },
                      ],
                      gameCount: this.state.gameCount + 1,
                    }),
                      (this.state.x = e),
                      (this.state.y = 200),
                      (this.state.vx = a),
                      (this.state.vy = n);
                  },
                },
                {
                  key: "getState",
                  value: function () {
                    var t = this.state;
                    return {
                      dots: t.dots,
                      x: t.x,
                      y: t.y,
                      px: t.panelx,
                      vx: t.vx,
                      vy: t.vy,
                      terminal: 500 === this.state.score || this.state.finished,
                    };
                  },
                },
                {
                  key: "updatePanel",
                  value: function (t) {
                    this.state.finished || this.movePanel(t);
                  },
                },
                {
                  key: "updateBall",
                  value: function () {
                    if (!this.state.finished) {
                      var t = this.state,
                        e = t.x,
                        a = t.y,
                        n = t.r,
                        i = t.vx,
                        s = t.vy,
                        r = t.panelx;
                      if (0 !== e || 0 !== a) {
                        if (
                          ((a += s),
                          ((e += i) > this.state.width - n - 5 || e < n + 5) &&
                            (i = -i),
                          a < n + 5 && (s = -s),
                          a > this.state.panely - n - 5 &&
                            a > this.state.panely - n + 5 &&
                            Math.abs(r - e + 50) < 50)
                        )
                          s = s > 0 ? -s : s;
                        else if (
                          a > this.state.height - n &&
                          Math.abs(r - e + 50) > 50
                        )
                          return (
                            this.setState({ score: this.state.score - 1e3 }),
                            this.initialize(),
                            !1
                          );
                        return (
                          this.setState({ x: e, y: a, vx: i, vy: s }),
                          (this.state.x = e),
                          (this.state.y = a),
                          (this.state.vx = i),
                          (this.state.vy = s),
                          !0
                        );
                      }
                    }
                  },
                },
                {
                  key: "updateDots",
                  value: function () {
                    if (!this.state.finished) {
                      for (
                        var t = this.state.score, e = 0;
                        e < this.state.dots.length;
                        e++
                      )
                        Y(this.state.dots[e], {
                          x: this.state.x,
                          y: this.state.y,
                        }) < this.state.r &&
                          (this.state.dots.splice(e, 1), (t += 100));
                      this.setState({ score: t });
                    }
                  },
                },
                {
                  key: "movePanel",
                  value: function (t) {
                    if (!this.state.finished) {
                      var e = this.state.panelx,
                        a = this.state.panelSpeed;
                      -1 === t ? (e -= a) : 1 === t && (e += a),
                        this.setState({
                          panelx: Math.min(
                            this.state.width - 100,
                            Math.max(0, e)
                          ),
                        });
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this;
                    if (this.state.notStarted)
                      return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          D.Stage,
                          {
                            width: this.state.width,
                            height: this.state.height,
                            className: "pong-stage-notstarted",
                            id: "pong stage",
                          },
                          i.a.createElement(
                            D.Layer,
                            null,
                            i.a.createElement(D.Rect, {
                              width: this.state.width,
                              height: this.state.height,
                              stroke: "black",
                              fill: "black",
                            }),
                            i.a.createElement(D.Text, {
                              x: 200,
                              y: 200,
                              text: "Press",
                              fontFamily: "Calibri",
                              fill: "white",
                              fontSize: 30,
                            }),
                            i.a.createElement(D.Text, {
                              x: 275,
                              y: 200,
                              text: "go",
                              fontFamily: "Calibri",
                              fill: this.state.goMouseEnter
                                ? "rgb(142, 228, 213)"
                                : "white",
                              fontSize: 30,
                              onClick: function () {
                                t.setState({ notStarted: !1 });
                              },
                              onMouseEnter: function () {
                                t.setState({ goMouseEnter: !0 });
                              },
                              onMouseLeave: function () {
                                t.setState({ goMouseEnter: !1 });
                              },
                            }),
                            i.a.createElement(D.Text, {
                              x: 315,
                              y: 200,
                              text: "to start.",
                              fontFamily: "Calibri",
                              fill: "white",
                              fontSize: 30,
                            })
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { class: "pongDescription" },
                          i.a.createElement(
                            "h4",
                            {
                              style: {
                                marginTop: "0px",
                                marginLeft: "650px",
                                "text-align": "left",
                                fontFamily: "monospace",
                              },
                            },
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            'This is a simple illustration of Reinforcement Learning, "Apporixmate Q Learning" specifically.',
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            'Our agent is given "vision" to current distance from the panel to the ball, distance from the ball to the nearest dot, and the number of dots remaining. The agent may try some random moves initially, and get "rewards"(positive score) and "punishments"(negative score) when eating the dots and dying.',
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            'After some trials, our agent would appear to know that bouncing the ball back would eventually lead it to "rewards", and manage to do that to finally win the game (eating all 5 dots).'
                          )
                        )
                      );
                    var e = this.state.agent.weights,
                      a = e.min_dis_to_dot,
                      n = e.dis_to_panel,
                      s = e.num_dots;
                    this.notStarted ||
                      500 === this.state.score ||
                      this.state.finished ||
                      (setTimeout(function () {
                        var e = t.state.agent;
                        t.state.gameCount > 10 && (e.training = !1);
                        var a = t.getState(),
                          n = e.getAction(a),
                          i = t.state.score,
                          s = t.state.gameCount;
                        t.updateBall(), t.updateDots(), t.updatePanel(n);
                        var r = t.getState(),
                          l =
                            10 +
                            t.state.score -
                            i +
                            -1e3 * (t.state.gameCount - s);
                        e.update(a, n, r, l),
                          500 === t.state.score && t.setState({ finished: !0 }),
                          (t.state.framecount += 1);
                      }, 10 * this.state.framecount),
                      isNaN(a) ||
                        this.state.finished ||
                        (this.state.storedWeights = {
                          min_dis_to_dot: a,
                          dis_to_panel: n,
                          num_dots: s,
                        }));
                    var r = this.state,
                      l = r.x,
                      o = r.y,
                      c = this.state.dots;
                    if (this.state.finished) {
                      var u = this.state.storedWeights,
                        h = u.min_dis_to_dot,
                        d = u.dis_to_panel,
                        m = u.num_dots;
                      return (
                        this.state.rendering &&
                          (this.props.setVisualizerRendering(!1),
                          (this.state.rendering = !1)),
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            D.Stage,
                            {
                              width: this.state.width,
                              height: this.state.height,
                              className: "pong-stage",
                              id: "pong stage",
                            },
                            i.a.createElement(
                              D.Layer,
                              null,
                              i.a.createElement(D.Rect, {
                                width: this.state.width,
                                height: this.state.height,
                                stroke: "black",
                                fill: "black",
                              }),
                              i.a.createElement(D.Text, {
                                x: 250,
                                y: 200,
                                text: "Win!",
                                fontFamily: "Calibri",
                                fill: "white",
                                fontSize: 50,
                              })
                            )
                          ),
                          i.a.createElement(
                            "div",
                            null,
                            i.a.createElement(
                              "h4",
                              {
                                style: {
                                  marginTop: "0px",
                                  marginLeft: "700px",
                                  "text-align": "left",
                                  fontFamily: "monospace",
                                },
                              },
                              i.a.createElement("br", null),
                              i.a.createElement("br", null),
                              i.a.createElement("br", null),
                              i.a.createElement("br", null),
                              "Your agent's weights:",
                              i.a.createElement("br", null),
                              i.a.createElement(
                                "div",
                                { class: "w-text" },
                                i.a.createElement(
                                  "p",
                                  null,
                                  "w1: min distance to dot:",
                                  i.a.createElement("br", null),
                                  i.a.createElement("p", { class: "num" }, h)
                                ),
                                i.a.createElement(
                                  "p",
                                  null,
                                  "w2: distance to between the ball and the panel:",
                                  i.a.createElement("br", null),
                                  i.a.createElement("p", { class: "num" }, d)
                                ),
                                i.a.createElement(
                                  "p",
                                  null,
                                  "w3: number of dots remaining:",
                                  i.a.createElement("br", null),
                                  i.a.createElement("p", { class: "num" }, m)
                                )
                              )
                            )
                          )
                        )
                      );
                    }
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          D.Stage,
                          {
                            width: this.state.width,
                            height: this.state.height,
                            className: "pong-stage",
                            id: "pong stage",
                          },
                          i.a.createElement(
                            D.Layer,
                            null,
                            i.a.createElement(D.Rect, {
                              width: this.state.width,
                              height: this.state.height,
                              stroke: "black",
                              fill: "black",
                            }),
                            c.map(function (t, e) {
                              return i.a.createElement(D.Circle, {
                                key: e,
                                x: t.x,
                                y: t.y,
                                stroke: "white",
                                fill: "white",
                                radius: 5,
                              });
                            }),
                            i.a.createElement(D.Circle, {
                              x: l,
                              y: o,
                              radius: this.state.r,
                              stroke: "white",
                              fill: "white",
                            }),
                            i.a.createElement(D.Rect, {
                              x: this.state.panelx,
                              y: this.state.panely,
                              width: 100,
                              height: 10,
                              stroke: "white",
                              fill: "white",
                            }),
                            i.a.createElement(D.Text, {
                              x: 10,
                              y: 15,
                              text: "Score: ".concat(this.state.score),
                              fontFamily: "Calibri",
                              fill: "white",
                              fontSize: 25,
                            })
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          "h4",
                          {
                            style: {
                              marginTop: "0px",
                              marginLeft: "700px",
                              "text-align": "left",
                              fontFamily: "monospace",
                              fontSize: "25px",
                            },
                          },
                          i.a.createElement("br", null),
                          i.a.createElement("br", null),
                          i.a.createElement("br", null),
                          i.a.createElement("br", null),
                          "Your agent's weights:",
                          i.a.createElement("br", null),
                          i.a.createElement(
                            "div",
                            { class: "w-text" },
                            i.a.createElement(
                              "p",
                              null,
                              "w1: min distance to dot:",
                              i.a.createElement("br", null),
                              i.a.createElement("p", { class: "num" }, a)
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "w2: distance to between the ball and the panel:",
                              i.a.createElement("br", null),
                              i.a.createElement("p", { class: "num" }, n)
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "w3: number of dots remaining:",
                              i.a.createElement("br", null),
                              i.a.createElement("p", { class: "num" }, s)
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component));
      function Q(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t);
      }
      function Y(t, e) {
        var a = t.x,
          n = t.y,
          i = e.x,
          s = e.y;
        return Math.sqrt((a - i) * (a - i) + (n - s) * (n - s));
      }
      var K = a(24),
        H = (function () {
          function t(e, a) {
            Object(l.a)(this, t),
              (this.depth = e),
              0 === a
                ? ((this.aiPiece = "p2"), (this.humanPiece = "p1"))
                : ((this.aiPiece = "p1"), (this.humanPiece = "p2"));
          }
          return (
            Object(o.a)(t, [
              {
                key: "getActions",
                value: function (t) {
                  for (var e = [], a = 0; a < t.length; a++)
                    null === t[a][1] && e.push(a);
                  return e;
                },
              },
              {
                key: "getAction",
                value: function (t) {
                  var e = this.getActions(t),
                    a = -1 / 0,
                    n = null;
                  t = t.map(function (t) {
                    return t.slice();
                  });
                  var i,
                    s = Object(p.a)(e);
                  try {
                    for (s.s(); !(i = s.n()).done; ) {
                      var r = i.value,
                        l = t.map(function (t) {
                          return t.slice();
                        }),
                        o = this.minimax(
                          this.tryMove(r, l, this.aiPiece),
                          !1,
                          -1 / 0,
                          1 / 0,
                          this.depth
                        );
                      (a < o || null === n) && ((a = o), (n = r)),
                        a === o && 3 === r && (n = r),
                        console.log(r, o);
                    }
                  } catch (c) {
                    s.e(c);
                  } finally {
                    s.f();
                  }
                  return n;
                },
              },
              {
                key: "tryMove",
                value: function (t, e, a) {
                  var n = e[t].reverse();
                  return (n[n.indexOf(null)] = a), n.reverse(), e;
                },
              },
              {
                key: "count",
                value: function (t, e) {
                  var a,
                    n = 0,
                    i = Object(p.a)(t);
                  try {
                    for (i.s(); !(a = i.n()).done; ) {
                      a.value === e && n++;
                    }
                  } catch (s) {
                    i.e(s);
                  } finally {
                    i.f();
                  }
                  return n;
                },
              },
              {
                key: "scoreFour",
                value: function (t, e, a, n) {
                  var i = [t, e, a, n],
                    s = this.count(i, this.humanPiece),
                    r = this.count(i, null),
                    l = this.count(i, this.aiPiece);
                  return 4 === r || (s > 0 && l > 0)
                    ? 0
                    : 4 === s
                    ? -1e23
                    : 4 === l
                    ? 1e23
                    : 0 === s
                    ? Math.pow(10 * l, l)
                    : 0 === l
                    ? -Math.pow(10 * s, s)
                    : 0;
                },
              },
              {
                key: "getScore",
                value: function (t) {
                  for (var e = 0, a = 0; a < 7; a++)
                    for (var n = 1; n < 4; n++) {
                      e += this.scoreFour(
                        t[a][n],
                        t[a][n + 1],
                        t[a][n + 2],
                        t[a][n + 3]
                      );
                    }
                  for (var i = 0; i < 4; i++)
                    for (var s = 1; s < 7; s++) {
                      e += this.scoreFour(
                        t[i][s],
                        t[i + 1][s],
                        t[i + 2][s],
                        t[i + 3][s]
                      );
                    }
                  for (var r = 0; r < 4; r++)
                    for (var l = 1; l < 4; l++) {
                      e += this.scoreFour(
                        t[r][l],
                        t[r + 1][l + 1],
                        t[r + 2][l + 2],
                        t[r + 3][l + 3]
                      );
                    }
                  for (var o = 3; o < 7; o++)
                    for (var c = 1; c < 4; c++) {
                      e += this.scoreFour(
                        t[o][c],
                        t[o - 1][c + 1],
                        t[o - 2][c + 2],
                        t[o - 3][c + 3]
                      );
                    }
                  return e;
                },
              },
              {
                key: "minimax",
                value: function (t, e, a, n, i) {
                  if (
                    et(
                      (t = t.map(function (t) {
                        return t.slice();
                      }))
                    ) ||
                    0 === i
                  )
                    return this.getScore(t);
                  var s = this.getActions(t);
                  if (e) {
                    var r,
                      l = -1 / 0,
                      o = Object(p.a)(s);
                    try {
                      for (o.s(); !(r = o.n()).done; ) {
                        var c = r.value,
                          u = t.map(function (t) {
                            return t.slice();
                          });
                        if (
                          (l = Math.max(
                            l,
                            this.minimax(
                              this.tryMove(c, u, this.aiPiece),
                              !1,
                              a,
                              n,
                              i - 1
                            )
                          )) >= n
                        )
                          return l;
                        a = Math.max(a, l);
                      }
                    } catch (v) {
                      o.e(v);
                    } finally {
                      o.f();
                    }
                    return l;
                  }
                  var h,
                    d = 1 / 0,
                    m = Object(p.a)(s);
                  try {
                    for (m.s(); !(h = m.n()).done; ) {
                      var g = h.value,
                        f = t.map(function (t) {
                          return t.slice();
                        });
                      if (
                        (d = Math.min(
                          d,
                          this.minimax(
                            this.tryMove(g, f, this.humanPiece),
                            !0,
                            a,
                            n,
                            i - 1
                          )
                        )) <= a
                      )
                        return d;
                      n = Math.min(n, d);
                    }
                  } catch (v) {
                    m.e(v);
                  } finally {
                    m.f();
                  }
                  return d;
                },
              },
            ]),
            t
          );
        })();
      a(116);
      function Z(t) {
        return i.a.createElement(
          "div",
          { className: 0 === t.id ? "virtual-piece" : "piece" },
          i.a.createElement("div", {
            className:
              (0 === t.id ? "v" : "") +
              "".concat(t.val) +
              (t.finished && null !== t.val ? "finished" : ""),
          })
        );
      }
      function X(t) {
        return i.a.createElement(
          "div",
          {
            className: "col",
            onClick: function () {
              return t.handleClick();
            },
            onMouseEnter: function () {
              return t.handleEnter();
            },
            onMouseLeave: function () {
              return t.handleLeave();
            },
          },
          Object(K.a)(Array(t.pieces.length)).map(function (e, a) {
            return i.a.createElement(Z, {
              key: a,
              val: t.pieces[a],
              id: a,
              finished: t.finished,
            });
          })
        );
      }
      var $ = (function (t) {
        Object(u.a)(a, t);
        var e = Object(h.a)(a);
        function a(t) {
          var n;
          return (
            Object(l.a)(this, a),
            ((n = e.call(this, t)).state = {
              currentPlayer: 0,
              aiPlayer: 1,
              humanPlayer: 0,
              humanPiece: "p1",
              board: new Array(7).fill(new Array(7).fill(null)),
              lastBoards: [],
              colors: ["p1", "p2"],
              winner: null,
              depth: 4,
              minimaxAgent: new H(4, 0),
            }),
            (n.reset = n.reset.bind(Object(c.a)(n))),
            n.props.getFunctions(function () {}, n.reset),
            n
          );
        }
        return (
          Object(o.a)(a, [
            {
              key: "reset",
              value: function () {
                this.setState({
                  currentPlayer: 0,
                  board: new Array(7).fill(new Array(7).fill(null)),
                  lastBoards: [],
                  colors: ["p1", "p2"],
                  winner: null,
                });
              },
            },
            {
              key: "undo",
              value: function () {
                this.state.lastBoards.length &&
                  this.setState({
                    board: this.state.lastBoards.pop(),
                    currentPlayer: this.state.humanPlayer,
                  });
              },
            },
            {
              key: "setStartingPlayer",
              value: function (t) {
                "human" === t
                  ? this.setState({
                      aiPlayer: 1,
                      humanPlayer: 0,
                      humanPiece: "p1",
                      minimaxAgent: new H(this.state.depth, 0),
                    })
                  : this.setState({
                      aiPlayer: 0,
                      humanPlayer: 1,
                      humanPiece: "p2",
                      minimaxAgent: new H(this.state.depth, 1),
                    }),
                  this.reset();
              },
            },
            {
              key: "setDepth",
              value: function (t) {
                this.setState({
                  depth: t,
                  minimaxAgent: new H(t, this.state.humanPlayer),
                });
              },
            },
            {
              key: "handleClick",
              value: function (t) {
                this.state.currentPlayer !== this.state.aiPlayer &&
                  (this.state.winner ||
                    (this.state.lastBoards.push(
                      this.state.board.map(function (t) {
                        return t.slice();
                      })
                    ),
                    this.move(t)));
              },
            },
            {
              key: "AITakeMove",
              value: function () {
                if (
                  null === et(this.state.board) &&
                  this.state.currentPlayer === this.state.aiPlayer
                ) {
                  var t = this.state.board.map(function (t) {
                      return t.slice();
                    }),
                    e = this.state.minimaxAgent.getAction(t);
                  this.move(e);
                }
              },
            },
            {
              key: "handleEnter",
              value: function (t) {
                if (this.state.currentPlayer !== this.state.aiPlayer) {
                  var e = this.state.board.map(function (t) {
                    return t.slice();
                  });
                  e[t][0] = this.state.colors[this.state.currentPlayer];
                  for (var a = 0; a < e.length; a++)
                    a !== t && (e[a][0] = null);
                  this.setState({ board: e });
                }
              },
            },
            {
              key: "handleLeave",
              value: function (t) {
                var e = this.state.board.map(function (t) {
                  return t.slice();
                });
                (e[t][0] = null), this.setState({ board: e });
              },
            },
            {
              key: "move",
              value: function (t) {
                var e = this.state.board.map(function (t) {
                  return t.slice();
                });
                if (e[t].slice(1, 7).indexOf(null) >= 0) {
                  var a = e[t].reverse();
                  (a[a.indexOf(null)] =
                    this.state.colors[this.state.currentPlayer]),
                    a.reverse(),
                    6 === this.state.depth
                      ? (e[t][0] = null)
                      : this.state.currentPlayer === this.state.humanPlayer &&
                        (e[t][0] = this.state.colors[this.state.currentPlayer]),
                    this.setState({
                      currentPlayer: Math.abs(this.state.currentPlayer - 1),
                      board: e,
                    });
                }
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                0 === this.state.aiPlayer && this.AITakeMove();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var t = this,
                  e = this.state.board.map(function (t) {
                    return t.slice();
                  }),
                  a = et(e);
                if (this.state.winner !== a) {
                  for (var n = 0; n < e.length; n++) e[n][0] = null;
                  this.setState({ winner: a, board: e });
                }
                setTimeout(function () {
                  return t.AITakeMove();
                }, 200);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "button",
                      {
                        style: {
                          position: "absolute",
                          marginTop: "460px",
                          marginLeft: "100px",
                          height: "30px",
                          width: "130px",
                        },
                        onClick: function () {
                          return t.setStartingPlayer(
                            1 === t.state.aiPlayer ? "ai" : "human"
                          );
                        },
                        type: "button",
                        class: "btn btn-outline-dark",
                      },
                      i.a.createElement(
                        "p",
                        { style: { "margin-top": "-5px" } },
                        "offensive: ".concat(
                          1 === this.state.aiPlayer ? "you" : "ai"
                        )
                      )
                    ),
                    i.a.createElement(
                      "button",
                      {
                        style: {
                          position: "absolute",
                          marginTop: "460px",
                          marginLeft: "240px",
                          height: "30px",
                          width: "100px",
                        },
                        onClick: function () {
                          return t.undo();
                        },
                        type: "button",
                        class: "btn btn-outline-dark",
                      },
                      i.a.createElement(
                        "p",
                        { style: { "margin-top": "-5px" } },
                        "undo"
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { class: "dropdown" },
                      i.a.createElement(
                        "button",
                        {
                          class: "btn btn-outline-dark dropdown-toggle",
                          type: "button",
                          id: "dropdownMenuButton",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          style: {
                            position: "absolute",
                            marginTop: "460px",
                            marginLeft: "-130px",
                            height: "30px",
                            width: "130px",
                          },
                        },
                        i.a.createElement(
                          "p",
                          { style: { "margin-top": "-5px" } },
                          "Depth: ".concat(this.state.depth)
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          class: "dropdown-menu",
                          "aria-labelledby": "dropdownMenuButton",
                        },
                        i.a.createElement(
                          "li",
                          null,
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setDepth(2);
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "Depth: 2"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setDepth(4);
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "Depth: 4"
                            )
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              class: "btn btn-light navbtn",
                              style: { height: "30px" },
                              onClick: function () {
                                return t.setDepth(6);
                              },
                            },
                            i.a.createElement(
                              "p",
                              { style: { "margin-top": "-5px" } },
                              "Depth: 6"
                            )
                          )
                        )
                      )
                    )
                  );
                if (this.state.winner) {
                  var a = Object(K.a)(Array(this.state.board.length)).map(
                    function (e, a) {
                      return i.a.createElement(X, {
                        key: a,
                        pieces: t.state.board[a],
                        handleClick: function () {},
                        handleEnter: function () {},
                        handleLeave: function () {},
                        finished: !0,
                      });
                    }
                  );
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "div",
                      { className: "game" },
                      i.a.createElement(
                        "div",
                        { className: "board" },
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement("div", { className: "col" }),
                          a
                        )
                      ),
                      e
                    ),
                    i.a.createElement(
                      "h1",
                      { style: { position: "relative", marginTop: "-170px" } },
                      "tie" === this.state.winner
                        ? "Tie"
                        : "Winner: ".concat(
                            this.state.winner === this.state.humanPiece
                              ? "You"
                              : "AI"
                          )
                    )
                  );
                }
                var n = Object(K.a)(Array(this.state.board.length)).map(
                  function (e, a) {
                    return i.a.createElement(X, {
                      key: a,
                      pieces: t.state.board[a],
                      handleClick: function () {
                        return t.handleClick(a);
                      },
                      handleEnter: function () {
                        return t.handleEnter(a);
                      },
                      handleLeave: function () {
                        return t.handleLeave(a);
                      },
                      finished: !1,
                    });
                  }
                );
                if (this.state.currentPlayer === this.state.aiPlayer) {
                  var s = document.getElementById("loadingImgT");
                  s && (s.className = "loadingImgN");
                } else {
                  var r = document.getElementById("loadingImgT");
                  r && (r.className = "loadingImgT");
                }
                return i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    "div",
                    { className: "game" },
                    i.a.createElement("div", { className: "board" }, n),
                    e,
                    i.a.createElement("img", {
                      id: "loadingImgT",
                      className: "loadingImgT",
                      src: "https://linkpicture.com/q/Double-Ring-1s-200px-2.gif",
                      height: "100px",
                      width: "100px",
                      style: {
                        marginLeft: "10px",
                        position: "absolute",
                        zIndex: 0,
                      },
                      alt: !0,
                    }),
                    ";",
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        "h5",
                        {
                          class: "connectFourDes",
                          style: {
                            position: "absolute",
                            marginTop: "160px",
                            marginLeft: "30px",
                            textAlign: "left",
                          },
                        },
                        'This is a chess game known as "Connect Four", which you',
                        i.a.createElement("br", null),
                        "will need to connect four pieces to win (accept diagonals). ",
                        i.a.createElement("br", null),
                        'The game has "gravity", so wherever you put the pieces, ',
                        i.a.createElement("br", null),
                        'they would "drop" down to the bottom.',
                        i.a.createElement("br", null),
                        i.a.createElement("br", null),
                        'You are competing with a "Minimax" AI with alpha-beta pruning.',
                        i.a.createElement("br", null),
                        "Basically, it will search possible future states of the game",
                        i.a.createElement("br", null),
                        "and choose the action that it think is best at the current state",
                        i.a.createElement("br", null),
                        "each time. ",
                        i.a.createElement("br", null),
                        i.a.createElement("br", null),
                        "It is not a perfect player for this game, so try your best to",
                        i.a.createElement("br", null),
                        'beat it by your "humanity"! ',
                        i.a.createElement("br", null),
                        i.a.createElement("br", null),
                        "(Depth 6 is quite slow, please wait patiently.)"
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function tt(t, e, a, n) {
        return null !== t && t === e && t === a && t === n;
      }
      function et(t) {
        for (var e = 0; e < 7; e++)
          for (var a = 1; a < 5; a++)
            if (tt(t[e][a], t[e][a + 1], t[e][a + 2], t[e][a + 3]))
              return t[e][a];
        for (var n = 0; n < 4; n++)
          for (var i = 1; i < 7; i++)
            if (tt(t[n][i], t[n + 1][i], t[n + 2][i], t[n + 3][i]))
              return t[n][i];
        for (var s = 0; s < 4; s++)
          for (var r = 1; r < 5; r++)
            if (tt(t[s][r], t[s + 1][r + 1], t[s + 2][r + 2], t[s + 3][r + 3]))
              return t[s][r];
        for (var l = 3; l < 7; l++)
          for (var o = 1; o < 5; o++)
            if (tt(t[l][o], t[l - 1][o + 1], t[l - 2][o + 2], t[l - 3][o + 3]))
              return t[l][o];
        for (var c = 0; c < 7; c++)
          if (t[c].slice(1, 7).indexOf(null) >= 0) return null;
        return "tie";
      }
      a(117);
      var at = (function (t) {
          Object(u.a)(a, t);
          var e = Object(h.a)(a);
          function a() {
            return Object(l.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.row,
                    a = t.col;
                  t.type;
                  return i.a.createElement("div", {
                    id: "snakeNode-".concat(e, "-").concat(a),
                    className: "snakeNode-".concat(this.props.type),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        nt = (function (t) {
          Object(u.a)(a, t);
          var e = Object(h.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).state = {
                grid: [],
                numRows: 30,
                numCols: 30,
                snake: [
                  { row: 15, col: 15, type: "snake" },
                  { row: 16, col: 15, type: "snake" },
                  { row: 17, col: 15, type: "snake" },
                ],
                direction: { dr: 1, dc: 0 },
                foodPos: null,
                foodScore: 0,
              }),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "randomFood",
                value: function () {
                  return {
                    randomRow: it(this.state.numRows),
                    randomCol: it(this.state.numCols),
                  };
                },
              },
              {
                key: "setFoodClassName",
                value: function (t, e) {
                  var a = document.getElementById(
                    "snakeNode-".concat(t, "-").concat(e)
                  );
                  a && (a.className = "snakeNode-food");
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  for (var t = [], e = 0; e < this.state.numRows; e++) {
                    for (var a = [], n = 0; n < this.state.numCols; n++) {
                      var i = { row: e, col: n, type: "null" };
                      a.push(i);
                    }
                    t.push(a);
                  }
                  this.showSnake(t, this.state.snake),
                    this.setState({ grid: t });
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t,
                    e = this.state.grid.map(function (t) {
                      return t.slice();
                    }),
                    a = this.updateSnake(),
                    n = a.snake,
                    i = a.lastNode,
                    s = this.state.foodScore;
                  this.checkFoodEaten(n) &&
                    ((t = this.randomFood()), s++, n.push(i)),
                    this.update(e, n, t, s);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.state.grid;
                  return i.a.createElement(
                    "div",
                    {
                      className: "snakeGrid",
                      style: { marginTop: "5%", marginLeft: "-65%" },
                    },
                    t.map(function (t, e) {
                      return i.a.createElement(
                        "div",
                        { key: e },
                        t.map(function (t, e) {
                          var a = t.row,
                            n = t.col,
                            s = t.type;
                          return i.a.createElement(at, {
                            key: e,
                            row: a,
                            col: n,
                            type: s,
                          });
                        })
                      );
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      function it(t) {
        return Math.floor(Math.random() * t);
      }
      a(118);
      var st = (function (t) {
          Object(u.a)(a, t);
          var e = Object(h.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).state = {
                currentAlgorithm: -1,
                algorithms: ["Perceptron", "Approximate Q", "Minimax"],
                visualizeAI: function () {},
                reset: function () {},
              }),
              (n.state.reset = n.state.reset.bind(n.state)),
              (n.state.visualizeAI = n.state.visualizeAI.bind(n.state)),
              (n.getAIFunctions = n.getAIFunctions.bind(Object(c.a)(n))),
              (n.setAlgorithm = n.setAlgorithm.bind(Object(c.a)(n))),
              n.props.getFunctions(
                function () {
                  n.state.visualizeAI();
                },
                function () {
                  n.state.reset();
                },
                n.setAlgorithm,
                n.state.algorithms
              ),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.newScript(
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"
                  ),
                    this.newScript(
                      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"
                    ),
                    this.newScript(
                      "https://combinatronics.com/JasonFengGit/Visualizer/master/src/AIVisualizer/networkAnimation.js"
                    );
                },
              },
              {
                key: "getAIFunctions",
                value: function (t, e) {
                  (this.state.visualizeAI = function () {
                    t();
                  }),
                    (this.state.reset = function () {
                      e();
                    }),
                    this.setState({ visualizeAI: t });
                },
              },
              {
                key: "setAlgorithm",
                value: function (t) {
                  this.setState({ currentAlgorithm: t });
                },
              },
              {
                key: "newScript",
                value: function (t) {
                  var e = document.createElement("script");
                  (e.src = t), document.body.appendChild(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var t;
                  switch (this.state.currentAlgorithm) {
                    case -1:
                      t = i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          "div",
                          { class: "textcontainer" },
                          i.a.createElement(
                            "div",
                            { class: "typewriter" },
                            i.a.createElement(
                              "h1",
                              null,
                              "Welcome to the Future."
                            )
                          )
                        ),
                        i.a.createElement(
                          "div",
                          {
                            id: "large-header",
                            class: "large-header",
                            style: { marginTop: "-18em" },
                          },
                          i.a.createElement("canvas", { id: "demo-canvas" })
                        )
                      );
                      break;
                    case 0:
                      t = i.a.createElement(W, {
                        setVisualizerRendering:
                          this.props.setVisualizerRendering,
                        getFunctions: this.getAIFunctions,
                      });
                      break;
                    case 1:
                      t = i.a.createElement(J, {
                        setVisualizerRendering:
                          this.props.setVisualizerRendering,
                        getFunctions: this.getAIFunctions,
                      });
                      break;
                    case 2:
                      t = i.a.createElement($, {
                        setVisualizerRendering:
                          this.props.setVisualizerRendering,
                        getFunctions: this.getAIFunctions,
                      });
                      break;
                    case 3:
                      t = i.a.createElement(nt, {
                        setVisualizerRendering:
                          this.props.setVisualizerRendering,
                        getFunctions: this.getAIFunctions,
                      });
                  }
                  return i.a.createElement("div", null, t);
                },
              },
            ]),
            a
          );
        })(n.Component),
        rt = (function (t) {
          Object(u.a)(a, t);
          var e = Object(h.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).state = {
                mode: "main",
                rendering: !1,
                algorithms: [],
                currentAlgorithm: null,
                goFunction: function () {},
                resetFunction: function () {},
                setAlgorithm: function () {},
                sortingClicked: !1,
                pathClicked: !1,
                AIClicked: !1,
                aicount: 0,
              }),
              (n.getFunctions = n.getFunctions.bind(Object(c.a)(n))),
              (n.changeRenderingState = n.changeRenderingState.bind(
                Object(c.a)(n)
              )),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "changeRenderingState",
                value: function (t) {
                  this.setState({ rendering: t });
                },
              },
              {
                key: "getFunctions",
                value: function (t, e, a, n) {
                  (this.state.goFunction = t),
                    (this.state.resetFunction = e),
                    (this.state.setAlgorithm = a),
                    (this.state.algorithms = n),
                    this.setState({ algorithms: n });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = null;
                  e =
                    "pathfinding" === this.state.mode
                      ? i.a.createElement(P, {
                          setVisualizerRendering: this.changeRenderingState,
                          getFunctions: this.getFunctions,
                        })
                      : "sorting" === this.state.mode
                      ? i.a.createElement(V, {
                          setVisualizerRendering: this.changeRenderingState,
                          getFunctions: this.getFunctions,
                        })
                      : "ai" === this.state.mode
                      ? i.a.createElement(st, {
                          count: this.state.aicount,
                          setVisualizerRendering: this.changeRenderingState,
                          getFunctions: this.getFunctions,
                        })
                      : i.a.createElement(
                          "div",
                          { class: "welbotron" },
                          i.a.createElement(
                            "div",
                            { class: "container welc" },
                            i.a.createElement(
                              "h1",
                              { class: "welcome" },
                              "Hello, algorithms.",
                              i.a.createElement(
                                "p",
                                { class: "quote" },
                                i.a.createElement(
                                  d.a,
                                  {
                                    interval: 3800,
                                    springConfig: { stiffness: 200 },
                                    adjustingSpeed: 300,
                                  },
                                  i.a.createElement(
                                    "p",
                                    { class: "quoteText" },
                                    '"An algorithm must be seen to be believed."'
                                  ),
                                  i.a.createElement(
                                    "p",
                                    { class: "quoteText" },
                                    '"Algorithms are central objects of study in Computer Science."'
                                  ),
                                  i.a.createElement(
                                    "p",
                                    { class: "quoteText" },
                                    '"Algorithms are apprehensible magics."'
                                  ),
                                  i.a.createElement(
                                    "p",
                                    { class: "quoteText" },
                                    '"An algorithm is like a recipe."'
                                  )
                                )
                              ),
                              i.a.createElement(
                                "p",
                                { class: "lead" },
                                "This website might help you understand algorithms better by visualizing them."
                              ),
                              i.a.createElement(
                                "p",
                                { class: "secondline lead" },
                                "Click on one of the categories below to visualize algorithms."
                              )
                            ),
                            i.a.createElement(
                              "a",
                              {
                                href: "#",
                                class: "mainpage-b",
                                onClick: function () {
                                  t.state.rendering ||
                                    (t.setState({ mode: "pathfinding" }),
                                    t.setState({
                                      currentAlgorithm: null,
                                      pathClicked: !0,
                                    }));
                                },
                                "data-toggle": this.state.pathClicked
                                  ? ""
                                  : "modal",
                                "data-target": "#pathIntroModal",
                              },
                              i.a.createElement("span", null),
                              "PATH FINDING"
                            ),
                            i.a.createElement(
                              "a",
                              {
                                href: "#",
                                class: "mainpage-b",
                                onClick: function () {
                                  t.state.rendering ||
                                    t.setState({
                                      mode: "sorting",
                                      currentAlgorithm: null,
                                      sortingClicked: !0,
                                    });
                                },
                                "data-toggle": this.state.sortingClicked
                                  ? ""
                                  : "modal",
                                "data-target": "#sortingIntroModal",
                              },
                              i.a.createElement("span", null),
                              "SORTING"
                            ),
                            i.a.createElement(
                              "a",
                              {
                                href: "#",
                                class: "mainpage-b",
                                onClick: function () {
                                  t.state.rendering ||
                                    t.setState({
                                      mode: "ai",
                                      currentAlgorithm: null,
                                      AIClicked: !0,
                                    });
                                },
                                "data-toggle": this.state.AIClicked
                                  ? ""
                                  : "modal",
                                "data-target": "#aiIntroModal",
                              },
                              i.a.createElement("span", null),
                              "ARTIFICIAL INTELLIGENCE"
                            )
                          )
                        );
                  var a = "";
                  "main" === this.state.mode && (a = " invisible");
                  var n = this.state.algorithms;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "nav",
                      {
                        class:
                          "navbar navbar-expand-lg navbar-light fixed-top bg-dark",
                      },
                      i.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            t.state.rendering || t.setState({ mode: "main" });
                          },
                          type: "button",
                          class: "btn btn-dark navbtn",
                          disabled: this.state.rendering,
                        },
                        "Main"
                      ),
                      i.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            t.state.rendering ||
                              (t.setState({
                                mode: "pathfinding",
                                currentAlgorithm: null,
                                pathClicked: !0,
                              }),
                              t.state.setAlgorithm(-1));
                          },
                          type: "button",
                          class: "btn btn-dark navbtn",
                          "data-toggle": this.state.pathClicked ? "" : "modal",
                          "data-target": "#pathIntroModal",
                          disabled: this.state.rendering,
                        },
                        "Pathfinding"
                      ),
                      i.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            t.state.rendering ||
                              (t.setState({
                                mode: "sorting",
                                currentAlgorithm: null,
                                sortingClicked: !0,
                              }),
                              t.state.setAlgorithm(-1));
                          },
                          type: "button",
                          class: "btn btn-dark navbtn",
                          "data-toggle": this.state.sortingClicked
                            ? ""
                            : "modal",
                          "data-target": "#sortingIntroModal",
                          disabled: this.state.rendering,
                        },
                        "Sorting"
                      ),
                      i.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            t.state.rendering ||
                              (t.setState({
                                mode: "ai",
                                currentAlgorithm: null,
                                AIClicked: !0,
                              }),
                              t.state.setAlgorithm(-1));
                          },
                          type: "button",
                          class: "btn btn-dark navbtn",
                          "data-toggle": this.state.AIClicked ? "" : "modal",
                          "data-target": "#aiIntroModal",
                          disabled: this.state.rendering,
                        },
                        "AI"
                      ),
                      i.a.createElement(
                        "div",
                        { class: "dropdown" + a },
                        i.a.createElement(
                          "button",
                          {
                            class: "btn btn-secondary dropdown-toggle navbtn",
                            type: "button",
                            id: "dropdownMenuButton",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            disabled: this.state.rendering,
                          },
                          null == this.state.currentAlgorithm
                            ? "Algorithms"
                            : this.state.currentAlgorithm
                        ),
                        i.a.createElement(
                          "div",
                          {
                            class: "dropdown-menu",
                            "aria-labelledby": "dropdownMenuButton",
                          },
                          i.a.createElement(
                            "li",
                            null,
                            n.map(function (e, a) {
                              return i.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  class: "btn btn-light navbtn",
                                  onClick: function () {
                                    t.state.setAlgorithm(a),
                                      t.setState({
                                        currentAlgorithm: t.state.algorithms[a],
                                      });
                                  },
                                },
                                e
                              );
                            })
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { class: "dropdown" + a },
                        i.a.createElement(
                          "button",
                          {
                            class: "btn btn-light dropdown-toggle navbtn",
                            type: "button",
                            id: "dropdownMenuButton",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            disabled: this.state.rendering,
                          },
                          "Actions"
                        ),
                        i.a.createElement(
                          "div",
                          {
                            class: "dropdown-menu",
                            "aria-labelledby": "dropdownMenuButton",
                          },
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-light navbtn",
                                onClick: function () {
                                  return t.state.goFunction();
                                },
                                "data-toggle":
                                  null === this.state.currentAlgorithm
                                    ? "modal"
                                    : "",
                                "data-target": "#setAlgoModal",
                                disabled:
                                  "ai" === this.state.mode &&
                                  "Minimax" === this.state.currentAlgorithm,
                              },
                              "Go!"
                            ),
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-light navbtn",
                                onClick: function () {
                                  return t.state.resetFunction();
                                },
                              },
                              "Reset"
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "https://github.com/developerpradeepofficial",
                          style: { marginLeft: "32%" },
                        },
                        i.a.createElement("img", {
                          class: "githubimg",
                          src: "https://www.linkpicture.com/q/UIHere_1.png",
                          width: "40px",
                          height: "40px",
                          style: { opacity: "0.7 !important" },
                          alt: !0,
                        })
                      )
                    ),
                    i.a.createElement(
                      "div",
                      {
                        class: "modal fade",
                        id: "setAlgoModal",
                        role: "dialog",
                      },
                      i.a.createElement(
                        "div",
                        { class: "modal-dialog" },
                        i.a.createElement(
                          "div",
                          { class: "modal-content" },
                          i.a.createElement(
                            "div",
                            { class: "modal-header" },
                            i.a.createElement(
                              "h5",
                              { class: "modal-title" },
                              "No Algorithm Selected"
                            ),
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                              },
                              "\xd7"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-body-alert" },
                            i.a.createElement(
                              "p",
                              null,
                              "Please select an algorithm first."
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-footer" },
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-dark",
                                "data-dismiss": "modal",
                                style: { width: "100px" },
                              },
                              "OK"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      {
                        class: "modal fade",
                        id: "pathIntroModal",
                        role: "dialog",
                      },
                      i.a.createElement(
                        "div",
                        { class: "modal-dialog" },
                        i.a.createElement(
                          "div",
                          { class: "modal-content intro" },
                          i.a.createElement(
                            "div",
                            { class: "modal-header" },
                            i.a.createElement(
                              "h5",
                              { class: "modal-title" },
                              "Pathfinding"
                            ),
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                              },
                              "\xd7"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-body intro" },
                            i.a.createElement(
                              "p",
                              null,
                              'Pathfinding is generally the process of finding a route between two points. It is closely related to the shortest path problem in graph theory, which examines how to identify the "best" paths valued by different criteria (Ex. distance, cost, time consumption).'
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "Pathfinding is also similar to Searching in some circumstances. For instance, we can use [breadth-first search] to find the shortest path in a grid world."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "In our scenario, the paths are valued by the number of cells they passed from START:",
                              i.a.createElement("div", {
                                class: "simg",
                                width: "20",
                                height: "20",
                              }),
                              "to the TARGET:",
                              i.a.createElement("div", {
                                class: "fimg",
                                width: "20",
                                height: "20",
                              }),
                              "."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "You may drag the START and TARGET icons to change their positions, and click on the blank nodes to add Walls."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "Now please choose a sorting algorithm and visualize it!"
                            ),
                            i.a.createElement(
                              "p",
                              { class: "tips" },
                              "(after choosing an algorithm, click on the [Actions] button.)"
                            ),
                            i.a.createElement("br", null),
                            i.a.createElement(
                              "p",
                              { class: "tips" },
                              'Note: there could be multiple "best" paths, so paths generated by different algorithms may not be consistent.'
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-footer" },
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-dark",
                                "data-dismiss": "modal",
                                style: { width: "100px" },
                              },
                              "OK"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      {
                        class: "modal fade",
                        id: "sortingIntroModal",
                        role: "dialog",
                      },
                      i.a.createElement(
                        "div",
                        { class: "modal-dialog" },
                        i.a.createElement(
                          "div",
                          { class: "modal-content intro" },
                          i.a.createElement(
                            "div",
                            { class: "modal-header" },
                            i.a.createElement(
                              "h5",
                              { class: "modal-title" },
                              "Sorting"
                            ),
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                              },
                              "\xd7"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-body intro" },
                            i.a.createElement(
                              "p",
                              null,
                              "Sorting is a process of arranging an ordered sequence. It is a common operation in many applications."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "Common uses of sorted sequences are:",
                              i.a.createElement(
                                "div",
                                { class: "uses-list" },
                                i.a.createElement(
                                  "p",
                                  null,
                                  "\xb7lookup or search efficiently"
                                ),
                                i.a.createElement(
                                  "p",
                                  null,
                                  "\xb7merge sequences efficiently"
                                ),
                                i.a.createElement(
                                  "p",
                                  null,
                                  "\xb7process data in a defined order"
                                )
                              ),
                              "Now please choose a sorting algorithm and visualize it!"
                            ),
                            i.a.createElement(
                              "p",
                              { class: "tips" },
                              "(after choosing an algorithm, click on the [Actions] button.)"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-footer" },
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-dark",
                                "data-dismiss": "modal",
                                style: { width: "100px" },
                              },
                              "OK"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      {
                        class: "modal fade",
                        id: "aiIntroModal",
                        role: "dialog",
                      },
                      i.a.createElement(
                        "div",
                        { class: "modal-dialog" },
                        i.a.createElement(
                          "div",
                          { class: "modal-content intro" },
                          i.a.createElement(
                            "div",
                            { class: "modal-header" },
                            i.a.createElement(
                              "h5",
                              { class: "modal-title" },
                              "Artificial Intelligence"
                            ),
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                              },
                              "\xd7"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-body intro" },
                            i.a.createElement(
                              "p",
                              null,
                              'Artificial intelligence (AI) is intelligence demonstrated by machines. Leading textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.'
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "In this category, you will experience with powerful AI algorithms based on fundamental ideas. Please try to understand those ideas behind through the visualizations, and I would try my best to demonstrate those principles."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              " Now please choose an algorithm and begin your journey!"
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { class: "modal-footer" },
                            i.a.createElement(
                              "button",
                              {
                                type: "button",
                                class: "btn btn-dark",
                                "data-dismiss": "modal",
                                style: { width: "100px" },
                              },
                              "OK"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement("div", null, e)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        lt = (a(52), a(130), a(57));
      var ot = function () {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement("meta", { charset: "utf-8" }),
          i.a.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          }),
          i.a.createElement("link", {
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
            integrity:
              "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",
            crossorigin: "anonymous",
          }),
          i.a.createElement(
            "div",
            { className: "App" },
            i.a.createElement(
              lt.a,
              { basename: "developerpradeepofficial.github.io/" },
              i.a.createElement(rt, null)
            )
          ),
          i.a.createElement("script", {
            src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
            integrity:
              "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
            crossorigin: "anonymous",
          }),
          i.a.createElement("script", {
            src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
            integrity:
              "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN",
            crossorigin: "anonymous",
          }),
          i.a.createElement("script", {
            src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
            integrity:
              "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV",
            crossorigin: "anonymous",
          })
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(
        i.a.createElement(ot, { class: "app" }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (t) {
            t.unregister();
          });
    },
    59: function (t, e, a) {
      t.exports = a(133);
    },
    63: function (t, e, a) {},
    64: function (t, e, a) {},
    65: function (t, e, a) {},
    66: function (t, e, a) {},
    67: function (t, e, a) {},
    68: function (t, e, a) {},
  },
  [[59, 1, 2]],
]);
//# sourceMappingURL=main.5494be56.chunk.js.map
