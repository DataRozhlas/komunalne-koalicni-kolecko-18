// Generated by LiveScript 1.2.0
(function(){
  var containers, i$, len$, container, that;
  window.ig = {
    projectName: "komunalne-koalicni-kolecko",
    containers: {}
  };
  if (typeof _gaq != 'undefined' && _gaq !== null) {
    _gaq.push(['_trackEvent', 'ig', ig.projectName]);
  }
  containers = document.querySelectorAll('.ig');
  if (!containers.length) {
    document.body.className += ' ig';
    window.ig.containers.base = document.body;
  } else {
    for (i$ = 0, len$ = containers.length; i$ < len$; ++i$) {
      container = containers[i$];
      window.ig.containers[container.getAttribute('data-ig')] = container;
    }
  }
  if (typeof d3 != 'undefined' && d3 !== null) {
    if (that = document.getElementById('fallback')) {
      that.parentNode.removeChild(that);
    }
  }
}).call(this);