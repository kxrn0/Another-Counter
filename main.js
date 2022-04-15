const form  = document.querySelector("form");
const coverDiv = document.querySelector(".cover-input");
const actualCover = document.querySelector(".actual-cover");
const coverImg = actualCover.querySelector("img");
const beelete = actualCover.querySelector("span");
const coverInput = document.getElementById("cover");
const counters = document.querySelector(".counters");
const countersArray = localStorage.getItem("#userData#") ? JSON.parse(localStorage.getItem("#userData#")) : [];
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
let imageData, pepe;

canvas.width = 100;
canvas.height = 150;

fetch("https://files.catbox.moe/d9i2h7.txt", { method : "GET" }).then(response => response.text()).then(response => pepe = response);

for (let counter of countersArray) {
    counters.append(make_counter(counter.label, Number(counter.value), counter.imageData, counter.id, countersArray));
}

coverInput.addEventListener("change", async () => {
    make_cover(URL.createObjectURL(coverInput.files[0]), canvas).then(res => {
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
    let counter, id;

    event.preventDefault();

    if (!imageData) {
        imageData = pepe;
    }
    id = make_id(10);
    counter = make_counter(form["counter-label"].value, 0, imageData, id, countersArray);
    counters.append(counter);
    countersArray.push({ value : 0, label : form["counter-label"].value, imageData, id });
    localStorage.setItem("#userData#", JSON.stringify(countersArray));
    imageData = '';
    coverImg.src = '';
    coverDiv.style.display = "block";
    actualCover.style.display = "none";
    form.reset();
});

function make_counter(label, value, imageData, id, array) {
    const counter = document.createElement("div");
    const deleteButton = document.createElement("button");
    const cover = document.createElement("img");
    const counterLabel = document.createElement("p");
    const counterValue = document.createElement("h3");
    const buttonsContainer = document.createElement("div");
    const decreaseButton = document.createElement("button");
    const increaseButton = document.createElement("button");
    const resetButton = document.createElement("button");

    counter.classList.add("counter");
    deleteButton.classList.add("delete");
    counterLabel.classList.add("counter-label");
    counterValue.classList.add("counter-value");
    buttonsContainer.classList.add("buttons");
    decreaseButton.classList.add("decrease");
    resetButton.classList.add("reset");
    increaseButton.classList.add("increase");

    cover.src = imageData;
    counterLabel.innerText = label;
    counterValue.innerText = value;
    decreaseButton.innerText = "decrease";
    resetButton.innerText = "reset";
    increaseButton.innerText = "increase";

    counter.append(deleteButton)
    counter.append(cover);
    counter.append(counterLabel);
    counter.append(counterValue);
    counter.append(buttonsContainer);
    buttonsContainer.append(decreaseButton);
    buttonsContainer.append(resetButton);
    buttonsContainer.append(increaseButton);

    deleteButton.addEventListener("click", () => {
        let index;

        index = array.findIndex(counter => counter.id == id);
        array.splice(index, 1);
        counter.parentElement.removeChild(counter);
        localStorage.setItem("#userData#", array);
    });

    decreaseButton.addEventListener("click", () => {
        value--;
        counterValue.innerText = value;
        update("value", value);
    });

    resetButton.addEventListener("click", () => {
        value = 0;
        counterValue.innerText = value;
        update("value", 0);
    });

    increaseButton.addEventListener("click", () => {
        value++;
        counterValue.innerText = value;
        update("value", value);
    });

    function update(property, value) {
        let object;

        object = array.filter(counter => counter.id == id)[0];
        object[property] = value;
        localStorage.setItem("#userData#", JSON.stringify(array));
    }
    return counter;
}

function make_id(size) {
    let id;

    id = '';
    for (let i = 0; i < size; i++) {
        let number;

        do
            number = Math.floor(Math.random() * 94) + 33;
        while (number == 34 || number == 39 || number == 96 || number == 92);
        id += String.fromCharCode(number);
    }
    return id;
}

//---------------------------------------------------

function background_size_cover(image, canvas) {
    let bgWidth, bgHeight, imageRatio, canvasRatio;
    let context;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgHeight = canvas.height;
        bgWidth = canvas.height * imageRatio;
    }
    else {
        bgWidth = canvas.width;
        bgHeight = canvas.width / imageRatio;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

function center_image(image, canvas) {
    let context, bgWidth, bgHeight, imageRatio, canvasRatio;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgWidth = canvas.width;
        bgHeight = bgWidth / imageRatio;
    }
    else {
        bgHeight = canvas.height;
        bgWidth = bgHeight * imageRatio;
    }
    context.drawImage(image, 0, 0, image.width, image.height, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

function blur_image(imageData, kWidth, canvas) {
    let context, blurred, scanned, demon;

    context = canvas.getContext("2d");
    blurred = new Uint8ClampedArray(canvas.width * canvas.height * 4);
    scanned = imageData.data;
    demon = Math.floor(kWidth / 2);

    for (let x = 0; x < canvas.width; x++)
        for (let y = 0; y < canvas.height; y++) {
            let avgRed, avgGreen, avgBlue, index;

            avgRed = 0;
            avgGreen = 0;
            avgBlue = 0;
            for (let kx = -demon; kx <= demon; kx++)
                for (let ky = -demon; ky <= demon; ky++) {
                    let dx, dy;

                    dx = 4 * (x + kx);
                    dy = 4 * (y + ky);

                    let index = dy * canvas.width + dx;
                    if (0 <= index && index < scanned.length) {
                        avgRed += scanned[index];
                        avgGreen += scanned[index + 1];
                        avgBlue += scanned[index + 2];
                    }
                }
            avgRed /= kWidth * kWidth;
            avgGreen /= kWidth * kWidth;
            avgBlue /= kWidth * kWidth;

            index = 4 * (canvas.width * y + x);
            blurred[index] = avgRed;
            blurred[index + 1] = avgGreen;
            blurred[index + 2] = avgBlue;
            blurred[index + 3] = scanned[index + 3];
        }

    for (let i = 0; i < blurred.length; i++) //...
        scanned[i] = blurred[i];

    context.putImageData(imageData, 0, 0);
}

function make_cover(source, canvas) {
    return new Promise((resolve, _) => {
        let image;

        image = new Image();
        image.src = source;
        image.addEventListener("load", () => {
            background_size_cover(image, canvas);
            blur_image(context.getImageData(0, 0, canvas.width, canvas.height), 10, canvas);
            center_image(image, canvas);
            resolve(canvas.toDataURL());
        });
    });
}

//---------------------------------------------------