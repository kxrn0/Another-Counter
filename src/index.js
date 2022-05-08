import { make_cover, create_id } from "./utilities.js";
import { create_counter } from "./counter.js";
import { create_counter_dom } from "./counterdom.js";

import "./imports.js";

const form = document.querySelector("form");
const coverDiv = document.querySelector(".cover-input");
const actualCover = document.querySelector(".actual-cover");
const coverImg = actualCover.querySelector("img");
const beelete = actualCover.querySelector("span");
const coverInput = document.getElementById("cover");
const modal = document.querySelector(".modal");
const warning = document.querySelector(".warning");
const counters = document.querySelector(".counters");
const userDataString = "_user_data_";
const countersArray = localStorage.getItem(userDataString) ? JSON.parse(localStorage.getItem(userDataString)) : [];
const extInterface = {
    array : countersArray,
    warning,
    userDataString,
    modal
};
let imageData;

for (let counter of countersArray)
    counters.append(create_counter_dom(counter, extInterface));

coverInput.addEventListener("change", () => {
    make_cover(URL.createObjectURL(coverInput.files[0]), 500, 750).then(res => {
        imageData = res;
        coverImg.src = imageData;
        coverDiv.style.display = "none";
        actualCover.style.display = "block";
    });
});

beelete.addEventListener("click", () => {
    imageData = '';
    coverImg.src = '';
    actualCover.style.display = "none";
    coverDiv.style.display = "block";
});

form.addEventListener("submit", event => {
    event.preventDefault();

    let counter, id;

    id = create_id(10);
    counter = create_counter(form["counter-label"].value, 0, imageData, id);
    countersArray.push(counter);
    counters.append(create_counter_dom(counter, extInterface));
    localStorage.setItem(userDataString, JSON.stringify(countersArray));
    imageData = '';
    coverImg.src = '';
    coverDiv.style.display = "block";
    actualCover.style.display = "none";
    form.reset();
});