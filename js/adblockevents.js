(function() {
  var adBlockEnabled =  new Event('adBlockEnabled');
  var adBlockDisabled = new Event('adBlockDisabled');

  window.addEventListener("load", function() {
    setTimeout(function() {
      var ad =  document.getElementById('cooldude');
      if (ad) {
        window.dispatchEvent(adBlockDisabled);
      }
      else {
        window.dispatchEvent(adBlockEnabled);
      }
    }, 1000);
  }, false);

})();
