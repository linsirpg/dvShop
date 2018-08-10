import Vue from 'vue'

Vue.filter('AnalysisImg', function (obj) {
  if (typeof obj === 'object') {
    if (obj.length) {
      return JSON.parse(obj)[0].ServerUrl + JSON.parse(obj)[0].FilePath + '.thumb.' + JSON.parse(obj)[0].FileExt
    } else {
      return obj.ServerUrl + obj.FilePath + '.thumb.' + obj.FileExt
    }
  }
  if (typeof obj === 'string') {
    if (JSON.parse(obj).length) {
      return JSON.parse(obj)[0].ServerUrl + JSON.parse(obj)[0].FilePath + '.thumb.' + JSON.parse(obj)[0].FileExt
    } else {
      return JSON.parse(obj).ServerUrl + JSON.parse(obj).FilePath + '.thumb.' + JSON.parse(obj).FileExt
    }
  }
})
