window.addEventListener('adBlockEnabled', function(e) {
  console.log('adblock enabled');
});

window.addEventListener('adBlockDisabled', function(e) {
  var ad = document.getElementById('cooldude');
  console.log(ad);
  var div = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'Hi dudes, you should really for reals enable AdBlock.';
  div.appendChild(p);
  ad.parentNode.appendChild(div);
});
