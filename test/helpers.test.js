const { generateArrayOfNumbers, generateSquare, handleHighlightedNumbers, findMultiplesOf } = require("../src/helpers");

describe("generateArrayOfNumbers", () => {
    it("should generate an array of numbers in range from to the given number, including that number ", () => {
        expect(generateArrayOfNumbers(6)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe("generateSquare", () => {
    xit("should generate a button element with class 'square-box'", () => {
        let mainContainer = document.createElement("div").setAttribute("class", ".main-container");
        generateSquare(1);
        expect(mainContainer.firstChild).toBe("<button class='square-box'>1</button>");
    });
});

describe("handleHighlightedNumbers", () => {
    xit("should add 'highlighted-box' class name to boxes with numbers that are multiples of the chosen number", () => {
        let number = 4;
        let numbersArray = [1, 2, 3, 4];
        let mainContainer = document.body.querySelector(".main-container");
        handleHighlightedNumbers(numbersArray, number);
        let children = mainContainer.children;
        expect(children[3]).toBe("<button class='square-box highlighted-box'>4</button>");
    });
});

describe("findMultiplesOf", () => {
    it("should return multiples of number 5", () => {
        let numbers = generateArrayOfNumbers(50);
        let number = 5;
        expect(findMultiplesOf(numbers, number)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });

    it("should return multiples of number 7", () => {
        let numbers = generateArrayOfNumbers(70);
        let number = 7;
        expect(findMultiplesOf(numbers, number)).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
    });
});
