export default function (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
}
