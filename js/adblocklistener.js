(function() {
  window.addEventListener('adBlockEnabled', function(e) {
    var ad = document.getElementById('adblock-detector');
    var div = document.createElement('div');
    div.className = 'adblock-alert';
    var p = document.createElement('p');
    p.innerHTML = "You're using AdBlock. Great job!";
    div.appendChild(p);
    ad.appendChild(div);
  });

  window.addEventListener('adBlockDisabled', function(e) {
    var ad = document.getElementById('adblock-detector');
    var div = document.createElement('div');
    div.className = 'adblock-alert';
    var p = document.createElement('p');
    p.innerHTML = '<a href="https://adblockplus.org">Use AdBlock Plus.</a> Surf the web without annoying ads!';
    div.appendChild(p);
    ad.appendChild(div);
  });
})();
