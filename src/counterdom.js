import LZString from "lz-string";
import { make_cover } from "./utilities";

/**
 * Function that creates a counter DOM element.
 * @param {object} counterObj A simple js object with value, label, and data properties
 * @param {object} extInterface Object to interface with the rest of the DOM. It has a reference to an array that contains objects similar to counterObj.
 * It also has a reference to a warning modal that is used to guard against accidental clicks of the delete button on the returned element of this function.
 * It has a string property used to store the data in localStorage.
 * @returns A counter DOM element.
 */
export function create_counter_dom(counterObj, extInterface) {
    const counter = document.createElement("div");
    const deleteButton = document.createElement("button");    
    const swapLabel = document.createElement("label");
    const swapInput = document.createElement("input");
    const cover = document.createElement("img");
    const counterLabel = document.createElement("p");
    const counterValue = document.createElement("h3");
    const buttonsContainer = document.createElement("div");
    const decreaseButton = document.createElement("button");
    const increaseButton = document.createElement("button");
    const resetButton = document.createElement("button");
    const counterInput = document.createElement("input");
    let data;

    counter.classList.add("counter");
    deleteButton.classList.add("delete");
    swapLabel.classList.add("swap");
    counterLabel.classList.add("counter-label");
    counterValue.classList.add("counter-value");
    buttonsContainer.classList.add("buttons");
    decreaseButton.classList.add("decrease");
    resetButton.classList.add("reset");
    increaseButton.classList.add("increase");
    counterInput.classList.add("input-field");

    data = LZString.decompressFromUTF16(counterObj.imageData);
    cover.src = data ? data : "./pepe.jpg";
    counterLabel.innerText = counterObj.label;
    counterValue.innerText = counterObj.value;
    swapLabel.setAttribute("for", `swap-${counterObj.id}`);
    swapInput.setAttribute("name", `swap-${counterObj.id}`);
    swapInput.setAttribute("accept", ".jpg, .jpeg, .png");
    swapInput.id = `swap-${counterObj.id}`;
    swapInput.setAttribute("type", "file");
    decreaseButton.innerText = "decrease";
    resetButton.innerText = "reset";
    increaseButton.innerText = "increase";
    counterInput.setAttribute("type", "text");

    counter.append(deleteButton)
    counter.append(swapInput);
    counter.append(swapLabel);
    counter.append(cover);
    counter.append(counterLabel);
    counter.append(counterValue);
    counter.append(buttonsContainer);
    buttonsContainer.append(decreaseButton);
    buttonsContainer.append(resetButton);
    buttonsContainer.append(increaseButton);

    deleteButton.addEventListener("click", () => {
        let name, deleteWarning, cancelWarning;
        
        name = extInterface.warning.querySelector("p");
        name.innerText = counterObj.label;
        extInterface.warning.style.display = "flex";

        deleteWarning = extInterface.warning.querySelector(".delete");
        cancelWarning = extInterface.warning.querySelector(".cancel");

        deleteWarning.addEventListener("click", remove_counter);
        
        cancelWarning.addEventListener("click", hide);

        function remove_counter() {
            let index;

            index = extInterface.array.findIndex(counter => counter.id == counterObj.id);
            extInterface.array.splice(index, 1);
            counter.parentElement.removeChild(counter);
            localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
            hide();
        }

        function hide() {
            extInterface.warning.style.display = "none";
            deleteWarning.removeEventListener("click", remove_counter);
            cancelWarning.removeEventListener("click", hide);
        }
    });

    swapInput.addEventListener("change", () => {
        make_cover(URL.createObjectURL(swapInput.files[0]), 500, 750).then(res => {
            data = res;
            counterObj.imageData = LZString.compressToUTF16(res);
            cover.src = data;
            localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
        });
    });

    decreaseButton.addEventListener("click", () => {
        counterObj.value--;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    resetButton.addEventListener("click", () => {
        counterObj.value = 0;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    increaseButton.addEventListener("click", () => {
        counterObj.value++;
        counterValue.innerText = counterObj.value;
        localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
    });

    cover.addEventListener("click", () => {
        let modalImage, modalClose;

        modalImage = extInterface.modal.querySelector("img");
        modalClose = extInterface.modal.querySelector("button");
        modalImage.src = data ? data : "./pepe.jpg";
        extInterface.modal.style.display = "flex";

        modalClose.addEventListener("click", close_modal);

        function close_modal() {
            modalImage.src = '';
            extInterface.modal.style.display = "none";
            modalClose.removeEventListener("click", close_modal);
        }
    });

    counterLabel.addEventListener("click", () => {
        counterLabel.replaceWith(counterInput);
        counterInput.value = counterObj.label;
        counterInput.focus();
    });

    counterInput.addEventListener("focusout", () => {
        if (counterInput.value) {
            counterObj.label = counterInput.value;
            counterLabel.innerText = counterObj.label;
            counterInput.replaceWith(counterLabel);
            localStorage.setItem(extInterface.userDataString, JSON.stringify(extInterface.array));
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && document.activeElement == counterInput)
            counterInput.blur();
    });

    return counter;
}