import swapTwoElementsOfArray from "../swapTwoElementsOfArray";
import createChartElements from "../createChartElements";
export default function (arrayToBeSorted) {
  const { length } = arrayToBeSorted;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arrayToBeSorted[j] > arrayToBeSorted[j + 1]) {
        arrayToBeSorted = swapTwoElementsOfArray(arrayToBeSorted, j, j + 1);
      }
    }

    createChartElements(arrayToBeSorted, 50 * i);
  }
}
