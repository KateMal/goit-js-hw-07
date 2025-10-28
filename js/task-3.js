const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();

  spanEl.textContent = value === "" ? "Anonymous" : value;
});
