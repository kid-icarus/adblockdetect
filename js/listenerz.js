(function() {

  window.addEventListener('adBlockEnabled', function(e) {
  });

  window.addEventListener('adBlockDisabled', function(e) {
    var ad = document.getElementById('cooldude');
    var div = document.createElement('div');
    div.className = 'adblock-alert';
    var p = document.createElement('p');
    p.innerHTML = '<a href="https://adblockplus.org">Use AdBlock Plus.</a> Surf the web without annoying ads!';
    div.appendChild(p);
    ad.parentNode.appendChild(div);
  });

})();
