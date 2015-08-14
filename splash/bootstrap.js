
//document.createElement('<script src="components/webcomponentsjs/webcomponents-lite.min.js>');
var t = Date.now() + 1000;

var go = function() {
  Polymer.Base.importHref('src/my-view.min.html', function() {
    setTimeout(function() {
      document.querySelector('[splash]').remove();
      document.body.appendChild(document.createElement('my-view'));
    }, t - Date.now());
  });
};

window.onload = go;