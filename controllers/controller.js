"use strict";
var rocket1 = new Rocket('32WESSDS', 3);
var rocket2 = new Rocket('LDSFJA32', 6);
var result = document.querySelector('#result');
if (result) {
    result.innerHTML = rocket1.showRocket() + " <br> " + rocket2.showRocket();
}
