const sliderImg = document.getElementById("slider-img");
const sliderTitle = document.getElementById("slider-title-txt");
const sliderText = document.getElementById("slider-text-txt");
const sliderBtn = document.getElementById("slider-link");
const sliderPage = document.getElementById("pages");

const sliderSwitchL = document.getElementById("slider-switch-l");
const sliderSwitchR = document.getElementById("slider-switch-r");

const initiativesBtn = document.getElementById("initiatives");

var pages;

// fetch("https://dukky0.github.io/webmaster-2024/resources/pages.json")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error
//             (`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((data) => {
//         const pages = data.pages;
//         console.log(data)
//
//         function userInput(input) {
//             click++;
//
//             if (input === 'forward') {
//                 pageID = (pageID + 1) % pages.length;
//                 displayPage(pageID);
//             } else if (input === 'back') {
//                 pageID = (pageID - 1 + pages.length) % pages.length;
//                 displayPage(pageID);
//             } else {
//                 console.log('Invalid input. Please enter "forward" or "back".');
//             }
//         }
//
//         let pageID = 0;
//         displayPage(0);
//
//         function displayPage(pageIndex) {
//             const page = pages[pageIndex];
//             console.log(page);
//
//             if (page) {
//                 console.log(`Page ${page.id}: ${page.title}`);
//
//                 sliderTitle.textContent = `${page.title}`;
//                 sliderText.textContent = `${page.content}`;
//                 sliderPage.style.transition = "all 0.5s";
//
//                 sliderBtn.href = `${page.link}`
//
//                 sliderImg.src = `${page.img}`;
//
//                 if ((click % 2) === 0) {
//                     sliderPage.style.backgroundColor = "#bca89f";
//                 } else {
//                     sliderPage.style.backgroundColor = "#6c9e61";
//                 }
//
//                 console.log(click);
//             } else {
//                 console.log('Page not found');
//             }
//         }
//     })
//     .catch((error) => console.error("Unable to fetch data:", error));

fetch("https://dukky0.github.io/webmaster-2024/resources/pages.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        pages = data.pages;
        let pageID = 0;
        displayPage(0);
    })
    .catch((error) => console.error("Unable to fetch data:", error));

let click = 0;

sliderSwitchL.addEventListener('click', function() {
    userInput("back");
    console.log("back");
});

sliderSwitchR.addEventListener('click', function() {
    userInput("forward");
    console.log("forward");
});

function userInput(input) {
    click++;

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

function displayPage(pageIndex) {
    const page = pages[pageIndex];
    console.log(page);

    if (page) {
        console.log(`Page ${page.id}: ${page.title}`);

        sliderTitle.textContent = `${page.title}`;
        sliderText.textContent = `${page.content}`;
        sliderPage.style.transition = "all 0.5s";

        sliderBtn.href = `${page.link}`

        sliderImg.src = `${page.img}`;

        if ((click % 2) === 0) {
            sliderPage.style.backgroundColor = "#bca89f";
        } else {
            sliderPage.style.backgroundColor = "#6c9e61";
        }

        console.log(click);
    } else {
                console.log('Page not found');
    }
}
