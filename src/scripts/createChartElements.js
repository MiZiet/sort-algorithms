export default function (arrOfTestCases, delay = 1) {
  const container = document.getElementById("test-cases-container");

  let fragment = new DocumentFragment();
  arrOfTestCases.reduce((previousValue, currentValue) => {
    let div = document.createElement("div");
    div.classList.add("element");
    div.style.height = `${currentValue * 2}px`;
    div.style.width = `${100 / arrOfTestCases.length}%`;
    fragment.appendChild(div);
  }, 0);
  window.setTimeout(() => {
    container.innerHTML = "";
    container.appendChild(fragment);
  }, delay);
}
