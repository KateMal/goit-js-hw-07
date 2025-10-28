const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
// console.log(spanEl.textContent);

inputEl.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  // console.log(value);

  //fix clear spases
  // use trim()
  // let value2 = value.trim();
  // if (value2 === "") {
  //   value2 = "Anonymous";
  // }
  // if value2 == '' ? 'Anonymous' : value2

  spanEl.textContent = value === "" ? "Anonymous" : value;
});
