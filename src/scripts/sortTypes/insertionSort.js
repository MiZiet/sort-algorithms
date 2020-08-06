import createChartElements from "../createChartElements";

export default function (arrayToBeSorted) {
  const { length } = arrayToBeSorted;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arrayToBeSorted[i];
    while (j > 0 && arrayToBeSorted[j - 1] > temp) {
      arrayToBeSorted[j] = arrayToBeSorted[j - 1];
      j--;
    }
    arrayToBeSorted[j] = temp;
    createChartElements(arrayToBeSorted, 50 * i);
  }
}
