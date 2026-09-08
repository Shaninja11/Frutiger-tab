var inputField = document.getElementById("inputField");

function search() {
  window.open("https://www.ecosia.org/search?q=" + inputField.value, "_blank");
};