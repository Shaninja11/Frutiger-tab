const inputField = document.getElementById("inputField");
const providerSelect = document.getElementById("chooseprov");

function search() {
  event.preventDefault();
  let providerUrl;

  switch (providerSelect.value) {
    case "2":
      providerUrl = "https://www.startpage.com/do/dsearch?query=";
      break;
    case "3":
      providerUrl = "https://search.brave.com/search?q=";
      break;
    case "4":
      providerUrl = "https://www.qwant.com/?q=";
      break;
    default:
      providerUrl = "https://www.ecosia.org/search?q=";
  }

  window.open(providerUrl + inputField.value, "_blank");
}
