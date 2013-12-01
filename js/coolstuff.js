window.adBlockAd = {
  isEnabled: function(callback) {
    var ad = document.getElementById('cooldude');
    if (ad) {
      callback(false);
    }
    else {
      callback(true);
    }
  },
};

window.addEventListener("load", function() {
  console.log('hi');

  adBlockAd.isEnabled(function(flag) {
    console.log(flag);
  });

}, false);
