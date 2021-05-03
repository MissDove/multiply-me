const { generateArrayOfNumbers, generateSquare, handleHighlightedNumbers } = require("../src/helpers");

const NUMBERS_LENGTH = 144;

const app = function () {
    let arrayOfNumbers = generateArrayOfNumbers(NUMBERS_LENGTH);

    arrayOfNumbers.forEach((number) => {
        generateSquare(number);
    });

    let squareBoxes = document.getElementsByTagName("button");
    squareBoxes = Array.from(squareBoxes);

    squareBoxes.forEach((box) => {
        box.addEventListener("click", (event) => {
            event.preventDefault();
            handleHighlightedNumbers(arrayOfNumbers, parseInt(box.innerHTML));
        });
    });
};

export default app;
