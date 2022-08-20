const popup = document.querySelector(".popup");
const popupTextElement = popup.querySelector("span");
const resetButton = popup.querySelector(".reset");

let counter = localStorage.getItem("counter") || 0;

function closePopup() {
  popup.style.display = "none";
}

function popupMessage() {
  return `You have clicked ${counter} times to related button.`;
}
