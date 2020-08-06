import init from "./scripts/init";
import createTestCases from "./scripts/createTestCases";
import sort from "./scripts/sort";
//init();

let testCases = [];
let sortType = "ok";

const startButton = document.getElementById("start-button");
const sortTypeSelect = document.getElementById("sort-type-select");
startButton.addEventListener("click", () => {
  sort(testCases, sortTypeSelect.value);
});

const rangeSlider = document.getElementById("range-slider");
rangeSlider.addEventListener("input", function () {
  testCases = createTestCases(rangeSlider.value);
});

testCases = createTestCases(rangeSlider.value);
