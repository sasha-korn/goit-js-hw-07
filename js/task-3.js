const fieldEl = document.querySelector("#name-input");
const onFieldInput = () => {
  if (fieldEl.value !== "") {
    spanValue.innerText = fieldEl.value;
    return;
  }
  spanValue.innerText = "Anonymous";
};
fieldEl.addEventListener("input", onFieldInput);

const spanValue = document.querySelector("#name-output");

// console.log(spanValue.innerText);
