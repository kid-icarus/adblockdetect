window.onload = function() {
  'use strict';
  window.setTimeout(function() {
    var ad = document.getElementById('cooldude');
    console.log(ad);
    console.log(typeof ad);
    if (ad) {
      window.console.log('Dude, you should download ad-block');
    }
    else {
      window.console.log('Good job! You totally have ad-block on');
    }
  }, 1000);
};
