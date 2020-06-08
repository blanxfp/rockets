"use strict";
var create_rocket1 = document.querySelector('.create-rocket1');
var create_rocket2 = document.querySelector('.create-rocket2');
var accelerate_rocket1 = document.querySelector('.accelerate-rocket1');
var accelerate_rocket2 = document.querySelector('.accelerate-rocket2');
var brake_rocket1 = document.querySelector('.brake-rocket1');
var brake_rocket2 = document.querySelector('.brake-rocket2');
var print_rocket1 = document.querySelector('.print-rocket1');
var print_rocket2 = document.querySelector('.print-rocket2');
var print_all_rockets = document.querySelector('.print-all-rockets');
var rocket1;
var rocket2;
var result = document.querySelector('#result');
function goToBottom() {
    if (result)
        result.scrollTop = result.scrollHeight - result.clientHeight;
}
if (result) {
    result.innerHTML = '';
    // Create rocket 1 button click event
    if (create_rocket1) {
        create_rocket1.addEventListener('click', function () {
            rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80], [0, 0, 0]);
            if (result) {
                result.innerHTML += "<p>" + rocket1.showRocket() + "</p>";
                goToBottom();
            }
        });
    }
    // Create rocket 2 button click event
    if (create_rocket2) {
        create_rocket2.addEventListener('click', function () {
            rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0]);
            if (result) {
                result.innerHTML += "<p> " + rocket2.showRocket() + "</p>";
                goToBottom();
            }
        });
    }
    // Accelerate rocket 1 button click event
    if (accelerate_rocket1) {
        accelerate_rocket1.addEventListener('click', function () {
            if (result) {
                if (rocket1 == undefined) {
                    result.innerHTML += '<p>Rocket 1 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket1.accelerate() + "</p>";
                    goToBottom();
                }
            }
        });
    }
    // Accelerate rocket 2 button click event
    if (accelerate_rocket2) {
        accelerate_rocket2.addEventListener('click', function () {
            if (result) {
                if (rocket2 == undefined) {
                    result.innerHTML += '<p>Rocket 2 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket2.accelerate() + "</p>";
                    goToBottom();
                }
            }
        });
    }
    // Brake rocket 1 button click event
    if (brake_rocket1) {
        brake_rocket1.addEventListener('click', function () {
            if (result) {
                if (rocket1 == undefined) {
                    result.innerHTML += '<p>Rocket 1 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket1.brake() + "</p>";
                    goToBottom();
                }
            }
        });
    }
    // Brake rocket 2 button click event    
    if (brake_rocket2) {
        brake_rocket2.addEventListener('click', function () {
            if (result) {
                if (rocket2 == undefined) {
                    result.innerHTML += '<p>Rocket 2 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket2.brake() + "</p>";
                    goToBottom();
                }
            }
        });
    }
    // Print rockets button click event    
    if (print_rocket1) {
        print_rocket1.addEventListener('click', function () {
            if (result) {
                if (rocket1 == undefined) {
                    result.innerHTML += '<p>Rocket 1 has not been created yet</p>';
                }
                result.innerHTML += "<p>" + rocket1.showRocket() + "</p>";
                goToBottom();
            }
        });
    }
    if (print_rocket2) {
        print_rocket2.addEventListener('click', function () {
            if (result) {
                if (rocket2 == undefined) {
                    result.innerHTML += '<p>Rocket 2 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket2.showRocket() + "</p>";
                    goToBottom();
                }
            }
        });
    }
    if (print_all_rockets) {
        print_all_rockets.addEventListener('click', function () {
            if (result) {
                if (rocket1 == undefined) {
                    result.innerHTML += '<p>Rocket 1 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket1.showRocket() + "</p>";
                    goToBottom();
                }
                if (rocket2 == undefined) {
                    result.innerHTML += '<p>Rocket 2 has not been created yet</p>';
                }
                else {
                    result.innerHTML += "<p>" + rocket2.showRocket() + "</p>";
                    goToBottom();
                }
            }
        });
    }
}
// if(result) {
//     result.innerHTML = `<div><h2>2.</h2>`;
//     result.innerHTML += `<p>${rocket1.showRocket()}</p><p> ${rocket2.showRocket()}</p>`;
//     result.innerHTML += `</div>`;
//     result.innerHTML += `<div><h2>3.</h2>`;
//     result.innerHTML += `<p>${rocket1.showCurrentPower()}</p>`
//     result.innerHTML += `<p>${rocket2.showCurrentPower()}</p>`
//     result.innerHTML += `</div>`;
//     result.innerHTML += `<div><h2>4.</h2>`;
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `</div>`;
//     result.innerHTML += `<div><h2>5.</h2>`;
//     result.innerHTML += `<p>${rocket1.showCurrentPower()}</p>`
//     result.innerHTML += `<p>${rocket2.showCurrentPower()}</p>`
//     result.innerHTML += `</div>`;
//     result.innerHTML += `<div><h2>6.</h2>`;
//     result.innerHTML += `<p>${rocket1.brake()}</p>`
//     result.innerHTML += `<p>${rocket1.brake()}</p>`
//     result.innerHTML += `<p>${rocket1.brake()}</p>`
//     result.innerHTML += `<p>${rocket1.brake()}</p>`
//     result.innerHTML += `<p>${rocket1.brake()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<div><h2>7.</h2>`;
//     result.innerHTML += `<p>${rocket1.showCurrentPower()}</p>`
//     result.innerHTML += `<p>${rocket2.showCurrentPower()}</p>`
//     result.innerHTML += `</div>`;
//     result.innerHTML += `<div><h2>8.</h2>`;
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket1.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<p>${rocket2.accelerate()}</p>`
//     result.innerHTML += `<div><h2>9.</h2>`;
//     result.innerHTML += `<p>${rocket1.showCurrentPower()}</p>`
//     result.innerHTML += `<p>${rocket2.showCurrentPower()}</p>`
//     result.innerHTML += `</div>`;
//     result.innerHTML += `</div>`;
// }
