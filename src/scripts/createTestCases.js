import createChartElements from "./createChartElements";

export default function (value) {
  let testCases = [];
  let amountOfTestCases = Math.pow(2, value);
  for (let i = 0; i < amountOfTestCases; i++) {
    testCases = [...testCases, Math.floor(Math.random() * 100 + 1)];
  }
  createChartElements(testCases);
  return testCases;
}
