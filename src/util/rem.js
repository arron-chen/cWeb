function htRem() {
  var ww = document.documentElement.clientWidth;
  if (ww > 750) {
    ww = 750;
  }
  document.documentElement.style.fontSize = ww / 60 + "px";
}

htRem();
window.onresize = function () {
  htRem();
};

