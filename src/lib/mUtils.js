// rem 适配
export var RemFit = (doc, win) => {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = doc.getElementsByTagName('html')[0].getBoundingClientRect().width
    if (!clientWidth) return
    docEl.style.fontSize = clientWidth / 16 + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}
