const sliderImg = document.getElementById("slider-img");
const sliderTitle = document.getElementById("slider-title-txt");
const sliderText = document.getElementById("slider-text-txt");
const sliderBtn = document.getElementById("slider-link");
const sliderPage = document.getElementById("pages");

const sliderSwitchL = document.getElementById("slider-switch-l");
const sliderSwitchR = document.getElementById("slider-switch-r");

const initiativesBtn = document.getElementById("initiatives");

import data from "../resources/pages.json" assert {type: "json"};

const pages = data.pages;

sliderSwitchL.addEventListener('click', function() {
    userInput("back");
    console.log("back");
});

sliderSwitchR.addEventListener('click', function() {
    userInput("forward");
    console.log("forward");
});

function displayPage(pageIndex) {
    const page = pages[pageIndex];

    if (page) {
        console.log(`Page ${page.id}: ${page.title}`);

        sliderTitle.textContent = `${page.title}`;
        sliderText.textContent = `${page.content}`;
        sliderPage.style.transition = "all 0.5s";

        sliderBtn.href = `${page.link}`

        sliderImg.src = `${page.img}`;

        if ((page.id % 2) === 0) {
            sliderPage.style.backgroundColor = "#bca89f";
        } else {
            sliderPage.style.backgroundColor = "#6c9e61";
        }
    } else {
        console.log('Page not found');
    }
}

let pageID = 0;
displayPage(0);

function userInput(input) {
    if (input === 'forward') {
        pageID = (pageID + 1) % pages.length;
        displayPage(pageID);
    } else if (input === 'back') {
        pageID = (pageID - 1 + pages.length) % pages.length;
        displayPage(pageID);
    } else {
        console.log('Invalid input. Please enter "forward" or "back".');
    }
}

