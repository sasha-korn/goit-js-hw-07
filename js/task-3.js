const fieldEl = document.querySelector("#name-input");

const onFieldInput = () => {
  spanValue.innerText = "Anonymous";
  if (fieldEl.value !== "") {
    spanValue.innerText = fieldEl.value.trim();
    return;
  }
};
fieldEl.addEventListener("input", onFieldInput);

const spanValue = document.querySelector("#name-output");
