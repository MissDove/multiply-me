// source goes here

const generateArrayOfNumbers = (numbersLength) => {
    return Array.from({ length: numbersLength }, (_, i) => i + 1);
};

let mainContainer = document.body.querySelector(".main-container");

const generateSquare = (number) => {
    let squareBox = document.createElement("div");
    squareBox.setAttribute("class", "square-box");
    squareBox.innerHTML = number;
    mainContainer.appendChild(squareBox);
};

const app = function () {
    let arrayOfNumbers = generateArrayOfNumbers(144);

    console.log("ARRAY", arrayOfNumbers);

    arrayOfNumbers.forEach((number) => {
        generateSquare(number);
    });
};

export default app;
