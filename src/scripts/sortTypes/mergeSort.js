import createChartElements from "../createChartElements";

//NO ANIMATION YET
export default function mergeSort(arrayToBeSorted) {
  if (arrayToBeSorted.length > 1) {
    const { length } = arrayToBeSorted;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arrayToBeSorted.slice(0, middle));
    const right = mergeSort(arrayToBeSorted.slice(middle, length));
    arrayToBeSorted = merge(left, right);
  }
  console.log(arrayToBeSorted);
  createChartElements(arrayToBeSorted);
  return arrayToBeSorted;
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
