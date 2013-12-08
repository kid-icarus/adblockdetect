##AdBlock Detector
This is a tiny JavaScript... uh... script... that detects if a user is using AdBlock Plus
or not. Once the script determines if the user is using AdBlock Plus, it emits
an 'adBlockEnabled' or 'adBlockDisabled' event accordingly.

##Usage
First of all, add this markup to your page wherever you'd like.

```
<div><img id="duh-ad" src="img/ad.png" /></div>
```

That's a 1-pixel transparent image that will be blocked if AdBlock is enabled.

The example listeners in adblocklistener.js use id="adblock-detector" to display messages. You can use those or add your own listeners.