function htRem() {
  var ww = document.documentElement.clientWidth;
  if (ww > 1200) {
    ww = 1200;
  }
  document.documentElement.style.fontSize = ww / 75 + "px";
}

htRem();
window.onresize = function () {
  htRem();
};

