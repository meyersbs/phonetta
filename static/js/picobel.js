// Picobel.js
function Picobel(e) {
  function t() {
    var e = document.getElementsByTagName("audio"),
        t = [].slice.call(e);
    return t;
  }
  function n(e) {
    output = [];
    for (var t = 0; t < e.length; t++)
      (item = {}), (item.url = e[t].src), output.push(item);
    return output;
  }
  function a(t) {
    for (var n = 0; n < t.length; n++) {
      var a = document.createElement("div");
      a.className = "customAudioPlayer loading player_" + n;
      var s = H[n].className;
      "" !== s && M(a, s), M(a, e.theme), a.setAttribute("data-song-index", n);
      var r = document.createElement("div");
      (r.className = "loader"), a.appendChild(r);
      var i = document.createElement("button");
      i.className = "playerTrigger";
      var d = document.createElement("span");
      (d.className = "buttonText"), (d.innerHTML = "play"), i.appendChild(d);
      var l = document.createElement("div");
      l.className = "metaWrapper";
      var o = document.createElement("span");
      (o.className = "titleDisplay"),
          (o.innerHTML = "File " + (n + 1)),
          l.appendChild(o);
      var u = document.createElement("span");
      (u.className = "artistDisplay"), l.appendChild(u);
      var m = document.createElement("div");
      m.className = "timingsWrapper";
      var c = document.createElement("span");
      (c.className = "songPlayTimer"), (c.innerHTML = "0:00"), m.appendChild(c);
      var p = document.createElement("div");
      p.className = "songProgressSliderWrapper";
      var g = document.createElement("div");
      (g.className = "pseudoProgressBackground"), p.appendChild(g);
      var v = document.createElement("div");
      (v.className = "pseudoProgressIndicator"), p.appendChild(v);
      var h = document.createElement("div");
      (h.className = "pseudoProgressPlayhead"), p.appendChild(h);
      var N = document.createElement("input");
      (N.type = "range"),
          (N.min = 0),
          (N.max = 100),
          (N.value = 0),
          (N.className = "songProgressSlider"),
          p.appendChild(N),
          m.appendChild(p);
      var y = document.createElement("span");
      (y.className = "songDuration"), (y.innerHTML = "-:--"), m.appendChild(y);
      var E = document.createElement("div");
      E.className = "songVolume";
      var f = document.createElement("button");
      (f.className = "songMuteButton"),
          (f.innerHTML = "Mute"),
          E.appendChild(f);
      var C = document.createElement("div");
      C.className = "songVolumeLabelWrapper";
      var L = document.createElement("span");
      (L.className = "songVolumeLabel"),
          (L.innerHTML = "Volume"),
          C.appendChild(L);
      var P = document.createElement("span");
      (P.className = "songVolumeValue"),
          (P.innerHTML = "10"),
          C.appendChild(P),
          E.appendChild(C);
      var T = document.createElement("div");
      T.className = "songVolumeSliderWrapper";
      var b = document.createElement("div");
      (b.className = "pseudoVolumeBackground"), T.appendChild(b);
      var x = document.createElement("div");
      (x.className = "pseudoVolumeIndicator"), T.appendChild(x);
      var B = document.createElement("div");
      (B.className = "pseudoVolumePlayhead"), T.appendChild(B);
      var A = document.createElement("input");
      (A.type = "range"),
          (A.min = 0),
          (A.max = 1),
          (A.value = 1),
          (A.step = 0.1),
          (A.className = "songVolumeSlider"),
          T.appendChild(A),
          E.appendChild(T),
          a.appendChild(i),
          a.appendChild(l),
          a.appendChild(m),
          a.appendChild(E),
          t[n].parentNode.replaceChild(a, t[n]);
    }
  }
  function s(e) {
    for (var t = [], n = 0; n < e.length; n++)
      (t[n] = new Audio(e[n].url)),
          (t[n].currentTime = 0),
          w[n].addEventListener("click", h, !1),
          U[n].addEventListener("input", m, !1),
          O[n].addEventListener("input", c, !1),
          t[n].addEventListener("timeupdate", y, !1),
          t[n].addEventListener("loadstart", r, !1),
          t[n].addEventListener("canplaythrough", d, !1),
          D[n].addEventListener("click", N, !1),
          t[n].addEventListener("error", C, !1),
          t[n].addEventListener("stalled", L, !1),
          t[n].addEventListener("waiting", C, !1),
          t[n].addEventListener("progress", P, !1),
          t[n].setAttribute("data-song-index", n);
    return t;
  }
  function r() {}
  function d() {
    var e = this.getAttribute("data-song-index");
    f(e), x(S[e], "loading"), l(e);
  }
  function l(e) {
    var t = G[e].src,
        n = B(t),
        a = A(t),
        s = H[e].title;
    "" !== s ? (k[e].innerHTML = s) : (k[e].innerHTML = a + "." + n);
    var r = H[e].getAttribute("data-artist");
    "" !== r && (R[e].innerHTML = r);
  }
  function o() {
    for (var e = 0; e < V.length; e++) G[e].pause();
  }
  function u(e) {
    J = e;
    for (var t = 0; t < V.length; t++) t != e && G[t].pause();
    G[e].play();
  }
  function m() {
    var e = this.value,
        t = this.parentNode.parentNode.parentNode.getAttribute("data-song-index"),
        n = G[t].duration,
        a = n * (e / 100);
    (a = a.toFixed(2)), (G[t].currentTime = a), E(t);
  }
  function c() {
    var e = this.value,
        t = this.parentNode.parentNode.parentNode.getAttribute("data-song-index");
    g(t, !1), p(t, e);
  }
  function p(e, t) {
    var n = 10 * t,
        a = 100 * t;
    (G[e].volume = t),
        (_[e].innerHTML = n),
        (O[e].value = t),
        (q[e].style.width = a + "%"),
        (z[e].style.left = a + "%");
  }
  function g(e, t) {
    var n;
    t
        ? ((n = G[e].volume),
            D[e].setAttribute("data-saved-volume", n),
            p(e, 0),
            M(D[e], "songMuted"),
            x(D[e], "songUnmuted"),
            (D[e].innerHTML = "unmute"))
        : ((n = D[e].getAttribute("data-saved-volume")),
            "undefined" != typeof n && n > 0 ? p(e, n) : p(e, 1),
            x(D[e], "songMuted"),
            M(D[e], "songUnmuted"),
            (D[e].innerHTML = "mute"));
  }
  function v(e, t) {
    var n = F[e],
        a = w[e];
    if (t) {
      for (i = 0; i < w.length; i++)
        x(w[i], "songPlaying"),
            M(w[i], "songPaused"),
            (F[i].innerHTML = "play");
      u(e), M(a, "songPlaying"), x(a, "songPaused"), (n.innerHTML = "pause");
    } else o(), x(a, "songPlaying"), M(a, "songPaused"), (n.innerHTML = "play");
  }
  function h() {
    var e = this.parentNode.getAttribute("data-song-index");
    if ("undefined" != typeof e) {
      var t = !b(this, "songPlaying");
      v(e, t);
    } else console.log("too soon to play!");
  }
  function N() {
    var e = this.parentNode.parentNode.getAttribute("data-song-index");
    F[e];
    b(this, "songMuted") ? g(e, !1) : g(e, !0);
  }
  function y() {
    var e = this.getAttribute("data-song-index");
    E(e);
  }
  function E(e) {
    var t = G[e].currentTime,
        n = G[e].duration;
    (progressParsed = T(t)),
        (I[e].innerHTML = progressParsed),
    t >= n && x(w[e], "songPlaying");
    var a = (t / n * 100).toFixed(2);
    (U[e].value = a), (j[e].style.width = a + "%"), ($[e].style.left = a + "%");
  }
  function f(e) {
    var t = G[e].duration,
        n = T(t);
    W[e].innerHTML = n;
  }
  function C(e) {
    this.getAttribute("data-song-index");
  }
  function L(e) {
    var t = this.getAttribute("data-song-index");
    v(t, !1);
  }
  function P(e) {
    var t = this.getAttribute("data-song-index");
    G[t].readyState;
  }
  function T(e) {
    var t = Math.floor((e % 3600) / 60);
    (t = t.toFixed(0)), (t = t.toString());
    var n = Math.floor((e % 3600) % 60);
    (n = n.toFixed(0)), (n = n.toString()), n < 10 && (n = "0" + n);
    var a = t + ":" + n;
    return a;
  }
  function b(e, t) {
    var n;
    return (n = e.classList
        ? e.classList.contains(t)
        : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
  }
  function M(e, t) {
    e.classList ? e.classList.add(t) : (e.className += " " + t);
  }
  function x(e, t) {
    e.classList
        ? e.classList.remove(t)
        : (e.className = e.className.replace(
        new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
        " "
        ));
  }
  function B(e) {
    return e.substr((~-e.lastIndexOf(".") >>> 0) + 2);
  }
  function A(e) {
    var t = e.replace(/^.*[\\\/]/, ""),
        n = t.split(".")[0];
    return n;
  }
  (e = "undefined" != typeof e ? e : {}), (e.theme = e.theme || "basicPlayer");
  var H = t(),
      V = n(H);
  a(H);
  var S = document.getElementsByClassName("customAudioPlayer"),
      w = document.getElementsByClassName("playerTrigger"),
      D = document.getElementsByClassName("songMuteButton"),
      F = document.getElementsByClassName("buttonText"),
      I = document.getElementsByClassName("songPlayTimer"),
      W = document.getElementsByClassName("songDuration"),
      k = document.getElementsByClassName("titleDisplay"),
      R = document.getElementsByClassName("artistDisplay"),
      U = document.getElementsByClassName("songProgressSlider"),
      $ = document.getElementsByClassName("pseudoProgressPlayhead"),
      j = document.getElementsByClassName("pseudoProgressIndicator"),
      O = document.getElementsByClassName("songVolumeSlider"),
      _ = document.getElementsByClassName("songVolumeValue"),
      q = document.getElementsByClassName("pseudoVolumeIndicator"),
      z = document.getElementsByClassName("pseudoVolumePlayhead"),
      G = s(V),
      J = 0;
  return { sliderScrub: m, playSong: u, pauseAll: o };
}

Picobel({ theme: "phonaudio" });
