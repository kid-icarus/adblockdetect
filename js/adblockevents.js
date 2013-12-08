(function() {
  var adBlockEnabled =  new Event('adBlockEnabled');
  var adBlockDisabled = new Event('adBlockDisabled');

  window.addEventListener("load", function() {
    setTimeout(function() {
      var adDiv =  document.getElementById('adblock-detector');
      var ad = adDiv.children[0];
      if (ad) {
        window.dispatchEvent(adBlockDisabled);
      }
      else {
        window.dispatchEvent(adBlockEnabled);
      }
    }, 1000);
  }, false);

})();
