const generateArrayOfNumbers = (numbersLength) => {
    return Array.from({ length: numbersLength }, (_, i) => i + 1);
};

const generateSquare = (number) => {
    let mainContainer = document.body.querySelector(".main-container");
    let squareBox = document.createElement("button");
    squareBox.setAttribute("class", "square-box");
    squareBox.setAttribute("id", `button-${number}`);
    squareBox.innerHTML = number;
    mainContainer.appendChild(squareBox);
};

const findMultiplesOf = (numbers, number) => numbers.filter((n) => !(n % number));

const handleHighlightedNumbers = (numbersArray, number) => {
    let multiples = findMultiplesOf(numbersArray, number);

    numbersArray.forEach((eachNumber) => {
        document.getElementById(`button-${eachNumber}`).classList.remove("highlighted-box");
    });

    multiples.forEach((multiple) => {
        document.getElementById(`button-${multiple}`).classList.add("highlighted-box");
    });
};

module.exports = {
    generateSquare,
    handleHighlightedNumbers,
    findMultiplesOf,
    generateArrayOfNumbers,
};
