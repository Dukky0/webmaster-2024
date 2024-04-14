const sliderImg = document.getElementById("slider-img");
const sliderTitle = document.getElementById("slider-title");
const sliderText = document.getElementById("slider-text");
const sliderBtn = document.getElementById("slider-btn");

const sliderSwitchL = document.getElementById("slider-switch-l");
const sliderSwitchR = document.getElementById("slider-switch-r");

const initiativesBtn = document.getElementById("initiatives");

initiativesBtn.addEventListener("click", function() {
    window.location.href = "../initiatives.html";
})

function sliderSwitch(direction) {
    switch (direction) {
        case "left":

            break;
        case "right":

            break;
        default:
            return;
    }
}