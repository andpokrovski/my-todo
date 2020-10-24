var checkElements = function () {
  var args = Array.prototype.slice.call(arguments);
  var errors = [];

  var check = args.reduce(function (flag, el, i, arr) {
    var elExist = Boolean(el);

    if (!elExist) {
      errors.push(i + 1);
    }

    return flag && elExist;
  }, true);

  // if (!check) {
  //   console.log('На странице нет элементов ' + errors.join(', '));
  // }

  return check;
}



(function () {
  var body = document.querySelector('.body');
  var select = document.querySelector('.fonts');


  var onPageLoad = function () {
    var storageValue = localStorage.getItem('fontFamily')

    if (storageValue) {
      body.style.fontFamily = storageValue;
      select.value = storageValue;
      console.log(select[storageValue]);
    }
  }


  var onSelectChange = function () {
    body.style.fontFamily = select.value;
    localStorage.setItem('fontFamily', select.value)
  }


  document.addEventListener("DOMContentLoaded", onPageLoad);

  select.addEventListener('change', onSelectChange);
})();

var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var g = this || self,
    h = function (a) {
      return a
    };
  /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  var m = window,
    n = document,
    aa = m.location,
    ba = function () {},
    ca = /\[native code\]/,
    q = function (a, b, c) {
      return a[b] = a[b] || c
    },
    da = function (a) {
      a = a.sort();
      for (var b = [], c = void 0, d = 0; d < a.length; d++) {
        var e = a[d];
        e != c && b.push(e);
        c = e
      }
      return b
    },
    v = function () {
      var a;
      if ((a = Object.create) && ca.test(a)) a = a(null);
      else {
        a = {};
        for (var b in a) a[b] = void 0
      }
      return a
    },
    x = q(m, "gapi", {});
  var C;
  C = q(m, "___jsl", v());
  q(C, "I", 0);
  q(C, "hel", 10);
  var D = function () {
      var a = aa.href;
      if (C.dpo) var b = C.h;
      else {
        b = C.h;
        var c = /([#].*&|[#])jsh=([^&#]*)/g,
          d = /([?#].*&|[?#])jsh=([^&#]*)/g;
        if (a = a && (c.exec(a) || d.exec(a))) try {
          b = decodeURIComponent(a[2])
        } catch (e) {}
      }
      return b
    },
    fa = function (a) {
      var b = q(C, "PQ", []);
      C.PQ = [];
      var c = b.length;
      if (0 === c) a();
      else
        for (var d = 0, e = function () {
            ++d === c && a()
          }, f = 0; f < c; f++) b[f](e)
    },
    E = function (a) {
      return q(q(C, "H", v()), a, v())
    };
  var F = q(C, "perf", v()),
    G = q(F, "g", v()),
    ha = q(F, "i", v());
  q(F, "r", []);
  v();
  v();
  var H = function (a, b, c) {
      var d = F.r;
      "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    },
    L = function (a, b, c) {
      b && 0 < b.length && (b = K(b), c && 0 < c.length && (b += "___" + K(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = q(ha, "_p", v()), q(b, c, v())[a] = (new Date).getTime(), H(a, "_p", c))
    },
    K = function (a) {
      return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
    };
  var M = v(),
    N = [],
    Q = function (a) {
      throw Error("Bad hint" + (a ? ": " + a : ""));
    };
  N.push(["jsl", function (a) {
    for (var b in a)
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];
        "object" == typeof c ? C[b] = q(C, b, []).concat(c) : q(C, b, c)
      } if (b = a.u) a = q(C, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
  }]);
  var ia = /^(\/[a-zA-Z0-9_\-]+)+$/,
    R = [/\/amp\//, /\/amp$/, /^\/amp$/],
    ja = /^[a-zA-Z0-9\-_\.,!]+$/,
    ka = /^gapi\.loaded_[0-9]+$/,
    la = /^[a-zA-Z0-9,._-]+$/,
    pa = function (a, b, c, d) {
      var e = a.split(";"),
        f = e.shift(),
        l = M[f],
        k = null;
      l ? k = l(e, b, c, d) : Q("no hint processor for: " + f);
      k || Q("failed to generate load url");
      b = k;
      c = b.match(ma);
      (d = b.match(na)) && 1 === d.length && oa.test(b) && c && 1 === c.length || Q("failed sanity: " + a);
      return k
    },
    ra = function (a, b, c, d) {
      a = qa(a);
      ka.test(c) || Q("invalid_callback");
      b = S(b);
      d = d && d.length ? S(d) : null;
      var e =
        function (f) {
          return encodeURIComponent(f).replace(/%2C/g, ",")
        };
      return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.a ? "/am=" + e(a.a) : "", a.c ? "/rs=" + e(a.c) : "", a.f ? "/t=" + e(a.f) : "", "/cb=", e(c)].join("")
    },
    qa = function (a) {
      "/" !== a.charAt(0) && Q("relative path");
      for (var b = a.substring(1).split("/"), c = []; b.length;) {
        a = b.shift();
        if (!a.length || 0 == a.indexOf(".")) Q("empty/relative directory");
        else if (0 < a.indexOf("=")) {
          b.unshift(a);
          break
        }
        c.push(a)
      }
      a = {};
      for (var d = 0, e = b.length; d < e; ++d) {
        var f = b[d].split("="),
          l = decodeURIComponent(f[0]),
          k = decodeURIComponent(f[1]);
        2 == f.length && l && k && (a[l] = a[l] || k)
      }
      b = "/" + c.join("/");
      ia.test(b) || Q("invalid_prefix");
      c = 0;
      for (d = R.length; c < d; ++c) R[c].test(b) && Q("invalid_prefix");
      c = T(a, "k", !0);
      d = T(a, "am");
      e = T(a, "rs");
      a = T(a, "t");
      return {
        pathPrefix: b,
        version: c,
        a: d,
        c: e,
        f: a
      }
    },
    S = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
        la.test(e) && b.push(e)
      }
      return b.join(",")
    },
    T = function (a, b, c) {
      a = a[b];
      !a && c && Q("missing: " + b);
      if (a) {
        if (ja.test(a)) return a;
        Q("invalid: " + b)
      }
      return null
    },
    oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    na = /\/cb=/g,
    ma = /\/\//g,
    sa = function () {
      var a = D();
      if (!a) throw Error("Bad hint");
      return a
    };
  M.m = function (a, b, c, d) {
    (a = a[0]) || Q("missing_hint");
    return "https://apis.google.com" + ra(a, b, c, d)
  };
  var U = decodeURI("%73cript"),
    V = /^[-+_0-9\/A-Za-z]+={0,2}$/,
    W = function (a, b) {
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d],
          f;
        if (f = e) {
          a: {
            for (f = 0; f < b.length; f++)
              if (b[f] === e) break a;f = -1
          }
          f = 0 > f
        }
        f && c.push(e)
      }
      return c
    },
    X = function () {
      var a = C.nonce;
      return void 0 !== a ? a && a === String(a) && a.match(V) ? a : C.nonce = null : n.querySelector ? (a = n.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(V) ? C.nonce = a : C.nonce = null) : null : null
    },
    ua = function (a) {
      if ("loading" != n.readyState) ta(a);
      else {
        var b = X(),
          c = "";
        null !== b && (c = ' nonce="' + b + '"');
        a = "<" + U + ' src="' + encodeURI(a) + '"' + c + "></" + U + ">";
        n.write(Y ? Y.createHTML(a) : a)
      }
    },
    ta = function (a) {
      var b = n.createElement(U);
      b.setAttribute("src", Y ? Y.createScriptURL(a) : a);
      a = X();
      null !== a && b.setAttribute("nonce", a);
      b.async = "true";
      (a = n.getElementsByTagName(U)[0]) ? a.parentNode.insertBefore(b, a): (n.head || n.body || n.documentElement).appendChild(b)
    },
    va = function (a, b) {
      var c = b && b._c;
      if (c)
        for (var d = 0; d < N.length; d++) {
          var e = N[d][0],
            f = N[d][1];
          f && Object.prototype.hasOwnProperty.call(c,
            e) && f(c[e], a, b)
        }
    },
    xa = function (a, b, c) {
      wa(function () {
        var d = b === D() ? q(x, "_", v()) : v();
        d = q(E(b), "_", d);
        a(d)
      }, c)
    },
    za = function (a, b) {
      var c = b || {};
      "function" == typeof b && (c = {}, c.callback = b);
      va(a, c);
      b = a ? a.split(":") : [];
      var d = c.h || sa(),
        e = q(C, "ah", v());
      if (e["::"] && b.length) {
        a = [];
        for (var f = null; f = b.shift();) {
          var l = f.split(".");
          l = e[f] || e[l[1] && "ns:" + l[0] || ""] || d;
          var k = a.length && a[a.length - 1] || null,
            w = k;
          k && k.hint == l || (w = {
            hint: l,
            b: []
          }, a.push(w));
          w.b.push(f)
        }
        var y = a.length;
        if (1 < y) {
          var z = c.callback;
          z && (c.callback = function () {
            0 ==
              --y && z()
          })
        }
        for (; b = a.shift();) ya(b.b, c, b.hint)
      } else ya(b || [], c, d)
    },
    ya = function (a, b, c) {
      a = da(a) || [];
      var d = b.callback,
        e = b.config,
        f = b.timeout,
        l = b.ontimeout,
        k = b.onerror,
        w = void 0;
      "function" == typeof k && (w = k);
      var y = null,
        z = !1;
      if (f && !l || !f && l) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
      k = q(E(c), "r", []).sort();
      var O = q(E(c), "L", []).sort(),
        I = [].concat(k),
        ea = function (u, A) {
          if (z) return 0;
          m.clearTimeout(y);
          O.push.apply(O, p);
          var B = ((x || {}).config || {}).update;
          B ? B(e) : e && q(C, "cu",
            []).push(e);
          if (A) {
            L("me0", u, I);
            try {
              xa(A, c, w)
            } finally {
              L("me1", u, I)
            }
          }
          return 1
        };
      0 < f && (y = m.setTimeout(function () {
        z = !0;
        l()
      }, f));
      var p = W(a, O);
      if (p.length) {
        p = W(a, k);
        var r = q(C, "CP", []),
          t = r.length;
        r[t] = function (u) {
          if (!u) return 0;
          L("ml1", p, I);
          var A = function (J) {
              r[t] = null;
              ea(p, u) && fa(function () {
                d && d();
                J()
              })
            },
            B = function () {
              var J = r[t + 1];
              J && J()
            };
          0 < t && r[t - 1] ? r[t] = function () {
            A(B)
          } : A(B)
        };
        if (p.length) {
          var P = "loaded_" + C.I++;
          x[P] = function (u) {
            r[t](u);
            x[P] = null
          };
          a = pa(c, p, "gapi." + P, k);
          k.push.apply(k, p);
          L("ml0", p, I);
          b.sync ||
            m.___gapisync ? ua(a) : ta(a)
        } else r[t](ba)
      } else ea(p) && d && d()
    },
    Aa;
  var Ba = null,
    Z = g.trustedTypes;
  if (Z && Z.createPolicy) try {
    Ba = Z.createPolicy("gapi#gapi", {
      createHTML: h,
      createScript: h,
      createScriptURL: h
    })
  } catch (a) {
    g.console && g.console.error(a.message)
  }
  Aa = Ba;
  var Y = Aa;
  var wa = function (a, b) {
    if (C.hee && 0 < C.hel) try {
      return a()
    } catch (c) {
      b && b(c), C.hel--, za("debug_error", function () {
        try {
          window.___jsl.hefn(c)
        } catch (d) {
          throw c;
        }
      })
    } else try {
      return a()
    } catch (c) {
      throw b && b(c), c;
    }
  };
  x.load = function (a, b) {
    return wa(function () {
      return za(a, b)
    })
  };
  G.bs0 = window.gapi._bs || (new Date).getTime();
  H("bs0");
  G.bs1 = (new Date).getTime();
  H("bs1");
  delete window.gapi._bs;
}).call(this);
gapi.load("", {
  callback: window["gapi_onload"],
  _c: {
    "jsl": {
      "ci": {
        "deviceType": "mobile",
        "oauth-flow": {
          "authUrl": "https://accounts.google.com/o/oauth2/auth",
          "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
          "disableOpt": true,
          "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
          "usegapi": false
        },
        "debug": {
          "reportExceptionRate": 0.05,
          "forceIm": false,
          "rethrowException": false,
          "host": "https://apis.google.com"
        },
        "enableMultilogin": true,
        "googleapis.config": {
          "auth": {
            "useFirstPartyAuthV2": true
          }
        },
        "isPlusUser": false,
        "inline": {
          "css": 1
        },
        "disableRealtimeCallback": false,
        "drive_share": {
          "skipInitCommand": true
        },
        "csi": {
          "rate": 0.01
        },
        "client": {
          "cors": false
        },
        "isLoggedIn": true,
        "signInDeprecation": {
          "rate": 0.0
        },
        "include_granted_scopes": true,
        "llang": "ru",
        "iframes": {
          "youtube": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          "ytsubscribe": {
            "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
          },
          "plus_circle": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
          },
          "plus_share": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
          },
          "rbr_s": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
          },
          ":source:": "3p",
          "playemm": {
            "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
          },
          "savetoandroidpay": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "blogger": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          "evwidget": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
          },
          "partnersbadge": {
            "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
          },
          "dataconnector": {
            "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"
          },
          "surveyoptin": {
            "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
          },
          ":socialhost:": "https://apis.google.com",
          "shortlists": {
            "url": ""
          },
          "hangout": {
            "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
          },
          "plus_followers": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
          },
          "post": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
          },
          ":gplus_url:": "https://plus.google.com",
          "signin": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
            "methods": ["onauth"]
          },
          "rbr_i": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
          },
          "share": {
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
          },
          "plusone": {
            "params": {
              "count": "",
              "size": "",
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
          },
          "comments": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          ":im_socialhost:": "https://plus.googleapis.com",
          "backdrop": {
            "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
          },
          "visibility": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
          },
          "autocomplete": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
          },
          "additnow": {
            "url": "https://apis.google.com/marketplace/button?usegapi\u003d1",
            "methods": ["launchurl"]
          },
          ":signuphost:": "https://plus.google.com",
          "ratingbadge": {
            "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
          },
          "appcirclepicker": {
            "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
          },
          "follow": {
            "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
          },
          "community": {
            "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
          },
          "sharetoclassroom": {
            "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
          },
          "ytshare": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
          },
          "plus": {
            "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
          },
          "family_creation": {
            "params": {
              "url": ""
            },
            "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
          },
          "commentcount": {
            "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
          },
          "configurator": {
            "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
          },
          "zoomableimage": {
            "url": "https://ssl.gstatic.com/microscope/embed/"
          },
          "appfinder": {
            "url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"
          },
          "savetowallet": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "person": {
            "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
          },
          "savetodrive": {
            "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
            "methods": ["save"]
          },
          "page": {
            "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
          },
          "card": {
            "url": ":socialhost:/:session_prefix:_/hovercard/card"
          }
        }
      },
      "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.ru.bUeeCwQBnSs.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCN3OgtCqv3yH2CsRpixf2GBGKb06Q/m\u003d__features__",
      "u": "https://apis.google.com/js/api.js",
      "hee": true,
      "fp": "8a45d50662317d0fcf3bf2df0618d210a4955da8",
      "dpo": false
    },
    "fp": "8a45d50662317d0fcf3bf2df0618d210a4955da8",
    "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
    "bimodal": ["signin", "share"]
  }
});

window.myTodo = {};

(function () {
  var onModalEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeModal.bind(this)();
    }
  }

  var modalEscPressHandler;



  var openModal = function () {
    this.element.classList.toggle('d-none', false);

    var openEvent = new CustomEvent("modalOpened", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(openEvent);
    modalEscPressHandler = onModalEscPress.bind(this);
    document.addEventListener('keydown', modalEscPressHandler);
  }


  var closeModal = function () {
    this.element.classList.toggle('d-none', true);

    var closeEvent = new CustomEvent("modalClosed", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(closeEvent);
    document.removeEventListener('keydown', modalEscPressHandler);
  }



  var Modal = function (settings) {
    var modal = this;
    this.element = document.querySelector(settings.modal);
    var openButtons = document.querySelectorAll(settings.openButtons);
    var closeButtons = this.element.querySelectorAll('.modal__close');


    if (openButtons.length > 0) {
      openButtons.forEach(function (openButton) {
        openButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          openModal.bind(modal)();
        });
      });
    }

    if (closeButtons.length > 0) {
      closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          closeModal.bind(modal)();
        });
      });
    }
  }


  Modal.prototype = {
    open: openModal,
    close: closeModal,
  }


  window.Modal = Modal;
})();

var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


var formatDateTime = function (date, time) {
  return date + 'T' + time + ':00' + UTC;
}

// var listSettings = {
//   'calendarId': 'primary',
//   // Может пригодиться
//   'timeMin': (new Date()).toISOString(),
//   'showDeleted': false,
//   'singleEvents': true,
//   'maxResults': 10,
//   'orderBy': 'startTime'
// }



var createEvent = function (formData) {
  return {
    'summary': formData.get('summary'),
    'location': formData.get('location'),
    'start': {
      'dateTime': formatDateTime(formData.get('start-date'), formData.get('start-time')),
      'timeZone': TIMEZONE
    },
    'end': {
      'dateTime': formatDateTime(formData.get('end-date'), formData.get('end-time')),
      'timeZone': TIMEZONE
    },
  }
}


var sendEvent = function (formData) {
  var event = createEvent(formData);
  console.log(event);

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function (event) {
    console.log(event.id);
    alert.show('Event created: ' + event.htmlLink);
  });
}


var popup = new Modal({
  modal: '.create',
  openButtons: '.add-button',
});






// window.create = {
//   close: closeModal,
//   send: sendEvent,
// }

var template = document.querySelector('#template');
var itemTemplate = template.content.querySelector('.my-todo__item');
var itemsList = document.querySelector('.my-todo__list');

var createItem = function (event) {
  var newItem = itemTemplate.cloneNode('true');
  // var doneButton = newItem.querySelector('.my-todo__done');
  var deleteButton = newItem.querySelector('.my-todo__delete');
  var summary = newItem.querySelector('.my-todo__summary');


  summary.textContent = event.summary;

  deleteButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    itemsList.removeChild(newItem);
  });

  return newItem;
};


var renderItems = function (events) {
  var fragment = document.createDocumentFragment();

  for (i = 0; i < events.length; i++) {
    var event = events[i];

    fragment.appendChild(createItem(event));
  }

  itemsList.appendChild(fragment);
}



window.items = {
  render: renderItems
}

var authPopup = new Modal({
  modal: '.auth',
});

// var popup = document.querySelector('.my-todo__authorization');

// var authOpen = function () {
//   popup.classList.toggle('d-none', false);
// }

// var authClose = function () {
//   popup.classList.toggle('d-none', true);
//   // popup.classList.add('d-none');
// }



// Client ID and API key from the Developer Console
var CLIENT_ID = '275521875892-icq30gfodvskd45gmn0gkaebeuqko36d.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAMYDRrik_DUzxORRSm5BJFUuzjiJkZlO8';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}


/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function (error) {
    alert.show(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    myTodo.list();
    // authClose();
    authPopup.close();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
  authOpen();
  authPopup.open();
}




window.auth = {
  // open: authOpen,
  // close: authClose,
  handleClientLoad: handleClientLoad,
}


document.addEventListener("DOMContentLoaded", function () {
  handleClientLoad();
});

var form = document.querySelector('.create__form');
var saveButton = form.querySelector('.create__save');



var onSaveButtonClick = function () {
  create.close();
}

var onFormSubmit = function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);
  create.send(formData);
}


saveButton.addEventListener('click', onSaveButtonClick);

form.addEventListener('submit', onFormSubmit);

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

var listSettings = {
  'calendarId': 'primary',
  'timeMin': (new Date()).toISOString(),
  'showDeleted': false,
  'singleEvents': true,
  'maxResults': 10,
  'orderBy': 'startTime'
}

var listUpcomingEvents = function () {
  gapi.client.calendar.events.list(listSettings)
    .then(function (response) {
      var events = response.result.items;
      alert.show('Upcoming events:');

      if (events.length > 0) {
        // for (i = 0; i < events.length; i++) {
        //   var event = events[i];
        //   var when = event.start.dateTime;
        //   if (!when) {
        //     when = event.start.date;
        //   }
        //   alert.show(event.summary + ' (' + when + ')')
        // }

        items.render(events);
      } else {
        alert.show('No upcoming events found.');
      }
    });
}


window.myTodo.list = listUpcomingEvents;

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

window.alert = {
  show: appendPre,
}

var deleteSettings = {
  'calendarId': 'primary',
  'eventId': 'k731e93gqrhn7183dsd7mm0jtc',
}


var deleteEvent = function () {
  return gapi.client.calendar.events.delete(deleteSettings)
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      });
}
