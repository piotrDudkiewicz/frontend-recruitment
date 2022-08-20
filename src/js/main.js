popup.addEventListener("click", function (e) {
  if (e.target.className === "popup") {
    e.target.className;
    closePopup();
  }
});

resetButton.addEventListener("click", function (e) {
  const state = confirm("Are you sure?");

  if (state) {
    counter = 0;
    localStorage.setItem("counter", counter);
    resetButton.style.display = "none";
    popupTextElement.innerHTML = popupMessage();
  }
});

popupTextElement.innerHTML = popupMessage();

window.customElements.define("card-item", Card);
