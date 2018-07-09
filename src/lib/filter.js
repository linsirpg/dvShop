import Vue from 'vue'

Vue.filter('AnalysisImg', function (obj) {
  return JSON.parse(obj)[0].ServerUrl + JSON.parse(obj)[0].FilePath + '.thumb.' + JSON.parse(obj)[0].FileExt
})
