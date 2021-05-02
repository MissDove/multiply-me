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

console.log();

// const generateNumberSquares = (numbersLength) => (
//     numbersLength.map((number) => (
//
//     ))
// )

const app = function () {
    let arrayOfNumbers = generateArrayOfNumbers(144);

    console.log("ARRAY", arrayOfNumbers);

    arrayOfNumbers.forEach((number) => {
        generateSquare(number);
    });
};

// dedupedRentalData.forEach((data) => {
//     let propertyCard = generatePropertyCard(data, listingData);
//     rentalPropertiesSection.appendChild(propertyCard);
// });

export default app;
