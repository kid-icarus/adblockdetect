window.adBlockAdd = {
  isEnabled: function() {
    setTimeout(function() {
      var ad = document.getElementById('cooldude');
      if (ad) {
        return false;
      }
      return true;
    }, 1000);
  }
};
