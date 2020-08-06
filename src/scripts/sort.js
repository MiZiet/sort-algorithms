import bubbleSort from "./sortTypes/bubbleSort";
import selectionSort from "./sortTypes/selectionSort";
import insertionSort from "./sortTypes/insertionSort";
import mergeSort from "./sortTypes/mergeSort";
export default function (testCases, sortType) {
  switch (sortType) {
    case "selection":
      selectionSort(testCases);
      break;
    case "insertion":
      insertionSort(testCases);
      break;
    case "merge":
      mergeSort(testCases);
      break;
    default:
      bubbleSort(testCases);
  }
}
