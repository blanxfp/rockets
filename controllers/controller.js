"use strict";
var rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
var rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);
var result = document.querySelector('#result');
if (result) {
    result.innerHTML = rocket1.showRocket() + " <br> " + rocket2.showRocket();
}
