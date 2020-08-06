import swapTwoElementsOfArray from "../swapTwoElementsOfArray";
import createChartElements from "../createChartElements";

export default function (arrayToBeSorted) {
  const { length } = arrayToBeSorted;
  let indexMin = 0;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (arrayToBeSorted[indexMin] > arrayToBeSorted[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swapTwoElementsOfArray(arrayToBeSorted, i, indexMin);
    }
    createChartElements(arrayToBeSorted, 50 * i);
  }
}
