"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters, powers) {
        this.powers = new Array();
        this.code = code;
        this.thrusters = thrusters;
        this.powers = powers;
    }
    Rocket.prototype.showRocket = function () {
        return "Rocket " + this.code + " has " + this.thrusters + " thrusters. The powers of each thruster are: " + this.powers + " respectively.";
    };
    return Rocket;
}());
