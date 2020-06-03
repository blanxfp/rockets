"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters) {
        this.code = code;
        this.thrusters = thrusters;
    }
    Rocket.prototype.showRocket = function () {
        return "Rocket " + this.code + " has " + this.thrusters + " thrusters.";
    };
    return Rocket;
}());
